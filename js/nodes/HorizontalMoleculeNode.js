// Copyright 2002-2015, University of Colorado

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

define( function( require ) {
  'use strict';

  // modules
  var AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Vector2 = require( 'DOT/Vector2' );

  /*
   * @param {Array<Element>} elements
   */
  var HorizontalMoleculeNode = function HorizontalMoleculeNode( elements, options ) {

    options = _.extend( {
      atomOptions: {},
      direction: 'leftToRight', // {string} direction of overlap, leftToRight or rightToLeft
      overlapPercent: 0.25 // {number} amount of overlap between atoms
    }, options );

    // add atoms from left to right, overlapping consistently
    var children = [];
    var previousNode = null;
    _.each( elements, function( element ) {
      var currentNode = new AtomNode( element, options.atomOptions );
      children.push( currentNode );
      if ( previousNode !== null ) {
        var overlap = ( options.overlapPercent * currentNode.width );
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
  };

  return inherit( Node, HorizontalMoleculeNode );
} );
