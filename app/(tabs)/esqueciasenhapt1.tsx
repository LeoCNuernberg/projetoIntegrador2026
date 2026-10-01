import {
  View,
  StyleSheet,
  Text,
  Pressable,
  SafeAreaView,
  TextInput,
} from 'react-native';

import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function EsqueciSenha() {

  const router = useRouter();

  const [usuario, setUsuario] = useState('');

  return (
    <SafeAreaView style={styles.app}>

      <View style={styles.container}>

        {/* BOTÃO VOLTAR */}

        <Pressable
          style={styles.botaoVoltar}
          onPress={() => router.back()}
        >
          <Text style={styles.setaVoltar}>
            ‹
          </Text>
        </Pressable>


        {/* CONTEÚDO */}

        <View style={styles.conteudo}>

          <Text style={styles.titulo}>
            Encontre sua conta
          </Text>


          <Text style={styles.instrucoes}>
            Insira seu nome de usuário ou email.
          </Text>


          {/* CAMPO */}

          <TextInput
            style={styles.input}
            value={usuario}
            onChangeText={setUsuario}
            placeholder="Nome de usuário ou email"
            placeholderTextColor="#A4A0B4"
            autoCapitalize="none"
            keyboardType="email-address"
          />


          {/* AVISO */}

          <Text style={styles.aviso}>
            Você pode receber notificações nossa pelo Email para fins de segurança e login.
          </Text>

          {/* BOTÃO */}

          <Pressable
  style={styles.botao}
  onPress={() => router.push('/(tabs)/esqueciasenhapt2')}
>
            <Text style={styles.textoBotao}>
              Continuar
            </Text>
          </Pressable>

        </View>

      </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  app: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    width: '100%',
    maxWidth: 520,
    alignSelf: 'center',
    paddingTop: 22,
    paddingHorizontal: 18,
  },


  // VOLTAR

  botaoVoltar: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  setaVoltar: {
    color: '#542BFF',
    fontSize: 45,
    fontWeight: '300',
    lineHeight: 48,
  },


  // CONTEÚDO

  conteudo: {
    width: '100%',
    marginTop: 20,
  },

  titulo: {
    color: '#542BFF',
    fontSize: 36,
    fontWeight: '500',
    marginBottom: 15,
  },

  instrucoes: {
    color: '#777777',
    fontSize: 19,
    lineHeight: 25,
  },

  // INPUT

  input: {
    width: '100%',
    height: 70,
    backgroundColor: '#F1EFFF',
    borderWidth: 1,
    borderColor: '#E2DDFF',
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 17,
    color: '#555555',
    marginTop: 17,
  },


  // AVISO

  aviso: {
    color: '#777777',
    fontSize: 14,
    lineHeight: 17,
  },


  // BOTÃO

  botao: {
    width: '100%',
    height: 58,
    backgroundColor: '#542BFF',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },

});