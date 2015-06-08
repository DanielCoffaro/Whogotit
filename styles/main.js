'use strict';

(function(){
    var borrowed = [];

    var addItem() = function(who,what,when){
        borrowed.push({
        who: who,
        what: what,
        when: when
        });
    };

    addItem('Dan,The Good Parts', new Date().now());

    console.log(borrowed);
})();