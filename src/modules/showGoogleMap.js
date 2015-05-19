/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

export default function () {
    var options,
        map,
        marker;

    options = {
        zoom: 19,
        // Gebäude zentral stellen
        center: new google.maps.LatLng(47.283746, 8.563820),
        streetViewControl: false,
        rotateControl: false,
        overviewMapControl: false,
        panControl: false,
        zoomControl: false,
        mapTypeControl: true,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        mapTypeControlOptions: {
            // Gelände nicht anzeigen
            mapTypeIds: [
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.SATELLITE,
                google.maps.MapTypeId.HYBRID
            ]
        }
    };
    window.map = new google.maps.Map(document.getElementById('google_karten_div'), options);
    // google.maps.event.trigger(window.map, 'resize');
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(47.283873, 8.563963),
        map: window.map
    });
}