import React, { Component } from "react";
import PropTypes from "prop-types";
import { configure, BarcodePicker as ScanditSDKBarcodePicker } from "scandit-sdk";
import * as ScanditSDK from "scandit-sdk";
// Configure the library and activate it with a license key
// configure("YOUR_LICENSE_KEY_IS_NEEDED_HERE").catch(error => {
//   alert(error);
// });


let licenseKey = "AUZOTAjxFoljEUPsci9NGuRA5C5zF7MWqzqmT2tPvRpwXEmzFU/fPp5Mh5HhdnxQoR55LpVKB/KdXL6v1G8zBLAQ0uW0fC40aBKlyx5jkL0yUnBLcRN7LDNEM8mIdyqiSnKEBK1Uyxp5HBlPYgcylbkUWTUIPHnKxT0pj935HFhiOGB9oUQDLEVkOdljHPqklk4qikOLwxc5kf8IkS1+kv1trNpuG5UOSgYhLyb8Rust6LxO/uGP+TJqQhTVgy+v1HFuduhz0rsartrKsrpBfgzJADuVhp6roeiE82Y6V3iC8ArrqbbruDX7smJuFJr/zSBCLh8qkYrr29PUs9lPjtc2N+goR7qbRWQNuX+JkebMgTEU59SLwuSGgifNNt4+on89YGdFSIC75JZkWcT2EJB5muiKg/Qb8+w8btPaa5bqv0Cm9AJdxhMNROrSwdw6XUDN6TxR/5bmT0gljI7A9+1UzsNSdiTobIOoE0uNI1RZFbJ1EFLSc83jH8q6JRY8RFWNuAyk6KuBNPhKVHuOmJXBiKlAxg806aCsfgQ8cvxMh2RUG0fOguTqiDoybWy79ymLzHidzH/EeyubBtD/Z9YcmP5zOwWzUcspp8z9sEF91kiWYHKj/sWuqNsJf4JklFlltrO5nI6xYF+jjs5ZxBbB35YLmD5dIzl/NapSxpzGjQgvIsIQqX75/WnWez5MHHeHI1YAienDb9TIzlEBKVD4TvcDPP9uChc1V8htTsfl+vETNB+2pd6FIcrC45+70XnRfz3X6L1TeaaGFYoljresrHaRoTZmCZHuMjmicEgCKYQUgOwOiMVH2uHHMjCCXFBd"



ScanditSDK.configure(  licenseKey: "AUZOTAjxFoljEUPsci9NGuRA5C5zF7MWqzqmT2tPvRpwXEmzFU/fPp5Mh5HhdnxQoR55LpVKB/KdXL6v1G8zBLAQ0uW0fC40aBKlyx5jkL0yUnBLcRN7LDNEM8mIdyqiSnKEBK1Uyxp5HBlPYgcylbkUWTUIPHnKxT0pj935HFhiOGB9oUQDLEVkOdljHPqklk4qikOLwxc5kf8IkS1+kv1trNpuG5UOSgYhLyb8Rust6LxO/uGP+TJqQhTVgy+v1HFuduhz0rsartrKsrpBfgzJADuVhp6roeiE82Y6V3iC8ArrqbbruDX7smJuFJr/zSBCLh8qkYrr29PUs9lPjtc2N+goR7qbRWQNuX+JkebMgTEU59SLwuSGgifNNt4+on89YGdFSIC75JZkWcT2EJB5muiKg/Qb8+w8btPaa5bqv0Cm9AJdxhMNROrSwdw6XUDN6TxR/5bmT0gljI7A9+1UzsNSdiTobIOoE0uNI1RZFbJ1EFLSc83jH8q6JRY8RFWNuAyk6KuBNPhKVHuOmJXBiKlAxg806aCsfgQ8cvxMh2RUG0fOguTqiDoybWy79ymLzHidzH/EeyubBtD/Z9YcmP5zOwWzUcspp8z9sEF91kiWYHKj/sWuqNsJf4JklFlltrO5nI6xYF+jjs5ZxBbB35YLmD5dIzl/NapSxpzGjQgvIsIQqX75/WnWez5MHHeHI1YAienDb9TIzlEBKVD4TvcDPP9uChc1V8htTsfl+vETNB+2pd6FIcrC45+70XnRfz3X6L1TeaaGFYoljresrHaRoTZmCZHuMjmicEgCKYQUgOwOiMVH2uHHMjCCXFBd",
  {engineLocation: "../node_modules/scandit-sdk/build"},
);
/* {engineLocation: "../node_modules/scandit-sdk/build"} */

