// Copyright 2013-2015, University of Colorado Boulder

/**
 * C Molecule
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
  function CNode( options ) {
    HorizontalMoleculeNode.call( this, [ Element.C ], options );
  }

  nitroglycerin.register( 'CNode', CNode );

  return inherit( HorizontalMoleculeNode, CNode );
} );
