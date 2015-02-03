// Copyright 2002-2015, University of Colorado

/**
 * HCl Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var Element = require( 'NITROGLYCERIN/Element' );
  var HorizontalMoleculeNode = require( 'NITROGLYCERIN/nodes/HorizontalMoleculeNode' );
  var inherit = require( 'PHET_CORE/inherit' );

  return inherit( HorizontalMoleculeNode, function HClNode( options ) {
    options = options || {};
    options.direction = 'rightToLeft';
    options.overlapPercent = 0.5;
    HorizontalMoleculeNode.call( this, [ Element.Cl, Element.H ], options );
  } );
} );
