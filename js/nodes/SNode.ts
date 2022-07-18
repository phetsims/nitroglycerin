// Copyright 2013-2021, University of Colorado Boulder

// @ts-nocheck
/**
 * S Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode from './HorizontalMoleculeNode.js';

class SNode extends HorizontalMoleculeNode {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {
    super( [ Element.S ], options );
  }
}

nitroglycerin.register( 'SNode', SNode );
export default SNode;