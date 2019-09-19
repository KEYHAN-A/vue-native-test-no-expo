<template>
  <QRCodeScanner :onRead="onSuccess" />
  <!-- <RNCamera
    :ref="(ref => this.camera = ref)"
    :style="{flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'}"
  /> -->
  <!-- <text>Camera</text> -->
</template>

<script>
// import { RNCamera } from "react-native-camera";
import QRCodeScanner from "react-native-qrcode-scanner";
export default {
  data() {
    return {
      
    };
  },
  methods: {
    onSuccess(e) {
      alert(e.data);
    }
  },
  created() {},
  components: {
    QRCodeScanner
  }
};
</script>