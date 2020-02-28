// Copyright 2013-2020, University of Colorado Boulder

/**
 * N2 Molecule
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
function N2Node( options ) {
  HorizontalMoleculeNode.call( this, [ Element.N, Element.N ], options );
}

nitroglycerin.register( 'N2Node', N2Node );

inherit( HorizontalMoleculeNode, N2Node );
export default N2Node;