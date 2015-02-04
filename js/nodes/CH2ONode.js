// Copyright 2002-2015, University of Colorado

/**
 * CH2O Molecule
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
  function CH2ONode( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var leftNode = new AtomNode( Element.C, options.atomOptions );
    var rightNode = new AtomNode( Element.O, options.atomOptions );
    var smallTopNode = new AtomNode( Element.H, options.atomOptions );
    var smallBottomNode = new AtomNode( Element.H, options.atomOptions );

    // layout
    var offsetSmall = smallTopNode.width / 4;
    rightNode.x = leftNode.right + ( 0.25 * rightNode.width );
    rightNode.y = leftNode.y;
    smallTopNode.x = leftNode.left + offsetSmall;
    smallTopNode.y = leftNode.top + offsetSmall;
    smallBottomNode.x = smallTopNode.x;
    smallBottomNode.y = leftNode.bottom - offsetSmall;

    options.children = [ new Node( {
      children: [ smallTopNode, leftNode, rightNode, smallBottomNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  return inherit( Node, CH2ONode );
} );
