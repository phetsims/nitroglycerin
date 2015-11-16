// Copyright 2013-2015, University of Colorado Boulder

/**
 * CO2 Molecule
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
  function CO2Node( options ) {
    HorizontalMoleculeNode.call( this, [ Element.O, Element.C, Element.O ], options );
  }

  nitroglycerin.register( 'CO2Node', CO2Node );

  return inherit( HorizontalMoleculeNode, CO2Node );
} );
