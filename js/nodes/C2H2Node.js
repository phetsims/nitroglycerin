// Copyright 2013-2015, University of Colorado Boulder

/**
 * C2H2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var Element = require( 'NITROGLYCERIN/Element' );
  var HorizontalMoleculeNode = require( 'NITROGLYCERIN/nodes/HorizontalMoleculeNode' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function C2H2Node( options ) {
    options = _.extend( {}, options );
    options.overlapPercent = 0.35;
    HorizontalMoleculeNode.call( this, [ Element.H, Element.C, Element.C, Element.H ], options );
  }

  return inherit( HorizontalMoleculeNode, C2H2Node );
} );
