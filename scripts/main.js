'use strict';

(function(){
    var borrowed = [];

    var addItem = function(who,what,when){
        borrowed.push({
        who: who,
        what: what,
        when: when
        });
    };

    var list = document.getElementById('stuff')

    var render = function(){
        borrowed.forEach(function(item){
            var listItem = document.createElement('li')
            var text = document.createTextNode(item.who + ' has my ' + item.what + '(' + item.when + ')');

            listItem.appendChild(text);
            list.appendChild(listItem);
        });
    };

    addItem('Dan','The Good Parts', Date.now());

    console.log(borrowed);

    render();
}());