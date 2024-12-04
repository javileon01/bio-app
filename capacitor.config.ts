import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'BioApp',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // Tiempo que el splash se muestra (en milisegundos)
      launchAutoHide: true, // Oculta automáticamente el splash después del tiempo configurado
      backgroundColor: '#ffffff', // Color de fondo del splash screen
      androidScaleType: 'CENTER_CROP', // Escalado para Android
      showSpinner: true, // Muestra un spinner de carga
      spinnerColor: "#000000", // Color del spinner
    },
  },
  server: {
    // Permitir conexiones HTTP para desarrollo
    cleartext: true, // Activa conexiones no seguras (HTTP)
    androidScheme: "http", // Esquema para Android (http o https)
    hostname: "localhost", // Host de tu servidor de desarrollo
  },
  android: {
    allowMixedContent: true, // Permitir contenido mixto (HTTP/HTTPS)
    webContentsDebuggingEnabled: true, // Habilitar depuración para desarrollo
  }
};

export default config;
