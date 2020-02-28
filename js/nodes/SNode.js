// Copyright 2013-2020, University of Colorado Boulder

/**
 * S Molecule
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
function SNode( options ) {
  HorizontalMoleculeNode.call( this, [ Element.S ], options );
}

nitroglycerin.register( 'SNode', SNode );

inherit( HorizontalMoleculeNode, SNode );
export default SNode;