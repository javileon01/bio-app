import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // appId: 'com.uv.bioapp', // Utilizar para Android (npx cap sync android)
  appId: 'com.uv.bioapp.v3', // Utilizar para iOS (npx cap sync ios)
  appName: 'BioApp',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: false,
      splashImmersive: false,
      layoutName: "launch_screen",
      useDialog: false,
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
