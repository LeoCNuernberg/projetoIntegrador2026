import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { cores } from '../../theme/cores';
import { Marca, comuns } from '../../components/TelaEureka';
import { useEureka } from '../../context/EurekaContext';

export default function Abertura() {
  const router = useRouter();
  const { usuario } = useEureka();
  return <SafeAreaView style={styles.fundo}><ScrollView contentContainerStyle={styles.container}>
    <View style={styles.centro}>
      <Marca />
      <View style={styles.ilustracao}><View style={styles.circulo}><Ionicons name="bulb" size={83} color={cores.branco}/></View><View style={[styles.bolha, styles.bolhaEsquerda]}><Ionicons name="chatbubble-ellipses" size={27} color={cores.verdeEscuro}/></View><View style={[styles.bolha, styles.bolhaDireita]}><Ionicons name="school" size={25} color={cores.verdeEscuro}/></View></View>
      <View style={styles.selo}><Ionicons name="people-outline" size={15} color={cores.verdeEscuro}/><Text style={styles.seloTexto}>Aprendizagem colaborativa</Text></View>
      <Text style={styles.titulo}>Uma dúvida pode virar uma <Text style={styles.destaque}>grande descoberta.</Text></Text>
      <Text style={styles.descricao}>Pergunte sem medo, ajude quem precisa e evolua junto com outros estudantes.</Text>
    </View>
    <View style={styles.botoes}>
      <TouchableOpacity style={comuns.botao} onPress={()=>router.replace(usuario ? '/(tabs)/principal' : '/(tabs)/login')}><Text style={comuns.botaoTexto}>{usuario ? 'Ir para o feed' : 'Começar agora'}</Text><Ionicons name="arrow-forward" color={cores.branco} size={18}/></TouchableOpacity>
      {!usuario && <TouchableOpacity style={styles.criar} onPress={()=>router.push('/(tabs)/cadastro')}><Text style={styles.criarTexto}>Criar meu perfil</Text></TouchableOpacity>}
      <Text style={styles.rodape}>EUREKA! · ODS 4 — Educação de qualidade</Text>
    </View>
  </ScrollView></SafeAreaView>;
}
const styles = StyleSheet.create({
  fundo: {flex:1,backgroundColor:cores.fundo},container:{flexGrow:1,padding:24,justifyContent:'space-between',alignItems:'center'},centro:{alignItems:'center',paddingTop:25,width:'100%',maxWidth:490},
  ilustracao:{height:265,width:260,justifyContent:'center',alignItems:'center',marginTop:40,marginBottom:10},circulo:{width:187,height:187,borderRadius:75,backgroundColor:cores.verdeEscuro,alignItems:'center',justifyContent:'center',transform:[{rotate:'-7deg'}]},bolha:{width:59,height:59,borderRadius:21,backgroundColor:cores.verdeClaro,alignItems:'center',justifyContent:'center',position:'absolute',borderColor:cores.branco,borderWidth:5},bolhaEsquerda:{left:0,top:30},bolhaDireita:{right:0,bottom:35},
  selo:{flexDirection:'row',gap:7,backgroundColor:cores.verdeClaro,paddingHorizontal:14,paddingVertical:9,borderRadius:25,alignItems:'center'},seloTexto:{color:cores.verdeEscuro,fontWeight:'800',fontSize:12},titulo:{fontSize:35,lineHeight:42,fontWeight:'900',letterSpacing:-1.2,textAlign:'center',color:cores.navy,marginTop:22},destaque:{color:cores.verdeEscuro},descricao:{fontSize:15,lineHeight:24,color:cores.secundario,textAlign:'center',marginTop:14},
  botoes:{width:'100%',maxWidth:490,gap:12,paddingTop:27},criar:{padding:13,alignItems:'center',borderRadius:12,borderWidth:1,borderColor:cores.borda,backgroundColor:cores.branco},criarTexto:{fontSize:14,color:cores.navy,fontWeight:'800'},rodape:{color:cores.secundario,fontSize:11,textAlign:'center',paddingTop:8},
});
