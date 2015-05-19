/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import React from 'react'

export default React.createClass({
    displayName: 'ProjektePage',

    render () {
        return (
            <div id='projekte' className='page projekte'>
                <div className='row'>
                    <div className='col-lg-2'>
                    <nav id='proj_sidebar_id' className='proj_sidebar affix'>
                            <ul id='proj_sidenav' className='nav proj_sidenav' role='complementary'>
                                <li className='active'><a href='#apflora'>ApFlora</a></li>
                                <li><a href='#artendb_web'>ArtenDb Web</a></li>
                                <li><a href='#artendb_access'>ArtenDb Access</a></li>
                                <li><a href='#evab_mobile'>evab mobile</a></li>
                            </ul>
                        </nav></div>
                    
                    <div className='col-lg-10 marketing'>
                        <p className='lead'>Eine Auswahl von Projekten:</p>
                        <div id='projekte_scrollspy'>
                            <section id='apflora' className='projekt sektion anchor'>
                                <img src='/images/apflora.png' alt='' height='51'/>
                                <h4>ApFlora <small>(Web-Anwendung)</small></h4>
                                <h5>Aktionsplan Flora der Fachstelle Naturschutz des Kantons Zürich</h5>
                                <p style={{marginBottom: 0}}>Grösste Stärken:</p>
                                <ul>
                                    <li>Komplexe Projektstruktur im Strukturbaum darstellen</li>
                                    <li>Jahresberichte auf Knopfdruck produzieren</li>
                                </ul>
                                <div id='apflora_carousel' className='carousel slide' data-ride='carousel' data-pause='hover' data-intervall='8000'>
                                    <ol className='carousel-indicators'>
                                        <li data-target='#apflora_carousel' data-slide-to='0' className='active'></li>
                                        <li data-target='#apflora_carousel' data-slide-to='1'></li>
                                        <li data-target='#apflora_carousel' data-slide-to='2'></li>
                                        <li data-target='#apflora_carousel' data-slide-to='3'></li>
                                        <li data-target='#apflora_carousel' data-slide-to='4'></li>
                                        <li data-target='#apflora_carousel' data-slide-to='5'></li>
                                        <li data-target='#apflora_carousel' data-slide-to='6'></li>
                                        <li data-target='#apflora_carousel' data-slide-to='7'></li>
                                        <li data-target='#apflora_carousel' data-slide-to='8'></li>
                                        <li data-target='#apflora_carousel' data-slide-to='9'></li>
                                    </ol>

                                    <div className='carousel-inner'>
                                        <div className='item active'>
                                            <img src='images/apflora_anmelden.png' alt='anmelden'/>
                                            <div className='carousel-caption'>
                                                <h2>anmelden</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/apflora_tpop.png' alt='Teilpopulationen beschreiben'/>
                                            <div className='carousel-caption'>
                                                <h2>Teilpopulationen beschreiben</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/apflora_feldkontr.png' alt='Feldkontrollen beschreiben'/>
                                            <div className='carousel-caption'>
                                                <h2>Feldkontrollen beschreiben</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/apflora_google_karten.png' alt='Teilpopulationen auf Google-Luftbildern darstellen'/>
                                            <div className='carousel-caption'>
                                                <h2>auf Google-Luftbildern darstellen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/apflora_chkarten.png' alt='...oder auf CH-Karten'/>
                                            <div className='carousel-caption'>
                                                <h2>auf CH-Karten darstellen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/apflora_ueberlagern.png' alt='Layer überlagern'/>
                                            <div className='carousel-caption'>
                                                <h2>Layer überlagern</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/apflora_raeumlich_auswerten.png' alt='räumlich auswerten'/>
                                            <div className='carousel-caption'>
                                                <h2>räumlich auswerten</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/apflora_zuordnen_karte.png' alt='Beobachtungen zuordnen'/>
                                            <div className='carousel-caption'>
                                                <h2>Beobachtungen zuordnen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/apflora_exportieren.png' alt='exportieren'/>
                                            <div className='carousel-caption'>
                                                <h2>exportieren</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/apflora_menue.png' alt='Kontext-Menü'/>
                                            <div className='carousel-caption'>
                                                <h2>...und mehr</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <a className='left carousel-control' href='#apflora_carousel' data-slide='prev'>
                                        <span className='glyphicon glyphicon-chevron-left'></span>
                                    </a>
                                    <a className='right carousel-control' href='#apflora_carousel' data-slide='next'>
                                        <span className='glyphicon glyphicon-chevron-right'></span>
                                    </a>
                                </div>
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
                                <div id='artendb_web_carousel' className='carousel slide' data-ride='carousel' data-pause='hover' data-intervall='8000'>
                                    <ol className='carousel-indicators'>
                                        <li data-target='#artendb_web_carousel' data-slide-to='0' className='active'></li>
                                        <li data-target='#artendb_web_carousel' data-slide-to='1'></li>
                                        <li data-target='#artendb_web_carousel' data-slide-to='2'></li>
                                        <li data-target='#artendb_web_carousel' data-slide-to='3'></li>
                                        <li data-target='#artendb_web_carousel' data-slide-to='4'></li>
                                        <li data-target='#artendb_web_carousel' data-slide-to='5'></li>
                                        <li data-target='#artendb_web_carousel' data-slide-to='6'></li>
                                        <li data-target='#artendb_web_carousel' data-slide-to='7'></li>
                                        <li data-target='#artendb_web_carousel' data-slide-to='8'></li>
                                        <li data-target='#artendb_web_carousel' data-slide-to='9'></li>
                                        <li data-target='#artendb_web_carousel' data-slide-to='10'></li>
                                        <li data-target='#artendb_web_carousel' data-slide-to='11'></li>
                                        <li data-target='#artendb_web_carousel' data-slide-to='12'></li>
                                    </ol>
                                    <div className='carousel-inner'>
                                        <div className='item active'>
                                            <img src='images/artendb_web_01_gruppe_waehlen.png' alt='Gruppe wählen'/>
                                            <div className='carousel-caption'>
                                                <h2>Gruppe wählen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_web_02_art_suchen.png' alt='Art suchen'/>
                                            <div className='carousel-caption'>
                                                <h2>Art suchen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_web_03_anzeigen_eigenschaften.png' alt='Eigenschaften anzeigen'/>
                                            <div className='carousel-caption'>
                                                <h2>Eigenschaften anzeigen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_web_04_anzeigen_taxonomie.png' alt='Taxonomie anzeigen'/>
                                            <div className='carousel-caption'>
                                                <h2>Taxonomie anzeigen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_web_05_anzeigen_datensammlung.png' alt='Datensammlung anzeigen'/>
                                            <div className='carousel-caption'>
                                                <h2>Datensammlung anzeigen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_web_06_anzeigen_beziehungssammlung.png' alt='Beziehungssammlung anzeigen'/>
                                            <div className='carousel-caption'>
                                                <h2>Beziehungssammlung anzeigen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_web_07_exportieren.png' alt='exportieren'/>
                                            <div className='carousel-caption'>
                                                <h2>exportieren</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_web_08_export_schrittweise.png' alt='... Schritt für Schritt'/>
                                            <div className='carousel-caption'>
                                                <h2>... Schritt für Schritt</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_web_09_export_gruppe_waehlen.png' alt='Gruppe wählen'/>
                                            <div className='carousel-caption'>
                                                <h2>Gruppe wählen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_web_10_export_eigenschaften_waehlen.png' alt='Eigenschaften wählen'/>
                                            <div className='carousel-caption'>
                                                <h2>Eigenschaften wählen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_web_11_exportdatei_herunterladen.png' alt='Datei herunterladen'/>
                                            <div className='carousel-caption'>
                                                <h2>Datei herunterladen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_web_12_importieren.png' alt='importieren'/>
                                            <div className='carousel-caption'>
                                                <h2>importieren</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_web_13_importieren_schrittweise.png' alt='... Schritt für Schritt'/>
                                            <div className='carousel-caption'>
                                                <h2>... Schritt für Schritt</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <a className='left carousel-control' href='#artendb_web_carousel' data-slide='prev'>
                                        <span className='glyphicon glyphicon-chevron-left'></span>
                                    </a>
                                    <a className='right carousel-control' href='#artendb_web_carousel' data-slide='next'>
                                        <span className='glyphicon glyphicon-chevron-right'></span>
                                    </a>
                                </div>
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
                                <div id='artendb_access_carousel' className='carousel slide' data-ride='carousel' data-pause='hover' data-intervall='8000'>
                                    <ol className='carousel-indicators'>
                                        <li data-target='#artendb_access_carousel' data-slide-to='0' className='active'></li>
                                        <li data-target='#artendb_access_carousel' data-slide-to='1'></li>
                                        <li data-target='#artendb_access_carousel' data-slide-to='2'></li>
                                        <li data-target='#artendb_access_carousel' data-slide-to='3'></li>
                                        <li data-target='#artendb_access_carousel' data-slide-to='4'></li>
                                        <li data-target='#artendb_access_carousel' data-slide-to='5'></li>
                                        <li data-target='#artendb_access_carousel' data-slide-to='6'></li>
                                    </ol>
                                    <div className='carousel-inner'>
                                        <div className='item active'>
                                            <img src='images/artendb_access_01_gruppe_waehlen.png' alt='Gruppe wählen'/>
                                            <div className='carousel-caption'>
                                                <h2>Gruppe wählen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_access_02_art_suchen.png' alt='Art suchen'/>
                                            <div className='carousel-caption'>
                                                <h2>Art suchen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_access_03_taxonomie_anzeigen.png' alt='Taxonomie anzeigen'/>
                                            <div className='carousel-caption'>
                                                <h2>Taxonomie anzeigen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_access_04_datensammlung_anzeigen.png' alt='Datensammlung anzeigen'/>
                                            <div className='carousel-caption'>
                                                <h2>Datensammlung anzeigen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_access_05_beziehungen_anzeigen.png' alt='Beziehungen anzeigen'/>
                                            <div className='carousel-caption'>
                                                <h2>Beziehungen anzeigen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_access_06_exportieren.png' alt='exportieren'/>
                                            <div className='carousel-caption'>
                                                <h2>exportieren</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/artendb_access_07_exportdaten_waehlen.png' alt='Felder zum exportieren wählen'/>
                                            <div className='carousel-caption'>
                                                <h2>Felder zum exportieren wählen</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <a className='left carousel-control' href='#artendb_access_carousel' data-slide='prev'>
                                        <span className='glyphicon glyphicon-chevron-left'></span>
                                    </a>
                                    <a className='right carousel-control' href='#artendb_access_carousel' data-slide='next'>
                                        <span className='glyphicon glyphicon-chevron-right'></span>
                                    </a>
                                </div>
                                <p>Mehr Informationen <a href='http://www.aln.zh.ch/internet/baudirektion/aln/de/naturschutz/naturschutzdaten/tools/arten_db.html#a-content' target='_blank'>auf der Webseite der Fachstelle Naturschutz des Kantons Zürich</a></p>
                            </section>
                            <section id='evab_mobile' className='projekt sektion anchor'>
                                <div className='glyphicon glyphicon-eye-open' style={{fontSize: 40 + 'px'}}></div>
                                <h4>evab mobile <small>(Web-Anwendung)</small></h4>
                                <p>Naturschutzprofis und ambitionierte Amateure erfassen Artbeobachtungen direkt im Feld auf Mobilgeräten.</p>
                                <p>Grösste Stärke: NutzerInnen erstellen einfach und flexibel eigene, projektspezifische Datenstrukturen.</p>
                                <div id='evab_mobile_carousel' className='carousel slide' data-ride='carousel' data-pause='hover' data-intervall='8000'>
                                    <ol className='carousel-indicators'>
                                        <li data-target='#evab_mobile_carousel' data-slide-to='0' className='active'></li>
                                        <li data-target='#evab_mobile_carousel' data-slide-to='1'></li>
                                        <li data-target='#evab_mobile_carousel' data-slide-to='2'></li>
                                        <li data-target='#evab_mobile_carousel' data-slide-to='3'></li>
                                        <li data-target='#evab_mobile_carousel' data-slide-to='4'></li>
                                        <li data-target='#evab_mobile_carousel' data-slide-to='5'></li>
                                        <li data-target='#evab_mobile_carousel' data-slide-to='6'></li>
                                        <li data-target='#evab_mobile_carousel' data-slide-to='7'></li>
                                        <li data-target='#evab_mobile_carousel' data-slide-to='8'></li>
                                        <li data-target='#evab_mobile_carousel' data-slide-to='9'></li>
                                        <li data-target='#evab_mobile_carousel' data-slide-to='10'></li>
                                        <li data-target='#evab_mobile_carousel' data-slide-to='11'></li>
                                        <li data-target='#evab_mobile_carousel' data-slide-to='12'></li>
                                    </ol>
                                    <div className='carousel-inner'>
                                        <div className='item active'>
                                            <img src='images/evab_mobile_01_einfache_listen_anzeigen.png' alt='Einfache Liste anzeigen'/>
                                            <div className='carousel-caption'>
                                                <h2>einfache Liste anzeigen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/evab_mobile_02_einfach_erfassen.png' alt='Im einfachen Modus erfassen'/>
                                            <div className='carousel-caption'>
                                                <h2>im einfachen Modus erfassen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/evab_mobile_03_hierarchisch_erfassen.png' alt='Im hierarchischen Modus erfassen'/>
                                            <div className='carousel-caption'>
                                                <h2>im hierarchischen Modus erfassen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/evab_mobile_04_artgruppe_waehlen.png' alt='Artgruppe wählen'/>
                                            <div className='carousel-caption'>
                                                <h2>Artgruppe wählen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/evab_mobile_05_art_waehlen.png' alt='Art wählen'/>
                                            <div className='carousel-caption'>
                                                <h2>Art wählen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/evab_mobile_06_art_filtern.png' alt='Art filtern'/>
                                            <div className='carousel-caption'>
                                                <h2>Art filtern</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/evab_mobile_07_verorten.png' alt='auf Luftbild anzeigen / verorten'/>
                                            <div className='carousel-caption'>
                                                <h2>auf Luftbild anzeigen / verorten</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/evab_mobile_08_felder_waehlen.png' alt='Felder wählen'/>
                                            <div className='carousel-caption'>
                                                <h2>Felder wählen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/evab_mobile_09_felder_auflisten.png' alt='Felder auflisten'/>
                                            <div className='carousel-caption'>
                                                <h2>Felder auflisten</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/evab_mobile_10_eigene_felder_verwalten.png' alt='Eigene Felder erstellen'/>
                                            <div className='carousel-caption'>
                                                <h2>eigene Felder erstellen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/evab_mobile_11_exportieren.png' alt='Beobachtungen exportieren'/>
                                            <div className='carousel-caption'>
                                                <h2>Beobachtungen exportieren</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/evab_mobile_12_datenschutz_bestimmen.png' alt='Datenschutz bestimmen'/>
                                            <div className='carousel-caption'>
                                                <h2>Datenschutz bestimmen</h2>
                                            </div>
                                        </div>
                                        <div className='item'>
                                            <img src='images/evab_mobile_13_und_mehr.png' alt='... und mehr'/>
                                            <div className='carousel-caption'>
                                                <h2>... und mehr</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <a className='left carousel-control' href='#evab_mobile_carousel' data-slide='prev'>
                                        <span className='glyphicon glyphicon-chevron-left'></span>
                                    </a>
                                    <a className='right carousel-control' href='#evab_mobile_carousel' data-slide='next'>
                                        <span className='glyphicon glyphicon-chevron-right'></span>
                                    </a>
                                </div>
                                <p>Mehr Informationen <a href='https://github.com/barbalex/EvabMobile' target='_blank'>auf GitHub</a></p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})