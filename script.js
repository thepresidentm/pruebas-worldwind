var wwd = new WorldWind.WorldWindow("canvasOne");
wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLandsatLayer());
/* wwd.addLayer(new WorldWind.CompassLayer());*/
/* wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd)); */
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
wwd.navigator.range = 300e5;
/*var posicion = new.;*/


/* wwd.KmlFile(new KmlScale(100000000)); */