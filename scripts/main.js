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
            var when = new Date(item.when)
            var formatted = when.toLocalFormat()
            var listItem = document.createElement('li')
            var text = document.createTextNode(item.who + ' has my ' + item.what + '(' + formatted + ')');

            listItem.appendChild(text);
            list.appendChild(listItem);
        });
    };

    addItem('Dan','The Good Parts', Date.now());

    console.log(borrowed);

    render();
}());