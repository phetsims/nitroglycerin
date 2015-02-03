// Copyright 2002-2015, University of Colorado

/**
 * SO3 Molecule
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
  function SO3Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atom nodes
    var centerNode = new AtomNode( Element.S, options.atomOptions );
    var leftNode = new AtomNode( Element.O, options.atomOptions );
    var rightNode = new AtomNode( Element.O, options.atomOptions );
    var topNode = new AtomNode( Element.O, options.atomOptions );

    // layout
    topNode.x = centerNode.x + ( 0.1 * topNode.width );
    topNode.y = centerNode.left + ( 0.1 * topNode.height );
    leftNode.x = centerNode.left;
    leftNode.y = centerNode.y + ( 0.25 * leftNode.height );
    rightNode.x = centerNode.right;
    rightNode.y = centerNode.y + ( 0.25 * rightNode.height );

    options.children = [ new Node( {
      children: [ topNode, leftNode, centerNode, rightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  return inherit( Node, SO3Node );
} );
