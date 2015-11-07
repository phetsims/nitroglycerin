// Copyright 2013-2015, University of Colorado Boulder

/**
 * N2 Molecule
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
  function N2Node( options ) {
    HorizontalMoleculeNode.call( this, [ Element.N, Element.N ], options );
  }

  return inherit( HorizontalMoleculeNode, N2Node );
} );