configure(licenseKey).catch(error => {
  alert(error);
});

const style = {
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  margin: "auto",
  maxWidth: "1280px",
  maxHeight: "80%"
};

class BarcodePicker extends Component {
  licenseKey = "AUZOTAjxFoljEUPsci9NGuRA5C5zF7MWqzqmT2tPvRpwXEmzFU/fPp5Mh5HhdnxQoR55LpVKB/KdXL6v1G8zBLAQ0uW0fC40aBKlyx5jkL0yUnBLcRN7LDNEM8mIdyqiSnKEBK1Uyxp5HBlPYgcylbkUWTUIPHnKxT0pj935HFhiOGB9oUQDLEVkOdljHPqklk4qikOLwxc5kf8IkS1+kv1trNpuG5UOSgYhLyb8Rust6LxO/uGP+TJqQhTVgy+v1HFuduhz0rsartrKsrpBfgzJADuVhp6roeiE82Y6V3iC8ArrqbbruDX7smJuFJr/zSBCLh8qkYrr29PUs9lPjtc2N+goR7qbRWQNuX+JkebMgTEU59SLwuSGgifNNt4+on89YGdFSIC75JZkWcT2EJB5muiKg/Qb8+w8btPaa5bqv0Cm9AJdxhMNROrSwdw6XUDN6TxR/5bmT0gljI7A9+1UzsNSdiTobIOoE0uNI1RZFbJ1EFLSc83jH8q6JRY8RFWNuAyk6KuBNPhKVHuOmJXBiKlAxg806aCsfgQ8cvxMh2RUG0fOguTqiDoybWy79ymLzHidzH/EeyubBtD/Z9YcmP5zOwWzUcspp8z9sEF91kiWYHKj/sWuqNsJf4JklFlltrO5nI6xYF+jjs5ZxBbB35YLmD5dIzl/NapSxpzGjQgvIsIQqX75/WnWez5MHHeHI1YAienDb9TIzlEBKVD4TvcDPP9uChc1V8htTsfl+vETNB+2pd6FIcrC45+70XnRfz3X6L1TeaaGFYoljresrHaRoTZmCZHuMjmicEgCKYQUgOwOiMVH2uHHMjCCXFBd"

  static propTypes = {
    visible: PropTypes.bool,
    playSoundOnScan: PropTypes.bool,
    vibrateOnScan: PropTypes.bool,
    scanningPaused: PropTypes.bool,
    guiStyle: PropTypes.string,
    videoFit: PropTypes.string,
    scanSettings: PropTypes.object,
    enableCameraSwitcher: PropTypes.bool,
    enableTorchToggle: PropTypes.bool,
    enableTapToFocus: PropTypes.bool,
    enablePinchToZoom: PropTypes.bool,
    accessCamera: PropTypes.bool,
    camera: PropTypes.object,
    cameraSettings: PropTypes.object,
    targetScanningFPS: PropTypes.number,
    onScan: PropTypes.func,
    onError: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    ScanditSDK.configure(this.licenseKey, {

    engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@4.x/build"

  });
    ScanditSDKBarcodePicker.create(this.ref.current, this.props).then(barcodePicker => {
      this.barcodePicker = barcodePicker;
      if (this.props.onScan != null) {
        barcodePicker.on("scan", this.props.onScan);
      }
      if (this.props.onError != null) {
        barcodePicker.on("scanError", this.props.onError);
      }
    });
  }

  componentWillUnmount() {
    if (this.barcodePicker != null) {
      this.barcodePicker.destroy();
    }
  }

  componentDidUpdate(prevProps) {
    // These are just some examples of how to react to some possible property changes

    if (JSON.stringify(prevProps.scanSettings) !== JSON.stringify(this.props.scanSettings)) {
      this.barcodePicker.applyScanSettings(this.props.scanSettings);
    }

    if (prevProps.visible !== this.props.visible) {
      this.barcodePicker.setVisible(this.props.visible);
    }
  }

  render() {
    return <div ref={this.ref} style={style} />;
  }
}

export default BarcodePicker;
