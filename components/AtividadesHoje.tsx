import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  nome: string;
  icone: 'walk-outline' | 'refresh-outline' | 'heart-outline';
  progresso: string;
  porcentagem: number;
  recompensa: string;
};

function Atividade({ nome, icone, progresso, porcentagem, recompensa }: Props) {
  return (
    <View style={styles.atividade}>
      <Ionicons name={icone} size={32} color="#6540FF" />
      <View style={styles.informacoes}>
        <Text style={styles.nome}>{nome}</Text>
        <View style={styles.barraFundo} accessibilityRole="progressbar"
          accessibilityLabel={nome} accessibilityValue={{ min: 0, max: 100, now: Math.round(porcentagem) }}>
          <View style={[styles.barra, { width: `${porcentagem}%` }]} />
        </View>
        <Text style={styles.progresso}>{progresso}</Text>
      </View>
      <Text style={styles.recompensa}>{recompensa}</Text>
    </View>
  );
}

export default function AtividadesHoje() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividades de hoje</Text>
      <View style={styles.card}>
        <Atividade nome="Caminhar 6.000 passos" icone="walk-outline"
          progresso="4.900 / 6.000 passos" porcentagem={4900 / 6000 * 100} recompensa="+ R$ 2,00" />
        <View style={styles.divisor} />
        <Atividade nome="Entregar 2kg de recicláveis" icone="refresh-outline"
          progresso="1.200g / 2.000g" porcentagem={60} recompensa="+ R$ 1,50" />
        <View style={styles.divisor} />
        <Atividade nome="Doar roupas" icone="heart-outline"
          progresso="2 / 5 itens" porcentagem={40} recompensa="+ R$ 2,00" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginHorizontal: 16, marginTop: 18, marginBottom: 26 },
  titulo: { color: '#6540FF', fontSize: 12, fontWeight: '500', marginBottom: 10, marginLeft: 10 },
  card: { backgroundColor: '#F8F8FA', borderWidth: 1, borderColor: '#E3DCFF', borderRadius: 14, overflow: 'hidden' },
  atividade: { flexDirection: 'row', alignItems: 'center', paddingVertical: 11, paddingHorizontal: 12 },
  informacoes: { flex: 1, paddingHorizontal: 12 },
  nome: { fontSize: 10, fontWeight: '600', color: '#555555' },
  barraFundo: { height: 7, backgroundColor: '#E8E8E8', borderRadius: 8, marginTop: 5, overflow: 'hidden' },
  barra: { height: 7, backgroundColor: '#6540FF', borderRadius: 8 },
  progresso: { color: '#999999', fontSize: 9, marginTop: 3 },
  recompensa: { color: '#6540FF', fontSize: 11, fontWeight: '500' },
  divisor: { height: 1, backgroundColor: '#DDD6FF' },
});
