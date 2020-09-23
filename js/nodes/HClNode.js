// Copyright 2013-2020, University of Colorado Boulder

/**
 * HCl Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import merge from '../../../phet-core/js/merge.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode from './HorizontalMoleculeNode.js';

class HClNode extends HorizontalMoleculeNode {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {
    options = merge( {}, options );
    options.direction = 'rightToLeft';
    options.overlapPercent = 0.5;
    super( [ Element.Cl, Element.H ], options );
  }
}

nitroglycerin.register( 'HClNode', HClNode );
export default HClNode;