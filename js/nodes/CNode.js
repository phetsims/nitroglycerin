// Copyright 2013-2015, University of Colorado Boulder

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
  var nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function CNode( options ) {
    HorizontalMoleculeNode.call( this, [ Element.C ], options );
  }

  nitroglycerin.register( 'CNode', CNode );

  return inherit( HorizontalMoleculeNode, CNode );
} );
