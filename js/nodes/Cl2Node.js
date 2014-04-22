// Copyright 2002-2014, University of Colorado

/**
 * Cl2 Molecule
 *
 * @author Chris Malley (cmalley@pixelzoom.com)
 */

define( function ( require ) {
  'use strict';

  var inherit = require( 'PHET_CORE/inherit' );
  var HorizontalMoleculeNode = require( 'NITROGLYCERIN/nodes/HorizontalMoleculeNode' );
  var Element = require( 'NITROGLYCERIN/Element' );

  return inherit( HorizontalMoleculeNode, function Cl2Node() {
    HorizontalMoleculeNode.call( this, Element.Cl, Element.Cl );
  } );
} );
