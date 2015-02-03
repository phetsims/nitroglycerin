// Copyright 2002-2015, University of Colorado

/**
 * C2H2 Molecule
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
  function C2H2Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var bigLeftNode = new AtomNode( Element.C, options.atomOptions );
    var bigRightNode = new AtomNode( Element.C, _.extend( {
      x: bigLeftNode.right + ( 0.25 * bigLeftNode.width ),
      y: bigLeftNode.y
    }, options.atomOptions ) );
    var smallLeftNode = new AtomNode( Element.H, _.extend( {
      x: bigLeftNode.left,
      y: bigLeftNode.y
    }, options.atomOptions ) );
    var smallRightNode = new AtomNode( Element.H, _.extend( {
      x: bigRightNode.right,
      y: bigLeftNode.y
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ smallLeftNode, bigLeftNode, bigRightNode, smallRightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  return inherit( Node, C2H2Node );
} );
