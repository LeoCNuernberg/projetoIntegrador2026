import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Platform } from 'react-native';

export const materias = ['Todas', 'Matemática', 'Português', 'História', 'Geografia', 'Biologia', 'Física', 'Química', 'Programação', 'Outras'];
export type Resposta = { id: string; autor: string; texto: string; curtidas: string[]; melhor: boolean; criadaEm: string };
export type Pergunta = { id: string; autor: string; materia: string; titulo: string; descricao: string; criadaEm: string; respostas: Resposta[] };
export type Usuario = { nome: string; email: string };

type EurekaContextType = {
  usuario: Usuario | null;
  perguntas: Pergunta[];
  salvos: string[];
  entrar: (nome: string, email?: string) => void;
  sair: () => void;
  publicar: (titulo: string, descricao: string, materia: string) => string;
  responder: (id: string, texto: string) => void;
  melhorResposta: (perguntaId: string, respostaId: string) => void;
  curtir: (perguntaId: string, respostaId: string) => void;
  salvar: (id: string) => void;
  pontos: number;
  respostasEnviadas: number;
  solucoes: number;
};

// Dados de exemplo para apresentar o funcionamento à banca. NÃO são usuários reais.
const exemplos: Pergunta[] = [
  { id: '1', autor: 'Marina S.', materia: 'Matemática', titulo: 'Como resolver uma equação do 2º grau?', descricao: 'Alguém consegue explicar a fórmula de Bhaskara com um exemplo simples? Tenho prova amanhã e estou confundindo o delta.', criadaEm: 'Hoje', respostas: [
    { id: 'r1', autor: 'Pedro A.', texto: 'Primeiro calcule Δ = b² − 4ac. Depois substitua na fórmula x = (−b ± √Δ) / 2a. Por exemplo, em x² − 5x + 6 = 0, temos Δ = 25 − 24 = 1, então x = 2 ou 3.', curtidas: ['demo'], melhor: true, criadaEm: 'Há pouco' },
  ] },
  { id: '2', autor: 'Lucas M.', materia: 'História', titulo: 'Quais foram as causas da Segunda Guerra Mundial?', descricao: 'Preciso entender as principais causas, não só decorar as datas. Alguém me ajuda?', criadaEm: 'Hoje', respostas: [
    { id: 'r2', autor: 'Bianca R.', texto: 'Entre as principais causas estão o Tratado de Versalhes, a crise de 1929, a ascensão do nazifascismo e a política expansionista da Alemanha. A invasão da Polônia, em 1939, iniciou a guerra na Europa.', curtidas: [], melhor: false, criadaEm: 'Hoje' },
  ] },
  { id: '3', autor: 'Ana L.', materia: 'Português', titulo: 'Qual é a diferença entre crase e acento agudo?', descricao: 'Não consigo identificar quando devo usar crase antes de palavras femininas. Alguém tem uma dica?', criadaEm: 'Ontem', respostas: [] },
  { id: '4', autor: 'Rafael C.', materia: 'Programação', titulo: 'Quando usar FlatList no React Native?', descricao: 'O professor explicou ScrollView e FlatList. Qual é melhor para listar muitos dados de uma API?', criadaEm: 'Ontem', respostas: [
    { id: 'r4', autor: 'Camila P.', texto: 'FlatList é melhor para listas grandes, porque renderiza os elementos conforme aparecem na tela. ScrollView é ótimo para poucos elementos fixos.', curtidas: ['demo'], melhor: false, criadaEm: 'Ontem' },
  ] },
  { id: '5', autor: 'Bruno T.', materia: 'Biologia', titulo: 'Qual a diferença entre mitose e meiose?', descricao: 'Preciso de um resumo fácil de entender, de preferência com exemplos.', criadaEm: 'Esta semana', respostas: [] },
  { id: '6', autor: 'Julia F.', materia: 'Geografia', titulo: 'O que são fontes de energia renováveis?', descricao: 'Quais as principais vantagens e limitações da energia solar e eólica?', criadaEm: 'Esta semana', respostas: [] },
];

