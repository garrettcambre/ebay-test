import React, { Component } from 'react';
import NavClass from './navbar';
import {ScanditBarcodeScanner} from "./index";
import BarcodePicker from "./scanner";
import { ScanSettings, Barcode } from "scandit-sdk";

let licenseKey = "AUZOTAjxFoljEUPsci9NGuRA5C5zF7MWqzqmT2tPvRpwXEmzFU/fPp5Mh5HhdnxQoR55LpVKB/KdXL6v1G8zBLAQ0uW0fC40aBKlyx5jkL0yUnBLcRN7LDNEM8mIdyqiSnKEBK1Uyxp5HBlPYgcylbkUWTUIPHnKxT0pj935HFhiOGB9oUQDLEVkOdljHPqklk4qikOLwxc5kf8IkS1+kv1trNpuG5UOSgYhLyb8Rust6LxO/uGP+TJqQhTVgy+v1HFuduhz0rsartrKsrpBfgzJADuVhp6roeiE82Y6V3iC8ArrqbbruDX7smJuFJr/zSBCLh8qkYrr29PUs9lPjtc2N+goR7qbRWQNuX+JkebMgTEU59SLwuSGgifNNt4+on89YGdFSIC75JZkWcT2EJB5muiKg/Qb8+w8btPaa5bqv0Cm9AJdxhMNROrSwdw6XUDN6TxR/5bmT0gljI7A9+1UzsNSdiTobIOoE0uNI1RZFbJ1EFLSc83jH8q6JRY8RFWNuAyk6KuBNPhKVHuOmJXBiKlAxg806aCsfgQ8cvxMh2RUG0fOguTqiDoybWy79ymLzHidzH/EeyubBtD/Z9YcmP5zOwWzUcspp8z9sEF91kiWYHKj/sWuqNsJf4JklFlltrO5nI6xYF+jjs5ZxBbB35YLmD5dIzl/NapSxpzGjQgvIsIQqX75/WnWez5MHHeHI1YAienDb9TIzlEBKVD4TvcDPP9uChc1V8htTsfl+vETNB+2pd6FIcrC45+70XnRfz3X6L1TeaaGFYoljresrHaRoTZmCZHuMjmicEgCKYQUgOwOiMVH2uHHMjCCXFBd"
var doot;

class Home extends Component{
  constructor(props) {
    super(props);
      this.state = {// ONCHANGE if anything is added make sure to add it to signout setstate call
        signupModal: false,
        scannerReady: false,
      };

      // this.handleSubmit = this.handleSubmit.bind(this);//these can all be set to doot in a cleanup day(i think, some scope may be slightly different),
      // this.handleEmailChange = this.handleEmailChange.bind(this);// see handleEmailChange for an example
      // this.handleEmailChange = this.handleEmailChange.bind(this);
      // this.handleEmailChange = this.handleEmailChange.bind(this);
      // this.handleEmailChange = this.handleEmailChange.bind(this);
      // this.handleEmailChange = this.handleEmailChange.bind(this);
      // this.handleEmailChange = this.handleEmailChange.bind(this);
      // this.handleEmailChange = this.handleEmailChange.bind(this);

      doot=this;
    }
    render(){
      return(
        <div>
          <NavClass/>
          <h1>Hello</h1>
          <br/>
          <br/>
          <p>
          We are QuickHelp, the Cincinnati areas best handyman service for those on a structured income!
            It is our mission to provide service when you need it, from lightbulbs to light renovation we can help.
            We offer subscription plans to allow anyone who may need to keep a strict budget, so you can put money away for the things you need done.

            FIREBASETEST
          </p>











                <BarcodePicker
                  playSoundOnScan={true}
                  vibrateOnScan={true}
                  scanSettings={
                    new ScanSettings({
                      enabledSymbologies: ["qr", "ean8", "ean13", "upca", "upce", "code128", "code39", "code93", "itf"],
                      codeDuplicateFilter: 1000
                    })
                  }
                  onScan={scanResult => {
                    document.getElementById("scandit-barcode-result").innerHTML = scanResult.barcodes.reduce(function(
                      string,
                      barcode
                    ) {
                      return string + Barcode.Symbology.toHumanizedName(barcode.symbology) + ": " + barcode.data + "<br>";
                    },
                    "");
                  }}
                  onError={error => {
                    console.error(error.message);
                  }}
                />





        </div>
      );
    }
}

export default Home;
