import React, { Component } from 'react';
import NavClass from './navbar';
import { Button } from 'reactstrap';
import {ScanditBarcodeScanner} from "./index";
import BarcodePicker from "./scanner";
import { ScanSettings, Barcode } from "scandit-sdk";


//scandit initialization value
let licenseKey = "AUZOTAjxFoljEUPsci9NGuRA5C5zF7MWqzqmT2tPvRpwXEmzFU/fPp5Mh5HhdnxQoR55LpVKB/KdXL6v1G8zBLAQ0uW0fC40aBKlyx5jkL0yUnBLcRN7LDNEM8mIdyqiSnKEBK1Uyxp5HBlPYgcylbkUWTUIPHnKxT0pj935HFhiOGB9oUQDLEVkOdljHPqklk4qikOLwxc5kf8IkS1+kv1trNpuG5UOSgYhLyb8Rust6LxO/uGP+TJqQhTVgy+v1HFuduhz0rsartrKsrpBfgzJADuVhp6roeiE82Y6V3iC8ArrqbbruDX7smJuFJr/zSBCLh8qkYrr29PUs9lPjtc2N+goR7qbRWQNuX+JkebMgTEU59SLwuSGgifNNt4+on89YGdFSIC75JZkWcT2EJB5muiKg/Qb8+w8btPaa5bqv0Cm9AJdxhMNROrSwdw6XUDN6TxR/5bmT0gljI7A9+1UzsNSdiTobIOoE0uNI1RZFbJ1EFLSc83jH8q6JRY8RFWNuAyk6KuBNPhKVHuOmJXBiKlAxg806aCsfgQ8cvxMh2RUG0fOguTqiDoybWy79ymLzHidzH/EeyubBtD/Z9YcmP5zOwWzUcspp8z9sEF91kiWYHKj/sWuqNsJf4JklFlltrO5nI6xYF+jjs5ZxBbB35YLmD5dIzl/NapSxpzGjQgvIsIQqX75/WnWez5MHHeHI1YAienDb9TIzlEBKVD4TvcDPP9uChc1V8htTsfl+vETNB+2pd6FIcrC45+70XnRfz3X6L1TeaaGFYoljresrHaRoTZmCZHuMjmicEgCKYQUgOwOiMVH2uHHMjCCXFBd"

// datafiniti api call needs
let API_token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ5eHZubmduN2U4NmJjZTZ4YnZvNnN4MHcwM2Z2b3UxbyIsImlzcyI6ImRhdGFmaW5pdGkuY28ifQ.V4-nFhAU9Pv453L20AFetsrTHoCUHqhwkqxeCIynkEIZ_uJU3wgL-wVUuzHFtKUjZf7IK9B_0p0HsanyIcT0BU78xh0NrYjnRiZ2cFgW5z3NMeo-Bu-jK5OGYHNsGcbbIg-R-DJqg2qVC1EPmKN8CxXFd_FnutiEDI5WexFpR7Hk8ly1VyJAQMonZoNs0vm44orYb1wODtZ7iL-FlJGfeZI0A3QIotu3rHG_2LysugI_V6GEg_hZA-e-rrvu7hyKAut4FpDpYXVsq4OqlA3gDGHU7WBRoUcdq4hshSU4g0uNR__MCt2WlGbDZuyS8_qKlOqlGNcaPr-YzxOrYl-TMPGPQpxmWIKIzLoAzPyCabOdaTOiWxEzBXa99g81o9xrOwwKXgbGwzk9jgdP2SbliGyINYRRYJqsPNFjVzoTWFoALqBhqd1EBGjFklVVEstNo6twyGj09L7VgsqGo3obOm6UpIacqSKpAPJ7mUo19p6gwogs0DVbpkxVJPhyAk-GQN8LFOYB_Uz_rbE7qoQkVgyFBdA0Tqxij8SBXBlgxvdGIfDKi8-UszE4j8RILGARDZeJPlsQsKa2LRj4wvmYZfCnHflJM-30qysa3Wo-FKspyNnnDl1Q92YrMx-noQkng3NTncCH2BqkuWCdmg19rSjxc5561GA0mpYkdeJy_Xc';
var format = 'JSON';
var query = 'isbn:9782749935881';
var num_records = 1;
var download = false;
let error = ''
let response = {}
let body = ''

var request_options = {
  url: 'https://api.datafiniti.co/v4/products/search',
  method: 'POST',
  json: {
    'query': query,
    'format': format,
    'num_records': num_records,
    'download': download
  },
  headers: {
    'Authorization': 'Bearer ' + API_token,
    'Content-Type': 'application/json'
  }
}



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
      doot=this;
    }



      handleRequestAlt(){
        console.log('alt: ')


              console.log('request_options: ')

              console.log(request_options)
              const request = require('request');

              request(request_options, (err, res, body) => {
                if (err) { return
                  console.log('error: ')
                  console.log(err);
                 }
                 console.log('success: ')
                // console.log(body.url);
                // console.log(body.explanation);
                 console.log(body);
              });
      };

      handleEbayApi(){
        //var appname = 'GarrettC-testingb-SBX-bbce8ced1-7ad3a938'
        var appname = 'GarrettC-testingb-PRD-6bce8ced1-9cd1cfd8'
        const isbnVal = '9780394502694'
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByProduct&SERVICE-VERSION=1.9.0&SECURITY-APPNAME=' + appname + '&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=2&productId.@type=ISBN&productId=' + isbnVal
      //  https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByProduct&SERVICE-VERSION=1.12.0&SECURITY-APPNAME=GarrettC-testingb-PRD-6bce8ced1-9cd1cfd8&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=2&productId.@type=ReferenceID&productId=9782749935881
        console.log(appname)
        fetch(proxyurl + url)
          .then(res => res.json())
          .then((data) => {
            console.log('contacts returned' +  JSON.stringify(data) )
            console.log('contacts returned' +  Object.values(data) )
            // this.setState({ contacts: data })
          })
          .catch(console.log)
      }


    render(){
      return(
        <div>
          <NavClass/>
          <h1>Hello</h1>
          <br/>
          <br/>
          <br/>
          <br/><br/>
          <br/><br/>
          <br/>
          <p>
          We are QuickHelp, the Cincinnati areas best handyman service for those on a structured income!
            It is our mission to provide service when you need it, from lightbulbs to light renovation we can help.
            We offer subscription plans to allow anyone who may need to keep a strict budget, so you can put money away for the things you need done.

            FIREBASETEST
          </p>

          <Button color="danger"
           onClick={this.handleRequestAlt

            }
          >Datafiniti</Button>
          <br/>
          <Button color="danger"
           onClick={this.handleEbayApi

            }
          >ebay</Button>







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
                    // document.getElementById("scandit-barcode-result").innerHTML = scanResult.barcodes.reduce(function(
                  var scannedResult = ''
                   scannedResult = scanResult.barcodes.reduce(function(
                      string,
                      barcode
                    ) {
                      // return string + Barcode.Symbology.toHumanizedName(barcode.symbology) + ": " + barcode.data + "<br>";
                      console.log(Barcode.Symbology.toHumanizedName(barcode.symbology) + ": " + barcode.data)
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
