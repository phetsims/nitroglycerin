// Copyright 2013-2020, University of Colorado Boulder

// @ts-nocheck
/**
 * N2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode from './HorizontalMoleculeNode.js';

class N2Node extends HorizontalMoleculeNode {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {
    super( [ Element.N, Element.N ], options );
  }
}

nitroglycerin.register( 'N2Node', N2Node );
export default N2Node;