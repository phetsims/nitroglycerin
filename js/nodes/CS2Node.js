// Copyright 2002-2015, University of Colorado Boulder

/**
 * CS2 Molecule
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
  function CS2Node( options ) {
    HorizontalMoleculeNode.call( this, [ Element.S, Element.C, Element.S ], options );
  }

  return inherit( HorizontalMoleculeNode, CS2Node );
} );
