import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { EurekaProvider } from '../context/EurekaContext';
export default function RootLayout() {
  return <EurekaProvider><StatusBar style="dark"/><Stack screenOptions={{headerShown:false}}/></EurekaProvider>;
}
