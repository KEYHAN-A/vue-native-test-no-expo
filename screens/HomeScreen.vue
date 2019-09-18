<template>
  <view class="container">
    <text class="heading">Home</text>
    <text class="text">This is the Home screen {{ username }}</text>
    <text class="text">Use the swipe gesture to open the drawer navigator</text>
    <button title="Login" @press="storeData" v-if="!username"></button>
    <button title="Logout" @press="removeData" v-if="username"></button>
    <button title="Touch Id" @press="authTouch"></button>
    <button title="View iOS tabs" @press="goToIOSTabNavigator"></button>
    <button title="View Android tabs" @press="goToAndroidTabNavigator"></button>
  </view>
</template>

<script>
import { pushNotifications } from "../services/index";
import AsyncStorage from "@react-native-community/async-storage";
import TouchID from "react-native-touch-id";

export default {
  props: {
    navigation: { type: Object }
  },
  data() {
    return {
      username: null
    };
  },
  methods: {
    goToIOSTabNavigator() {
      this.navigation.navigate("IOSTabs");
    },
    goToAndroidTabNavigator() {
      this.navigation.navigate("AndroidTabs");
    },
    retrieveData: async function() {
      const res = await AsyncStorage.getItem("username");
      if (res) {
        this.username = res;
      } else this.username = null;
    },
    storeData: async function() {
      await AsyncStorage.setItem("username", "basarsen");
      this.username = "basarsen";
    },
    removeData: async function() {
      await AsyncStorage.removeItem("username");
      this.username = null;
    },
    authTouch() {
      TouchID.authenticateü(
        "to demo this react-native component"        
      )
        .then(success => {
          alert(success)
        })
        .catch(error => {
          alert(error)
        });
    }
  },
  created() {
    this.retrieveData();
    pushNotifications.configure();
    pushNotifications.localNotification();
  }
};
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 50px;
}
.heading {
  font-size: 30px;
  font-weight: bold;
  color: darkolivegreen;
  margin: 20px;
}
.text {
  text-align: center;
  margin: 10px;
}
</style>