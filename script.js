import { dataset } from 'https://thepresidentm.github.io/pruebas-worldwind/dataset.js';

let planeta, arrayLongitud, capaObjetos, atributosObjetos,
objetos, posiciones, i;

window.onload = main();

function main(){
    init();
    displayDataset();
}

function init(){
    // Crear el objeto planeta
    planeta = new WorldWind.WorldWindow("canvasOne");

    // Añadir capas que no se que hacen pero parecen necesarias
    planeta.addLayer(new WorldWind.BMNGOneImageLayer());
    planeta.addLayer(new WorldWind.BMNGLandsatLayer());
    planeta.addLayer(new WorldWind.ViewControlsLayer(planeta));

    // Alejar al planeta pa que se vea chulo
    planeta.navigator.range = 300e5;

    // Añadir la capa donde veremos la basura
    capaObjetos = new WorldWind.RenderableLayer("objetos");
    planeta.addLayer(capaObjetos);
}


function displayDataset(){
    // Crear arrays y longitud del dataset
    arrayLongitud = dataset.length;
    objetos = new Array();
    posiciones = new Array();
    

    // Bucle que recorre el dataset
    for(i = 0; i < arrayLongitud; i++){
        // Crear objeto
        posiciones[i] = new WorldWind.Position(dataset[i]['lng'], dataset[i]['lat'], dataset[i]['height']*1000);
        objetos[i] = new WorldWind.Placemark(posiciones[i], false, atributosObjetos);
    
        // Mostrar objeto
        objetos[i].alwaysOnTop = true;
        capaObjetos.addRenderable(objetos[i]);
    }
}