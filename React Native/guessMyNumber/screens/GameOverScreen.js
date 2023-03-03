import { Button, Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { Colors } from "../constsnts/colors";

export default function GameOverScreen({
  setGameIsOver,
  isChoosenNumber,
  countIncrement,
  choosenNumber,
  resetCount
}) {
  function startScreen() {
    setGameIsOver(false);
    isChoosenNumber();
    resetCount(0);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summmaryText}>
        Your phone needed
        <Text style={styles.highLight}> {countIncrement}</Text> rounds to guess
        the number<Text style={styles.highLight}> {choosenNumber}</Text>
      </Text>
      <View style={styles.buttonDisplay}>
        <PrimaryButton onPress={startScreen}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summmaryText: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 18,
    marginVertical: 20,
  },
  highLight: {
    color: "purple",
  },
  buttonDisplay: {
    marginHorizontal: 70,
  },
});
