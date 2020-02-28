// Copyright 2013-2020, University of Colorado Boulder

/**
 * Cl2 Molecule
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
function Cl2Node( options ) {
  HorizontalMoleculeNode.call( this, [ Element.Cl, Element.Cl ], options );
}

nitroglycerin.register( 'Cl2Node', Cl2Node );

inherit( HorizontalMoleculeNode, Cl2Node );
export default Cl2Node;