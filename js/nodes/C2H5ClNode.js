// Copyright 2002-2015, University of Colorado

/**
 * C2H5Cl Molecule
 * Structure is similar to C2H6, but with Cl replacing one of the H's.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  var Element = require( 'NITROGLYCERIN/Element' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function C2H5ClNode( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var leftNode = new AtomNode( Element.C, options.atomOptions );
    var centerNode = new AtomNode( Element.C, _.extend( {
      x: leftNode.right + ( 0.25 * leftNode.width ),
      y: leftNode.y
    }, options.atomOptions ) );
    var smallTopLeftNode = new AtomNode( Element.H, _.extend( {
      x: leftNode.x,
      y: leftNode.top
    }, options.atomOptions ) );
    var smallBottomLeftNode = new AtomNode( Element.H, _.extend( {
      x: smallTopLeftNode.x,
      y: leftNode.bottom
    }, options.atomOptions ) );
    var smallLeftNode = new AtomNode( Element.H, _.extend( {
      x: leftNode.left,
      y: leftNode.y
    }, options.atomOptions ) );
    var smallTopRightNode = new AtomNode( Element.H, _.extend( {
      x: centerNode.x,
      y: centerNode.top
    }, options.atomOptions ) );
    var smallBottomRightNode = new AtomNode( Element.H, _.extend( {
      x: centerNode.x,
      y: centerNode.bottom
    }, options.atomOptions ) );
    var rightNode = new AtomNode( Element.Cl, options.atomOptions );
    rightNode.x = centerNode.right + ( 0.125 * rightNode.width );
    rightNode.y = centerNode.y;

    options.children = [ new Node( {
      children: [
        smallBottomRightNode, smallTopRightNode, centerNode, rightNode,
        smallLeftNode, leftNode, smallBottomLeftNode, smallTopLeftNode
      ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  return inherit( Node, C2H5ClNode );
} );
