import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { Colors } from "../constsnts/colors";

const StartGameScreen = ({ screenHandler }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function textInputHandler(value) {
    setEnteredNumber(value);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const choosenNumber = parseInt(enteredNumber);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    screenHandler(choosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          onChangeText={textInputHandler}
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonDisplay}>
            <PrimaryButton onPress={resetInputHandler} children="Reset" />
          </View>
          <View style={styles.buttonDisplay}>
            <PrimaryButton onPress={confirmInputHandler} children="Confirm" />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  textInput: {
    paddingTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary500,
    color: Colors.primary500,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    width: 48,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonDisplay: {
    flex: 1,
  },
});
