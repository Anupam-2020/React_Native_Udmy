import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import { View, Text } from "react-native";
import MealItem from "../components/MealItem";
import { ScrollView } from "react-native-gesture-handler";

const FavouritesScreen = ({ navigation }) => {
  const favouriteMealIds = useSelector((state) => state.favourite.ids);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealIds.includes(meal.id)
  );

  if (favouriteMealIds.length === 0) {
    return (
      <View>
        <Text>YOU HAVE NO FAVOURITE MEALS</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {favouriteMeals.map((fav) => (
        <MealItem
          title={fav.title}
          imageUrl={fav.imageUrl}
          duration={fav.duration}
          complexity={fav.complexity}
          affordability={fav.affordability}
          onPress={() => {
            navigation.navigate("MealDetails", {
              mealId: fav.id,
            });
          }}
        />
      ))}
    </ScrollView>
  );
};

export default FavouritesScreen;
