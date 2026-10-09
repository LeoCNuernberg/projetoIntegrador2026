import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { cores } from '../../theme/cores';
import { Marca, comuns } from '../../components/TelaEureka';
import { useEureka } from '../../context/EurekaContext';

export default function Login() {
  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');
  const [erro,setErro] = useState('');
  const {entrar, usuario} = useEureka();
  const router = useRouter();
  function continuar() {
    if(nome.trim().length < 2) {setErro('Digite um nome com pelo menos 2 letras.');return;}
    setErro(''); entrar(nome,email); router.replace('/(tabs)/principal');
  }
  return <SafeAreaView style={styles.safe}><KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS==='ios'?'padding':undefined}><ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
    <TouchableOpacity onPress={()=>router.replace('/(tabs)/abertura')} style={styles.voltar}><Ionicons name="arrow-back" size={23} color={cores.navy}/></TouchableOpacity>
    <View style={styles.meio}><Marca/><Text style={styles.titulo}>Bom ter você por aqui!</Text><Text style={styles.subtitulo}>Como devemos te chamar no Eureka?</Text>
      <View style={styles.card}><Text style={styles.label}>Seu nome</Text><TextInput autoCapitalize="words" placeholder="Ex.: Ana, Lucas, Marina..." placeholderTextColor="#97A5B0" style={comuns.campo} value={nome} onChangeText={setNome} />
        <Text style={[styles.label,{marginTop:13}]}>E-mail <Text style={styles.opcional}>(opcional na demonstração)</Text></Text><TextInput placeholder="voce@exemplo.com" keyboardType="email-address" autoCapitalize="none" placeholderTextColor="#97A5B0" value={email} onChangeText={setEmail} style={comuns.campo}/>
        {!!erro && <Text style={styles.erro}>{erro}</Text>}
        <TouchableOpacity style={[comuns.botao,{marginTop:20}]} onPress={continuar}><Text style={comuns.botaoTexto}>Entrar no Eureka!</Text><Ionicons name="arrow-forward" size={18} color={cores.branco}/></TouchableOpacity>
        <Text style={styles.aviso}>Versão demonstrativa: não há autenticação por senha nem contas reais. Seus dados de teste ficam apenas neste dispositivo/sessão.</Text>
      </View>
      <TouchableOpacity onPress={()=>router.push('/(tabs)/cadastro')}><Text style={styles.link}>Quer conhecer a plataforma? <Text style={{fontWeight:'900',color:cores.verdeEscuro}}>Criar perfil de teste</Text></Text></TouchableOpacity>
      {usuario && <TouchableOpacity style={{marginTop:15}} onPress={()=>router.replace('/(tabs)/principal')}><Text style={styles.link}>Continuar como {usuario.nome} →</Text></TouchableOpacity>}
    </View>
  </ScrollView></KeyboardAvoidingView></SafeAreaView>;
}
const styles=StyleSheet.create({safe:{flex:1,backgroundColor:cores.fundo},container:{flexGrow:1,padding:24,maxWidth:540,width:'100%',alignSelf:'center'},voltar:{padding:8,alignSelf:'flex-start'},meio:{marginTop:55,alignItems:'center'},titulo:{fontSize:29,fontWeight:'900',color:cores.navy,marginTop:31,textAlign:'center'},subtitulo:{fontSize:14,color:cores.secundario,marginTop:7,textAlign:'center'},card:{width:'100%',padding:22,backgroundColor:cores.branco,borderRadius:22,marginTop:29,borderWidth:1,borderColor:cores.borda},label:{fontSize:13,fontWeight:'800',color:cores.navy,marginBottom:8},opcional:{fontWeight:'400',color:cores.secundario},erro:{fontSize:12,color:cores.vermelho,marginTop:10},aviso:{fontSize:11,color:cores.secundario,lineHeight:17,textAlign:'center',marginTop:18},link:{fontSize:13,color:cores.secundario,textAlign:'center',marginTop:23}});
