import { createRoot } from "react-dom/client"
import { useState, useEffect } from "react"
import { NotionEditor } from "@/components/tiptap-templates/notion/notion-editor"
import { SplashScreen } from "@/components/splash-screen/splash-screen"
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [appReady, setAppReady] = useState(false);

  // Simulate app initialization
  useEffect(() => {
    // In a real app, you might load user preferences, check for updates, etc.
    const timer = setTimeout(() => {
      setAppReady(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSplashComplete = () => {
    setShowSplashScreen(false);
  };

  return (
    <>
      {showSplashScreen && <SplashScreen onComplete={handleSplashComplete} />}
      {appReady && <NotionEditor />}
    </>
  );
};

AppRegistry.registerComponent(appName, () => App);
