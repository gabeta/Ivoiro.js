var Ivoiro = /** @class */ (function () {
    /**
     * Constructeur de la classe prend en paramètre l'object
     *
     * @param {object} options
     */
    function Ivoiro(options) {
        this.options = options;
        this.initialyzeProperty();
    }
    /**
     * Initialisation du composant html servant à gérer les données
     *
     * Cette fonction sert principalement à vérifier si le composant html
     * est récupéré par son id ou sa className ensuite elle récupère
     * l'élement par le moyen spécifié lors de l'initialisation du composant
     */
    Ivoiro.prototype.initialyzeProperty = function () {
        var _this = this;
        Object.keys(this.options)
            .map(function (key) {
            key = key.toLowerCase();
            var option = _this.options[key];
            _this.targetName = key;
            if (option === 'id') {
                _this.target = document.getElementById(option);
            }
            else {
                _this.target = document.getElementsByClassName(option);
            }
        });
    };
    /**
     * Formattage des valeurs en CFA
     *
     * Cette fonction sert principalement à formatter un chiffre
     * AU format CFA
     *
     * @param {string} separator
     * @param {boolean} suffix
     * @param {string} symbole
     * @return {void}
     */
    Ivoiro.prototype.formatToCfa = function (separator, suffix, symbole) {
        if (suffix === void 0) { suffix = false; }
        if (symbole === void 0) { symbole = ''; }
        var cfaSuffix = '';
        if (suffix) {
            if (symbole != '') {
                cfaSuffix = symbole;
            }
            else {
                cfaSuffix = "FCFA";
            }
        }
        if (this.targetName == 'className' || this.targetName == 'class') {
            for (var i = 0; i < this.target.length; i++) {
                var intValue = parseInt(this.target[i].innerText);
                var text = intValue.toString();
                if (text.length > 3) {
                    var value = this.translatenumber(text, separator);
                    this.target[i].innerText = value + " " + cfaSuffix;
                }
            }
        }
        else {
            var intValue = parseInt(this.target.innerText);
            var text = intValue.toString();
            if (text.length > 3) {
                var value = this.translatenumber(text, separator);
                this.target.innerText = value + " " + cfaSuffix;
            }
        }
    };
    /**
     * Transforme le chiffre en fonction de sa longeur
     *
     * @param {string} number
     * @param {string} separator
     * @param {string}
     */
    Ivoiro.prototype.translatenumber = function (number, separator) {
        var numberArray = number.split("");
        var textLength = number.length;
        var splicer = textLength % 3;
        var text = '';
        switch (splicer) {
            case 0:
                text += this.translator(numberArray, separator, 0);
                break;
            case 1:
                text += numberArray[0] + separator;
                text += this.translator(numberArray, separator, 1);
                break;
            case 2:
                for (var index = 0; index < 2; index++) {
                    text += numberArray[index];
                }
                text += separator;
                text += this.translator(numberArray, separator, 2);
                break;
        }
        return text;
    };
    /**
     * Permet de fair la compilation
     *
     * @param {Array} numberArray
     * @param {string} separator
     * @param {number} splicer
     * @param {string}
     */
    Ivoiro.prototype.translator = function (numberArray, separator, splicer) {
        var text = '';
        for (var i = splicer; i < numberArray.length; i++) {
            var sp = "";
            if (i != splicer
                && (this.translatorSlicer(i, splicer) % 3) == 0
                && i < (numberArray.length - 1)) {
                sp = separator;
            }
            text += numberArray[i] + sp;
        }
        return text;
    };
    /**
     * Génère l'opérateur qui permet de savoir à quel moment mettre le separateur
     *
     * @param {number} i
     * @param {number} splicer
     * @return {number}
     */
    Ivoiro.prototype.translatorSlicer = function (i, splicer) {
        var operator = 1;
        switch (splicer) {
            case 0:
                operator = i + 1;
                break;
            case 1:
                operator = i;
                break;
            case 2:
                operator = i - 1;
                break;
        }
        return operator;
    };
    return Ivoiro;
}());
//# sourceMappingURL=ivoiro.js.map