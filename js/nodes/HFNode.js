// Copyright 2013-2020, University of Colorado Boulder

/**
 * HF Molecule
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
function HFNode( options ) {
  options = merge( {}, options );
  options.direction = 'rightToLeft';
  options.overlapPercent = 0.5;
  HorizontalMoleculeNode.call( this, [ Element.F, Element.H ], options );
}

nitroglycerin.register( 'HFNode', HFNode );

inherit( HorizontalMoleculeNode, HFNode );
export default HFNode;