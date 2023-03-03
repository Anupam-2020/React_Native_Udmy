import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.textItem}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: "#873947",
    margin: 4,
    borderRadius: 18,
    overflow: "hidden",
  },
  textItem: {
    textAlign: "center",
    color: "white",
  },
  buttonInnerContainer: {
    elevation: 2,
    padding: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
