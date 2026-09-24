import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = { titulo: string; mensagem: string; onFechar: () => void };

export default function Aviso({ titulo, mensagem, onFechar }: Props) {
  return (
    <Modal visible={mensagem !== ''} transparent animationType="fade" onRequestClose={onFechar}>
      <View style={styles.fundo}>
        <View style={styles.card}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.mensagem}>{mensagem}</Text>
          <TouchableOpacity style={styles.botao} onPress={onFechar} accessibilityRole="button">
            <Text style={styles.textoBotao}>Entendi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center', padding: 24 },
  card: { width: '100%', maxWidth: 360, padding: 24, backgroundColor: '#FFFFFF', borderRadius: 18 },
  titulo: { fontSize: 20, fontWeight: 'bold', color: '#6540FF', marginBottom: 12 },
  mensagem: { fontSize: 14, lineHeight: 21, color: '#555555' },
  botao: { backgroundColor: '#6540FF', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 22 },
  textoBotao: { color: '#FFFFFF', fontWeight: 'bold' },
});
