import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
// install the custom font. 
import { useFonts } from "epxo-font";
import AppLoading from "expo-app-loading";

import GameStartScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [fontsLoaded] = useFonts({
    // check font documentation on expo.
    "opan-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "opan-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if(!fontsLoaded){
    <AppLoading />
  };

  // we show laoding screen while the fonts are loaded for that we can use a expo package called expo install expo-app-loading

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setIsGameOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };

  function gameOverHandler() {
    setIsGameOver(true);
  };

  let screen = <GameStartScreen onPickNumber={pickedNumberHandler} />;
  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  };
  if(gameIsOver && userNumber) {
    screen = <GameOverScreen />
  };

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require("")} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen} 
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1, // taking as much space as availble.
    backgroundColor: "#ddb52f",
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
