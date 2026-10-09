import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pergunta, useEureka } from '../context/EurekaContext';
import { cores } from '../theme/cores';
import { Tag, comuns } from './TelaEureka';

export default function CardPergunta({ pergunta }: { pergunta: Pergunta }) {
  const router = useRouter();
  const { salvos, salvar } = useEureka();
  const salva = salvos.includes(pergunta.id);
  const resolvida = pergunta.respostas.some(resposta => resposta.melhor);
  return <TouchableOpacity style={[comuns.cartao, styles.card]} onPress={() => router.push({pathname:'/(tabs)/principal/pergunta/[id]', params:{id: pergunta.id}} as any)} activeOpacity={0.88}>
    <View style={styles.linha}><Tag texto={pergunta.materia}/><TouchableOpacity accessibilityLabel={salva ? 'Remover dos salvos' : 'Salvar pergunta'} onPress={() => salvar(pergunta.id)} style={styles.icone}><Ionicons name={salva ? 'bookmark' : 'bookmark-outline'} color={salva ? cores.verdeEscuro : cores.secundario} size={20}/></TouchableOpacity></View>
    <Text style={styles.titulo}>{pergunta.titulo}</Text>
    <Text style={styles.descricao} numberOfLines={2}>{pergunta.descricao}</Text>
    <View style={styles.rodape}><View style={styles.autor}><View style={styles.avatar}><Text style={styles.letra}>{pergunta.autor[0]?.toUpperCase()}</Text></View><Text style={styles.info}>{pergunta.autor} · {pergunta.criadaEm}</Text></View><View style={styles.resposta}><Ionicons name={resolvida ? 'checkmark-circle' : 'chatbubble-outline'} color={resolvida ? cores.verdeEscuro : cores.secundario} size={16}/><Text style={styles.info}>{pergunta.respostas.length} {pergunta.respostas.length === 1 ? 'resposta' : 'respostas'}</Text></View></View>
  </TouchableOpacity>;
}
const styles = StyleSheet.create({
  card: { gap: 10 }, linha: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, icone: { padding: 5 },
  titulo: { color: cores.navy, fontSize: 17, fontWeight: '800', lineHeight: 23 }, descricao: { color: cores.secundario, fontSize: 13, lineHeight: 20 },
  rodape: { flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center', gap: 10, borderTopColor: cores.borda, borderTopWidth: 1, paddingTop: 12, marginTop: 4 },
  autor: { flexDirection: 'row', alignItems: 'center', gap: 7 }, avatar: { backgroundColor: cores.verdeClaro, borderRadius: 30, width: 25, height: 25, alignItems: 'center', justifyContent: 'center' }, letra: { color: cores.verdeEscuro, fontWeight: '800', fontSize: 11 },
  info: { color: cores.secundario, fontSize: 11 }, resposta: { flexDirection: 'row', gap: 5, alignItems: 'center' },
});
