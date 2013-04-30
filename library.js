/**
 * A Sample Library for QUnit demo
 */

;(function(){
    var double = function(x) {
        return 2*x;
    };
    window.double = double;
}())



;(function(){
    var tellMeLater = function(cb) {
        setTimeout(function() {
            cb("It's later")
        }, 1000);
    };
    window.tellMeLater = tellMeLater;
}())

;(function(){
    var dpr = window.devicePixelRatio || 1;
    var dprify = function(x) {
        return x * dpr;
    };
    window.dprify = dprify;
}())

