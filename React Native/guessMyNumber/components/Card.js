import { StyleSheet, Text, View } from "react-native";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    marginTop: 40,
    marginHorizontal: 24,
    backgroundColor: "#72063d",
    borderRadius: 8,
    padding: 16,
    elevation: 9,
    shadowColor: "purple",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    alignItems: "center",
  },
});
