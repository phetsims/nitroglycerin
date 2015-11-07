// Copyright 2013-2015, University of Colorado Boulder

/**
 * H2 Molecule
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
  function H2Node( options ) {
    HorizontalMoleculeNode.call( this, [ Element.H, Element.H ], options );
  }

  return inherit( HorizontalMoleculeNode, H2Node );
} );
