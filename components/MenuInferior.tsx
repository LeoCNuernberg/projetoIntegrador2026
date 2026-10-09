import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import { cores } from '../theme/cores';

type IconName = React.ComponentProps<typeof Ionicons>['name'];
const itens: { titulo: string; icone: IconName; ativo: IconName; rota: string }[] = [
  { titulo: 'Início', icone: 'home-outline', ativo: 'home', rota: '/(tabs)/principal' },
  { titulo: 'Explorar', icone: 'search-outline', ativo: 'search', rota: '/(tabs)/principal/buscar' },
  { titulo: 'Perguntar', icone: 'add-circle-outline', ativo: 'add-circle', rota: '/(tabs)/principal/perguntar' },
  { titulo: 'Ranking', icone: 'trophy-outline', ativo: 'trophy', rota: '/(tabs)/principal/ranking' },
  { titulo: 'Perfil', icone: 'person-outline', ativo: 'person', rota: '/(tabs)/principal/perfil' },
];
export default function MenuInferior() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <View style={styles.fundo}>
      <View style={styles.menu}>
        {itens.map(item => {
          const ativo = item.rota === '/(tabs)/principal' ? pathname === '/principal' || pathname === '/principal/' : pathname.endsWith(item.rota.split('/').pop() || '');
          return (
            <TouchableOpacity key={item.titulo} accessibilityRole="button" accessibilityLabel={item.titulo} style={styles.item} onPress={() => router.replace(item.rota as any)}>
              <Ionicons name={ativo ? item.ativo : item.icone} size={item.titulo === 'Perguntar' ? 29 : 23} color={ativo || item.titulo === 'Perguntar' ? cores.verdeEscuro : cores.secundario} />
              <Text style={[styles.texto, ativo && styles.ativo]}>{item.titulo}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  fundo: { backgroundColor: cores.branco, borderTopColor: cores.borda, borderTopWidth: 1, alignItems: 'center' },
  menu: { width: '100%', maxWidth: 900, flexDirection: 'row', paddingVertical: 9, paddingHorizontal: 5 },
  item: { flex: 1, alignItems: 'center', gap: 3, paddingVertical: 3 },
  texto: { fontSize: 10, fontWeight: '600', color: cores.secundario },
  ativo: { color: cores.verdeEscuro, fontWeight: '800' },
});
