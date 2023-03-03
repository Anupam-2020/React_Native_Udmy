import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import MealsOverViewScreen from "./MealsOverviewScreen";

const CategoriesScreen = ({ navigation }) => {
  // const pressHandler = () => {
  //   navigation.navigate("MealsOverview", {
  //     catagoryId: itemData
  //   });
  // };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => {
        return (
          <CategoryGridTile
            itemData={itemData}
            onPress={() => {
              navigation.navigate("MealsOverview", {
                categoryid: itemData.item.id,
                title: itemData.item.title,
              });
            }}
          />
        );
      }}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
