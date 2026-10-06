
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";

export default function Convite() {
  return (
    <View style={styles.tela}>

      {/* ÁREA DO APLICATIVO */}
      <View style={styles.app}>

        {/* LOGO */}
        <Image
          source={require("../../assets/images/moneyway.cadastropt1.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.subtitulo}>
          Transforme os dias de hoje a
          em renda.
        </Text>

        {/* TÍTULO */}
        <Text style={styles.titulo}>
          Foi convidado por um amigo?
        </Text>

        <Text style={styles.descricao}>
          Insira o código convite e ganhe
          {"\n"}
          recompensas:
        </Text>

        {/* CAMPO DO CÓDIGO */}
        <TextInput
          style={styles.input}
          placeholder="Ex: MoneyWay123"
          placeholderTextColor="#B8B8C8"
        />

        {/* PERSONAGEM */}
        <Image
          source={require("../../assets/images/mowipipoca.png")}
          style={styles.imagem}
          resizeMode="contain"
        />

        {/* BOTÃO */}
        <Pressable style={styles.botao}>
          <Text style={styles.textoBotao}>
            Continuar
          </Text>
        </Pressable>

        {/* PULAR */}
        <Pressable>
          <Text style={styles.pular}>
            Pular
          </Text>
        </Pressable>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  /* ÁREA CENTRAL IGUAL À IMAGEM */
  app: {
    width: 440,
    maxWidth: "100%",
    minHeight: "100%",
    backgroundColor: "#F5F4FC",
    alignItems: "center",
    paddingTop: 55,
    paddingHorizontal: 25,
  },

  logo: {
    width: 300,
    height: 100,
    marginBottom: 2,
  },

  subtitulo: {
    fontSize: 13,
    color: "#33335C",
    textAlign: "center",
    marginBottom: 30,
  },

  titulo: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    color: "#5430E8",
    textAlign: "left",
    marginBottom: 5,
  },

  descricao: {
    width: "100%",
    fontSize: 13,
    color: "#777777",
    textAlign: "left",
    marginBottom: 10,
  },

  input: {
    width: "100%",
    height: 42,
    backgroundColor: "#FAFAFF",
    borderWidth: 1,
    borderColor: "#D9D5F5",
    borderRadius: 7,
    paddingHorizontal: 10,
    fontSize: 13,
    marginBottom: 20,
  },

  imagem: {
    width: 180,
    height: 175,
    marginBottom: 15,
  },

  botao: {
    width: 140,
    height: 42,
    backgroundColor: "#5631ED",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 13,
  },

  pular: {
    color: "#5631ED",
    fontSize: 13,
    marginTop: 8,
  },

});