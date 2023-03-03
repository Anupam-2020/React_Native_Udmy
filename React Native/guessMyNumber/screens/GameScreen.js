import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { Ionicons } from "@expo/vector-icons";
import GuessItem from "../components/GuessItem";

function generateRandomBetween(min, max, exclude) {
  const rndNm = Math.floor(Math.random() * (max - min)) + min;

  if (rndNm === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNm;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
let count = 0;

function GameScreen({
  choosenNumber,
  gameOverDisplay,
  countIncrementValue,
  startCount,
}) {
  const [currentGuess, setCurrentGuess] = useState(() =>
    generateRandomBetween(1, 100, choosenNumber)
  );
  const [countIncrement, setCountIncrement] = useState(count);
  const [guessNumbers, setGuessNumbers] = useState([]);

  useEffect(() => {
    if (currentGuess === choosenNumber) {
      gameOverDisplay();
      countIncrementValue(countIncrement);
      minBoundary = 1;
      maxBoundary = 100;
      count = startCount;
    }
  }, [currentGuess, choosenNumber, gameOverDisplay]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < choosenNumber) ||
      (direction === "greater" && currentGuess > choosenNumber)
    ) {
      Alert.alert("Invalid command", "This is cheating", [
        { text: "Cancel", style: "cancel" },
        (onPress = { gameOverDisplay }),
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
      count += 1;
      setCountIncrement(count);
    } else {
      minBoundary = currentGuess + 1;
      count += 1;
      setCountIncrement(count);
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);

    setGuessNumbers((number) => [...number, newRndNumber]);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} />
            </PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <FlatList
        data={guessNumbers}
        renderItem={({ item, index }) => <GuessItem roundNumber={index} guessNumber={item}/>}
        keyExtractor={(item, key) => {
          return item;
        }}
      />
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  instructionText: {
    marginBottom: 20,
  },
});
