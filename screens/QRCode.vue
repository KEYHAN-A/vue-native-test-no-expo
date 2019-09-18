<template>
  <RNCamera />
  <!-- <text>Camera</text> -->
</template>

<script>
import { RNCamera } from "react-native-camera";

export default {
  data() {
    return {
      myRef: { type: Object }
    };
  },
  methods: {
  },
  created() {},
  components: {
    RNCamera
  }
};
</script>