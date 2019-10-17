// Copyright 2013-2019, University of Colorado Boulder

/**
 * HF Molecule
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
  function HFNode( options ) {
    options = merge( {}, options );
    options.direction = 'rightToLeft';
    options.overlapPercent = 0.5;
    HorizontalMoleculeNode.call( this, [ Element.F, Element.H ], options );
  }

  nitroglycerin.register( 'HFNode', HFNode );

  return inherit( HorizontalMoleculeNode, HFNode );
} );
