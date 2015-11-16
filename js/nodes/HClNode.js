// Copyright 2013-2015, University of Colorado Boulder

/**
 * HCl Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var Element = require( 'NITROGLYCERIN/Element' );
  var HorizontalMoleculeNode = require( 'NITROGLYCERIN/nodes/HorizontalMoleculeNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function HClNode( options ) {
    options = _.extend( {}, options );
    options.direction = 'rightToLeft';
    options.overlapPercent = 0.5;
    HorizontalMoleculeNode.call( this, [ Element.Cl, Element.H ], options );
  }

  nitroglycerin.register( 'HClNode', HClNode );

  return inherit( HorizontalMoleculeNode, HClNode );
} );
