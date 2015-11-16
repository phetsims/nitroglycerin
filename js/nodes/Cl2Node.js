// Copyright 2013-2015, University of Colorado Boulder

/**
 * Cl2 Molecule
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
  function Cl2Node( options ) {
    HorizontalMoleculeNode.call( this, [ Element.Cl, Element.Cl ], options );
  }

  nitroglycerin.register( 'Cl2Node', Cl2Node );

  return inherit( HorizontalMoleculeNode, Cl2Node );
} );
