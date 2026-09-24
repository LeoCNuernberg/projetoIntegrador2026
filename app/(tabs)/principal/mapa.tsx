import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapaCoins from '../../../components/MapaCoins';
import MenuInferior from '../../../components/MenuInferior';
import AtividadesHoje from '../../../components/AtividadesHoje';
import Aviso from '../../../components/Aviso';
import { moedasResgatadas, totalDeMoedas, Moeda } from '../../../dados/DadosDoMapa';

export default function Mapa() {
  const [titulo, setTitulo] = useState('');
  const [mensagem, setMensagem] = useState('');

  function selecionarMoeda(moeda: Moeda) {
    setTitulo(`Moeda ${moeda.id}`);
    setMensagem('Esta é uma moeda de demonstração. O resgate por proximidade será conectado à localização em uma próxima etapa.');
  }

  function abrirNotificacoes() {
    setTitulo('Notificações');
    setMensagem('Você não tem novas notificações.');
  }

  return (
    <SafeAreaView style={styles.tela} edges={['top', 'left', 'right']}>
      <View style={styles.conteudo}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.rolagem}>
          <View style={styles.cabecalho}>
            <Image source={require('../../../assets/images/mascotelogin.png')}
              style={styles.logo} resizeMode="contain" accessibilityLabel="MoneyWay" />
            <Text style={styles.titulo}>Mapa de Coins</Text>
            <TouchableOpacity style={styles.sino} onPress={abrirNotificacoes}
              accessibilityRole="button" accessibilityLabel="Notificações">
              <Ionicons name="notifications-outline" size={28} color="#6540FF" />
            </TouchableOpacity>
          </View>

          <View style={styles.mapa}>
            <MapaCoins onSelecionar={selecionarMoeda} />
          </View>

          <Text style={styles.contador}>
            Moedas resgatadas: <Text style={styles.numero}>{moedasResgatadas} / {totalDeMoedas}</Text>
          </Text>
          <AtividadesHoje />
        </ScrollView>
        <MenuInferior ativo="mapa" />
      </View>
      <Aviso titulo={titulo} mensagem={mensagem} onFechar={() => setMensagem('')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#FFFFFF' },
  conteudo: { flex: 1, width: '100%', maxWidth: 600, alignSelf: 'center' },
  rolagem: { flexGrow: 1 },
  cabecalho: { height: 160, marginHorizontal: 24, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingBottom: 6 },
  logo: { width: 145, height: 120 },
  titulo: { color: '#6540FF', fontSize: 22, fontWeight: 'bold', marginBottom: 4, flexShrink: 1, marginLeft: 12 },
  sino: { position: 'absolute', top: 27, right: 0, width: 44, height: 44, justifyContent: 'center', alignItems: 'center' },
  mapa: { height: 310, marginHorizontal: 8, borderWidth: 2, borderColor: '#E3DCFF', borderRadius: 20, overflow: 'hidden', backgroundColor: '#F2F0FF' },
  contador: { fontSize: 18, fontWeight: '600', color: '#6540FF', marginHorizontal: 17, marginTop: 16 },
  numero: { fontSize: 22, fontWeight: 'bold' },
});
