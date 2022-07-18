// Copyright 2013-2020, University of Colorado Boulder

// @ts-nocheck
/**
 * CO2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode from './HorizontalMoleculeNode.js';

class CO2Node extends HorizontalMoleculeNode {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {
    super( [ Element.O, Element.C, Element.O ], options );
  }
}

nitroglycerin.register( 'CO2Node', CO2Node );
export default CO2Node;