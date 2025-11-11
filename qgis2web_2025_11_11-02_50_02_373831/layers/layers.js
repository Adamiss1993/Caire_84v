var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VAUCLUSE_1 = new ol.format.GeoJSON();
var features_VAUCLUSE_1 = format_VAUCLUSE_1.readFeatures(json_VAUCLUSE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VAUCLUSE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VAUCLUSE_1.addFeatures(features_VAUCLUSE_1);
var lyr_VAUCLUSE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VAUCLUSE_1, 
                style: style_VAUCLUSE_1,
                popuplayertitle: 'VAUCLUSE ',
                interactive: true,
                title: '<img src="styles/legend/VAUCLUSE_1.png" /> VAUCLUSE '
            });
var format_CAIRE_84_2 = new ol.format.GeoJSON();
var features_CAIRE_84_2 = format_CAIRE_84_2.readFeatures(json_CAIRE_84_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAIRE_84_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAIRE_84_2.addFeatures(features_CAIRE_84_2);
var lyr_CAIRE_84_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAIRE_84_2, 
                style: style_CAIRE_84_2,
                popuplayertitle: 'CAIRE_84',
                interactive: true,
    title: 'CAIRE_84<br />\
    <img src="styles/legend/CAIRE_84_2_0.png" /> Centres Hospitaliers<br />\
    <img src="styles/legend/CAIRE_84_2_1.png" /> Cliniques Privées<br />\
    <img src="styles/legend/CAIRE_84_2_2.png" /> EDES<br />\
    <img src="styles/legend/CAIRE_84_2_3.png" /> Institus de Soins<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_VAUCLUSE_1.setVisible(true);lyr_CAIRE_84_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_VAUCLUSE_1,lyr_CAIRE_84_2];
lyr_VAUCLUSE_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nom_com': 'nom_com', 'nom_com_m': 'nom_com_m', 'insee_com': 'insee_com', 'statut': 'statut', 'insee_can': 'insee_can', 'insee_arr': 'insee_arr', 'insee_dep': 'insee_dep', 'insee_reg': 'insee_reg', 'code_epci': 'code_epci', 'population': 'population', 'type': 'type', });
lyr_CAIRE_84_2.set('fieldAliases', {'fid': 'fid', 'NOM': 'NOM', 'ACTEURS': 'ACTEURS', 'LOCAL': 'LOCAL', });
lyr_VAUCLUSE_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nom_com': 'TextEdit', 'nom_com_m': 'TextEdit', 'insee_com': 'TextEdit', 'statut': 'TextEdit', 'insee_can': 'TextEdit', 'insee_arr': 'TextEdit', 'insee_dep': 'TextEdit', 'insee_reg': 'TextEdit', 'code_epci': 'TextEdit', 'population': 'TextEdit', 'type': 'TextEdit', });
lyr_CAIRE_84_2.set('fieldImages', {'fid': 'TextEdit', 'NOM': 'TextEdit', 'ACTEURS': 'TextEdit', 'LOCAL': 'TextEdit', });
lyr_VAUCLUSE_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nom_com': 'hidden field', 'nom_com_m': 'hidden field', 'insee_com': 'hidden field', 'statut': 'hidden field', 'insee_can': 'hidden field', 'insee_arr': 'hidden field', 'insee_dep': 'hidden field', 'insee_reg': 'hidden field', 'code_epci': 'hidden field', 'population': 'inline label - visible with data', 'type': 'hidden field', });
lyr_CAIRE_84_2.set('fieldLabels', {'fid': 'hidden field', 'NOM': 'inline label - visible with data', 'ACTEURS': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', });
lyr_CAIRE_84_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});