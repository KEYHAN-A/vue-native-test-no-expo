import DeviceInfo from 'react-native-device-info';

const deviceInformation = (info) => {
    return DeviceInfo[info]();
};

export {
    deviceInformation
};

