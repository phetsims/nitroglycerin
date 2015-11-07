// Copyright 2013-2015, University of Colorado Boulder

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

    // atoms
    var bigLeftNode = new AtomNode( Element.C, options.atomOptions );
    var smallOffset = 0.165 * bigLeftNode.width;
    var bigRightNode = new AtomNode( Element.C, _.extend( {
      left: bigLeftNode.centerX + ( 0.25 * bigLeftNode.width ),
      centerY: bigLeftNode.centerY
    }, options.atomOptions ) );
    var smallTopLeftNode = new AtomNode( Element.H, _.extend( {
      centerX: bigLeftNode.left + smallOffset,
      centerY: bigLeftNode.top + smallOffset
    }, options.atomOptions ) );
    var smallTopRightNode = new AtomNode( Element.H, _.extend( {
      centerX: bigRightNode.right - smallOffset,
      centerY: bigRightNode.top + smallOffset
    }, options.atomOptions ) );
    var smallBottomLeftNode = new AtomNode( Element.H, _.extend( {
      centerX: bigLeftNode.left + smallOffset,
      centerY: bigLeftNode.bottom - smallOffset
    }, options.atomOptions ) );
    var smallBottomRightNode = new AtomNode( Element.H, _.extend( {
      centerX: bigRightNode.right - smallOffset,
      centerY: bigRightNode.bottom - smallOffset
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ smallTopRightNode, smallTopLeftNode, bigLeftNode, bigRightNode, smallBottomLeftNode, smallBottomRightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  return inherit( Node, C2H4Node );
} );
