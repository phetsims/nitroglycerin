// Copyright 2013-2020, University of Colorado Boulder

// @ts-nocheck
/**
 * Cl2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode from './HorizontalMoleculeNode.js';

class Cl2Node extends HorizontalMoleculeNode {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {
    super( [ Element.Cl, Element.Cl ], options );
  }
}

nitroglycerin.register( 'Cl2Node', Cl2Node );
export default Cl2Node;