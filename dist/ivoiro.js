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
        return '';
    };
    return Ivoiro;
}());
