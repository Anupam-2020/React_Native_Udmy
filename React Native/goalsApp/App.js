import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [startAddingGoal, setStartAddingGoal] = useState(false);

  const modalDisplay = () => {
    setStartAddingGoal(true);
  }

  const cancelModelHandler = () => {
    setStartAddingGoal(false);
  }

  const addGoalHandler = (value) => {
    setCourseGoals((goals) => [
      ...goals,
      { text: value, id: Math.random().toString() },
    ]);
    setStartAddingGoal(false);
  };

  const onDeleteHandler = (id) => {
    setCourseGoals((goals) => goals.filter((goal) => goal.id !== id));
  };

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
        <Button title="Add new goal" onPress={modalDisplay}/>
      {startAddingGoal && <GoalInput addGoalHandler={addGoalHandler} onCancel={cancelModelHandler}/>}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item, index }) => (
            <GoalItem itemData={item} deleteItem={onDeleteHandler} visible={startAddingGoal}/>
          )}
          keyExtractor={(item, key) => {
            return item.id;
          }}
        ></FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a'
  },

  goalsContainer: {
    flex: 4,
  },
});
