// Copyright 2013-2020, University of Colorado Boulder

// @ts-nocheck
/**
 * NO Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode from './HorizontalMoleculeNode.js';

class NONode extends HorizontalMoleculeNode {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {
    super( [ Element.N, Element.O ], options );
  }
}

nitroglycerin.register( 'NONode', NONode );
export default NONode;