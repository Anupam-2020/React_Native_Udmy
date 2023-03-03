import { useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../components/IconButton";
import { MEALS } from "../data/dummy-data";
import { favouriteActions } from "../store/favourites";

const MealDetailScreen = ({ route, navigation }) => {
  const favouriteMealsIds = useSelector((state) => state.favourite.ids);

  const dispatch = useDispatch();

  const { mealId } = route.params;

  const selectedMeals = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavourite = favouriteMealsIds.includes(mealId);

  const headerButtonPressHandler = () => {
    if (mealIsFavourite) {
      dispatch(favouriteActions.removeFavourite({ id: mealId }));
    } else {
      dispatch(favouriteActions.addFavourite({ id: mealId }));
    }
    console.log(favouriteMealsIds);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressHandler}
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={{ marginBottom: 10 }}>
      <Image source={{ uri: selectedMeals.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeals.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailsText}>{selectedMeals.duration}</Text>
        <Text style={styles.detailsText}>
          {selectedMeals.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailsText}>
          {selectedMeals.affordability.toUpperCase()}
        </Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
      </View>

      {selectedMeals.ingredients.map((ingredient) => {
        return (
          <View key={ingredient} style={styles.listItem}>
            <Text style={styles.listText}>{ingredient}</Text>
          </View>
        );
      })}

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Steps</Text>
      </View>

      {selectedMeals.steps.map((step) => (
        <View style={styles.listItem} key={step}>
          <Text style={styles.listText}>{step}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
  },
  detailsText: {
    marginHorizontal: 5,
    color: "white",
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    color: "#f5d2bc",
    fontWeight: "bold",
  },
  subtitleContainer: {
    margin: 4,
    padding: 10,
    borderBottomColor: "#f5d2bc",
    borderBottomWidth: 2,
    marginHorizontal: 24,
  },
  listItem: {
    backgroundColor: "#f5d2bc",
    margin: 3,
    marginHorizontal: 24,
    borderRadius: 5,
    padding: 4,
  },
  listText: {
    textAlign: "center",
  },
});
