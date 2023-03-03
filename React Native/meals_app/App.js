import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function DrawerNavigation() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          sceneContainerStyle: {
            backgroundColor: "#3f2f25",
          },
          drawerContentStyle: { backgroundColor: "#351401" },
          drawerInactiveTintColor: "white",
          drawerActiveBackgroundColor: "#e4baa1",
          drawerActiveTintColor: "#351401",
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => {
              return <Ionicons name="list" color={color} size={size} />;
            },
          }}
        />
        <Drawer.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Ionicons name="star" color={color} size={size} />;
            },
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={DrawerNavigation}
              options={{
                // title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverViewScreen}
              // options={({ route, navigation }) => {
              //   const title = route.params.title;
              //   return {
              //     title: title,
              //   };
              // }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailScreen}
              // options={{
              //   headerRight: () => {
              //     return <Button title="Header" />;
              //   },
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
