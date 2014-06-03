// Copyright 2002-2014, University of Colorado

/**
 * C2H6 Molecule
 *
 * @author Chris Malley (cmalley@pixelzoom.com)
 */

define( function ( require ) {
  'use strict';

  var inherit = require( 'PHET_CORE/inherit' );
  var AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Vector2 = require( 'DOT/Vector2' );
  var Element = require( 'NITROGLYCERIN/Element' );

  return inherit( Node, function C2H6Node() {
    Node.call( this );

    // atom nodes
    var leftNode = new AtomNode( Element.C );
    var rightNode = new AtomNode( Element.C );
    var smallTopLeftNode = new AtomNode( Element.H );
    var smallBottomLeftNode = new AtomNode( Element.H );
    var smallLeftNode = new AtomNode( Element.H );
    var smallTopRightNode = new AtomNode( Element.H );
    var smallBottomRightNode = new AtomNode( Element.H );
    var smallRightNode = new AtomNode( Element.H );

    // rendering order
    var parentNode = new Node();
    this.addChild( parentNode );
    parentNode.addChild( smallBottomRightNode );
    parentNode.addChild( smallTopRightNode );
    parentNode.addChild( rightNode );
    parentNode.addChild( smallRightNode );
    parentNode.addChild( smallLeftNode );
    parentNode.addChild( leftNode );
    parentNode.addChild( smallBottomLeftNode );
    parentNode.addChild( smallTopLeftNode );

    // layout
    var x = 0;
    var y = 0;
    leftNode.setTranslation( x, y );
    x = leftNode.right + ( 0.25 * rightNode.width );
    y = leftNode.y;
    rightNode.setTranslation( x, y );
    x = leftNode.x;
    y = leftNode.top;
    smallTopLeftNode.setTranslation( x, y );
    x = smallTopLeftNode.x;
    y = leftNode.bottom;
    smallBottomLeftNode.setTranslation( x, y );
    x = leftNode.left;
    y = leftNode.y;
    smallLeftNode.setTranslation( x, y );
    x = rightNode.right;
    y = rightNode.y;
    smallRightNode.setTranslation( x, y );
    x = rightNode.x;
    y = rightNode.top;
    smallTopRightNode.setTranslation( x, y );
    x = rightNode.x;
    y = rightNode.bottom;
    smallBottomRightNode.setTranslation( x, y );

    // move origin to geometric center
    parentNode.center = Vector2.ZERO;
  } );
} );
