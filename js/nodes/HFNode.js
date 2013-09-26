// Copyright 2002-2013, University of Colorado

/**
 * HF Molecule
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

  return inherit( Node, function CNode() {
    Node.call( this, {} );

    // atom nodes
    var leftNode = new AtomNode( Element.H );
    var rightNode = new AtomNode( Element.F );

    // rendering order
    var parentNode = new Node();
    this.addChild( parentNode );
    parentNode.addChild( rightNode );
    parentNode.addChild( leftNode );

    // layout
    var x = 0;
    var y = 0;
    leftNode.setTranslation( x, y );
    x = leftNode.x + ( 0.5 * rightNode.width );
    y = leftNode.y;
    rightNode.setTranslation( x, y );

    // move origin to geometric center
    parentNode.center = Vector2.ZERO;
  } );
} );
