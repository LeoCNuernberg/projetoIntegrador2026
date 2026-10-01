import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';

import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Convidar() {

  const router = useRouter();

  const [editando, setEditando] = useState(false);
  const [codigo, setCodigo] = useState('Nalu1910');

  const amigos = [
    'memel.mf',
    'Jary.pereira',
    'Léo_nuernberg',
  ];

  return (
    <View style={styles.app}>

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >

        {/* IMAGEM DO TOPO */}

        <ImageBackground
          source={require('../../../assets/images/convidar-fundo.png')}
          style={styles.fundo}
          resizeMode="cover"
        >
          <Pressable
            style={styles.botaoVoltar}
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel="Voltar para o perfil"
          >
            <Text style={styles.setaVoltar}>‹</Text>
          </Pressable>
        </ImageBackground>

        {/* CONTEÚDO */}

        <View style={styles.conteudo}>

          {/* TÍTULO */}

          <Text style={styles.titulo}>
            Seu código de amizade
          </Text>


          {/* CÓDIGO */}

          <View style={styles.codigoArea}>

            {editando ? (

              <TextInput
                style={styles.inputCodigo}
                value={codigo}
                onChangeText={setCodigo}
                autoFocus
              />

            ) : (

              <Text style={styles.codigo}>
                {codigo}
              </Text>

            )}

            <Pressable
              onPress={() => setEditando(!editando)}
            >

              <Text style={styles.editar}>
                {editando ? 'Salvar' : 'Editar'}
              </Text>

            </Pressable>

          </View>


          {/* AMIGOS */}

          <Text style={styles.subtitulo}>
            Seus amigos
          </Text>


          <View style={styles.lista}>

            {amigos.map((amigo, index) => (

              <View
                key={index}
                style={styles.amigo}
              >

                {/* FOTO DO USUÁRIO */}

                <Image
                  source={require('../../../assets/images/usuario.cadastropt1.png')}
                  style={styles.icone}
                  resizeMode="cover"
                />


                {/* NOME */}

                <Text style={styles.nome}>
                  {amigo}
                </Text>

              </View>

            ))}

          </View>


          {/* MASCOTE */}

          <Image
            source={require('../../../assets/images/mascote-convidar.png')}
            style={styles.mascote}
            resizeMode="contain"
          />

        </View>

      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({

  app: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scroll: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
  },

  container: {
    flexGrow: 1,
  },

  botaoVoltar: {
    position: 'absolute',
    top: 18,
    left: 18,
    width: 44,
    height: 44,
    zIndex: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 22,
  },

  setaVoltar: {
    color: '#542BFF',
    fontSize: 36,
    lineHeight: 38,
  },

  /* TOPO — NÃO ALTERADO */

  fundo: {
    width: '100%',
    height: 250,
  },

  /* PARTE DO MEIO — AUMENTADA */

  conteudo: {
    marginTop: 20,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 600,
  },

  titulo: {
    color: '#5524E8',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
  },

  codigoArea: {
    width: '100%',
    height: 58,
    backgroundColor: '#F0EEFF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginBottom: 25,
  },

  codigo: {
    color: '#5524E8',
    fontSize: 18,
    fontWeight: '600',
  },

  inputCodigo: {
    flex: 1,
    color: '#5524E8',
    fontSize: 18,
    fontWeight: '600',
    padding: 0,
  },

  editar: {
    color: '#8A8A8A',
    fontSize: 14,
  },

  subtitulo: {
    color: '#5524E8',
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 12,
  },

  lista: {
    gap: 10,
  },

  amigo: {
    width: '100%',
    height: 58,
    backgroundColor: '#F0EEFF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  /* FOTO DO USUÁRIO */

  icone: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 13,
  },

  nome: {
    color: '#5524E8',
    fontSize: 15,
    fontWeight: '500',
  },

  /* MASCOTE — MANTIDO */

  mascote: {
    width: 500,
    height: 500,
    alignSelf: 'center',
    marginTop: -91,
  },

});