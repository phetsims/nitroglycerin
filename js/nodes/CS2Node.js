// Copyright 2013-2020, University of Colorado Boulder

// @ts-nocheck
/**
 * CS2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode from './HorizontalMoleculeNode.js';

class CS2Node extends HorizontalMoleculeNode {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {
    super( [ Element.S, Element.C, Element.S ], options );
  }
}

nitroglycerin.register( 'CS2Node', CS2Node );
export default CS2Node;