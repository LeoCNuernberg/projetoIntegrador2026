import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';

import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import MenuInferior from '../../../components/MenuInferior';
import Aviso from '../../../components/Aviso';

type Amigo = {
  id: string;
  nome: string;
};

const amigos: Amigo[] = [
  { id: '1', nome: 'memel.mf' },
  { id: '2', nome: 'Jay.pereira' },
  { id: '3', nome: 'léo_nuernberg' },
];

export default function Perfil() {
  const [nomeUsuario, setNomeUsuario] = useState('Nalu');
  const [tituloAviso, setTituloAviso] = useState('');
  const [mensagemAviso, setMensagemAviso] = useState('');

  function editarPerfil() {
    setTituloAviso('Editar perfil');
    setMensagemAviso('Você pode alterar o nome de usuário no campo abaixo.');
  }

  function convidarAmigo() {
    setTituloAviso('Convide seus amigos');
    setMensagemAviso('Convite preparado! Compartilhe o MoneyWay com seus amigos e ganhe EcoCoins.');
  }

  function renderAmigo({ item }: { item: Amigo }) {
    return (
      <View style={styles.cardAmigo}>
        <View style={styles.avatarAmigo}>
          <Ionicons name="person" size={24} color="#C02CFF" />
        </View>

        <Text style={styles.nomeAmigo}>{item.nome}</Text>
      </View>
    );
  }

  const cabecalho = (
    <>
      <Text style={styles.logo}>
        <Text style={styles.logoMoney}>Money</Text>
        <Text style={styles.logoWay}>Way</Text>
      </Text>

      <View style={styles.perfilArea}>
        <View style={styles.mascotePerfilJanela}>
          <Image
            source={require('../../../assets/images/mascotelogin.png')}
            style={styles.mascotePerfilImagem}
            resizeMode="contain"
          />
        </View>

        <View style={styles.avatarPrincipal}>
          <Ionicons name="person" size={53} color="#6540FF" />
        </View>
      </View>

      <TouchableOpacity
        style={styles.editarBotao}
        onPress={editarPerfil}
        accessibilityRole="button"
        accessibilityLabel="Editar perfil"
      >
        <Text style={styles.editarTexto}>Editar</Text>
        <Ionicons name="pencil" size={12} color="#6540FF" />
      </TouchableOpacity>

      <Text style={styles.rotulo}>Nome de usuário:</Text>

      <TextInput
        value={nomeUsuario}
        onChangeText={setNomeUsuario}
        style={styles.input}
        placeholder="Nome de usuário"
        placeholderTextColor="#AAAAAA"
      />

      <View style={styles.conviteCard}>
        <View style={styles.conviteTextoArea}>
          <Text style={styles.conviteTexto}>
            Convide seus{`\n`}amigos para{`\n`}ganhar +1.500{`\n`}EcoCoins
          </Text>
        </View>

        <View style={styles.mascoteConviteJanela}>
          <Image
            source={require('../../../assets/images/mascotelogin.png')}
            style={styles.mascoteConviteImagem}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity
          style={styles.botaoConvidar}
          onPress={convidarAmigo}
          accessibilityRole="button"
          accessibilityLabel="Convidar amigo"
        >
          <Text style={styles.textoConvidar}>Convidar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.tituloAmigos}>Seus amigos</Text>
    </>
  );

  return (
    <SafeAreaView style={styles.tela} edges={['top', 'left', 'right']}>
      <View style={styles.conteudo}>
        <FlatList
          data={amigos}
          keyExtractor={(item) => item.id}
          renderItem={renderAmigo}
          ListHeaderComponent={cabecalho}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.lista}
        />

        <MenuInferior ativo="perfil" />
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
    backgroundColor: '#FFFFFF',
  },

  lista: {
    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 18,
  },

  logo: {
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 2,
  },

  logoMoney: {
    color: '#5417FF',
  },

  logoWay: {
    color: '#146BFF',
  },

  perfilArea: {
    height: 118,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 2,
  },

  mascotePerfilJanela: {
    position: 'absolute',
    width: 104,
    height: 88,
    left: '50%',
    marginLeft: -112,
    top: 2,
    overflow: 'hidden',
  },

  mascotePerfilImagem: {
    position: 'absolute',
    width: 145,
    height: 109,
    left: -19,
    top: -28,
  },

  avatarPrincipal: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#F1EDFF',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },

  editarBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 28,
    marginBottom: 4,
  },

  editarTexto: {
    color: '#777777',
    fontSize: 11,
    marginRight: 2,
  },

  rotulo: {
    color: '#777777',
    fontSize: 11,
    marginTop: 4,
    marginBottom: 7,
  },

  input: {
    height: 42,
    width: '100%',
    backgroundColor: '#F8F6FF',
    borderWidth: 1.5,
    borderColor: '#E3DCFF',
    borderRadius: 12,
    paddingHorizontal: 14,
    color: '#666666',
    fontSize: 12,
    marginBottom: 15,
  },

  conviteCard: {
    minHeight: 90,
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#5E2BFF',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 16,
  },

  conviteTextoArea: {
    width: '42%',
    zIndex: 2,
  },

  conviteTexto: {
    color: '#FFFFFF',
    fontSize: 11,
    lineHeight: 13,
    fontWeight: 'bold',
  },

  mascoteConviteJanela: {
    position: 'absolute',
    width: 92,
    height: 78,
    left: '50%',
    marginLeft: -50,
    bottom: 0,
    overflow: 'hidden',
  },

  mascoteConviteImagem: {
    position: 'absolute',
    width: 126,
    height: 95,
    left: -17,
    top: -25,
  },

  botaoConvidar: {
    marginLeft: 'auto',
    minWidth: 76,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    zIndex: 2,
  },

  textoConvidar: {
    color: '#6540FF',
    fontSize: 10,
    fontWeight: 'bold',
  },

  tituloAmigos: {
    color: '#6540FF',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 7,
  },

  cardAmigo: {
    minHeight: 45,
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#E3DCFF',
    borderRadius: 12,
    backgroundColor: '#F9F7FF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 8,
  },

  avatarAmigo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E9B8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  nomeAmigo: {
    color: '#6540FF',
    fontSize: 11,
    fontWeight: '600',
  },
});
