// Copyright 2013-2019, University of Colorado Boulder

/**
 * O2 Molecule
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
function O2Node( options ) {
  HorizontalMoleculeNode.call( this, [ Element.O, Element.O ], options );
}

nitroglycerin.register( 'O2Node', O2Node );

inherit( HorizontalMoleculeNode, O2Node );
export default O2Node;