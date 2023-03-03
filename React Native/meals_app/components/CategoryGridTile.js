import { Pressable, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = ({ itemData, onPress }) => {

  return (
    <View style={[styles.gridItem, { backgroundColor: itemData.item.color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          { flex: 1 },
          pressed ? { opacity: 0.5 } : null,
        ]}
        onPress={onPress}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
        >
          <Text style={styles.textStyle}>{itemData.item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    elevation: 4,
    borderColor: "black",
    overflow: Platform.OS === "android" ? "hidden" : "visible", // overflow is different for android and iOS.
    borderRadius: 8,
    backgroundColor: "white",
    // the below styles are for iOS, as ioS doesn't have elevation property...
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
