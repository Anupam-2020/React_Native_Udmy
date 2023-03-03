import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  visible,
  Image,
} from "react-native";

const GoalInput = ({ addGoalHandler, onCancel }) => {
  const [value, setValue] = useState("");
  const inputHandling = (event) => {
    setValue(event);
  };

  const addGoalInputHandler = () => {
    addGoalHandler(value);
    setValue("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.jpeg")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="enter goal"
          onChangeText={inputHandling}
          value={value}
        />
        <View style={{ flexDirection: "row", padding: 10 }}>
          <View style={{ margin: 3, width: "30%" }}>
            <Button onPress={addGoalInputHandler} title="Add goal" />
          </View>
          <View style={{ margin: 3, width: "30%" }}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#311145",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    width: "90%",
    padding: 8,
    color: "black",
    backgroundColor: "#E4D0FF",
    borderRadius: 8,
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
});
