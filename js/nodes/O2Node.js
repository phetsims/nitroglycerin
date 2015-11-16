// Copyright 2013-2015, University of Colorado Boulder

/**
 * O2 Molecule
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
  function O2Node( options ) {
    HorizontalMoleculeNode.call( this, [ Element.O, Element.O ], options );
  }

  nitroglycerin.register( 'O2Node', O2Node );

  return inherit( HorizontalMoleculeNode, O2Node );
} );
