// Copyright 2013-2019, University of Colorado Boulder

/**
 * CH4 Molecule
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
  function CH4Node( options ) {

    options = merge( { atomOptions: {} }, options );

    // atoms
    const bigNode = new AtomNode( Element.C, options.atomOptions );
    const smallOffset = 0.165 * bigNode.width;
    const smallTopLeftNode = new AtomNode( Element.H, merge( {
      centerX: bigNode.left + smallOffset,
      centerY: bigNode.top + smallOffset
    }, options.atomOptions ) );
    const smallTopRightNode = new AtomNode( Element.H, merge( {
      centerX: bigNode.right - smallOffset,
      centerY: smallTopLeftNode.centerY
    }, options.atomOptions ) );
    const smallBottomLeftNode = new AtomNode( Element.H, merge( {
      centerX: smallTopLeftNode.centerX,
      centerY: bigNode.bottom - smallOffset
    }, options.atomOptions ) );
    const smallBottomRightNode = new AtomNode( Element.H, merge( {
      centerX: smallTopRightNode.centerX,
      centerY: smallBottomLeftNode.centerY
    }, options.atomOptions ) );


    options.children = [ new Node( {
      children: [ smallTopRightNode, smallBottomLeftNode, bigNode, smallTopLeftNode, smallBottomRightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'CH4Node', CH4Node );

  return inherit( Node, CH4Node );
} );
