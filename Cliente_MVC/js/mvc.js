//creamos el modelo que contendrá los objetos y lo inicamos vacio

model = { items: [] }

//creamos la vista
view = {

    //funcion que limpia la lista
    clearList: function () {
        var range = document.createRange();
        range.selectNodeContents(document.getElementById("list"));
        range.deleteContents();
    },


    render: function () {

        this.clearList();
        //rellenamos la lista
        if (model.items.length != 0) {
            //accede al DOM 
            list = document.getElementById("list")
            //recorre los items que estan en la lista y se muestra x consola
            for (var i = model.items.length - 1; i >= 0; i--) {
                console.log(model.items[i])

                item = document.createElement('li');
                span = document.createElement('span');
                check = document.createElement('a');
                cross = document.createElement('a');
                iconCheck = document.createElement('i')
                iconCross = document.createElement('i');

                item.className = "item"
                span.className = "item-text"
                check.className = "item-complete"
                cross.className = "item-delete"

                span.textContent = model.items[i].text

                // tacha co una linea las que ya etsan realizadas
                if (model.items[i].completed) {
                    span.setAttribute("style", "text-decoration: line-through; color: #bbb")
                }


                // iconos
                iconCheck.setAttribute("class", "icon ion-md-checkmark")
                iconCheck.setAttribute("data-id", i)
                iconCross.setAttribute("class", "icon ion-md-trash")
                iconCross.setAttribute("data-id", i)

                // iconos para decir cual esta completo y cual no
                check.setAttribute("onclick", "controller.completeItem('" + i + "')")
                cross.setAttribute("onclick", "controller.deleteItem('" + i + "')")

                // añadimos todo al nodo del DOM
                check.appendChild(iconCheck)
                cross.appendChild(iconCross)
                item.appendChild(span)
                item.appendChild(check)
                item.appendChild(cross)
                list.appendChild(item);
            }
        }
    },
    //especificamos que se añadiran los elementos con la tecla enter y el enter de numPad
    addItem: function (e) {
        if ((e.code == "Enter") || (e.code == "NumpadEnter")) {
            if (((document.getElementById("add-item").value != "") && (document.getElementById("add-item").value != " "))) {
                item = document.getElementById("add-item").value;
                controller.addItem(item);
                return false;
            }
        }
    },
}
//controlador de la API
controller = {
    init: function () {
        view.render()
    },

    //funcion para añadir elementos
    addItem: function (item) {
        list_item = { text: item, completed: false }
        model.items.push(list_item)
        console.log(list_item)
        document.getElementById("add-item").value = ""
        view.render()
    },
    //funcion que especifica cual esta completada
    completeItem: function (item_index) {
        model.items[item_index].completed = !model.items[item_index].completed
        console.log(model.items[item_index].completed)
        view.render()
    },
    //funcion q borra los elementos medinate indice
    deleteItem: function (item_index) {
        model.items.splice(item_index, 1)
        view.render()
    }
}

//exportacion del controlador.
controller.init()




