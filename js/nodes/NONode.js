// Copyright 2013-2015, University of Colorado Boulder

/**
 * NO Molecule
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
  function NONode( options ) {
    HorizontalMoleculeNode.call( this, [ Element.N, Element.O ], options );
  }

  nitroglycerin.register( 'NONode', NONode );

  return inherit( HorizontalMoleculeNode, NONode );
} );
