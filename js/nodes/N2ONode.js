// Copyright 2013-2015, University of Colorado Boulder

/**
 * N2O Molecule
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
  function N2ONode( options ) {
    HorizontalMoleculeNode.call( this, [ Element.N, Element.N, Element.O ], options );
  }

  nitroglycerin.register( 'N2ONode', N2ONode );

  return inherit( HorizontalMoleculeNode, N2ONode );
} );
