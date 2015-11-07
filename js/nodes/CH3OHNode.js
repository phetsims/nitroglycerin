// Copyright 2013-2015, University of Colorado Boulder

/**
 * CH3OH Molecule
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
  function CH3OHNode( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var leftNode = new AtomNode( Element.C, options.atomOptions );
    var smallTopNode = new AtomNode( Element.H, _.extend( {
      centerX: leftNode.centerX,
      centerY: leftNode.top
    }, options.atomOptions ) );
    var smallBottomNode = new AtomNode( Element.H, _.extend( {
      centerX: smallTopNode.centerX,
      centerY: leftNode.bottom
    }, options.atomOptions ) );
    var smallLeftNode = new AtomNode( Element.H, _.extend( {
      centerX: leftNode.left,
      centerY: leftNode.centerY
    }, options.atomOptions ) );
    var rightNode = new AtomNode( Element.O, _.extend( {
      centerX: leftNode.right + ( 0.25 * leftNode.width ),
      centerY: leftNode.centerY
    }, options.atomOptions ) );
    var smallRightNode = new AtomNode( Element.H, _.extend( {
      centerX: rightNode.right,
      centerY: rightNode.centerY
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ smallBottomNode, smallTopNode, leftNode, smallLeftNode, smallRightNode, rightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  return inherit( Node, CH3OHNode );
} );
