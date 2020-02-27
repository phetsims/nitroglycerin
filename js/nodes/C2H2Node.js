// Copyright 2013-2019, University of Colorado Boulder

/**
 * C2H2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import inherit from '../../../phet-core/js/inherit.js';
import merge from '../../../phet-core/js/merge.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode from './HorizontalMoleculeNode.js';

/**
 * @param {Object} [options]
 * @constructor
 */
function C2H2Node( options ) {
  options = merge( {}, options );
  options.overlapPercent = 0.35;
  HorizontalMoleculeNode.call( this, [ Element.H, Element.C, Element.C, Element.H ], options );
}

nitroglycerin.register( 'C2H2Node', C2H2Node );

inherit( HorizontalMoleculeNode, C2H2Node );
export default C2H2Node;