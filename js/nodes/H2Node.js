// Copyright 2013-2020, University of Colorado Boulder

/**
 * H2 Molecule
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
function H2Node( options ) {
  HorizontalMoleculeNode.call( this, [ Element.H, Element.H ], options );
}

nitroglycerin.register( 'H2Node', H2Node );

inherit( HorizontalMoleculeNode, H2Node );
export default H2Node;