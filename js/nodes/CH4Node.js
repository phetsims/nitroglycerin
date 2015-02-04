// Copyright 2002-2015, University of Colorado

/**
 * CH4 Molecule
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
  function CH4Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atom nodes
    var bigNode = new AtomNode( Element.C, options.atomOptions );
    var smallTopLeftNode = new AtomNode( Element.H, options.atomOptions );
    var smallTopRightNode = new AtomNode( Element.H, options.atomOptions );
    var smallBottomLeftNode = new AtomNode( Element.H, options.atomOptions );
    var smallBottomRightNode = new AtomNode( Element.H, options.atomOptions );

    // layout
    var offsetSmall = smallTopLeftNode.width / 4;
    smallTopLeftNode.x = bigNode.left + offsetSmall;
    smallTopLeftNode.y = bigNode.top + offsetSmall;
    smallTopRightNode.x = bigNode.right - offsetSmall;
    smallTopRightNode.y = bigNode.top + offsetSmall;
    smallBottomLeftNode.x = bigNode.left + offsetSmall;
    smallBottomLeftNode.y = bigNode.bottom - offsetSmall;
    smallBottomRightNode.x = bigNode.right - offsetSmall;
    smallBottomRightNode.y = bigNode.bottom - offsetSmall;

    options.children = [ new Node( {
      children: [ smallTopRightNode, smallBottomLeftNode, bigNode, smallTopLeftNode, smallBottomRightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  return inherit( Node, CH4Node );
} );
