"use strict";
var Ivoiro = /** @class */ (function () {
    function Ivoiro(propertyGetter) {
        this.propertyGetter = propertyGetter;
        this.initialyzeProperty();
        console.log(this.property);
    }
    Ivoiro.prototype.initialyzeProperty = function () {
        var _this = this;
        Object.keys(this.propertyGetter)
            .map(function (propertyType) {
            var property = _this.propertyGetter[propertyType];
            if (propertyType === 'idName') {
                _this.property = document.getElementById(property);
            }
            else {
                _this.property = document.getElementsByClassName(property);
            }
        });
    };
    Ivoiro.prototype.formatToCfa = function (separator, prefix) {
        for (var i = 0; i < this.property.length; i++) {
            var intValue = parseInt(this.property[i].innerText);
            var text = intValue.toString();
            if (text.length > 3) {
                var value = this.translateNumber(text, separator);
                this.property[i].innerText = value;
            }
        }
    };
    Ivoiro.prototype.translateNumber = function (number, separator) {
        var numberArray = number.split("");
        var textLength = number.length;
        var splicer = textLength % 3;
        var text = '';
        switch (splicer) {
            case 0:
                for (var i = 0; i < number.length; i++) {
                    var sp = "";
                    if (i != 0 && ((i + 1) % 3) == 0 && i < (number.length - 1)) {
                        sp = separator;
                    }
                    text += numberArray[i] + sp;
                }
                break;
            case 1:
                var j = 0;
                text += numberArray[j] + separator;
                for (var i = (j + 1); i < number.length; i++) {
                    var sp = "";
                    if (i != 0 && ((i) % 3) == 0 && i < (number.length - 1)) {
                        console.log(i);
                        sp = separator;
                    }
                    text += numberArray[i] + sp;
                }
                break;
            case 2:
                var j = 0;
                for (var index = 0; index < 2; index++) {
                    text += numberArray[index];
                }
                text += separator;
                for (var i = (j + 2); i < number.length; i++) {
                    var sp_1 = "";
                    if (i != 0 && ((i - 1) % 3) == 0 && i < (number.length - 1)) {
                        console.log(i);
                        sp_1 = separator;
                    }
                    text += numberArray[i] + sp_1;
                }
                break;
            default:
        }
        return text;
    };
    return Ivoiro;
}());
