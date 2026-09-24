// Dados de demonstração. Ainda não são resgates ou atividades de uma conta real.
export const moedasResgatadas = 5;
export const totalDeMoedas = 20;

// Centro aproximado da região do Senac em Criciúma.
export const regiaoInicial = {
  latitude: -28.678694,
  longitude: -49.376306,
  latitudeDelta: 0.0022,
  longitudeDelta: 0.0022,
};

export const moedas = [
  { id: '1', latitude: -28.67805, longitude: -49.37695 },
  { id: '2', latitude: -28.67905, longitude: -49.37705 },
  { id: '3', latitude: -28.67902, longitude: -49.37575 },
];

export type Moeda = (typeof moedas)[number];
export type MapaProps = { onSelecionar: (moeda: Moeda) => void };
