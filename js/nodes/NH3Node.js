// Copyright 2013-2019, University of Colorado Boulder

/**
 * NH3 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  const Element = require( 'NITROGLYCERIN/Element' );
  const inherit = require( 'PHET_CORE/inherit' );
  const merge = require( 'PHET_CORE/merge' );
  const nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );
  const Node = require( 'SCENERY/nodes/Node' );
  const Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function NH3Node( options ) {

    options = merge( { atomOptions: {} }, options );

    // atoms
    const bigNode = new AtomNode( Element.N, options.atomOptions );
    const smallLeftNode = new AtomNode( Element.H, merge( {
      centerX: bigNode.left,
      centerY: bigNode.bottom - ( 0.25 * bigNode.height )
    }, options.atomOptions ) );
    const smallRightNode = new AtomNode( Element.H, merge( {
      centerX: bigNode.right,
      centerY: smallLeftNode.centerY
    }, options.atomOptions ) );
    const smallBottomNode = new AtomNode( Element.H, merge( {
      centerX: bigNode.centerX,
      centerY: bigNode.bottom
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ smallLeftNode, smallRightNode, bigNode, smallBottomNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'NH3Node', NH3Node );

  return inherit( Node, NH3Node );
} );
