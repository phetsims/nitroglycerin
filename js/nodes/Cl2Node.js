// Copyright 2013-2019, University of Colorado Boulder

/**
 * Cl2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const Element = require( 'NITROGLYCERIN/Element' );
  const HorizontalMoleculeNode = require( 'NITROGLYCERIN/nodes/HorizontalMoleculeNode' );
  const inherit = require( 'PHET_CORE/inherit' );
  const nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function Cl2Node( options ) {
    HorizontalMoleculeNode.call( this, [ Element.Cl, Element.Cl ], options );
  }

  nitroglycerin.register( 'Cl2Node', Cl2Node );

  return inherit( HorizontalMoleculeNode, Cl2Node );
} );
