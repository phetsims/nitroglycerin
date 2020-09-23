// Copyright 2013-2020, University of Colorado Boulder

/**
 * C2H2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import merge from '../../../phet-core/js/merge.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode from './HorizontalMoleculeNode.js';

class C2H2Node extends HorizontalMoleculeNode {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {
    options = merge( {}, options );
    options.overlapPercent = 0.35;
    super( [ Element.H, Element.C, Element.C, Element.H ], options );
  }
}

nitroglycerin.register( 'C2H2Node', C2H2Node );
export default C2H2Node;