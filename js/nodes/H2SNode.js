// Copyright 2013-2015, University of Colorado Boulder

/**
 * H2S Molecule
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
  var nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function H2SNode( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var bigNode = new AtomNode( Element.S, options.atomOptions );
    var smallLeftNode = new AtomNode( Element.H, _.extend( {
      centerX: bigNode.left,
      centerY: bigNode.bottom - ( 0.25 * bigNode.height )
    }, options.atomOptions ) );
    var smallRightNode = new AtomNode( Element.H, _.extend( {
      centerX: bigNode.right,
      centerY: smallLeftNode.centerY
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ bigNode, smallLeftNode, smallRightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'H2SNode', H2SNode );

  return inherit( Node, H2SNode );
} );
