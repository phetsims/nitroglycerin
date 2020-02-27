// Copyright 2013-2019, University of Colorado Boulder

/**
 * CO Molecule
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
function CONode( options ) {
  HorizontalMoleculeNode.call( this, [ Element.C, Element.O ], options );
}

nitroglycerin.register( 'CONode', CONode );

inherit( HorizontalMoleculeNode, CONode );
export default CONode;