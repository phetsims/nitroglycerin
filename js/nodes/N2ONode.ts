// Copyright 2013-2020, University of Colorado Boulder

// @ts-nocheck
/**
 * N2O Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode from './HorizontalMoleculeNode.js';

class N2ONode extends HorizontalMoleculeNode {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {
    super( [ Element.N, Element.N, Element.O ], options );
  }
}

nitroglycerin.register( 'N2ONode', N2ONode );
export default N2ONode;