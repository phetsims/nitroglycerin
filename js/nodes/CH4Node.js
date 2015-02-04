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

    // atoms
    var bigNode = new AtomNode( Element.C, options.atomOptions );
    var smallOffset = 0.165 * bigNode.width;
    var smallTopLeftNode = new AtomNode( Element.H, _.extend( {
      x: bigNode.left + smallOffset,
      y: bigNode.top + smallOffset
    }, options.atomOptions ) );
    var smallTopRightNode = new AtomNode( Element.H, _.extend( {
      x: bigNode.right - smallOffset,
      y: smallTopLeftNode.y
    }, options.atomOptions ) );
    var smallBottomLeftNode = new AtomNode( Element.H, _.extend( {
      x: smallTopLeftNode.x,
      y: bigNode.bottom - smallOffset
    }, options.atomOptions ) );
    var smallBottomRightNode = new AtomNode( Element.H, _.extend( {
      x: smallTopRightNode.x,
      y: smallBottomLeftNode.y
    }, options.atomOptions ) );


    options.children = [ new Node( {
      children: [ smallTopRightNode, smallBottomLeftNode, bigNode, smallTopLeftNode, smallBottomRightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  return inherit( Node, CH4Node );
} );
