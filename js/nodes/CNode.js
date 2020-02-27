// Copyright 2013-2019, University of Colorado Boulder

/**
 * C Molecule
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
function CNode( options ) {
  HorizontalMoleculeNode.call( this, [ Element.C ], options );
}

nitroglycerin.register( 'CNode', CNode );

inherit( HorizontalMoleculeNode, CNode );
export default CNode;