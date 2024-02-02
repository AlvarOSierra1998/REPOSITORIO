



const almacenar = () => {
    let userInput = prompt("Que Casco quieres buscar?");

    let borgoñota = {
        nombre: "Borgoñota",
        Siglo: "XVI & XVII",
        origen: "Region de Borgoña(Francia)",
        img: "https://i.pinimg.com/736x/29/2c/1f/292c1f15f5dc9dafbd8e3aa10f31d569--los.jpg"
    };
    let almete = {
        nombre: "Almete",
        Siglo: "XV",
        origen: " Italia, Francia, Inglaterra y España",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/11/ClassicArmet_by_Emmanuel_Viollet-le-Duc.jpg"
    };
    let bacinete = {
        nombre: "Bacinete",
        Siglo: "XIII",
        origen: "Alemania",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Dictionnaire_raisonn%C3%A9_du_mobilier_fran%C3%A7ais_de_l%E2%80%99%C3%A9poque_carlovingienne_%C3%A0_la_Renaissance%2C_tome_5_-_183.png"
    };



    let resultado = document.getElementById('res');

    /*if (!localStorage.getItem('res', resultado)) {
        localStorage.setItem('res', resultado, JSON.stringify());
    }
    console.log(localStorage.getItem('res', resultado))*/

    let storedData = localStorage.getItem('storedData');
    let storedObjects = storedData ? JSON.parse(storedData) : [];


    //BORGOÑOTA
    if (userInput === "Borgoñota") {

        storedObjects.push(borgoñota);
        localStorage.setItem('dataBorgoñota', JSON.stringify(borgoñota));
        let StorageDataBorgo = localStorage.getItem('dataBorgoñota');
        let ObtainedItemBorgo = JSON.parse(StorageDataBorgo);
        console.log('ObtainedBorgo', ObtainedItemBorgo);
        //MOSTRAR LOS ELEMENTOS DE LA BORGOÑOTA EN UN DIV
        let MostrarElemento = document.createElement('div');
        MostrarElemento.innerHTML = `
        <h1>${ObtainedItemBorgo.nombre}</h1>
        <ul>
            <li>Siglo: ${ObtainedItemBorgo.Siglo}</li>
            <li>Origen: ${ObtainedItemBorgo.origen}</li>
        </ul>
        <img src="${ObtainedItemBorgo.img}" alt="Imagen de ${ObtainedItemBorgo.nombre}">

        `;
        resultado.appendChild(MostrarElemento);

        //////////////////////////////////////////////

    } else if (userInput === "Almete") {
        //ALMETE
        storedObjects.push(almete);
        localStorage.setItem('dataAlmete', JSON.stringify(almete));
        let StorageDataAlmete = localStorage.getItem('dataAlmete');
        let ObtainedItemAlmete = JSON.parse(StorageDataAlmete);
        console.log('ObtainedAlmete', ObtainedItemAlmete);
        //MOSTRAR LOS ELEMENTOS DE LA BORGOÑOTA 
        let MostrarElemento = document.createElement('div');
        MostrarElemento.innerHTML = `
        <h1>${ObtainedItemAlmete.nombre}</h1>
        <ul>
            <li>Siglo : ${ObtainedItemAlmete.Siglo}</li>
            <li>Origen:${ObtainedItemAlmete.origen}</li>
        </ul>
        <img src="${ObtainedItemAlmete.img}" alt="Imagen de ${ObtainedItemAlmete.nombre}">
        `;
        resultado.appendChild(MostrarElemento);
        ///////////////////////////////////////////
    } else if (userInput === "Bacinete") {
        //BACINET
        storedObjects.push(bacinete);

        localStorage.setItem('dataBacinete', JSON.stringify(bacinete));
        let StorageDataBacinete = localStorage.getItem('dataBacinete');
        let ObtainedItemBacinet = JSON.parse(StorageDataBacinete);
        console.log('ObtainedBaci', ObtainedItemBacinet);

        let MostrarElemento = document.createElement('div');
        MostrarElemento.innerHTML = `
        <h1>${ObtainedItemBacinet.nombre}</h1>
        <ul>
            <li>Siglo: ${ObtainedItemBacinet.Siglo}</li>
            <li>Origen: ${ObtainedItemBacinet.origen}</li>
        </ul>
        <img src="${ObtainedItemBacinet.img}" alt= "Imagen de ${ObtainedItemBacinet.nombre}">
        `;
        resultado.appendChild(MostrarElemento);
    } else {
        console.log("el item no esta en la lista");
        return;

    }

}


const eliminarOne = () => {


}
const limpiarLista = () => {


}