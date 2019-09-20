// Copyright 2013-2019, University of Colorado Boulder

/**
 * N2O Molecule
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
  function N2ONode( options ) {
    HorizontalMoleculeNode.call( this, [ Element.N, Element.N, Element.O ], options );
  }

  nitroglycerin.register( 'N2ONode', N2ONode );

  return inherit( HorizontalMoleculeNode, N2ONode );
} );
