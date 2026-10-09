import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEureka } from '../../../context/EurekaContext';
import { cores } from '../../../theme/cores';
import { TelaEureka, Cabecalho, comuns } from '../../../components/TelaEureka';
import CardPergunta from '../../../components/CardPergunta';
export default function Salvos() {
  const {perguntas,salvos}=useEureka();const [reveladas,setReveladas]=useState<string[]>([]);
  const lista=perguntas.filter(p=>salvos.includes(p.id));
  return <TelaEureka><Cabecalho titulo="Revisar e aprender" subtitulo="Salve dúvidas interessantes e teste o que aprendeu." voltar/><View style={styles.dica}><Ionicons name="bulb-outline" size={24} color={cores.verdeEscuro}/><Text style={styles.dicaTexto}>Modo revisão: leia a pergunta, tente lembrar a resposta e toque para revelar uma solução.</Text></View><Text style={[comuns.titulo,{marginBottom:12}]}>{lista.length} {lista.length===1?'pergunta salva':'perguntas salvas'}</Text>{lista.length===0&&<View style={comuns.cartao}><Text style={comuns.texto}>Você ainda não salvou nenhuma pergunta. Use o ícone de marcador no feed para guardar dúvidas.</Text></View>}{lista.map(p=><View key={p.id}><CardPergunta pergunta={p}/>{p.respostas.length>0&&<View style={styles.revisao}><TouchableOpacity onPress={()=>setReveladas(anteriores=>anteriores.includes(p.id)?anteriores.filter(x=>x!==p.id):[...anteriores,p.id])} style={styles.revelar}><Ionicons name={reveladas.includes(p.id)?'eye-off-outline':'eye-outline'} size={17} color={cores.verdeEscuro}/><Text style={styles.revelarTexto}>{reveladas.includes(p.id)?'Ocultar resposta':'Revelar resposta para revisar'}</Text></TouchableOpacity>{reveladas.includes(p.id)&&<Text style={styles.conteudo}>{p.respostas.find(r=>r.melhor)?.texto || p.respostas[0].texto}</Text>}</View>}</View>)}</TelaEureka>;
}
const styles=StyleSheet.create({dica:{flexDirection:'row',gap:13,padding:18,alignItems:'center',backgroundColor:cores.verdeClaro,borderRadius:15,marginBottom:22},dicaTexto:{flex:1,color:cores.verdeEscuro,fontSize:12,lineHeight:19},revisao:{marginTop:-17,marginBottom:16,backgroundColor:cores.branco,borderBottomLeftRadius:15,borderBottomRightRadius:15,borderColor:cores.borda,borderWidth:1,padding:14,paddingTop:18},revelar:{flexDirection:'row',gap:7,alignItems:'center'},revelarTexto:{fontSize:12,fontWeight:'800',color:cores.verdeEscuro},conteudo:{marginTop:13,color:cores.texto,fontSize:13,lineHeight:21}});
