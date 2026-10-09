# EUREKA! 💡 — Projeto Integrador / ODS 4

Aplicativo de dúvidas e respostas para estudantes, feito em **React Native + Expo Router + TypeScript**. Evolução do antigo MoneyWay: as telas foram reconstruídas para a proposta educativa, mantendo a base de navegação, organização TSX e técnicas do professor.

## Rodar no seu PC

1. Abra a pasta **Eureka** no VS Code.
2. Instale Node.js caso não tenha.
3. No terminal, execute `npm install` (primeira vez).
4. Execute `npx expo start`.
5. Aperte `w` para abrir no navegador ou use o QR Code do Expo Go no celular.

## Telas incluídas

- Abertura com identidade própria
- Entrada e cadastro de perfil de teste
- Feed com filtros por disciplina
- Busca de perguntas e assuntos
- Formulário para publicar dúvidas
- Tela individual com respostas, curtidas e seleção da melhor resposta pelo autor
- Ranking e pontuação XP
- Perfil e histórico de perguntas
- Perguntas salvas + Modo Revisão

## Como testar

1. Toque em **Começar agora** e escreva seu nome.
2. No **Início**, filtre as disciplinas e toque em uma pergunta.
3. Publique uma resposta em pergunta de outro estudante. Ela aparecerá no histórico e somará XP.
4. Abra **Perguntar**, publique uma pergunta e visualize sua página.
5. Para testar **Marcar solução**, crie uma pergunta com um nome, saia e entre com outro nome para respondê-la; depois retorne ao primeiro nome e marque uma resposta. A verificação é ilustrativa, não autenticação segura.
6. Salve perguntas pelo ícone e abra **Perfil → Minhas perguntas salvas**.

## IMPORTANTE — Limitações do protótipo

Esta versão é um **protótipo funcional para demonstração escolar**, não uma rede social pública com login real. Os nomes, respostas e notas do ranking inicial são fictícios. Não existe autenticação por senha e nenhum backend compartilhado foi configurado. Os dados são mantidos com React Context e `useState`; no **navegador**, tentamos persistir com `localStorage` entre recarregamentos; no **celular**, os dados criados ficam apenas durante a sessão atual. Pessoas em aparelhos diferentes não enxergam suas publicações umas das outras.

**Antes de colocar alunos reais usando o app** será necessário implementar login seguro, banco de dados compartilhado, validação de dados e moderação/denúncias.

## ODS relacionada

**ODS 4 — Educação de qualidade**: aprendizagem colaborativa, auxílio mútuo, inclusão no acesso a respostas e revisão de conteúdos. Métricas para apresentar à banca: quantidade de perguntas, número de respostas, dúvidas solucionadas e participação em testes.

## Organização

- `app/(tabs)/` — abertura e perfis de demonstração
- `app/(tabs)/principal/` — páginas internas do Eureka
- `components/` — card, navegação inferior, cabeçalho e layout compartilhados
- `context/EurekaContext.tsx` — estado, dados de demonstração e ações
- `theme/cores.ts` — paleta verde e azul-escuro

O projeto pode ser executado sem API externa ou chave de acesso. Não inclua senhas ou dados reais nos testes.
