// Copyright 2002-2015, University of Colorado

/**
 * C Molecule
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
  function CNode( options ) {
    HorizontalMoleculeNode.call( this, [ Element.C ], options );
  }

  return inherit( HorizontalMoleculeNode, CNode );
} );
