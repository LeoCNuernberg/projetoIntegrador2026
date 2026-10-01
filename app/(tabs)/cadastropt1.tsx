import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Cadastro() {

  const router = useRouter();

  const { width, height } = useWindowDimensions();

  /*
    O formulário ocupa praticamente toda a largura
    disponível da tela.
  */

  const larguraFormulario =
    width < 600
      ? width * 0.88
      : Math.min(width * 0.70, 700);


  return (
    <View style={styles.tela}>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.conteudo,
          {
            minHeight: height,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >

        {/* LOGO */}

        <Text style={styles.logo}>
          Money<Text style={styles.way}>Way</Text>
        </Text>


        {/* USUÁRIO + MOWI */}

        <View style={styles.areaUsuario}>

          {/* Usuário */}

          <View style={styles.usuario}>

            <View style={styles.cabeca} />

            <View style={styles.corpo} />

          </View>


          {/* Mowi */}

          <Image
            source={require('../../assets/images/mowi-cadastropt1.png')}
            style={styles.mowi}
          />

        </View>


        {/* EDITAR */}

        <Text style={styles.editar}>
          Editar
        </Text>


        {/* FORMULÁRIO */}

        <View
          style={[
            styles.formulario,
            {
              width: larguraFormulario,
            },
          ]}
        >

          {/* NOME */}

          <Text style={styles.label}>
            Nome de usuário:
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome de usuário"
            placeholderTextColor="#888"
          />


          {/* EMAIL */}

          <Text style={styles.label}>
            Seu email:
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#888"
            keyboardType="email-address"
          />


          {/* SENHA */}

          <Text style={styles.label}>
            Sua senha:
          </Text>

          <View style={styles.senha}>

            <TextInput
              style={styles.inputSenha}
              placeholder="Digite sua senha"
              placeholderTextColor="#888"
              secureTextEntry
            />

          </View>


          {/* CONFIRMAÇÃO */}

          <Text style={styles.label}>
            Confirme a sua senha:
          </Text>

          <View style={styles.senha}>

            <TextInput
              style={styles.inputSenha}
              placeholder="Digite sua senha novamente"
              placeholderTextColor="#888"
              secureTextEntry
            />


          </View>


          {/* BOTÃO */}

          <Pressable
            style={styles.botao}
            onPress={() => router.push('/(tabs)/cadastropt2')}
          >

            <Text style={styles.textoBotao}>
              Continuar
            </Text>

          </Pressable>


          {/* ENTRAR */}

          <View style={styles.entrar}>

            <Text style={styles.conta}>
              Já tem uma conta?
            </Text>

            <Pressable onPress={() => router.replace('/(tabs)/login')}>
              <Text style={styles.link}>
                Entrar
              </Text>
            </Pressable>

          </View>

        </View>

      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({

  tela: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scroll: {
    flex: 1,
    width: '100%',
  },

  conteudo: {
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',

    paddingTop: 80,
    paddingBottom: 80,
  },

  logo: {
    color: '#6427F5',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 8,
    top: -50,
  },

  way: {
    color: '#286EFF',
    fontWeight: '200',
  },


  /* USUÁRIO */

  areaUsuario: {
    width: 150,
    height: 125,

    position: 'relative',

    marginBottom: 2,
  },


usuario: {
  width: 100,
  height: 100,
  backgroundColor: '#B8A6FF',
  borderRadius: 50,
  position: 'absolute',
  left: '50%',
  top: 10,
  marginLeft: -45,
  overflow: 'hidden',
},


  cabeca: {
    width: 36,
    height: 36,

    backgroundColor: '#FFFFFF',

    borderRadius: 30,

    position: 'absolute',

    top: 16,
    left: 30,
  },


  corpo: {
    width: 65,
    height: 40,

    backgroundColor: '#FFFFFF',

    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    position: 'absolute',

    bottom: 0,
    left: 16,
  },


  /* MOWI */

mowi: {
  width: 105,
  height: 105,
  resizeMode: 'contain',
  position: 'absolute',
  left: -25,
  top: -40,
  zIndex: 10,
},


  /* EDITAR */

  editar: {
    color: '#888888',
    fontSize: 18,
    marginBottom: 25,
  },


  /* FORMULÁRIO */

  formulario: {
    alignSelf: 'center',
  },


  label: {
    color: '#777777',

    fontSize: 10,

    marginBottom: 5,

    marginTop: 8,
  },


  input: {
    width: '100%',

    height: 38,

    backgroundColor: '#F0EEFF',

    borderWidth: 1,

    borderColor: '#D8D1FF',

    borderRadius: 9,

    paddingHorizontal: 12,

    fontSize: 11,

    color: '#444444',
  },


  /* SENHA */

  senha: {
    width: '100%',

    height: 38,

    backgroundColor: '#F0EEFF',

    borderWidth: 1,

    borderColor: '#D8D1FF',

    borderRadius: 9,

    flexDirection: 'row',

    alignItems: 'center',
  },


  inputSenha: {
    flex: 1,

    height: 36,

    paddingHorizontal: 12,

    fontSize: 11,

    color: '#444444',
  },


  iconeSenha: {
    color: '#5831F0',

    fontSize: 13,

    marginRight: 10,
  },


  /* BOTÃO */

  botao: {
    width: '85%',

    height: 45,

    backgroundColor: '#5831F0',

    borderRadius: 12,

    alignSelf: 'center',

    alignItems: 'center',

    justifyContent: 'center',

    marginTop: 45,
  },


  textoBotao: {
    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: '500',
  },


  /* ENTRAR */

  entrar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },


  conta: {
    color: '#888888',
    fontSize: 12,
  },


  link: {
    color: '#5831F0',
    fontSize: 12,
    marginLeft: 4,
  },

});