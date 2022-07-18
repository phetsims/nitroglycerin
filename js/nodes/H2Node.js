// Copyright 2013-2020, University of Colorado Boulder

// @ts-nocheck
/**
 * H2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode from './HorizontalMoleculeNode.js';

class H2Node extends HorizontalMoleculeNode {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {
    super( [ Element.H, Element.H ], options );
  }
}

nitroglycerin.register( 'H2Node', H2Node );
export default H2Node;