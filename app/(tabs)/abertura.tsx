import {
  View,
  Image,
  StyleSheet
} from 'react-native';

import { useEffect } from 'react';
import { useRouter } from 'expo-router';


export default function Abertura() {

  const router = useRouter();


  useEffect(() => {

    const tempo = setTimeout(() => {

      router.replace('/(tabs)/login');

    }, 2000);


    return () => clearTimeout(tempo);

  }, []);


  return (

    <View style={styles.container}>

      <Image
        source={require('../../assets/images/mascoteabertura.png')}
        style={styles.logo}
        resizeMode="contain"
      />

    </View>

  );

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F2F0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 250,
    height: 250,
  },

});