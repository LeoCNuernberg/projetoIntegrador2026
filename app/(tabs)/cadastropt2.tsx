import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  SafeAreaView,
  Image,
  Modal,
} from 'react-native';

import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Cadastro() {

  const router = useRouter();

  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

  const [amigo, setAmigo] = useState(false);
  const [parente, setParente] = useState(false);
  const [escola, setEscola] = useState(false);
  const [trabalho, setTrabalho] = useState(false);

  const [seletorAberto, setSeletorAberto] = useState('');

  // CALENDÁRIO
  const hoje = new Date();

  const [mesCalendario, setMesCalendario] = useState(hoje.getMonth());
  const [anoCalendario, setAnoCalendario] = useState(hoje.getFullYear());

  const [etapaCalendario, setEtapaCalendario] = useState('calendario');


  const generos = [
    'Feminino',
    'Masculino',
    'Prefiro não informar',
  ];


  const estados = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];


  // SOMENTE AS CIDADES QUE VOCÊ JÁ COLOCOU
  const cidadesPorEstado: { [key: string]: string[] } = {

    AC: [
      'Cruzeiro do Sul',
      'Rio Branco',
    ],

    AL: [
      'Arapiraca',
      'Maceió',
      'Rio Largo',
    ],

    AP: [
      'Macapá',
      'Santana',
    ],

    AM: [
      'Itacoatiara',
      'Manaus',
      'Parintins',
    ],

    BA: [
      'Camaçari',
      'Feira de Santana',
      'Itabuna',
      'Salvador',
      'Vitória da Conquista',
    ],

    CE: [
      'Caucaia',
      'Fortaleza',
      'Juazeiro do Norte',
      'Maracanaú',
      'Sobral',
    ],

    DF: [
      'Brasília',
    ],

    ES: [
      'Cariacica',
      'Serra',
      'Vila Velha',
      'Vitória',
    ],

    GO: [
      'Anápolis',
      'Goiânia',
      'Rio Verde',
    ],

    MA: [
      'Imperatriz',
      'São Luís',
      'Timon',
    ],

    MT: [
      'Cuiabá',
      'Rondonópolis',
      'Sinop',
      'Várzea Grande',
    ],

    MS: [
      'Campo Grande',
      'Corumbá',
      'Dourados',
      'Três Lagoas',
    ],

    MG: [
      'Belo Horizonte',
      'Contagem',
      'Juiz de Fora',
      'Montes Claros',
      'Uberlândia',
    ],

    PA: [
      'Belém',
      'Marabá',
      'Parauapebas',
      'Santarém',
    ],

    PB: [
      'Campina Grande',
      'João Pessoa',
      'Patos',
      'Santa Rita',
    ],

    PR: [
      'Cascavel',
      'Curitiba',
      'Londrina',
      'Maringá',
      'Ponta Grossa',
      'São José dos Pinhais',
    ],

    PE: [
      'Caruaru',
      'Jaboatão dos Guararapes',
      'Olinda',
      'Paulista',
      'Petrolina',
      'Recife',
    ],

    PI: [
      'Parnaíba',
      'Picos',
      'Teresina',
    ],

    RJ: [
      'Campo dos Goytacazes',
      'Duque de Caxias',
      'Niterói',
      'Nova Iguaçu',
      'Rio de Janeiro',
      'São Gonçalo',
    ],

    RN: [
      'Mossoró',
      'Natal',
      'Parnamirim',
    ],

    RS: [
      'Canoas',
      'Caxias do Sul',
      'Novo Hamburgo',
      'Pelotas',
      'Porto Alegre',
      'Santa Maria',
    ],

    RO: [
      'Ariquemes',
      'Ji-Paraná',
      'Porto Velho',
    ],

    RR: [
      'Boa Vista',
    ],

    SC: [
      'Balneário Camboriú',
      'Blumenau',
      'Chapecó',
      'Criciúma',
      'Florianópolis',
      'Itajaí',
      'Jaraguá do Sul',
      'Lages',
      'São José',
    ],

    SP: [
      'Campinas',
      'Guarulhos',
      'Mogi das Cruzes',
      'Osasco',
      'Piracicaba',
      'Ribeirão Preto',
      'Santo André',
      'Santos',
      'São Bernardo do Campo',
      'São José dos Campos',
      'São Paulo',
      'Sorocaba',
    ],

    SE: [
      'Aracaju',
      'Itabaiana',
      'Lagarto',
      'Nossa Senhora do Socorro',
    ],

    TO: [
      'Palmas',
    ],
  };


  function abrirSeletor(tipo: string) {

    // NÃO DEIXA ABRIR CIDADE SEM ESTADO
    if (tipo === 'cidade' && !estado) {
      return;
    }

    if (tipo === 'data') {
      const agora = new Date();

      setMesCalendario(agora.getMonth());
      setAnoCalendario(agora.getFullYear());
      setEtapaCalendario('calendario');
    }

    setSeletorAberto(tipo);
  }


  function selecionar(valor: string) {

    if (seletorAberto === 'genero') {
      setGenero(valor);
    }

    if (seletorAberto === 'estado') {

      setEstado(valor);

      // Limpa a cidade anterior
      setCidade('');
    }

    if (seletorAberto === 'cidade') {
      setCidade(valor);
    }

    setSeletorAberto('');
  }


  function pegarOpcoes() {

    if (seletorAberto === 'genero') {
      return generos;
    }

    if (seletorAberto === 'estado') {
      return estados;
    }

    if (seletorAberto === 'cidade') {

      // Mostra somente as cidades do estado selecionado
      return cidadesPorEstado[estado] || [];
    }

    return [];
  }


  function valorAtual() {

    if (seletorAberto === 'genero') {
      return genero;
    }

    if (seletorAberto === 'estado') {
      return estado;
    }

    if (seletorAberto === 'cidade') {
      return cidade;
    }

    return '';
  }


  // CALENDÁRIO

  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];


  // ANOS DISPONÍVEIS
  const anos = [];

  for (let ano = hoje.getFullYear(); ano >= 1900; ano--) {
    anos.push(ano);
  }


  function selecionarMes(mes: number) {

    setMesCalendario(mes);
    setEtapaCalendario('calendario');
  }


  function selecionarAno(ano: number) {

    setAnoCalendario(ano);

    // Se escolher o ano atual e o mês atual estiver no futuro,
    // volta para o mês atual.
    if (
      ano === hoje.getFullYear() &&
      mesCalendario > hoje.getMonth()
    ) {
      setMesCalendario(hoje.getMonth());
    }

    setEtapaCalendario('calendario');
  }


  function mudarMes(direcao: number) {

    let novoMes = mesCalendario + direcao;
    let novoAno = anoCalendario;

    if (novoMes < 0) {
      novoMes = 11;
      novoAno--;
    }

    if (novoMes > 11) {
      novoMes = 0;
      novoAno++;
    }

    if (
      novoAno > hoje.getFullYear() ||
      (
        novoAno === hoje.getFullYear() &&
        novoMes > hoje.getMonth()
      )
    ) {
      return;
    }

    setMesCalendario(novoMes);
    setAnoCalendario(novoAno);
  }


  function selecionarDia(dia: number) {

    const data = new Date(
      anoCalendario,
      mesCalendario,
      dia
    );

    if (data > hoje) {
      return;
    }

    const diaFormatado = String(dia).padStart(2, '0');
    const mesFormatado = String(mesCalendario + 1).padStart(2, '0');

    setDataNascimento(
      `${diaFormatado}/${mesFormatado}/${anoCalendario}`
    );

    setSeletorAberto('');
    setEtapaCalendario('calendario');
  }


  function gerarDiasCalendario() {

    const primeiroDia = new Date(
      anoCalendario,
      mesCalendario,
      1
    ).getDay();

    const quantidadeDias = new Date(
      anoCalendario,
      mesCalendario + 1,
      0
    ).getDate();

    const dias = [];

    // Começa na segunda-feira
    const espacos = primeiroDia === 0
      ? 6
      : primeiroDia - 1;

    for (let i = 0; i < espacos; i++) {
      dias.push(null);
    }

    for (let dia = 1; dia <= quantidadeDias; dia++) {
      dias.push(dia);
    }

    return dias;
  }


  function ehDataSelecionada(dia: number) {

    if (!dataNascimento) {
      return false;
    }

    const partes = dataNascimento.split('/');

    return (
      Number(partes[0]) === dia &&
      Number(partes[1]) === mesCalendario + 1 &&
      Number(partes[2]) === anoCalendario
    );
  }


  function ehDataFutura(dia: number) {

    const data = new Date(
      anoCalendario,
      mesCalendario,
      dia
    );

    return data > hoje;
  }


  return (
    <SafeAreaView style={styles.app}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >

        {/* LOGO */}

        <Text style={styles.logo}>
          <Text style={styles.logoRoxo}>Money</Text>
          <Text style={styles.logoAzul}>Way</Text>
        </Text>


        {/* MASCOTE */}

        <Image
          source={require('../../assets/images/mascote.png')}
          style={styles.mascote}
          resizeMode="contain"
        />


        {/* FORMULÁRIO */}

        <View style={styles.formulario}>

          {/* GÊNERO */}

          <Text style={styles.label}>
            Qual é o seu gênero?
          </Text>

          <Pressable
            style={styles.select}
            onPress={() => abrirSeletor('genero')}
          >

            <Text
              style={[
                styles.selectText,
                !genero && styles.placeholder,
              ]}
            >
              {genero || 'Selecione'}
            </Text>

            <Text style={styles.seta}>
              ⌄
            </Text>

          </Pressable>


          {/* DATA */}

          <Text style={styles.label}>
            Data de nascimento:
          </Text>

          <Pressable
            style={styles.select}
            onPress={() => abrirSeletor('data')}
          >

            <Text
              style={[
                styles.selectText,
                !dataNascimento && styles.placeholder,
              ]}
            >
              {dataNascimento || 'Selecione'}
            </Text>

            <Text style={styles.seta}>
              ⌄
            </Text>

          </Pressable>


          {/* ESTADO + CIDADE */}

          <View style={styles.linha}>

            <View style={styles.campoEstado}>

              <Text style={styles.label}>
                Estado:
              </Text>

              <Pressable
                style={styles.select}
                onPress={() => abrirSeletor('estado')}
              >

                <Text
                  style={[
                    styles.selectText,
                    !estado && styles.placeholder,
                  ]}
                >
                  {estado || 'Selecione'}
                </Text>

                <Text style={styles.seta}>
                  ⌄
                </Text>

              </Pressable>

            </View>


            <View style={styles.campoCidade}>

              <Text style={styles.label}>
                Cidade:
              </Text>

              <Pressable
                style={[
                  styles.select,
                  !estado && styles.selectDesativado,
                ]}
                onPress={() => abrirSeletor('cidade')}
              >

                <Text
                  style={[
                    styles.selectText,
                    !cidade && styles.placeholder,
                    !estado && styles.textoDesativado,
                  ]}
                >
                  {cidade || 'Selecione'}
                </Text>

                <Text
                  style={[
                    styles.seta,
                    !estado && styles.setaDesativada,
                  ]}
                >
                  ⌄
                </Text>

              </Pressable>

            </View>

          </View>


          {/* COMO CONHECEU */}

          <Text style={styles.label}>
            Como você conheceu o MoneyWay?
          </Text>

          <View style={styles.checkboxArea}>

            <Pressable
              style={styles.checkboxLinha}
              onPress={() => setAmigo(!amigo)}
            >

              <View
                style={[
                  styles.checkbox,
                  amigo && styles.checkboxMarcado,
                ]}
              >

                {amigo && (
                  <Text style={styles.check}>
                    ✓
                  </Text>
                )}

              </View>

              <Text style={styles.checkboxText}>
                Por um amigo
              </Text>

            </Pressable>


            <Pressable
              style={styles.checkboxLinha}
              onPress={() => setParente(!parente)}
            >

              <View
                style={[
                  styles.checkbox,
                  parente && styles.checkboxMarcado,
                ]}
              >

                {parente && (
                  <Text style={styles.check}>
                    ✓
                  </Text>
                )}

              </View>

              <Text style={styles.checkboxText}>
                Por um parente
              </Text>

            </Pressable>


            <Pressable
              style={styles.checkboxLinha}
              onPress={() => setEscola(!escola)}
            >

              <View
                style={[
                  styles.checkbox,
                  escola && styles.checkboxMarcado,
                ]}
              >

                {escola && (
                  <Text style={styles.check}>
                    ✓
                  </Text>
                )}

              </View>

              <Text style={styles.checkboxText}>
                Na escola/faculdade
              </Text>

            </Pressable>


            <Pressable
              style={styles.checkboxLinha}
              onPress={() => setTrabalho(!trabalho)}
            >

              <View
                style={[
                  styles.checkbox,
                  trabalho && styles.checkboxMarcado,
                ]}
              >

                {trabalho && (
                  <Text style={styles.check}>
                    ✓
                  </Text>
                )}

              </View>

              <Text style={styles.checkboxText}>
                No trabalho
              </Text>

            </Pressable>

          </View>

        </View>


        {/* BOTÃO */}

        <Pressable
          style={styles.botao}
          onPress={() => {
            console.log({
              genero,
              dataNascimento,
              estado,
              cidade,
              amigo,
              parente,
              escola,
              trabalho,
            });
            router.push('/(tabs)/opcoesdinheiro');
          }}
        >

          <Text style={styles.textoBotao}>
            Continuar
          </Text>

        </Pressable>

      </ScrollView>


      {/* SELETOR */}

      <Modal
        visible={seletorAberto !== ''}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSeletorAberto('')}
      >

        <Pressable
          style={styles.fundoModal}
          onPress={() => setSeletorAberto('')}
        >

          <Pressable
            style={styles.caixaModal}
            onPress={(e) => e.stopPropagation()}
          >

            {seletorAberto === 'data' ? (

              /* CALENDÁRIO */

              <View>

                <Text style={styles.tituloModal}>
                  Data de nascimento
                </Text>


                {etapaCalendario === 'calendario' && (

                  <View>

                    {/* MÊS E ANO */}

                    <View style={styles.seletorMesAno}>

                      <Pressable
                        style={styles.botaoMesAno}
                        onPress={() => setEtapaCalendario('mes')}
                      >

                        <Text style={styles.textoMesAno}>
                          {meses[mesCalendario]}
                        </Text>

                        <Text style={styles.pequenaSeta}>
                          ⌄
                        </Text>

                      </Pressable>


                      <Pressable
                        style={styles.botaoMesAno}
                        onPress={() => setEtapaCalendario('ano')}
                      >

                        <Text style={styles.textoMesAno}>
                          {anoCalendario}
                        </Text>

                        <Text style={styles.pequenaSeta}>
                          ⌄
                        </Text>

                      </Pressable>

                    </View>


                    {/* SETAS */}

                    <View style={styles.cabecalhoCalendario}>

                      <Pressable
                        style={styles.botaoMes}
                        onPress={() => mudarMes(-1)}
                      >

                        <Text style={styles.setaCalendario}>
                          ‹
                        </Text>

                      </Pressable>


                      <Text style={styles.mesAno}>
                        {meses[mesCalendario]} {anoCalendario}
                      </Text>


                      <Pressable
                        style={styles.botaoMes}
                        onPress={() => mudarMes(1)}
                      >

                        <Text style={styles.setaCalendario}>
                          ›
                        </Text>

                      </Pressable>

                    </View>


                    {/* DIAS DA SEMANA */}

                    <View style={styles.diasSemana}>

                      {[
                        'SEG',
                        'TER',
                        'QUA',
                        'QUI',
                        'SEX',
                        'SÁB',
                        'DOM',
                      ].map((dia) => (

                        <Text
                          key={dia}
                          style={styles.diaSemana}
                        >
                          {dia}
                        </Text>

                      ))}

                    </View>


                    {/* DIAS */}

                    <View style={styles.gradeCalendario}>

                      {gerarDiasCalendario().map((dia, index) => (

                        <View
                          key={index}
                          style={styles.celulaDia}
                        >

                          {dia !== null && (

                            <Pressable
                              disabled={ehDataFutura(dia)}
                              onPress={() => selecionarDia(dia)}
                              style={[
                                styles.diaCalendario,
                                ehDataSelecionada(dia) &&
                                styles.diaSelecionado,
                                ehDataFutura(dia) &&
                                styles.diaDesativado,
                              ]}
                            >

                              <Text
                                style={[
                                  styles.textoDia,
                                  ehDataSelecionada(dia) &&
                                  styles.textoDiaSelecionado,
                                  ehDataFutura(dia) &&
                                  styles.textoDiaDesativado,
                                ]}
                              >
                                {dia}
                              </Text>

                            </Pressable>

                          )}

                        </View>

                      ))}

                    </View>

                  </View>

                )}


                {/* ESCOLHER MÊS */}

                {etapaCalendario === 'mes' && (

                  <View>

                    <Text style={styles.subtituloCalendario}>
                      Escolha o mês
                    </Text>

                    <ScrollView
                      style={styles.listaMeses}
                      showsVerticalScrollIndicator={false}
                    >

                      <View style={styles.gradeMeses}>

                        {meses.map((mes, index) => {

                          const desativado =
                            anoCalendario === hoje.getFullYear() &&
                            index > hoje.getMonth();

                          return (

                            <Pressable
                              key={mes}
                              disabled={desativado}
                              onPress={() => selecionarMes(index)}
                              style={[
                                styles.opcaoMes,
                                index === mesCalendario &&
                                styles.opcaoMesSelecionada,
                                desativado &&
                                styles.opcaoMesDesativada,
                              ]}
                            >

                              <Text
                                style={[
                                  styles.textoMes,
                                  index === mesCalendario &&
                                  styles.textoMesSelecionado,
                                  desativado &&
                                  styles.textoMesDesativado,
                                ]}
                              >
                                {mes}
                              </Text>

                            </Pressable>

                          );

                        })}

                      </View>

                    </ScrollView>

                  </View>

                )}


                {/* ESCOLHER ANO */}

                {etapaCalendario === 'ano' && (

                  <View>

                    <Text style={styles.subtituloCalendario}>
                      Escolha o ano
                    </Text>

                    <ScrollView
                      style={styles.listaAnos}
                      showsVerticalScrollIndicator={true}
                    >

                      <View style={styles.gradeAnos}>

                        {anos.map((ano) => (

                          <Pressable
                            key={ano}
                            onPress={() => selecionarAno(ano)}
                            style={[
                              styles.opcaoAno,
                              ano === anoCalendario &&
                              styles.opcaoAnoSelecionada,
                            ]}
                          >

                            <Text
                              style={[
                                styles.textoAno,
                                ano === anoCalendario &&
                                styles.textoAnoSelecionado,
                              ]}
                            >
                              {ano}
                            </Text>

                          </Pressable>

                        ))}

                      </View>

                    </ScrollView>

                  </View>

                )}


                <Pressable
                  style={styles.cancelar}
                  onPress={() => {
                    setSeletorAberto('');
                    setEtapaCalendario('calendario');
                  }}
                >

                  <Text style={styles.textoCancelar}>
                    Cancelar
                  </Text>

                </Pressable>

              </View>

            ) : (

              /* GÊNERO, ESTADO E CIDADE */

              <>

                <Text style={styles.tituloModal}>
                  Selecione
                </Text>

                <ScrollView
                  style={styles.listaModal}
                  showsVerticalScrollIndicator={false}
                >

                  {pegarOpcoes().map((item) => (

                    <Pressable
                      key={item}
                      style={[
                        styles.opcaoModal,
                        valorAtual() === item &&
                        styles.opcaoSelecionada,
                      ]}
                      onPress={() => selecionar(item)}
                    >

                      <Text
                        style={[
                          styles.textoOpcao,
                          valorAtual() === item &&
                          styles.textoOpcaoSelecionada,
                        ]}
                      >
                        {item}
                      </Text>

                    </Pressable>

                  ))}

                </ScrollView>

                <Pressable
                  style={styles.cancelar}
                  onPress={() => setSeletorAberto('')}
                >

                  <Text style={styles.textoCancelar}>
                    Cancelar
                  </Text>

                </Pressable>

              </>

            )}

          </Pressable>

        </Pressable>

      </Modal>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  app: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 25,
    paddingHorizontal: 14,
  },


  // LOGO

  logo: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 0,
  },

  logoRoxo: {
    color: '#6525FF',
  },

  logoAzul: {
    color: '#125BFF',
  },


  // MASCOTE

  mascote: {
    width: 250,
    height: 160,
    marginTop: 0,
    marginBottom: -13,
    zIndex: 2,
  },


  // FORMULÁRIO

  formulario: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#FAF9FF',
    borderWidth: 1,
    borderColor: '#E2DDFF',
    borderRadius: 14,
    padding: 16,
    zIndex: 1,
  },


  label: {
    color: '#777777',
    fontSize: 14,
    marginTop: 9,
    marginBottom: 6,
  },


  // CAMPOS

  select: {
    width: '100%',
    height: 58,
    backgroundColor: '#F1EFFF',
    borderRadius: 9,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  selectDesativado: {
    backgroundColor: '#E8E7EC',
  },

  selectText: {
    color: '#555555',
    fontSize: 15,
  },

  placeholder: {
    color: '#A4A0B4',
  },

  textoDesativado: {
    color: '#B0AEB6',
  },

  seta: {
    color: '#542BFF',
    fontSize: 21,
  },

  setaDesativada: {
    color: '#AAA8B0',
  },


  // ESTADO + CIDADE

  linha: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
  },

  campoEstado: {
    flex: 1,
  },

  campoCidade: {
    flex: 2,
  },


  // CHECKBOX

  checkboxArea: {
    backgroundColor: '#F1EFFF',
    borderRadius: 9,
    padding: 12,
    marginTop: 2,
  },

  checkboxLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 40,
  },

  checkbox: {
    width: 21,
    height: 21,
    borderWidth: 1,
    borderColor: '#CFC9ED',
    borderRadius: 4,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  checkboxMarcado: {
    backgroundColor: '#542BFF',
    borderColor: '#542BFF',
  },

  check: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  checkboxText: {
    color: '#666666',
    fontSize: 14,
  },


  // BOTÃO

  botao: {
    width: '100%',
    maxWidth: 520,
    height: 56,
    backgroundColor: '#542BFF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 13,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },


  // MODAL

  fundoModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  caixaModal: {
    width: '100%',
    maxWidth: 420,
    maxHeight: '70%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
  },

  tituloModal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#542BFF',
    marginBottom: 12,
    textAlign: 'center',
  },

  listaModal: {
    width: '100%',
  },

  opcaoModal: {
    width: '100%',
    minHeight: 52,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 14,
    marginBottom: 5,
  },

  opcaoSelecionada: {
    backgroundColor: '#F1EFFF',
  },

  textoOpcao: {
    color: '#555555',
    fontSize: 16,
  },

  textoOpcaoSelecionada: {
    color: '#542BFF',
    fontWeight: 'bold',
  },


  // CALENDÁRIO

  seletorMesAno: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },

  botaoMesAno: {
    flex: 1,
    height: 48,
    backgroundColor: '#F1EFFF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  textoMesAno: {
    color: '#542BFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  pequenaSeta: {
    color: '#542BFF',
    fontSize: 17,
  },

  cabecalhoCalendario: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  botaoMes: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F1EFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  setaCalendario: {
    color: '#542BFF',
    fontSize: 30,
    lineHeight: 32,
  },

  mesAno: {
    color: '#555555',
    fontSize: 17,
    fontWeight: 'bold',
  },

  diasSemana: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 7,
  },

  diaSemana: {
    width: '14.28%',
    textAlign: 'center',
    color: '#999999',
    fontSize: 11,
    fontWeight: 'bold',
  },

  gradeCalendario: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  celulaDia: {
    width: '14.28%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },

  diaCalendario: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },

  diaSelecionado: {
    backgroundColor: '#542BFF',
  },

  diaDesativado: {
    opacity: 0.3,
  },

  textoDia: {
    color: '#555555',
    fontSize: 14,
  },

  textoDiaSelecionado: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  textoDiaDesativado: {
    color: '#BBBBBB',
  },


  // ESCOLHA DE MÊS

  subtituloCalendario: {
    color: '#777777',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },

  listaMeses: {
    maxHeight: 300,
  },

  gradeMeses: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  opcaoMes: {
    width: '48%',
    height: 52,
    borderRadius: 8,
    backgroundColor: '#F1EFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  opcaoMesSelecionada: {
    backgroundColor: '#542BFF',
  },

  opcaoMesDesativada: {
    opacity: 0.35,
  },

  textoMes: {
    color: '#555555',
    fontSize: 14,
  },

  textoMesSelecionado: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  textoMesDesativado: {
    color: '#AAAAAA',
  },


  // ESCOLHA DE ANO

  listaAnos: {
    maxHeight: 300,
  },

  gradeAnos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  opcaoAno: {
    width: '23%',
    height: 48,
    borderRadius: 8,
    backgroundColor: '#F1EFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  opcaoAnoSelecionada: {
    backgroundColor: '#542BFF',
  },

  textoAno: {
    color: '#555555',
    fontSize: 14,
  },

  textoAnoSelecionado: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },


  // CANCELAR

  cancelar: {
    height: 48,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#542BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoCancelar: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

});