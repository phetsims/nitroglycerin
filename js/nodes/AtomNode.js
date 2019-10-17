// Copyright 2013-2019, University of Colorado Boulder

/**
 * Atoms look like shaded spheres.
 * Origin is at geometric center of bounding rectangle.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const Element = require( 'NITROGLYCERIN/Element' );
  const inherit = require( 'PHET_CORE/inherit' );
  const merge = require( 'PHET_CORE/merge' );
  const nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );
  const ShadedSphereNode = require( 'SCENERY_PHET/ShadedSphereNode' );

  // constants
  const rateOfChange = 0.75; // >0 and <1, increase this to make small atoms appear smaller
  const maxRadius = Element.P.covalentRadius; // not actually the maximum, but this is a constant from the previous version
  const modelToViewScale = 0.11;

  /*
   * There is a large difference between the radii of the smallest and largest atoms.
   * This function adjusts scaling so that the difference is still noticeable, but not as large.
   */
  function radiusScalingFunction( radius ) {
    const adjustedRadius = ( maxRadius - rateOfChange * ( maxRadius - radius ) );
    return modelToViewScale * adjustedRadius;
  }

  const AtomNode = function AtomNode( element, options ) {
    options = merge( {
      mainColor: element.color // passed to ShadedSphereNode
    }, options );

    ShadedSphereNode.call( this, 2 * radiusScalingFunction( element.covalentRadius ), options );
  };

  nitroglycerin.register( 'AtomNode', AtomNode );

  return inherit( ShadedSphereNode, AtomNode );
} );
