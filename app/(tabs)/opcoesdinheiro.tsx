import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function OpcoesDinheiro() {

  const router = useRouter();

  const { width, height } = useWindowDimensions();

  /* OPÇÕES SELECIONADAS */

  const [selecionadas, setSelecionadas] = useState<string[]>([]);


  /* TAMANHO DA IMAGEM */

  const larguraImagem =
    width < 600
      ? width * 0.90
      : Math.min(width * 0.70, 600);


  /* OPÇÕES DA ESQUERDA */

  const opcoesEsquerda = [
    {
      id: 'reciclagem',
      imagem: require('../../assets/images/reciclagem.png'),
      titulo: 'Reciclagem em troca de dinheiro',
    },

    {
      id: 'caridade',
      imagem: require('../../assets/images/caridade.png'),
      titulo: 'Doação em troca de dinheiro',
    },

    {
      id: 'broca',
      imagem: require('../../assets/images/broca.png'),
      titulo: 'Aluguel de materiais usados',
    },

    {
      id: 'sacolas',
      imagem: require('../../assets/images/sacolas.png'),
      titulo: 'Venda de produtos usados',
    },

    {
      id: 'tenis',
      imagem: require('../../assets/images/tenis.png'),
      titulo: 'Caminhe em troca de dinheiro',
    },

    {
      id: 'pranchetas',
      imagem: require('../../assets/images/pranchetas.png'),
      titulo: 'Responder pesquisas remuneradas',
    },

    {
      id: 'video',
      imagem: require('../../assets/images/video.png'),
      titulo: 'Assistir anúncios curtos',
    },

    {
      id: 'pessoas',
      imagem: require('../../assets/images/pessoas.png'),
      titulo: 'Indicar amigos para o app',
    },
  ];


  /* OPÇÕES DA DIREITA */

  const opcoesDireita = [
    {
      id: 'ferramentas',
      imagem: require('../../assets/images/ferramentas.png'),
      titulo: 'Realizar pequenos trabalhos',
    },

    {
      id: 'gota',
      imagem: require('../../assets/images/gota.png'),
      titulo: 'Coleta de óleo de cozinha usado',
    },

    {
      id: 'agua',
      imagem: require('../../assets/images/agua.png'),
      titulo: 'Troca de garrafas PET por crédito',
    },

    {
      id: 'alvo',
      imagem: require('../../assets/images/alvo.png'),
      titulo: 'Missões sustentáveis',
    },

    {
      id: 'livro',
      imagem: require('../../assets/images/livro.png'),
      titulo: 'Compartilhamento de materiais escolares',
    },

    {
      id: 'televisao',
      imagem: require('../../assets/images/televisao.png'),
      titulo: 'Venda de produtos digitais',
    },

    {
      id: 'carros',
      imagem: require('../../assets/images/carros.png'),
      titulo: 'Caronas compartilhadas',
    },
  ];


  /* FUNÇÃO PARA SELECIONAR */

  function selecionarOpcao(id: string) {

    if (selecionadas.includes(id)) {

      setSelecionadas(
        selecionadas.filter(
          item => item !== id
        )
      );

    } else {

      setSelecionadas([
        ...selecionadas,
        id,
      ]);

    }

  }


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

        {/* IMAGEM DO TOPO */}

        <Image
          source={require('../../assets/images/opcoesdinheiro1.png')}
          style={[
            styles.imagemTopo,
            {
              width: larguraImagem,
            },
          ]}
        />


        {/* OPÇÕES */}

        <View style={styles.areaOpcoes}>


          {/* COLUNA ESQUERDA */}

          <View style={styles.coluna}>

            {opcoesEsquerda.map((opcao) => (

              <Pressable
                key={opcao.id}

                style={styles.opcao}

                onPress={() =>
                  selecionarOpcao(opcao.id)
                }
              >

                {/* IMAGEM DO ÍCONE */}

                <Image
                  source={opcao.imagem}
                  style={styles.icone}
                />


                {/* TEXTO */}

                <Text style={styles.textoOpcao}>
                  {opcao.titulo}
                </Text>


                {/* CAIXINHA */}

                <View
                  style={[
                    styles.checkbox,

                    selecionadas.includes(opcao.id)
                      ? styles.checkboxSelecionado
                      : styles.checkboxNormal,
                  ]}
                />

              </Pressable>

            ))}

          </View>


          {/* COLUNA DIREITA */}

          <View style={styles.coluna}>

            {opcoesDireita.map((opcao) => (

              <Pressable
                key={opcao.id}

                style={styles.opcao}

                onPress={() =>
                  selecionarOpcao(opcao.id)
                }
              >

                {/* IMAGEM DO ÍCONE */}

                <Image
                  source={opcao.imagem}
                  style={styles.icone}
                />


                {/* TEXTO */}

                <Text style={styles.textoOpcao}>
                  {opcao.titulo}
                </Text>


                {/* CAIXINHA */}

                <View
                  style={[
                    styles.checkbox,

                    selecionadas.includes(opcao.id)
                      ? styles.checkboxSelecionado
                      : styles.checkboxNormal,
                  ]}
                />

              </Pressable>

            ))}

          </View>

        </View>


        {/* BOTÃO */}

        <Pressable
          style={styles.botao}
          onPress={() => router.replace('/(tabs)/principal')}
        >

          <Text style={styles.textoBotao}>
            Continuar
          </Text>

        </Pressable>


      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({

  /* TELA */

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


  /* IMAGEM DO TOPO */

  imagemTopo: {
    height: 260,
    resizeMode: 'contain',
    marginBottom: 5,
    top: -20,
  },


  /* ÁREA DAS OPÇÕES */

  areaOpcoes: {
    width: '90%',
    maxWidth: 700,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
  },


  /* COLUNA */

  coluna: {
    width: '49%',
  },


  /* OPÇÃO */

  opcao: {
    width: '100%',
    minHeight: 38,
    backgroundColor: '#F0EEFF',
    borderWidth: 1,
    borderColor: '#D8D1FF',
    borderRadius: 7,
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },


  /* ÍCONE EM IMAGEM */

  icone: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
    tintColor: '#5831F0',
  },


  /* TEXTO */

  textoOpcao: {
    flex: 1,
    color: '#777777',
    fontSize: 10,
    lineHeight: 14,
    marginHorizontal: 3,
  },


  /* CAIXINHA */

  checkbox: {
    width: 9,
    height: 9,
    borderWidth: 1,
    borderRadius: 2,
  },


  /* CAIXINHA NORMAL */

  checkboxNormal: {
    backgroundColor: '#FFFFFF',
    borderColor: '#C9C3E8',
  },


  /* CAIXINHA SELECIONADA */

  checkboxSelecionado: {
    backgroundColor: '#5831F0',
    borderColor: '#5831F0',
  },


  /* BOTÃO */

  botao: {
    width: '90%',
    maxWidth: 700,
    height: 45,
    backgroundColor: '#5831F0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },


  /* TEXTO DO BOTÃO */

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },

});