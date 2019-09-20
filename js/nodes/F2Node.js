// Copyright 2013-2019, University of Colorado Boulder

/**
 * F2 Molecule
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
  function F2Node( options ) {
    HorizontalMoleculeNode.call( this, [ Element.F, Element.F ], options );
  }

  nitroglycerin.register( 'F2Node', F2Node );

  return inherit( HorizontalMoleculeNode, F2Node );
} );
