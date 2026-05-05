# Vue Native Test (No Expo)

A React Native project using Vue Native (without Expo) for cross-platform mobile development. Demonstrates Vue.js syntax running on React Native via the vue-native-core bridge.

## Overview

This project explores using Vue.js syntax to build React Native apps without the Expo toolchain. It uses `vue-native-core` to translate Vue components into React Native elements at runtime, with a custom Metro transformer for `.vue` file support.

## Features

- Vue.js single-file components (`.vue`) on React Native
- Bottom tab navigation (iOS) / Material top tabs (Android)
- Stack navigation with custom headers
- QR code scanner integration
- Push notifications (iOS)
- Touch ID / Face ID authentication
- Device info access
- Async storage
- Camera integration

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native 0.59 |
| Vue Bridge | vue-native-core 0.1.3, vue-native-helper 0.1.3 |
| Routing | vue-native-router 0.1.0 (react-navigation 4.x) |
| UI | react-native-paper 2.16 |
| Navigation | react-native-gesture-handler, react-native-reanimated |
| Icons | react-native-vector-icons 6.6 |
| Storage | @react-native-community/async-storage |
| Camera | react-native-camera 3.4 |
| Auth | react-native-touch-id 4.4 |
| Notifications | react-native-push-notification |
| QR | react-native-qrcode-scanner |
| Metro | Custom vueTransformerPlugin |
| Build | Babel + metro-react-native-babel-preset |

## Project Structure

```
vue-native-test-no-expo/
├── App.vue                    # Root component (app navigator)
├── index.js                   # React Native entry point
├── app.json                   # App config (name, icon, etc.)
├── metro.config.js            # Metro config with Vue transformer
├── babel.config.js            # Babel preset (metro-react-native-babel-preset)
├── vueTransformerPlugin.js    # Metro transformer for .vue files
├── package.json               # Dependencies & scripts
├── yarn.lock                  # Dependency lock file
├── __tests__/                 # Jest tests
├── screens/                   # Vue screen components
│   ├── HomeScreen.vue
│   ├── DetailsScreen.vue
│   ├── SettingsScreen.vue
│   ├── SettingsDetail.vue
│   └── QRCode.vue
├── services/                  # Utility services
│   ├── index.js
│   ├── deviceInfo.js
│   └── pushNotifications.js
├── ios/                       # iOS native project
└── android/                   # Android native project
```

## Installation

```bash
cd ~/projects/vue-native-test-no-expo

# Install dependencies
yarn install
# or: npm install

# Start Metro bundler
npm start
# or: yarn start
```

### Running on Devices

```bash
# iOS
npx react-native run-ios

# Android
npx react-native run-android
```

## Configuration

### Metro Transformer

The project uses a custom `vueTransformerPlugin.js` to transform `.vue` files through Metro's bundler. This is configured in `metro.config.js`:

```js
transformer: {
  babelTransformerPath: require.resolve("./vueTransformerPlugin.js"),
},
resolver: {
  sourceExts: [...sourceExts, "vue"]
}
```

### Babel

Uses `metro-react-native-babel-preset` for transpilation.

### App Entry

`index.js` registers the `App` component (from `App.vue`) with React Native's `AppRegistry`.

## Screens

| Screen | Description |
|--------|-------------|
| HomeScreen | Main landing page |
| DetailsScreen | Detail view with tab navigation |
| SettingsScreen | Settings list |
| SettingsDetail | Settings detail page |
| QRCode | QR code scanner |

## Services

| Service | Description |
|---------|-------------|
| deviceInfo | Device information (model, OS version, etc.) |
| pushNotifications | Push notification registration & handling |
| index.js | Service exports |

## Notes

- This project uses **React Native 0.59** with **vue-native-core 0.1.3** — an early integration of Vue Native with React Native.
- It does **not** use Expo, meaning you need to manage native project configuration manually.
- The `jetifier` dependency is included for AndroidX compatibility.
- Navigation uses **react-navigation 4.x** patterns (createBottomTabNavigator, createStackNavigator).

## Scripts

```bash
npm start    # Start Metro bundler
npm test     # Run Jest tests
```

## License

Proprietary — All rights reserved.
