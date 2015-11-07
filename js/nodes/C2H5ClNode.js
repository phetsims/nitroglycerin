// Copyright 2013-2015, University of Colorado Boulder

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
      centerX: leftNode.right + ( 0.25 * leftNode.width ),
      centerY: leftNode.centerY
    }, options.atomOptions ) );
    var smallTopLeftNode = new AtomNode( Element.H, _.extend( {
      centerX: leftNode.centerX,
      centerY: leftNode.top
    }, options.atomOptions ) );
    var smallBottomLeftNode = new AtomNode( Element.H, _.extend( {
      centerX: smallTopLeftNode.centerX,
      centerY: leftNode.bottom
    }, options.atomOptions ) );
    var smallLeftNode = new AtomNode( Element.H, _.extend( {
      centerX: leftNode.left,
      centerY: leftNode.centerY
    }, options.atomOptions ) );
    var smallTopRightNode = new AtomNode( Element.H, _.extend( {
      centerX: centerNode.centerX,
      centerY: centerNode.top
    }, options.atomOptions ) );
    var smallBottomRightNode = new AtomNode( Element.H, _.extend( {
      centerX: centerNode.centerX,
      centerY: centerNode.bottom
    }, options.atomOptions ) );
    var rightNode = new AtomNode( Element.Cl, _.extend( {
      left: centerNode.centerX + ( 0.11 * leftNode.width ),
      centerY: centerNode.centerY
    }, options.atomOptions ) );

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
