var History = function () {

    'use strict';

    return function (dSource) {

        var dataSource = dSource,
            result = [],
            current = 0;

        function clone(obj) {
            if (obj === null || typeof (obj) !== 'object') {
                return obj;
            }
            var temp = new obj.constructor();
            for (var key in obj) {
                temp[key] = clone(obj[key]);
            }
            
            return temp;
        }

        var prepareResult = function () {

            for (var i = 0; i <= dataSource.length - 1; i++) {

                if (i == 0) {
                    result[0] = clone(dataSource[0]);
                    continue;
                }

                result[i] = clone(result[i - 1]);

                for (var prop in dataSource[i]) {
                    result[i][prop] =
                        fillValueChanged(result[i - 1][prop], dataSource[i][prop]);
                }
            }
        };

        function fillValueChanged(previous, current) {
            if (current && previous != current) {
                return clone(current);
            }

            return clone(previous);
        }

        return {
            all: function () {
                return dataSource;
            },
            index: function (index) {
                return dataSource[index];
            },
            length: function () {
                return dataSource.length;
            },
            view: function () {
                if (result.length == 0)
                    prepareResult();

                return result;
            },
            current: function () {
                if (result.length == 0)
                    prepareResult();

                return result[current];
            },
            hasNext: function () {
                return current < dataSource.length;
            },
            hasPrevious: function () {
                return current > 0;
            },
            next: function () {
                current += 1;
                return result[current];
            },
            previous: function () {
                current -= 1;
                return result[current];
            }
        }
    };
}();