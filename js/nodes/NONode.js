// Copyright 2013-2020, University of Colorado Boulder

/**
 * NO Molecule
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
function NONode( options ) {
  HorizontalMoleculeNode.call( this, [ Element.N, Element.O ], options );
}

nitroglycerin.register( 'NONode', NONode );

inherit( HorizontalMoleculeNode, NONode );
export default NONode;