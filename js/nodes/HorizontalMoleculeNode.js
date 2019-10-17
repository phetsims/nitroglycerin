// Copyright 2013-2019, University of Colorado Boulder

/**
 * Base class for molecules with N atoms aligned on the horizontal axis, for N > 0.
 * Note that here is technically no such thing as a single-atom molecule,
 * but allowing N=1 simplifies the Equation model.
 * <p/>
 * Origin is at geometric center of the node's bounding rectangle.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

define( require => {
  'use strict';

  // modules
  const AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  const inherit = require( 'PHET_CORE/inherit' );
  const merge = require( 'PHET_CORE/merge' );
  const nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );
  const Node = require( 'SCENERY/nodes/Node' );
  const Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {Array<Element>} elements
   * @param {Object} [options]
   * @constructor
   */
  function HorizontalMoleculeNode( elements, options ) {

    options = merge( {
      atomOptions: {},
      direction: 'leftToRight', // {string} direction of overlap, leftToRight or rightToLeft
      overlapPercent: 0.25 // {number} amount of overlap between atoms
    }, options );

    // add atoms from left to right, overlapping consistently
    const children = [];
    let previousNode = null;
    _.each( elements, function( element ) {
      const currentNode = new AtomNode( element, options.atomOptions );
      children.push( currentNode );
      if ( previousNode !== null ) {
        const overlap = ( options.overlapPercent * currentNode.width );
        if ( options.direction === 'leftToRight' ) {
          currentNode.left = previousNode.right - overlap;
        }
        else {
          currentNode.right = previousNode.left + overlap;
        }
      }
      previousNode = currentNode;
    } );

    options.children = [ new Node( {
      children: children,
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'HorizontalMoleculeNode', HorizontalMoleculeNode );

  return inherit( Node, HorizontalMoleculeNode );
} );
