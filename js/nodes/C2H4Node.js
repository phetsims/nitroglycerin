// Copyright 2013-2019, University of Colorado Boulder

/**
 * C2H4 Molecule
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
  function C2H4Node( options ) {

    options = merge( { atomOptions: {} }, options );

    // atoms
    const bigLeftNode = new AtomNode( Element.C, options.atomOptions );
    const smallOffset = 0.165 * bigLeftNode.width;
    const bigRightNode = new AtomNode( Element.C, merge( {
      left: bigLeftNode.centerX + ( 0.25 * bigLeftNode.width ),
      centerY: bigLeftNode.centerY
    }, options.atomOptions ) );
    const smallTopLeftNode = new AtomNode( Element.H, merge( {
      centerX: bigLeftNode.left + smallOffset,
      centerY: bigLeftNode.top + smallOffset
    }, options.atomOptions ) );
    const smallTopRightNode = new AtomNode( Element.H, merge( {
      centerX: bigRightNode.right - smallOffset,
      centerY: bigRightNode.top + smallOffset
    }, options.atomOptions ) );
    const smallBottomLeftNode = new AtomNode( Element.H, merge( {
      centerX: bigLeftNode.left + smallOffset,
      centerY: bigLeftNode.bottom - smallOffset
    }, options.atomOptions ) );
    const smallBottomRightNode = new AtomNode( Element.H, merge( {
      centerX: bigRightNode.right - smallOffset,
      centerY: bigRightNode.bottom - smallOffset
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ smallTopRightNode, smallTopLeftNode, bigLeftNode, bigRightNode, smallBottomLeftNode, smallBottomRightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'C2H4Node', C2H4Node );

  return inherit( Node, C2H4Node );
} );
