/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import React from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Carousel from 'react-bootstrap/lib/Carousel'
import CarouselItem from 'react-bootstrap/lib/CarouselItem'
import apfImg from '../../images/apflora.png'
import apfAnmeldenImg from '../../images/apflora_anmelden.png'
import apfTpopImg from '../../images/apflora_tpop.png'
import apfFeldkontrImg from '../../images/apflora_feldkontr.png'
import apfGoogleKartenImg from '../../images/apflora_google_karten.png'
import apfChkartenImg from '../../images/apflora_chkarten.png'
import apfUeberlagernImg from '../../images/apflora_ueberlagern.png'
import apfRaeumlichAuswertenImg from '../../images/apflora_raeumlich_auswerten.png'
import apfZuordnenKarteImg from '../../images/apflora_zuordnen_karte.png'
import apfExportierenImg from '../../images/apflora_exportieren.png'
import apfMenuImg from '../../images/apflora_menue.png'
import adbWeb01GruppeWaehlenImg from '../../images/artendb_web_01_gruppe_waehlen.png'
import adbWeb02ArtSuchenImg from '../../images/artendb_web_02_art_suchen.png'
import adbWeb03AnzeigenEigenschaftenImg from '../../images/artendb_web_03_anzeigen_eigenschaften.png'
import adbWeb04AnzeigenTaxonomieImg from '../../images/artendb_web_04_anzeigen_taxonomie.png'
import adbWeb05AnzeigenDatensammlungImg from '../../images/artendb_web_05_anzeigen_datensammlung.png'
import adbWeb06AnzeigenBezsammlungImg from '../../images/artendb_web_06_anzeigen_beziehungssammlung.png'
import adbWeb07ExportierenImg from '../../images/artendb_web_07_exportieren.png'
import adbWeb08ExportSchrittweiseImg from '../../images/artendb_web_08_export_schrittweise.png'
import adbWeb09ExportGruppeWaehlenImg from '../../images/artendb_web_09_export_gruppe_waehlen.png'
import adbWeb10ExportEigenschWaehlenImg from '../../images/artendb_web_10_export_eigenschaften_waehlen.png'
import adbWeb11ExportdateiHerunterlaImg from '../../images/artendb_web_11_exportdatei_herunterladen.png'
import adbWeb12ImportierenImg from '../../images/artendb_web_12_importieren.png'
import adbWeb13ImportierenSchrittwImg from '../../images/artendb_web_13_importieren_schrittweise.png'
import adb01GruppeWaehlenImg from '../../images/artendb_access_01_gruppe_waehlen.png'
import adb02ArtSuchenImg from '../../images/artendb_access_02_art_suchen.png'
import adb03TaxonomieAnzeigenImg from '../../images/artendb_access_03_taxonomie_anzeigen.png'
import adb04DatensammlungAnzeigenImg from '../../images/artendb_access_04_datensammlung_anzeigen.png'
import adb05BeziehungenAnzeigenImg from '../../images/artendb_access_05_beziehungen_anzeigen.png'
import adb06ExportierenImg from '../../images/artendb_access_06_exportieren.png'
import adb07ExportdatenWaehlenImg from '../../images/artendb_access_07_exportdaten_waehlen.png'
import evm01EinfacheListenAnzeigenImg from '../../images/evab_mobile_01_einfache_listen_anzeigen.png'
import evm02EinfachErfassenImg from '../../images/evab_mobile_02_einfach_erfassen.png'
import evm03HierarchischErfassenImg from '../../images/evab_mobile_03_hierarchisch_erfassen.png'
import evm04ArtgruppeWaehlenImg from '../../images/evab_mobile_04_artgruppe_waehlen.png'
import evm05ArtWaehlenImg from '../../images/evab_mobile_05_art_waehlen.png'
import evm06ArtFilternImg from '../../images/evab_mobile_06_art_filtern.png'
import evm07VerortenImg from '../../images/evab_mobile_07_verorten.png'
import evm08FelderWaehlenImg from '../../images/evab_mobile_08_felder_waehlen.png'
import evm09FelderAuflistenImg from '../../images/evab_mobile_09_felder_auflisten.png'
import evm10EigeneFelderVerwaltenImg from '../../images/evab_mobile_10_eigene_felder_verwalten.png'
import evm11ExportierenImg from '../../images/evab_mobile_11_exportieren.png'
import evm12DatenschutzBestimmenImg from '../../images/evab_mobile_12_datenschutz_bestimmen.png'
import evm13UndMehrImg from '../../images/evab_mobile_13_und_mehr.png'

