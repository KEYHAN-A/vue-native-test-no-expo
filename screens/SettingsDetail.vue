<template>
  <view class="container">
    <text class="heading">{{ info }}</text>
  </view>
</template>


<script>
import { deviceInfo } from "../services";

export default {
  data() {
    return {
      info: { type: Object }
    };
  },
  props: {
    navigation: { type: Object }
  },
  created() {
    const infoParams = this.navigation.getParam("info");
    deviceInfo.deviceInformation(infoParams.key).then(resp => this.info = resp);
  }
};
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
.heading {
  font-size: 30px;
  font-weight: bold;
  color: darkolivegreen;
  margin: 20px;
}
</style>