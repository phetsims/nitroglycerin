// Copyright 2013-2015, University of Colorado Boulder

/**
 * NO Molecule
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
  function NONode( options ) {
    HorizontalMoleculeNode.call( this, [ Element.N, Element.O ], options );
  }

  nitroglycerin.register( 'NONode', NONode );

  return inherit( HorizontalMoleculeNode, NONode );
} );
