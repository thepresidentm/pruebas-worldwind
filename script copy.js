import { dataset } from "./dataset.js";

var planeta = new WorldWind.WorldWindow("canvasOne");
planeta.addLayer(new WorldWind.BMNGOneImageLayer());
planeta.addLayer(new WorldWind.BMNGLandsatLayer());
planeta.addLayer(new WorldWind.ViewControlsLayer(planeta));
planeta.navigator.range = 300e5;

var arrayLongitud = dataset.length;
// Crear capa
var capaObjetos = new WorldWind.RenderableLayer("objetos");
planeta.addLayer(capaObjetos);
// Añadir imagen
var atributosObjetos = new WorldWind.PlacemarkAttributes(null);
atributosObjetos.imageSource = WorldWind.configuration.baseUrl + "images/pushpins/white-dot.png";
// atributosObjetos.imageSource = "white-dot.png";
// Crear array
var objetos = new Array();
var posiciones = new Array();

for(var i = 0; i < arrayLongitud; i++){
    // Crear objeto
    posiciones[i] = new WorldWind.Position(dataset[i]['lng'], dataset[i]['lat'], dataset[i]['height']*1000);
    objetos[i] = new WorldWind.Placemark(posiciones[i], false, atributosObjetos);

    // Mostrar objeto
    objetos[i].alwaysOnTop = true;
    capaObjetos.addRenderable(objetos[i]);
}
/* var placemarkLayer = new WorldWind.RenderableLayer("Placemark");
wwd.addLayer(placemarkLayer);
var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

placemarkAttributes.imageOffset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION, 0.3,
    WorldWind.OFFSET_FRACTION, 0.0);

placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;
placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.5,
            WorldWind.OFFSET_FRACTION, 1.0);

placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/pushpins/plain-red.png";


var position = new WorldWind.Position(55.0, -106.0, 100.0);
var placemark = new WorldWind.Placemark(position, false, placemarkAttributes);
placemark.label = "Placemark\n" +
    "Lat " + placemark.position.latitude.toPrecision(4).toString() + "\n" +
    "Lon " + placemark.position.longitude.toPrecision(5).toString();
placemark.alwaysOnTop = true;

placemarkLayer.addRenderable(placemark);
//for(var i = 0; i < 7; i++){
//}

/* wwd.KmlFile(new KmlScale(100000000)); */