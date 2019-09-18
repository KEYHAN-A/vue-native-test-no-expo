<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator
} from "vue-native-router";
import HomeScreen from "./screens/HomeScreen.vue";
import DetailsScreen from "./screens/DetailsScreen.vue";
import SettingsScreen from "./screens/SettingsScreen.vue";
import SettingsDetailScreen from "./screens/SettingsDetail.vue";
import QRCode from "./screens/QRCode.vue";

const IOSTabs = createBottomTabNavigator({
  Details: DetailsScreen,
  Settings: SettingsScreen,
  QRCode
});

const AndroidTabs = createMaterialTopTabNavigator({
  Details: DetailsScreen,
  Settings: SettingsScreen
});

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    AndroidTabs,
    IOSTabs,
    SettingsDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: "Geri"
    }
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator }
};
</script>