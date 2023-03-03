import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ itemData, deleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#5e0acc" }}
        onPress={deleteItem.bind(this, itemData.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "purple",
    borderRadius: 6,
    margin: 8,
  },
  goalText: { 
    color: "white", 
    paddingHorizontal: 8, 
    paddingVertical: 8 
  },
  pressedItem: {
    opacity: 0.5
  }
});

export default GoalItem;
