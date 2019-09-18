<template>
  <view class="container">
    <text class="heading">Settings</text>
    <touchable-opacity
      v-for="item in deviceInfos"
      :key="item.key"
      class="list"
      :on-press="() => goToSettingDetail(item)"
    >
      <text>{{ item.value }}</text>
    </touchable-opacity>
  </view>
</template>

<script>

export default {
  data() {
    return {
      deviceInfos: [
        { key: "getBrand", value: "Brand" },
        { key: "getDeviceId", value: "Device ID" },
        { key: "getDeviceName", value: "Device Name" },
        { key: "getUniqueId", value: "Unique ID" }
      ]
    };
  },
  props: {
    navigation: { type: Object }
  },
  methods: {
    renderList: function(item) {
      return <Text>{item.item.value}</Text>;
    },
    goToSettingDetail(info) {
      this.navigation.navigate("SettingsDetailScreen", { info });
    }
  },
  created() {}
};
</script>

<style>
.container {
  flex: 1;
}
.heading {
  font-size: 30px;
  font-weight: bold;
  color: darkolivegreen;
  margin: 20px;
}
.list {
  padding: 16px;
  display: flex;
  background-color: #fbfbfb;
  margin-bottom: 1;
  width: 100%;
}
</style>
