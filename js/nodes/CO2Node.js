// Copyright 2013-2019, University of Colorado Boulder

/**
 * CO2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import inherit from '../../../phet-core/js/inherit.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode from './HorizontalMoleculeNode.js';

/**
 * @param {Object} [options]
 * @constructor
 */
function CO2Node( options ) {
  HorizontalMoleculeNode.call( this, [ Element.O, Element.C, Element.O ], options );
}

nitroglycerin.register( 'CO2Node', CO2Node );

inherit( HorizontalMoleculeNode, CO2Node );
export default CO2Node;