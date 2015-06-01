'use strict'

import React from 'react'
import ImageLoader from 'react-imageloader'
import prepareGoogleMap from '../modules/prepareGoogleMap'

export default React.createClass({
  displayName: 'KontaktPage',

  componentDidMount () {
    prepareGoogleMap()
  },

  render () {
    return (
      <div id='kontakt' className='page kontakt'>
        <div className='row marketing'>
          <div className='col-lg-3'>
            <ImageLoader src={'../../images/alex.jpg'} className='js-alexImage'>Sorry, das Bild wurde nicht geladen</ImageLoader>
            <address className='js-address'>
              <strong>Gabriel Software</strong><br/>
              Alexander Gabriel<br/>
              Bönirainstrasse 14<br/>
              8800 Thalwil<br/>
              079 372 51 64<br/>
              <a href='mailto:#'>alex@gabriel-software.ch</a>
            </address>
          </div>
          <div className='col-lg-9'>
            <div id='google_karte' style={{width: 100 + '%', height: 370 + 'px', position: 'relative'}}>
              <div id='google_karten_div' style={{width: 100 + '%', height: 100 + '%'}}/>
            </div>
            <div><small><a href='https://maps.google.ch/maps/ms?msa=0&amp;msid=217393511380700194313.0004ec28f717b23f56ca5&amp;ie=UTF8&amp;t=h&amp;ll=47.283873,8.563963&amp;spn=0,0&amp;source=embed' style={{color: '#0000FF', textAlign: 'left'}} target='_blank'>in Google Maps öffnen</a></small></div>
          </div>
        </div>
      </div>
    )
  }
})
