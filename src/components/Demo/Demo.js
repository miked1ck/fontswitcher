import React from 'react';
import {connect} from 'react-redux';


// Component
///////////////////////////

class Demo extends React.Component {
  render() {
    return (
      <div className="Demo" style={{ fontFamily: this.props.font }}>
        <p>Shores of the cosmic ocean concept of the number one the ash of stellar alchemy permanence of the stars something incredible is waiting to be known prime number take root and flourish not a sunrise but a galaxyrise something incredible is waiting to be known vastness is bearable only <b>through love permanence of the stars</b> shores of the cosmic ocean a mote of dust suspended in a sunbeam, courage of our questions! Muse about. Kindling the energy hidden in matter? Light years hydrogen atoms, at the edge of forever, Euclid colonies star stuff harvesting star light Orion's sword star stuff harvesting <i>star light colonies decipherment cosmic ocean explorations</i>. Euclid explorations of brilliant syntheses, rings of Uranus white dwarf corpus callosum network of wormholes hearts of the stars.</p>
        <p>Corpus callosum cosmic fugue intelligent beings. At the edge of forever. Vastness is bearable only through love Flatland galaxies quasar Vangelis Flatland Rig Veda billions upon billions gathered by gravity explorations, at the edge of forever not a sunrise but a galaxyrise! Consciousness, tendrils of gossamer clouds birth. Apollonius of Perga, Tunguska event as a patch of light, extraplanetary, at the edge of forever! Preserve and cherish that pale blue dot paroxysm of global death extraordinary claims require extraordinary evidence? Prime number!</p>
        <p>The only home we've ever known decipherment encyclopaedia galactica finite but unbounded, realm of the galaxies Cambrian explosion, are creatures of the cosmos prime number, hearts of the stars brain is the seed of intelligence. Hypatia finite but unbounded. A mote of dust suspended in a sunbeam at the edge of forever Sea of Tranquility, bits of moving fluff permanence of the stars, a billion trillion cosmic ocean something incredible is waiting to be known radio telescope a still more glorious dawn awaits. Paroxysm of global death a still more glorious dawn awaits. As a patch of light vastness is bearable only through love Flatland, radio telescope extraordinary claims require extraordinary evidence the carbon in our apple pies shores of the cosmic ocean the sky calls to us circumnavigated. Cosmic fugue courage of our questions!</p>
        <p>Decipherment. Muse about tesseract kindling the energy hidden in matter, Rig Veda are creatures of the cosmos, culture network of wormholes, a very small stage in a vast cosmic arena, a still more glorious dawn awaits. With pretty stories for which there's little good evidence, star stuff harvesting star light across the centuries dream of the mind's eye courage of our questions hundreds of thousands inconspicuous motes of rock and gas made in the interiors of collapsing stars extraplanetary, Jean-François Champollion a billion trillion. Extraordinary claims require extraordinary evidence rich in mystery, shores of the cosmic ocean how far away cosmos.</p>
        <p>Tunguska event a still more glorious dawn awaits at the edge of forever Drake Equation are creatures of the cosmos. Dream of the mind's eye vanquish the impossible take root and flourish white dwarf birth Cambrian explosion. Across the centuries rogue permanence of the stars brain is the seed of intelligence, Rig Veda? Across the centuries with pretty stories for which there's little good evidence tingling of the spine science, dispassionate extraterrestrial observer are creatures of the cosmos permanence of the stars white dwarf, billions upon billions concept of the number one the only home we've ever known Cambrian explosion? A very small stage in a vast cosmic arena from which we spring laws of physics Sea of Tranquility something incredible is waiting to be known courage of our questions tesseract and billions upon billions upon billions upon billions upon billions upon billions upon billions?</p>
      </div>
    );
  }
}


// Store
///////////////////////////

const demoState = (state) => {
  return { font: state.font };
};


// Export
///////////////////////////

export default connect(demoState)(Demo);
