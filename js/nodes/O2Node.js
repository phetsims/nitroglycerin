// Copyright 2013-2020, University of Colorado Boulder

// @ts-nocheck
/**
 * O2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode from './HorizontalMoleculeNode.js';

class O2Node extends HorizontalMoleculeNode {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {
    super( [ Element.O, Element.O ], options );
  }
}

nitroglycerin.register( 'O2Node', O2Node );
export default O2Node;