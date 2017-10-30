/**
 * @author jmruiz6
 * created on 10.28.2017
 */
/* jshint -W101,-W106, -W117 */
// jscs:disable
(function () {
    'use strict';

    angular.module('goBack')
        .directive('goBack', goBack);

    /* @ngInject */
    function goBack() {
        return {
            restrict: 'E',
            templateUrl: 'goBack.html',
            scope: {
                goBackFunction: '&'
            }
        };
    }
})();
