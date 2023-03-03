import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [isChoosenNumber, setIsChoosenNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [fontsLoaded] = useFonts({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-italics": require("./assets/fonts/OpenSans-BoldItalic.ttf"),
  });
  const [count, setCount] = useState();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function screenHandler(event) {
    setIsChoosenNumber(event);
    setGameIsOver(false);
  }

  function gameOverDisplay() {
    setGameIsOver(true);
  }
  function countIncrement(value) {
    setCount(value);
  }

  function resetCount(value) {
    setCount(value);
  }

  function resetMinBoundary(value) {
    
  }

  let screen = <StartGameScreen screenHandler={screenHandler} />;

  if (isChoosenNumber) {
    screen = (
      <GameScreen
        choosenNumber={isChoosenNumber}
        gameOverDisplay={gameOverDisplay}
        countIncrementValue={countIncrement}
        startCount = {count}
      />
    );
  }

  if (isChoosenNumber && gameIsOver) {
    screen = (
      <GameOverScreen
        setGameIsOver={setGameIsOver}
        isChoosenNumber={setIsChoosenNumber}
        countIncrement={count}
        choosenNumber={isChoosenNumber}
        resetCount={resetCount}
      />
    );
  }

  return (
    <LinearGradient colors={["#AD593E", "#FFE600"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.4,
  },
});
