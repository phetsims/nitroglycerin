// Copyright 2013-2015, University of Colorado Boulder

/**
 * CO Molecule
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
  function CONode( options ) {
    HorizontalMoleculeNode.call( this, [ Element.C, Element.O ], options );
  }

  return inherit( HorizontalMoleculeNode, CONode );
} );
