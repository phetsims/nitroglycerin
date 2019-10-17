// Copyright 2013-2019, University of Colorado Boulder

/**
 * HCl Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const Element = require( 'NITROGLYCERIN/Element' );
  const HorizontalMoleculeNode = require( 'NITROGLYCERIN/nodes/HorizontalMoleculeNode' );
  const inherit = require( 'PHET_CORE/inherit' );
  const merge = require( 'PHET_CORE/merge' );
  const nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function HClNode( options ) {
    options = merge( {}, options );
    options.direction = 'rightToLeft';
    options.overlapPercent = 0.5;
    HorizontalMoleculeNode.call( this, [ Element.Cl, Element.H ], options );
  }

  nitroglycerin.register( 'HClNode', HClNode );

  return inherit( HorizontalMoleculeNode, HClNode );
} );
