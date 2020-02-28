// Copyright 2013-2020, University of Colorado Boulder

/**
 * CS2 Molecule
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
function CS2Node( options ) {
  HorizontalMoleculeNode.call( this, [ Element.S, Element.C, Element.S ], options );
}

nitroglycerin.register( 'CS2Node', CS2Node );

inherit( HorizontalMoleculeNode, CS2Node );
export default CS2Node;