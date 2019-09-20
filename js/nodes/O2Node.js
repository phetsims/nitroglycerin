// Copyright 2013-2019, University of Colorado Boulder

/**
 * O2 Molecule
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
  function O2Node( options ) {
    HorizontalMoleculeNode.call( this, [ Element.O, Element.O ], options );
  }

  nitroglycerin.register( 'O2Node', O2Node );

  return inherit( HorizontalMoleculeNode, O2Node );
} );
