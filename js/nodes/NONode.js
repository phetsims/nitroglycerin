// Copyright 2002-2013, University of Colorado

/**
 * NO Molecule
 *
 * @author Chris Malley (cmalley@pixelzoom.com)
 */

define( function ( require ) {
  'use strict';

  var inherit = require( 'PHET_CORE/inherit' );
  var AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  var HorizontalMoleculeNode = require( 'NITROGLYCERIN/nodes/HorizontalMoleculeNode' );
  var Element = require( 'NITROGLYCERIN/Element' );

  return inherit( HorizontalMoleculeNode, function CNode() {
    HorizontalMoleculeNode.call( this, Element.N, Element.O );
  } );
} );
