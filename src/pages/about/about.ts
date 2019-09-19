import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Printer, PrintOptions } from '@ionic-native/printer';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  qrdata = null;
  createdcode = null;
  scannedcode = null;
  option: PrintOptions = {
           name: 'MyDocument',
           printerId: '01',
           duplex: true,
           landscape: true,
           grayscale: true
         };
  printqr: null;
  encodeddata: {} ;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private printer: Printer) {

  }

  createcode(){
      this.createdcode = this.qrdata;
  }

  scancode(){
    this.barcodeScanner.scan().then(barcodedata =>{
      this.scannedcode =  barcodedata.text;
    })
  }
  print(createdcode){
       this.printer.pick().then(function() {
            alert("Picking printer done successfully !");
        }, function() {
            alert('Error : picking printer unavailable on your device ');
        });
       this.printer.isAvailable().then((onsuccess: any) => {
         let op = this.option
         this.printer.print(createdcode, op).then((value: any) => {
                console.log('value:', value);
            }, (error) => {
                console.log('error:', error);
            });
    }, (err) => {
        console.log('err:', err)
    });
}
}
