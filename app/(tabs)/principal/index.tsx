import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEureka, materias } from '../../../context/EurekaContext';
import { cores } from '../../../theme/cores';
import { TelaEureka, Cabecalho, comuns } from '../../../components/TelaEureka';
import CardPergunta from '../../../components/CardPergunta';

export default function Feed() {
  const router=useRouter(); const {usuario, perguntas, pontos}=useEureka(); const [filtro,setFiltro]=useState('Todas');
  const filtradas=useMemo(()=>perguntas.filter(p=>filtro==='Todas' || p.materia===filtro),[filtro,perguntas]);
  return <TelaEureka rolar={false}><FlatList keyboardShouldPersistTaps="handled" data={filtradas} keyExtractor={item=>item.id} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:25}} renderItem={({item})=><CardPergunta pergunta={item}/>} ListEmptyComponent={<View style={comuns.cartao}><Text style={comuns.texto}>Não há perguntas nessa matéria ainda. Que tal publicar a primeira?</Text></View>} ListHeaderComponent={<View>
    <Cabecalho titulo={`Olá, ${usuario?.nome.split(' ')[0] || 'estudante'}! 👋`} subtitulo="O que vamos descobrir hoje?"/>
    <View style={styles.hero}><View style={{flex:1}}><Text style={styles.heroMini}>APRENDA COLABORANDO</Text><Text style={styles.heroTitulo}>Sua pergunta merece uma resposta.</Text><Text style={styles.heroDesc}>Compartilhe uma dúvida ou ajude alguém a entender.</Text><TouchableOpacity style={styles.heroBotao} onPress={()=>router.push('/(tabs)/principal/perguntar')}><Ionicons name="add" size={19} color={cores.verdeEscuro}/><Text style={styles.heroBotaoTexto}>Fazer pergunta</Text></TouchableOpacity></View><Ionicons name="bulb-outline" size={85} color="#80DAC0" style={{opacity:0.8,marginLeft:8}}/></View>
    <View style={styles.linhaNumeros}><View style={styles.numero}><Ionicons name="chatbubbles-outline" size={21} color={cores.verdeEscuro}/><Text style={styles.valor}>{perguntas.length}</Text><Text style={styles.numeroLegenda}>dúvidas</Text></View><View style={styles.numero}><Ionicons name="checkmark-circle-outline" size={21} color={cores.verdeEscuro}/><Text style={styles.valor}>{perguntas.filter(p=>p.respostas.length>0).length}</Text><Text style={styles.numeroLegenda}>respondidas</Text></View><View style={styles.numero}><Ionicons name="flash-outline" size={21} color={cores.verdeEscuro}/><Text style={styles.valor}>{pontos}</Text><Text style={styles.numeroLegenda}>seu XP</Text></View></View>
    <View style={styles.secao}><Text style={comuns.titulo}>Comunidade</Text><TouchableOpacity onPress={()=>router.push('/(tabs)/principal/buscar')}><Text style={styles.explorar}>Explorar tudo →</Text></TouchableOpacity></View>
    <FlatList horizontal data={materias.slice(0,9)} keyExtractor={item=>item} showsHorizontalScrollIndicator={false} contentContainerStyle={{gap:8,marginBottom:16}} renderItem={({item})=><TouchableOpacity onPress={()=>setFiltro(item)} style={[styles.filtro,filtro===item&&styles.filtroAtivo]}><Text style={[styles.filtroTexto,filtro===item&&styles.filtroTextoAtivo]}>{item}</Text></TouchableOpacity>}/>
  </View>}/></TelaEureka>;
}
const styles=StyleSheet.create({
  hero:{backgroundColor:cores.navy,borderRadius:22,padding:22,flexDirection:'row',alignItems:'center',marginBottom:16},heroMini:{fontSize:10,fontWeight:'900',color:'#99F6DD',letterSpacing:1.5},heroTitulo:{color:cores.branco,fontWeight:'900',fontSize:23,lineHeight:29,marginTop:9,maxWidth:280},heroDesc:{color:'#C6D5DB',fontSize:12,lineHeight:18,marginTop:8,maxWidth:290},heroBotao:{marginTop:17,backgroundColor:cores.branco,alignSelf:'flex-start',paddingHorizontal:14,paddingVertical:11,borderRadius:11,flexDirection:'row',alignItems:'center',gap:5},heroBotaoTexto:{color:cores.verdeEscuro,fontWeight:'900',fontSize:12},
  linhaNumeros:{flexDirection:'row',gap:9,marginBottom:23},numero:{flex:1,backgroundColor:cores.branco,borderColor:cores.borda,borderWidth:1,borderRadius:15,padding:12,alignItems:'center',gap:4},valor:{fontSize:20,fontWeight:'900',color:cores.navy},numeroLegenda:{fontSize:11,color:cores.secundario},
  secao:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:14},explorar:{fontSize:12,color:cores.verdeEscuro,fontWeight:'800'},filtro:{paddingHorizontal:13,paddingVertical:9,borderRadius:24,backgroundColor:cores.branco,borderColor:cores.borda,borderWidth:1},filtroAtivo:{backgroundColor:cores.verdeEscuro,borderColor:cores.verdeEscuro},filtroTexto:{fontSize:12,fontWeight:'700',color:cores.texto},filtroTextoAtivo:{color:cores.branco},
});
