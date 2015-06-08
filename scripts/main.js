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

    var list = document.getElementById('stuff');
    var form = document.getElementById('input'),
    whoInput = document.getElementById('whoInput'),
    whatInput = document.getElementById('whatInput'),
    whenInput = document.getElementById('whenInput');

    var render = function(){

        var fragment = document.createDocumentFragment();

        borrowed.forEach(function(item){
            var when = new Date(item.when);
            var formatted = when.toLocaleString();
            var listItem = document.createElement('li')
            var text = document.createTextNode(item.who + ' has my ' + item.what + '  (' + formatted + ')');

            listItem.appendChild(text);
            fragment.appendChild(listItem);
        });
        list.innerHTML = '';
        list.appendChild(fragment);
    };

    form.addEventListener('submit',function(e){
        var who = whoInput.value,
        what = whatInput.value,
        when = new Date(parseInt(whenInput,10));

        addItem(who,what,when.getTime)
        e.preventDefault();
        render();
    });

    addItem('Dan','The Good Parts', Date.now());
    addItem('Ryan','Knowledge', Date.now());
    addItem('Troy','Computer', Date.now());
    addItem('Zach','Help', Date.now());

    console.log(borrowed);

    render();
}());