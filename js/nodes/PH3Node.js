// Copyright 2002-2015, University of Colorado

/**
 * PH3 Molecule
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
  function PH3Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atom nodes
    var bigNode = new AtomNode( Element.P, options.atomOptions );
    var smallLeftNode = new AtomNode( Element.H, _.extend( {
      x: bigNode.left,
      y: bigNode.bottom - ( 0.25 * bigNode.height )
    }, options.atomOptions ) );
    var smallRightNode = new AtomNode( Element.H, _.extend( {
      x: bigNode.right,
      y: smallLeftNode.y
    }, options.atomOptions ) );
    var smallBottomNode = new AtomNode( Element.H, _.extend( {
      x: bigNode.x,
      y: bigNode.bottom
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ smallLeftNode, smallRightNode, bigNode, smallBottomNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  return inherit( Node, PH3Node );
} );
