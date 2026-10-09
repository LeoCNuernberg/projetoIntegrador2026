import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { cores } from '../theme/cores';
import MenuInferior from './MenuInferior';

export function Marca({ pequena = false }: { pequena?: boolean }) {
  return <View style={styles.marca}><View style={[styles.logo, pequena && { width: 34, height: 34, borderRadius: 12 }]}><Ionicons name="bulb" size={pequena ? 19 : 24} color={cores.branco}/></View><Text style={[styles.nome, pequena && {fontSize: 20}]}>eureka<Text style={{color: cores.verdeEscuro}}>!</Text></Text></View>;
}
export function Cabecalho({ titulo, subtitulo, voltar = false }: { titulo: string; subtitulo?: string; voltar?: boolean }) {
  const router = useRouter();
  return <View style={styles.cabecalho}>
    <View style={styles.topo}><Marca pequena />{voltar ? <TouchableOpacity onPress={() => router.back()} style={styles.btnIcone}><Ionicons name="arrow-back" size={22} color={cores.navy}/></TouchableOpacity> : <View style={styles.ods}><Ionicons name="leaf-outline" size={14} color={cores.verdeEscuro}/><Text style={styles.odsTexto}>ODS 4</Text></View>}</View>
    <Text style={styles.titulo}>{titulo}</Text>
    {!!subtitulo && <Text style={styles.subtitulo}>{subtitulo}</Text>}
  </View>;
}
export function TelaEureka({ children, rolar = true }: { children: React.ReactNode; rolar?: boolean }) {
  return <SafeAreaView style={styles.safe}><View style={styles.container}>
    {rolar ? <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}><View style={styles.corpo}>{children}</View></ScrollView> : <View style={styles.corpoFlex}>{children}</View>}
    <MenuInferior />
  </View></SafeAreaView>;
}
export function Tag({ texto, escuro = false }: { texto: string; escuro?: boolean }) {
  return <View style={[styles.tag, escuro && { backgroundColor: cores.navy }]}><Text style={[styles.tagTexto, escuro && {color: cores.branco}]}>{texto}</Text></View>;
}
export const comuns = StyleSheet.create({
  cartao: { backgroundColor: cores.branco, borderRadius: 19, padding: 18, borderColor: cores.borda, borderWidth: 1, marginBottom: 12 },
  titulo: { color: cores.navy, fontSize: 23, fontWeight: '800', letterSpacing: -0.6 },
  texto: { color: cores.texto, fontSize: 14, lineHeight: 22 },
  leve: { color: cores.secundario, fontSize: 12 },
  campo: { backgroundColor: cores.branco, borderRadius: 13, paddingHorizontal: 15, paddingVertical: 12, borderColor: cores.borda, borderWidth: 1, fontSize: 15, color: cores.navy },
  botao: { backgroundColor: cores.verdeEscuro, minHeight: 49, borderRadius: 13, paddingHorizontal: 16, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 8 },
  botaoTexto: { color: cores.branco, fontSize: 14, fontWeight: '800' },
  botaoBorda: { borderWidth: 1, borderColor: cores.borda, borderRadius: 12, padding: 12, justifyContent: 'center', alignItems: 'center' },
});
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: cores.fundo },
  container: { flex: 1 },
  scroll: { flexGrow: 1, alignItems: 'center', paddingHorizontal: 16, paddingBottom: 22 },
  corpo: { width: '100%', maxWidth: 900 },
  corpoFlex: { width: '100%', maxWidth: 900, flex: 1, alignSelf: 'center', paddingHorizontal: 16 },
  marca: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  logo: { width: 42, height: 42, backgroundColor: cores.verdeEscuro, alignItems: 'center', justifyContent: 'center', borderRadius: 14 },
  nome: { color: cores.navy, fontWeight: '900', fontSize: 25, letterSpacing: -1.4 },
  cabecalho: { paddingTop: 18, paddingBottom: 20 },
  topo: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 25 },
  ods: { backgroundColor: cores.verdeClaro, paddingVertical: 7, paddingHorizontal: 11, borderRadius: 20, flexDirection: 'row', gap: 4, alignItems: 'center' },
  odsTexto: { color: cores.verdeEscuro, fontSize: 12, fontWeight: '800' },
  btnIcone: { backgroundColor: cores.branco, padding: 8, borderRadius: 12 },
  titulo: { fontSize: 27, color: cores.navy, fontWeight: '900', letterSpacing: -0.9 },
  subtitulo: { color: cores.secundario, fontSize: 14, lineHeight: 21, marginTop: 5 },
  tag: { backgroundColor: cores.verdeClaro, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20, alignSelf: 'flex-start' },
  tagTexto: { color: cores.verdeEscuro, fontSize: 11, fontWeight: '800' },
});
