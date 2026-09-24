import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import MenuInferior from '../../../components/MenuInferior';
import Aviso from '../../../components/Aviso';

type Premio = {
  id: string;
  nome: string;
  moedas: number;
  icone: 'card-outline' | 'headset-outline' | 'bag-handle-outline' | 'cafe-outline' | 'book-outline';
};

const premios: Premio[] = [
  {
    id: '1',
    nome: 'Vale-presente R$5',
    moedas: 3,
    icone: 'card-outline',
  },
  {
    id: '2',
    nome: 'Fone de ouvido',
    moedas: 4,
    icone: 'headset-outline',
  },
  {
    id: '3',
    nome: 'Ecobag exclusiva',
    moedas: 2,
    icone: 'bag-handle-outline',
  },
  {
    id: '4',
    nome: 'Caneca MoneyWay',
    moedas: 3,
    icone: 'cafe-outline',
  },
  {
    id: '5',
    nome: 'Livro à sua escolha',
    moedas: 5,
    icone: 'book-outline',
  },
];

export default function Premios() {
  const [moedas, setMoedas] = useState(5);
  const [tituloAviso, setTituloAviso] = useState('');
  const [mensagemAviso, setMensagemAviso] = useState('');

  function abrirNotificacoes() {
    setTituloAviso('Notificações');
    setMensagemAviso('Você não tem novas notificações.');
  }

  function resgatarPremio(premio: Premio) {
    if (moedas < premio.moedas) {
      setTituloAviso('Moedas insuficientes');
      setMensagemAviso(
        `Você precisa de ${premio.moedas} moedas para resgatar ${premio.nome}.`
      );
      return;
    }

    setMoedas(moedas - premio.moedas);
    setTituloAviso('Prêmio resgatado!');
    setMensagemAviso(
      `Você resgatou ${premio.nome} por ${premio.moedas} moedas.`
    );
  }

  function renderPremio({ item }: { item: Premio }) {
    return (
      <View style={styles.cardPremio}>
        <View style={styles.ladoPremio}>
          <View style={styles.caixaIcone}>
            <Ionicons name={item.icone} size={31} color="#6540FF" />
          </View>

          <View style={styles.textosPremio}>
            <Text style={styles.nomePremio}>{item.nome}</Text>
            <Text style={styles.valorPremio}>
              {item.moedas} {item.moedas === 1 ? 'moeda' : 'moedas'}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.botaoResgatar}
          onPress={() => resgatarPremio(item)}
          accessibilityRole="button"
          accessibilityLabel={`Resgatar ${item.nome}`}
        >
          <Text style={styles.textoResgatar}>Resgatar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const cabecalho = (
    <>
      <View style={styles.cabecalho}>
        <Text style={styles.logo}>
          <Text style={styles.logoMoney}>Money</Text>
          <Text style={styles.logoWay}>Way</Text>
        </Text>

        <TouchableOpacity
          style={styles.sino}
          onPress={abrirNotificacoes}
          accessibilityRole="button"
          accessibilityLabel="Notificações"
        >
          <Ionicons name="notifications-outline" size={29} color="#6540FF" />
        </TouchableOpacity>
      </View>

      <View style={styles.apresentacao}>
        <View style={styles.mascoteArea}>
          <Image
            source={require('../../../assets/images/mascoteabertura.png')}
            style={styles.mascote}
            resizeMode="contain"
          />

          <View style={styles.presenteMascote}>
            <Ionicons name="gift-outline" size={42} color="#6540FF" />
          </View>
        </View>

        <View style={styles.textoApresentacao}>
          <Text style={styles.titulo}>Prêmios</Text>
          <Text style={styles.subtitulo}>
            Troque suas moedas{`\n`}por recompensas incríveis!
          </Text>
        </View>
      </View>

      <View style={styles.cardMoedas}>
        <View style={styles.moedaCirculo}>
          <Ionicons name="cash-outline" size={35} color="#6540FF" />
        </View>

        <View>
          <Text style={styles.textoMoedas}>Suas moedas</Text>
          <Text style={styles.quantidadeMoedas}>
            {moedas} <Text style={styles.totalMoedas}>/ 20</Text>
          </Text>
        </View>
      </View>

      <Text style={styles.tituloLista}>Escolha seu prêmio</Text>
    </>
  );

  const rodape = (
    <View style={styles.cardNovos}>
      <Ionicons name="star-outline" size={49} color="#6540FF" />

      <View style={styles.textoNovos}>
        <Text style={styles.tituloNovos}>Novos prêmios em breve!</Text>
        <Text style={styles.descricaoNovos}>
          Fique de olho e continue acumulando moedas para desbloquear ainda mais recompensas.
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.tela} edges={['top', 'left', 'right']}>
      <View style={styles.conteudo}>
        <FlatList
          data={premios}
          keyExtractor={(item) => item.id}
          renderItem={renderPremio}
          ListHeaderComponent={cabecalho}
          ListFooterComponent={rodape}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.lista}
        />

        <MenuInferior ativo="premios" />
      </View>

      <Aviso
        titulo={tituloAviso}
        mensagem={mensagemAviso}
        onFechar={() => setMensagemAviso('')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  conteudo: {
    flex: 1,
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
  },

  lista: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },

  cabecalho: {
    height: 78,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    fontSize: 27,
    fontWeight: 'bold',
  },

  logoMoney: {
    color: '#5417FF',
  },

  logoWay: {
    color: '#146BFF',
  },

  sino: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },

  apresentacao: {
    minHeight: 130,
    flexDirection: 'row',
    alignItems: 'center',
  },

  mascoteArea: {
    width: '51%',
    height: 128,
    overflow: 'hidden',
    position: 'relative',
  },

  mascote: {
    width: 135,
    height: 190,
    position: 'absolute',
    top: -4,
    left: 8,
  },

  presenteMascote: {
    position: 'absolute',
    left: 85,
    top: 72,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },

  textoApresentacao: {
    flex: 1,
    paddingLeft: 4,
  },

  titulo: {
    color: '#6540FF',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  subtitulo: {
    color: '#777777',
    fontSize: 12,
    lineHeight: 18,
  },

  cardMoedas: {
    minHeight: 76,
    borderWidth: 1.5,
    borderColor: '#E1DAFF',
    borderRadius: 13,
    backgroundColor: '#FBFAFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    marginTop: 5,
    marginBottom: 16,
  },

  moedaCirculo: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#6540FF',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 17,
  },

  textoMoedas: {
    color: '#666666',
    fontSize: 11,
    fontWeight: '600',
  },

  quantidadeMoedas: {
    color: '#6540FF',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 1,
  },

  totalMoedas: {
    color: '#666666',
    fontSize: 14,
    fontWeight: '600',
  },

  tituloLista: {
    color: '#6540FF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  cardPremio: {
    minHeight: 56,
    borderWidth: 1,
    borderColor: '#E1DAFF',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
    paddingVertical: 8,
    marginBottom: 7,
  },

  ladoPremio: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  caixaIcone: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  textosPremio: {
    flex: 1,
  },

  nomePremio: {
    color: '#666666',
    fontSize: 11,
    fontWeight: '600',
  },

  valorPremio: {
    color: '#6540FF',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 3,
  },

  botaoResgatar: {
    borderWidth: 1.3,
    borderColor: '#6540FF',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginLeft: 8,
  },

  textoResgatar: {
    color: '#6540FF',
    fontSize: 10,
    fontWeight: 'bold',
  },

  cardNovos: {
    minHeight: 76,
    borderWidth: 1,
    borderColor: '#E1DAFF',
    borderRadius: 12,
    backgroundColor: '#F8F6FF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 3,
  },

  textoNovos: {
    flex: 1,
    marginLeft: 14,
  },

  tituloNovos: {
    color: '#6540FF',
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 3,
  },

  descricaoNovos: {
    color: '#777777',
    fontSize: 9,
    lineHeight: 13,
  },
});
