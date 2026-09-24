import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Aviso from './Aviso';

type Props = { ativo: 'inicio' | 'mapa' | 'premios' };

export default function MenuInferior({ ativo }: Props) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [aviso, setAviso] = useState('');

  const corInicio = ativo === 'inicio' ? '#6540FF' : '#AAAAAA';
  const corMapa = ativo === 'mapa' ? '#6540FF' : '#AAAAAA';
  const corPremios = ativo === 'premios' ? '#6540FF' : '#AAAAAA';

  return (
    <View style={[styles.menu, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      <TouchableOpacity
        style={styles.botao}
        accessibilityRole="button"
        accessibilityLabel="Início"
        onPress={() => {
          if (ativo !== 'inicio') router.replace('/(tabs)/principal');
        }}
      >
        <Ionicons
          name={ativo === 'inicio' ? 'home' : 'home-outline'}
          size={28}
          color={corInicio}
        />
        <Text style={[styles.texto, { color: corInicio }]}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        accessibilityRole="button"
        accessibilityLabel="Mapa"
        onPress={() => {
          if (ativo !== 'mapa') router.replace('/(tabs)/principal/mapa');
        }}
      >
        <Ionicons
          name={ativo === 'mapa' ? 'location' : 'location-outline'}
          size={28}
          color={corMapa}
        />
        <Text style={[styles.texto, { color: corMapa }]}>Mapa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        accessibilityRole="button"
        accessibilityLabel="Prêmios"
        onPress={() => {
          if (ativo !== 'premios') router.replace('/(tabs)/principal/premios');
        }}
      >
        <Ionicons
          name={ativo === 'premios' ? 'gift' : 'gift-outline'}
          size={28}
          color={corPremios}
        />
        <Text style={[styles.texto, { color: corPremios }]}>Prêmios</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        accessibilityRole="button"
        accessibilityLabel="Perfil"
        onPress={() => setAviso('A tela de perfil será criada em uma próxima etapa.')}
      >
        <Ionicons name="person-outline" size={28} color="#AAAAAA" />
        <Text style={styles.texto}>Perfil</Text>
      </TouchableOpacity>

      <Aviso
        titulo="Em breve"
        mensagem={aviso}
        onFechar={() => setAviso('')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 2,
    borderTopColor: '#E3DCFF',
    backgroundColor: '#FAFAFA',
    paddingTop: 10,
  },
  botao: {
    flex: 1,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 12,
    color: '#AAAAAA',
    marginTop: 3,
  },
});
