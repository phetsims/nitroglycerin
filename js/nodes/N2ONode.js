// Copyright 2013-2019, University of Colorado Boulder

/**
 * N2O Molecule
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
function N2ONode( options ) {
  HorizontalMoleculeNode.call( this, [ Element.N, Element.N, Element.O ], options );
}

nitroglycerin.register( 'N2ONode', N2ONode );

inherit( HorizontalMoleculeNode, N2ONode );
export default N2ONode;