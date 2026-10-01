// Parte externa às aulas: Leaflet desenha o mapa no navegador.
import { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import '../styles/leaflet.css';
import { moedas, regiaoInicial, MapaProps } from '../dados/DadosDoMapa';

export default function MapaCoins({ onSelecionar }: MapaProps) {
  const elemento = useRef<HTMLDivElement>(null);
  const selecionar = useRef(onSelecionar);
  const [erro, setErro] = useState('');
  selecionar.current = onSelecionar;

  useEffect(() => {
    let mapa: any;
    let saiu = false;
    let tamanho: ResizeObserver | undefined;

    async function iniciarMapa() {
      try {
        // Importar aqui evita acessar o navegador durante a exportação do Expo.
        const L = await import('leaflet');
        if (saiu || !elemento.current) return;

        mapa = L.map(elemento.current, { scrollWheelZoom: false }).setView(
          [regiaoInicial.latitude, regiaoInicial.longitude], 18
        );

        mapa.fitBounds(moedas.map((moeda) => [moeda.latitude, moeda.longitude]), { padding: [35, 35], maxZoom: 18 });

        const imagens = L.tileLayer(
          'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          { maxZoom: 19, attribution: 'Imagery © Esri, Vantor, Earthstar Geographics, GIS User Community' }
        ).addTo(mapa);
        imagens.on('tileerror', () => { if (!saiu) setErro('Não foi possível carregar parte do mapa. Confira sua conexão.'); });
        imagens.on('tileload', () => { if (!saiu) setErro(''); });

        // Cada moeda tem uma posição e abre os detalhes ao receber um clique.
        moedas.forEach((moeda) => {
          const icone = L.divIcon({
            className: '',
            html: '<div style="width:24px;height:24px;border-radius:50%;background:#6540FF;border:2px solid #D8CCFF;color:white;text-align:center;line-height:24px;font:bold 17px/24px Arial;box-shadow:0 1px 5px #333">$</div>',
            iconSize: [28, 28], iconAnchor: [14, 14],
          });
          L.marker([moeda.latitude, moeda.longitude], { icon: icone, title: `Moeda ${moeda.id}`, alt: `Moeda ${moeda.id}` })
            .addTo(mapa!)
            .on('click', () => selecionar.current(moeda));
        });

        tamanho = new ResizeObserver(() => mapa?.invalidateSize());
        tamanho.observe(elemento.current);
      } catch {
        if (!saiu) setErro('Não foi possível abrir o mapa. Recarregue a página.');
      }
    }

    iniciarMapa();
    return () => {
      saiu = true;
      tamanho?.disconnect();
      mapa?.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <div ref={elemento} aria-label="Mapa de moedas em Criciúma" style={{ width: '100%', height: '100%', zIndex: 0 }} />
      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  erro: { position: 'absolute', top: 10, left: 48, right: 8, backgroundColor: '#FFFFFF', padding: 8, borderRadius: 6, fontSize: 12, color: '#6540FF' },
});
