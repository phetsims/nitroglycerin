// Copyright 2013-2019, University of Colorado Boulder

/**
 * C2H2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const Element = require( 'NITROGLYCERIN/Element' );
  const HorizontalMoleculeNode = require( 'NITROGLYCERIN/nodes/HorizontalMoleculeNode' );
  const inherit = require( 'PHET_CORE/inherit' );
  const merge = require( 'PHET_CORE/merge' );
  const nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function C2H2Node( options ) {
    options = merge( {}, options );
    options.overlapPercent = 0.35;
    HorizontalMoleculeNode.call( this, [ Element.H, Element.C, Element.C, Element.H ], options );
  }

  nitroglycerin.register( 'C2H2Node', C2H2Node );

  return inherit( HorizontalMoleculeNode, C2H2Node );
} );
