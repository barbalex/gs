/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import React           from 'react'
import ReactGoogleMaps from 'react-googlemaps'

const GoogleMapsAPI = window.google.maps
const Map           = ReactGoogleMaps.Map
const Marker        = ReactGoogleMaps.Marker
const OverlayView   = ReactGoogleMaps.OverlayView

export default React.createClass({
    displayName: 'GoogleMap',

    render () {
        return (
            <Map
                initialZoom={10}
                initialCenter={new GoogleMapsAPI.LatLng(47.283873, 8.563963)}>

                <Marker
                    position={new GoogleMapsAPI.LatLng(47.283873, 8.563963)} />

                <OverlayView
                    style={{backgroundColor: '#fff'}}
                    position={new GoogleMapsAPI.LatLng(47.283873, 8.563963)}>
                    <p>Some content</p>
                </OverlayView>
            </Map>
        )
    }
})