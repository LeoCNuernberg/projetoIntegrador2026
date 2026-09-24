// Android e iOS: o Expo usa este arquivo. No navegador, usa MapaCoins.web.tsx.
import MapView, { Marker } from 'react-native-maps';
import { View, Text, StyleSheet } from 'react-native';
import { moedas, regiaoInicial, MapaProps } from '../dados/DadosDoMapa';

export default function MapaCoins({ onSelecionar }: MapaProps) {
  return (
    <MapView style={styles.mapa} initialRegion={regiaoInicial} mapType="hybrid">
      {moedas.map((moeda) => (
        <Marker key={moeda.id} coordinate={moeda} title={`Moeda ${moeda.id}`}
          onPress={() => onSelecionar(moeda)}>
          <View style={styles.moeda}>
            <Text style={styles.simbolo}>$</Text>
          </View>
        </Marker>
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  mapa: { width: '100%', height: '100%' },
  moeda: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#6540FF', borderWidth: 2, borderColor: '#D8CCFF', justifyContent: 'center', alignItems: 'center' },
  simbolo: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 17 },
});
