// Copyright 2002-2015, University of Colorado

/**
 * C2H4 Molecule
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
  function C2H4Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    Node.call( this );

    var bigLeftNode = new AtomNode( Element.C, options.atomOptions );
    var bigRightNode = new AtomNode( Element.C, options.atomOptions );
    var smallTopLeftNode = new AtomNode( Element.H, options.atomOptions );
    var smallTopRightNode = new AtomNode( Element.H, options.atomOptions );
    var smallBottomLeftNode = new AtomNode( Element.H, options.atomOptions );
    var smallBottomRightNode = new AtomNode( Element.H, options.atomOptions );

    // layout
    var offsetSmall = smallTopLeftNode.width / 4;
    bigRightNode.x = bigLeftNode.right + ( 0.25 * bigRightNode.width );
    bigRightNode.y = bigLeftNode.y;
    smallTopLeftNode.x = bigLeftNode.left + offsetSmall;
    smallTopLeftNode.y = bigLeftNode.top + offsetSmall;
    smallTopRightNode.x = bigRightNode.right - offsetSmall;
    smallTopRightNode.y = bigRightNode.top + offsetSmall;
    smallBottomLeftNode.x = bigLeftNode.left + offsetSmall;
    smallBottomLeftNode.y = bigLeftNode.bottom - offsetSmall;
    smallBottomRightNode.x = bigRightNode.right - offsetSmall;
    smallBottomRightNode.y = bigRightNode.bottom - offsetSmall;

    options.children = [ new Node( {
      children: [ smallTopRightNode, smallTopLeftNode, bigLeftNode, bigRightNode, smallBottomLeftNode, smallBottomRightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  return inherit( Node, C2H4Node );
} );
