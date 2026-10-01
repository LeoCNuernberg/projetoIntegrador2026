import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import MenuInferior from '../../../components/MenuInferior';
import AtividadesHoje from '../../../components/AtividadesHoje';


export default function Index() {

  const router = useRouter();

  return (

    <View style={styles.container}>

      <View style={styles.conteudo}>

      <ScrollView showsVerticalScrollIndicator={false}>


        {/* NOTIFICAÇÃO */}

        <View style={styles.header}>

          <TouchableOpacity>

            <Ionicons
              name="notifications-outline"
              size={28}
              color="#6540FF"
            />

          </TouchableOpacity>

        </View>


        {/* USUÁRIO */}

        <View style={styles.usuario}>

          <Image
            source={require('../../../assets/images/mascotepaginaprincipal.png')}
            style={styles.mascote}
            resizeMode="contain"
          />

          <View>

            <Text style={styles.ola}>
              Olá, Ana Luísa!
            </Text>

            <Text style={styles.subtitulo}>
              Que bom ter você aqui!
            </Text>

          </View>

        </View>


        {/* MENU DE ATIVIDADES */}

        <View style={styles.menu}>


          <TouchableOpacity style={styles.itemMenu}>

            <View style={styles.iconeMenu}>

              <Ionicons
                name="walk-outline"
                size={25}
                color="#6540FF"
              />

            </View>

            <Text style={styles.textoMenu}>
              Caminhando
            </Text>

          </TouchableOpacity>


          <TouchableOpacity style={styles.itemMenu}>

            <View style={styles.iconeMenu}>

              <Ionicons
                name="refresh-outline"
                size={25}
                color="#6540FF"
              />

            </View>

            <Text style={styles.textoMenu}>
              Reciclagem
            </Text>

          </TouchableOpacity>


          <TouchableOpacity style={styles.itemMenu}>

            <View style={styles.iconeMenu}>

              <Ionicons
                name="bag-handle-outline"
                size={25}
                color="#6540FF"
              />

            </View>

            <Text style={styles.textoMenu}>
              Vender
            </Text>

          </TouchableOpacity>


          <TouchableOpacity style={styles.itemMenu}>

            <View style={styles.iconeMenu}>

              <Ionicons
                name="shirt-outline"
                size={25}
                color="#6540FF"
              />

            </View>

            <Text style={styles.textoMenu}>
              Aluguel
            </Text>

          </TouchableOpacity>


          <TouchableOpacity style={styles.itemMenu}>

            <View style={styles.iconeMenu}>

              <Ionicons
                name="heart-outline"
                size={25}
                color="#6540FF"
              />

            </View>

            <Text style={styles.textoMenu}>
              Doações
            </Text>

          </TouchableOpacity>


          <TouchableOpacity style={styles.itemMenu}>

            <View style={styles.iconeMenu}>

              <Ionicons
                name="add-outline"
                size={25}
                color="#6540FF"
              />

            </View>

            <Text style={styles.textoMenu}>
              Mais
            </Text>

          </TouchableOpacity>


        </View>


        {/* SALDO E NÍVEL */}

        <View style={styles.cardSaldo}>


          <View style={styles.saldo}>

            <Text style={styles.textoPequeno}>
              Saldo atual
            </Text>

            <Text style={styles.valorSaldo}>
              R$ 78,50
            </Text>

            <Text style={styles.textoPequeno}>
              Seus ganhos este mês
            </Text>

            <Text style={styles.ganho}>
              R$ 245,30
            </Text>

          </View>


          <View style={styles.linhaVertical} />


          <View style={styles.nivel}>

            <Text style={styles.textoPequeno}>
              Nível atual
            </Text>


            <View style={styles.nivelLinha}>

              <Ionicons
                name="ribbon-outline"
                size={48}
                color="#6540FF"
              />

              <Text style={styles.textoNivel}>
                Nível 3
              </Text>

            </View>


            <View style={styles.barraFundo}>

              <View style={styles.barraNivel} />

            </View>


            <Text style={styles.exp}>
              350 / 500 EXP
            </Text>

          </View>


        </View>


        {/* ECOCOINS */}

        <View style={styles.cardCoins}>


          <View style={styles.coinsEsquerda}>

            <Ionicons
              name="server-outline"
              size={45}
              color="#FFFFFF"
            />


            <View>

              <Text style={styles.textoCoins}>
                Seus EcoCoins
              </Text>

              <Text style={styles.numeroCoins}>
                1.250
              </Text>

              <Text style={styles.descricaoCoins}>
                Troque por dinheiro,{'\n'}
                descontos e prêmios!
              </Text>

            </View>

          </View>


          <TouchableOpacity
            style={styles.botaoResgatar}
            onPress={() => router.push('/(tabs)/principal/premios')}
          >

            <Text style={styles.textoBotao}>
              Resgatar
            </Text>

          </TouchableOpacity>


        </View>


        <AtividadesHoje />

      </ScrollView>


      <MenuInferior ativo="inicio" />

      </View>

    </View>

  );

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  conteudo: {
    flex: 1,
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#FFFFFF',
  },


  /* SINO */

  header: {
    position: 'absolute',
    top: 25,
    right: 20,
    zIndex: 10,
  },


  /* USUÁRIO */

  usuario: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 25,
  },


  mascote: {
    width: 100,
    height: 100,
  },


  ola: {
    color: '#6540FF',
    fontSize: 17,
    fontWeight: 'bold',
  },


  subtitulo: {
    color: '#777777',
    fontSize: 12,
  },


  /* MENU DE ATIVIDADES */

  menu: {
    marginHorizontal: 15,
    paddingVertical: 12,

    flexDirection: 'row',
    justifyContent: 'space-around',

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#E6E0FF',
    borderRadius: 15,

    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 5,

    elevation: 2,
  },


  itemMenu: {
    alignItems: 'center',
    width: 52,
  },


  iconeMenu: {
    borderWidth: 1,
    borderColor: '#DDD6FF',

    borderRadius: 20,

    width: 39,
    height: 39,

    justifyContent: 'center',
    alignItems: 'center',
  },


  textoMenu: {
    fontSize: 8,
    marginTop: 4,
    color: '#555555',
    textAlign: 'center',
  },


  /* SALDO */

  cardSaldo: {
    marginHorizontal: 15,
    marginTop: 12,
    padding: 14,

    flexDirection: 'row',

    borderWidth: 1,
    borderColor: '#E6E0FF',
    borderRadius: 15,

    backgroundColor: '#FFFFFF',
  },


  saldo: {
    flex: 1,
  },


  nivel: {
    flex: 1,
    paddingLeft: 15,
  },


  linhaVertical: {
    width: 1,
    backgroundColor: '#DDD6FF',
  },


  textoPequeno: {
    fontSize: 11,
    color: '#444444',
    marginBottom: 7,
  },


  valorSaldo: {
    color: '#6540FF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },


  ganho: {
    color: '#6540FF',
    fontWeight: 'bold',
  },


  nivelLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },


  textoNivel: {
    color: '#6540FF',
    fontWeight: 'bold',
  },


  barraFundo: {
    backgroundColor: '#E8E8E8',
    height: 7,
    borderRadius: 10,
    marginTop: 15,
  },


  barraNivel: {
    backgroundColor: '#6540FF',
    width: '65%',
    height: 7,
    borderRadius: 10,
  },


  exp: {
    textAlign: 'right',
    fontSize: 9,
    color: '#777777',
    marginTop: 5,
  },


  /* ECOCOINS */

  cardCoins: {
    marginHorizontal: 15,
    marginTop: 12,

    backgroundColor: '#6540FF',

    borderRadius: 12,
    padding: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },


  coinsEsquerda: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },


  textoCoins: {
    color: '#FFFFFF',
    fontSize: 12,
  },


  numeroCoins: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
  },


  descricaoCoins: {
    color: '#FFFFFF',
    fontSize: 9,
  },


  botaoResgatar: {
    backgroundColor: '#FFFFFF',

    paddingHorizontal: 18,
    paddingVertical: 10,

    borderRadius: 20,
  },


  textoBotao: {
    color: '#6540FF',
    fontWeight: 'bold',
    fontSize: 11,
  },


});
