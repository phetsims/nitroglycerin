// Copyright 2013-2019, University of Colorado Boulder

/**
 * F2 Molecule
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
function F2Node( options ) {
  HorizontalMoleculeNode.call( this, [ Element.F, Element.F ], options );
}

nitroglycerin.register( 'F2Node', F2Node );

inherit( HorizontalMoleculeNode, F2Node );
export default F2Node;