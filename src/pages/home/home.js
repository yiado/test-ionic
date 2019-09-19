var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Printer } from '@ionic-native/printer';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, barcodeScanner, printer) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.printer = printer;
    }
    HomePage.prototype.scan = function () {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode "
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            console.log(barcodeData);
            _this.scandata = barcodeData;
        }, function (err) {
            console.log("Error occured : " + err);
        });
    };
    HomePage.prototype.encodetext = function () {
        var _this = this;
        this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodedata).then(function (encodeddata) {
            console.log(encodeddata);
            _this.encodeddata = encodeddata;
        }, function (err) {
            console.log("Error occured : " + err);
        });
    };
    HomePage.prototype.print = function () {
        this.printer.isAvailable().then(function () {
            var options = {
                name: 'MyDocument',
                printerId: '192.168.0.19',
                duplex: true,
                landscape: true,
                grayscale: true
            };
            this.printer.print("content, options").then(function () {
                alert("printing done successfully !");
            }, function () {
                alert("Error while printing !");
            });
        }, function () {
            alert('Error : printing is unavailable on your device ');
        });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, BarcodeScanner, Printer])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map