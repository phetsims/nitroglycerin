// Copyright 2013-2019, University of Colorado Boulder

/**
 * S Molecule
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
  function SNode( options ) {
    HorizontalMoleculeNode.call( this, [ Element.S ], options );
  }

  nitroglycerin.register( 'SNode', SNode );

  return inherit( HorizontalMoleculeNode, SNode );
} );
