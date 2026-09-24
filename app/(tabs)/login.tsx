import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView
} from 'react-native';

import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);


  function entrar() {

    router.replace('/(tabs)/principal');

  }


  function esqueceuSenha() {

    Alert.alert(
      'Esqueci a senha',
      'Essa página será criada depois.'
    );

  }


  function entrarGoogle() {

    Alert.alert(
      'Google',
      'Login com Google será adicionado futuramente.'
    );

  }


  function entrarApple() {

    Alert.alert(
      'Apple',
      'Login com Apple será adicionado futuramente.'
    );

  }


  function entrarTelefone() {

    Alert.alert(
      'Telefone',
      'Login com telefone será adicionado futuramente.'
    );

  }


  return (

    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >


      {/* MASCOTE */}

      <Image
        source={require('../../assets/images/mascotelogin.png')}
        style={styles.mascote}
        resizeMode="contain"
      />


      {/* CARD */}

      <View style={styles.card}>


        {/* EMAIL */}

        <Text style={styles.label}>
          Seu email:
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#A8A3B3"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />


        {/* SENHA */}

        <Text style={styles.label}>
          Sua senha:
        </Text>


        <View style={styles.inputSenha}>

          <TextInput
            style={styles.campoSenha}
            placeholder="Digite sua senha"
            placeholderTextColor="#A8A3B3"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!mostrarSenha}
          />


          <TouchableOpacity
            onPress={() => setMostrarSenha(!mostrarSenha)}
          >

            <Ionicons
              name={mostrarSenha ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="#6540FF"
            />

          </TouchableOpacity>

        </View>


        {/* ESQUECI A SENHA */}

        <TouchableOpacity
          onPress={esqueceuSenha}
          style={styles.esqueciBotao}
        >

          <Text style={styles.esqueci}>
            Esqueci a senha!
          </Text>

        </TouchableOpacity>


        {/* ENTRAR */}

        <TouchableOpacity
          style={styles.botaoEntrar}
          onPress={entrar}
        >

          <Text style={styles.textoEntrar}>
            Entrar
          </Text>

        </TouchableOpacity>


        {/* GOOGLE */}

        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={entrarGoogle}
        >

          <Ionicons
            name="logo-google"
            size={21}
            color="#4285F4"
          />

          <Text style={styles.textoSecundario}>
            Entrar com Google
          </Text>

        </TouchableOpacity>


        {/* APPLE */}

        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={entrarApple}
        >

          <Ionicons
            name="logo-apple"
            size={22}
            color="#777777"
          />

          <Text style={styles.textoSecundario}>
            Entrar com a Apple
          </Text>

        </TouchableOpacity>


        {/* TELEFONE */}

        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={entrarTelefone}
        >

          <Ionicons
            name="call-outline"
            size={20}
            color="#777777"
          />

          <Text style={styles.textoSecundario}>
            Entrar com número de telefone
          </Text>

        </TouchableOpacity>


      </View>

    </ScrollView>

  );

}


const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 55,
    paddingHorizontal: 25,
  },


  mascote: {
    width: 180,
    height: 130,
    marginBottom: -10,
  },


  card: {
    width: '100%',

    borderWidth: 1,
    borderColor: '#DDD6FF',
    borderRadius: 12,

    padding: 15,

    backgroundColor: '#FFFFFF',

    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowRadius: 4,

    elevation: 2,
  },


  label: {
    fontSize: 11,
    color: '#555555',
    marginBottom: 5,
    marginTop: 5,
  },


  input: {
    height: 43,

    backgroundColor: '#F5F3FF',

    borderWidth: 1,
    borderColor: '#DDD6FF',
    borderRadius: 10,

    paddingHorizontal: 12,

    fontSize: 12,
    color: '#333333',

    marginBottom: 10,
  },


  inputSenha: {
    height: 43,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#F5F3FF',

    borderWidth: 1,
    borderColor: '#DDD6FF',
    borderRadius: 10,

    paddingHorizontal: 12,
  },


  campoSenha: {
    flex: 1,
    fontSize: 12,
    color: '#333333',
  },


  esqueciBotao: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginBottom: 10,
  },


  esqueci: {
    color: '#6540FF',
    fontSize: 9,
  },


  botaoEntrar: {
    height: 44,

    backgroundColor: '#6540FF',

    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 12,
  },


  textoEntrar: {
    color: '#FFFFFF',
    fontSize: 14,
  },


  botaoSecundario: {
    height: 43,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#DDD6FF',
    borderRadius: 10,

    paddingHorizontal: 14,

    marginBottom: 10,
  },


  textoSecundario: {
    flex: 1,

    textAlign: 'center',

    color: '#777777',
    fontSize: 12,

    marginRight: 20,
  },

});