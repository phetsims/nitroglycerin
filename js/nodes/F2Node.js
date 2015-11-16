// Copyright 2013-2015, University of Colorado Boulder

/**
 * F2 Molecule
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
  function F2Node( options ) {
    HorizontalMoleculeNode.call( this, [ Element.F, Element.F ], options );
  }

  nitroglycerin.register( 'F2Node', F2Node );

  return inherit( HorizontalMoleculeNode, F2Node );
} );
