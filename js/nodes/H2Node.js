// Copyright 2013-2015, University of Colorado Boulder

/**
 * H2 Molecule
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
  function H2Node( options ) {
    HorizontalMoleculeNode.call( this, [ Element.H, Element.H ], options );
  }

  nitroglycerin.register( 'H2Node', H2Node );

  return inherit( HorizontalMoleculeNode, H2Node );
} );
