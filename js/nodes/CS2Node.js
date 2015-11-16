// Copyright 2013-2015, University of Colorado Boulder

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
  var nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function CS2Node( options ) {
    HorizontalMoleculeNode.call( this, [ Element.S, Element.C, Element.S ], options );
  }

  nitroglycerin.register( 'CS2Node', CS2Node );

  return inherit( HorizontalMoleculeNode, CS2Node );
} );