function carregar<T>(chave: string, padrao: T): T {
  if (Platform.OS !== 'web' || typeof window === 'undefined') return padrao;
  try {
    const dado = window.localStorage.getItem(chave);
    return dado ? (JSON.parse(dado) as T) : padrao;
  } catch { return padrao; }
}
function guardar(chave: string, dado: unknown) {
  if (Platform.OS !== 'web' || typeof window === 'undefined') return;
  try { window.localStorage.setItem(chave, JSON.stringify(dado)); } catch { /* armazenamento indisponível */ }
}

const EurekaContext = createContext<EurekaContextType | undefined>(undefined);

export function EurekaProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(() => carregar('eureka.usuario', null));
  const [perguntas, setPerguntas] = useState<Pergunta[]>(() => carregar('eureka.perguntas', exemplos));
  const [salvos, setSalvos] = useState<string[]>(() => carregar('eureka.salvos', []));

  useEffect(() => guardar('eureka.usuario', usuario), [usuario]);
  useEffect(() => guardar('eureka.perguntas', perguntas), [perguntas]);
  useEffect(() => guardar('eureka.salvos', salvos), [salvos]);

  function entrar(nome: string, email = '') { setUsuario({ nome: nome.trim(), email: email.trim() }); }
  function sair() { setUsuario(null); }
  function publicar(titulo: string, descricao: string, materia: string) {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setPerguntas(anteriores => [{ id, titulo: titulo.trim(), descricao: descricao.trim(), materia, autor: usuario?.nome || 'Estudante', criadaEm: 'Agora', respostas: [] }, ...anteriores]);
    return id;
  }
  function responder(id: string, texto: string) {
    setPerguntas(anteriores => anteriores.map(p => p.id !== id ? p : ({ ...p, respostas: [...p.respostas, { id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, autor: usuario?.nome || 'Estudante', texto: texto.trim(), curtidas: [], melhor: false, criadaEm: 'Agora' }] })));
  }
  function melhorResposta(perguntaId: string, respostaId: string) {
    setPerguntas(anteriores => anteriores.map(p => p.id !== perguntaId || p.autor !== usuario?.nome ? p : ({ ...p, respostas: p.respostas.map(r => ({ ...r, melhor: r.id === respostaId })) })));
  }
  function curtir(perguntaId: string, respostaId: string) {
    const quem = usuario?.email || usuario?.nome || 'visitante';
    setPerguntas(anteriores => anteriores.map(p => p.id !== perguntaId ? p : ({ ...p, respostas: p.respostas.map(r => r.id !== respostaId || r.autor === usuario?.nome ? r : ({ ...r, curtidas: r.curtidas.includes(quem) ? r.curtidas.filter(x => x !== quem) : [...r.curtidas, quem] })) })));
  }
  function salvar(id: string) { setSalvos(anteriores => anteriores.includes(id) ? anteriores.filter(x => x !== id) : [...anteriores, id]); }
  const respostasEnviadas = perguntas.reduce((n, p) => n + p.respostas.filter(r => r.autor === usuario?.nome).length, 0);
  const solucoes = perguntas.reduce((n, p) => n + p.respostas.filter(r => r.autor === usuario?.nome && r.melhor).length, 0);
  const pontos = respostasEnviadas * 2 + solucoes * 10;

  const value = useMemo(() => ({ usuario, perguntas, salvos, entrar, sair, publicar, responder, melhorResposta, curtir, salvar, pontos, respostasEnviadas, solucoes }), [usuario, perguntas, salvos, pontos, respostasEnviadas, solucoes]);
  return <EurekaContext.Provider value={value}>{children}</EurekaContext.Provider>;
}
export function useEureka() {
  const contexto = useContext(EurekaContext);
  if (!contexto) throw new Error('useEureka precisa estar dentro do EurekaProvider');
  return contexto;
}
