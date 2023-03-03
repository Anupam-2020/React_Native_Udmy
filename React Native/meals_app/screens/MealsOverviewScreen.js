import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable, View } from "react-native";
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsOverViewScreen = ({ navigation, route }) => {
  // const {categoryid} = route.params;  //M-1 for getting routes...

  const routes = useRoute(); // M-2 for getting routes...
  const { categoryid } = routes.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryid) >= 0;
  });

  // console.log(displayedMeals);

  useEffect(() => {
    const categories = CATEGORIES.find(
      (category) => category.id === categoryid
    );
    navigation.setOptions({
      title: categories.title,
    });
  }, [categoryid, navigation]);

  const renderItem = (itemData) => {
    const items = itemData.item;
    const mealData = {
      title: items.title,
      imageUrl: items.imageUrl,
      duration: items.duration,
      complexity: items.complexity,
      affordability: items.affordability,
      id: items.id
    };
    return (
      <MealItem
        {...mealData}
        onPress={() => {
          navigation.navigate("MealDetails", {
            mealId: items.id,
          });
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={displayedMeals}
        renderItem={renderItem}
        keyExtractor={(key) => {
          return key.id;
        }}
      />
    </View>
  );
};

export default MealsOverViewScreen;
