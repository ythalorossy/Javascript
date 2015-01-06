var $y = (function () {
    'use strict';

    var elem;

    return {
        el: function (id) {
            this.elem = document.getElementById(String("") + id);
            return this;
        },
        setClass: function (classToAdd) {
            
            var currentClassValue = this.elem.className;
      
            if (currentClassValue.indexOf(classToAdd) == -1) {
                if ((currentClassValue == null) || (currentClassValue === "")) {
                    this.elem.className = classToAdd;
                } else {
                    this.elem.className += " " + classToAdd;
                }
            }
            return this.elem;
        },
        val: function (value) {
            if (value) {
                this.elem.value = value;
            } else {
                return this.elem.value;
            }

            return this.elem;
        },
        text: function (text) {
            if (text) {
                if (isNaN(text)) {
                    this.elem.innerHTML = text;
                } else {
                    this.elem.innerHTML = Number(text).toString();
                }
            } else {
                return this.elem.innerHTML;
            }
            return this;
        },
        upper: function () {
            var innerText = this.elem.innerHTML;
            this.elem.innerHTML = innerText.toUpperCase();
            return this.elem;
        }
    };
}(window));