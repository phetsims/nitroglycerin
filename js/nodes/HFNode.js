// Copyright 2013-2020, University of Colorado Boulder

// @ts-nocheck
/**
 * HF Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import merge from '../../../phet-core/js/merge.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode from './HorizontalMoleculeNode.js';

class HFNode extends HorizontalMoleculeNode {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {
    options = merge( {}, options );
    options.direction = 'rightToLeft';
    options.overlapPercent = 0.5;
    super( [ Element.F, Element.H ], options );
  }
}

nitroglycerin.register( 'HFNode', HFNode );
export default HFNode;