export default React.createClass({
  displayName: 'ProjektePage',

  render () {
    return (
      <div id='projekte' className='page projekte'>
        <div className='row'>
          <div className='col-lg-2'>
            <Nav id='proj_sidebar_id' className='proj_sidebar affix'>
              <NavItem className='active'><a href='#apflora' className='nav-a'>ApFlora</a></NavItem>
              <NavItem><a href='#artendb_web' className='nav-a'>ArtenDb Web</a></NavItem>
              <NavItem><a href='#artendb_access' className='nav-a'>ArtenDb Access</a></NavItem>
              <NavItem><a href='#evab_mobile' className='nav-a'>evab mobile</a></NavItem>
            </Nav>
          </div>

          <div className='col-lg-10 marketing'>
            <p className='lead'>Eine Auswahl von Projekten:</p>
            <div id='projekte_scrollspy'>
              <section id='apflora' className='projekt sektion anchor'>
                <img src={apfImg} alt='' height='51'/>
                <h4>ApFlora <small>(Web-Anwendung)</small></h4>
                <h5>Aktionsplan Flora der Fachstelle Naturschutz des Kantons Zürich</h5>
                <p style={{marginBottom: 0}}>Grösste Stärken:</p>
                <ul>
                  <li>Komplexe Projektstruktur im Strukturbaum darstellen</li>
                  <li>Jahresberichte auf Knopfdruck produzieren</li>
                </ul>
                <Carousel>
                  <CarouselItem>
                    <img src={apfAnmeldenImg} alt='anmelden'/>
                    <div className='carousel-caption'>
                      <h2>anmelden</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={apfTpopImg} alt='Teilpopulationen beschreiben'/>
                    <div className='carousel-caption'>
                      <h2>Teilpopulationen beschreiben</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={apfFeldkontrImg} alt='Feldkontrollen beschreiben'/>
                    <div className='carousel-caption'>
                      <h2>Feldkontrollen beschreiben</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={apfGoogleKartenImg} alt='Teilpopulationen auf Google-Luftbildern darstellen'/>
                    <div className='carousel-caption'>
                      <h2>auf Google-Luftbildern darstellen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={apfChkartenImg} alt='...oder auf CH-Karten'/>
                    <div className='carousel-caption'>
                      <h2>auf CH-Karten darstellen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={apfUeberlagernImg} alt='Layer überlagern'/>
                    <div className='carousel-caption'>
                      <h2>Layer überlagern</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={apfRaeumlichAuswertenImg} alt='räumlich auswerten'/>
                    <div className='carousel-caption'>
                      <h2>räumlich auswerten</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={apfZuordnenKarteImg} alt='Beobachtungen zuordnen'/>
                    <div className='carousel-caption'>
                      <h2>Beobachtungen zuordnen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={apfExportierenImg} alt='exportieren'/>
                    <div className='carousel-caption'>
                      <h2>exportieren</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={apfMenuImg} alt='Kontext-Menü'/>
                    <div className='carousel-caption'>
                      <h2>...und mehr</h2>
                    </div>
                  </CarouselItem>
                </Carousel>
                <p>Mehr Informationen <a href='https://github.com/FNSKtZH/apflora' target='_blank'>auf GitHub</a></p>
              </section>
              <section id='artendb_web' className='projekt sektion anchor'>
                <div className='glyphicon glyphicon-info-sign' style={{fontSize: 40 + 'px'}}></div>
                <h4>ArtenDb <small>(Web-Anwendung)</small></h4>
                <h5>Naturschutzrelevante Informationen über Arten aus den Gruppen Fauna, Flora, Moose, Pilze und von Lebensräumen:</h5>
                <ul>
                  <li>anzeigen</li>
                  <li>importieren</li>
                  <li>kombinieren</li>
                  <li>exportieren</li>
                  <li>Informationen von Synonymen verbinden</li>
                  <li>über Artengruppen hinweg zusammenfassen</li>
                  <li>in eigener Anwendung einbinden</li>
                </ul>
                <p>Grösste Stärke ist der einfache Import und Export von Daten. Die Absicht dahinter: Alle benötigten Daten können, sofern nicht schon enthalten, rasch ergänzt und für Auswertungen kombiniert werden.</p>
                <Carousel>
                  <CarouselItem>
                    <img src={adbWeb01GruppeWaehlenImg} alt='Gruppe wählen'/>
                    <div className='carousel-caption'>
                      <h2>Gruppe wählen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={adbWeb02ArtSuchenImg} alt='Art suchen'/>
                    <div className='carousel-caption'>
                      <h2>Art suchen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={adbWeb03AnzeigenEigenschaftenImg} alt='Eigenschaften anzeigen'/>
                    <div className='carousel-caption'>
                      <h2>Eigenschaften anzeigen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={adbWeb04AnzeigenTaxonomieImg} alt='Taxonomie anzeigen'/>
                    <div className='carousel-caption'>
                      <h2>Taxonomie anzeigen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={adbWeb05AnzeigenDatensammlungImg} alt='Datensammlung anzeigen'/>
                    <div className='carousel-caption'>
                      <h2>Datensammlung anzeigen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={adbWeb06AnzeigenBezsammlungImg} alt='Beziehungssammlung anzeigen'/>
                    <div className='carousel-caption'>
                      <h2>Beziehungssammlung anzeigen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={adbWeb07ExportierenImg} alt='exportieren'/>
                    <div className='carousel-caption'>
                      <h2>exportieren</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={adbWeb08ExportSchrittweiseImg} alt='... Schritt für Schritt'/>
                    <div className='carousel-caption'>
                      <h2>... Schritt für Schritt</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={adbWeb09ExportGruppeWaehlenImg} alt='Gruppe wählen'/>
                    <div className='carousel-caption'>
                      <h2>Gruppe wählen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={adbWeb10ExportEigenschWaehlenImg} alt='Eigenschaften wählen'/>
                    <div className='carousel-caption'>
                      <h2>Eigenschaften wählen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={adbWeb11ExportdateiHerunterlaImg} alt='Datei herunterladen'/>
                    <div className='carousel-caption'>
                      <h2>Datei herunterladen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={adbWeb12ImportierenImg} alt='importieren'/>
                    <div className='carousel-caption'>
                      <h2>importieren</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={adbWeb13ImportierenSchrittwImg} alt='... Schritt für Schritt'/>
                    <div className='carousel-caption'>
                      <h2>... Schritt für Schritt</h2>
                    </div>
                  </CarouselItem>
                </Carousel>
                <p>Mehr Informationen <a href='https://github.com/FNSKtZH/artendb' target='_blank'>auf GitHub</a></p>
              </section>
              <section id='artendb_access' className='projekt sektion anchor'>
                <div className='glyphicon glyphicon-info-sign' style={{fontSize: 40 + 'px'}}></div>
                <h4>ArtenDb <small>(Access-Anwendung)</small></h4>
                <h5>Informationen über Arten und Lebensräume:</h5>
                <ul>
                  <li>nachschlagen</li>
                  <li>exportieren</li>
                  <li>in eigener Anwendung einbinden</li>
                </ul>
                <Carousel>
                  <CarouselItem>
                      <img src={adb01GruppeWaehlenImg} alt='Gruppe wählen'/>
                      <div className='carousel-caption'>
                        <h2>Gruppe wählen</h2>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <img src={adb02ArtSuchenImg} alt='Art suchen'/>
                      <div className='carousel-caption'>
                        <h2>Art suchen</h2>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <img src={adb03TaxonomieAnzeigenImg} alt='Taxonomie anzeigen'/>
                      <div className='carousel-caption'>
                        <h2>Taxonomie anzeigen</h2>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <img src={adb04DatensammlungAnzeigenImg} alt='Datensammlung anzeigen'/>
                      <div className='carousel-caption'>
                        <h2>Datensammlung anzeigen</h2>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <img src={adb05BeziehungenAnzeigenImg} alt='Beziehungen anzeigen'/>
                      <div className='carousel-caption'>
                        <h2>Beziehungen anzeigen</h2>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <img src={adb06ExportierenImg} alt='exportieren'/>
                      <div className='carousel-caption'>
                        <h2>exportieren</h2>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <img src={adb07ExportdatenWaehlenImg} alt='Felder zum exportieren wählen'/>
                      <div className='carousel-caption'>
                        <h2>Felder zum exportieren wählen</h2>
                      </div>
                    </CarouselItem>
                </Carousel>
                <p>Mehr Informationen <a href='http://www.aln.zh.ch/internet/baudirektion/aln/de/naturschutz/naturschutzdaten/tools/arten_db.html#a-content' target='_blank'>auf der Webseite der Fachstelle Naturschutz des Kantons Zürich</a></p>
              </section>
              <section id='evab_mobile' className='projekt sektion anchor'>
                <div className='glyphicon glyphicon-eye-open' style={{fontSize: 40 + 'px'}}></div>
                <h4>evab mobile <small>(Web-Anwendung)</small></h4>
                <p>Naturschutzprofis und ambitionierte Amateure erfassen Artbeobachtungen direkt im Feld auf Mobilgeräten.</p>
                <p>Grösste Stärke: NutzerInnen erstellen einfach und flexibel eigene, projektspezifische Datenstrukturen.</p>
                <Carousel>
                  <CarouselItem>
                    <img src={evm01EinfacheListenAnzeigenImg} alt='Einfache Liste anzeigen'/>
                    <div className='carousel-caption'>
                      <h2>einfache Liste anzeigen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={evm02EinfachErfassenImg} alt='Im einfachen Modus erfassen'/>
                    <div className='carousel-caption'>
                      <h2>im einfachen Modus erfassen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={evm03HierarchischErfassenImg} alt='Im hierarchischen Modus erfassen'/>
                    <div className='carousel-caption'>
                      <h2>im hierarchischen Modus erfassen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={evm04ArtgruppeWaehlenImg} alt='Artgruppe wählen'/>
                    <div className='carousel-caption'>
                      <h2>Artgruppe wählen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={evm05ArtWaehlenImg} alt='Art wählen'/>
                    <div className='carousel-caption'>
                      <h2>Art wählen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={evm06ArtFilternImg} alt='Art filtern'/>
                    <div className='carousel-caption'>
                      <h2>Art filtern</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={evm07VerortenImg} alt='auf Luftbild anzeigen / verorten'/>
                    <div className='carousel-caption'>
                      <h2>auf Luftbild anzeigen / verorten</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={evm08FelderWaehlenImg} alt='Felder wählen'/>
                    <div className='carousel-caption'>
                      <h2>Felder wählen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={evm09FelderAuflistenImg} alt='Felder auflisten'/>
                    <div className='carousel-caption'>
                      <h2>Felder auflisten</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={evm10EigeneFelderVerwaltenImg} alt='Eigene Felder erstellen'/>
                    <div className='carousel-caption'>
                      <h2>eigene Felder erstellen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={evm11ExportierenImg} alt='Beobachtungen exportieren'/>
                    <div className='carousel-caption'>
                      <h2>Beobachtungen exportieren</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={evm12DatenschutzBestimmenImg} alt='Datenschutz bestimmen'/>
                    <div className='carousel-caption'>
                      <h2>Datenschutz bestimmen</h2>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={evm13UndMehrImg} alt='... und mehr'/>
                    <div className='carousel-caption'>
                      <h2>... und mehr</h2>
                    </div>
                  </CarouselItem>
                </Carousel>
                <p>Mehr Informationen <a href='https://github.com/barbalex/EvabMobile' target='_blank'>auf GitHub</a></p>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
