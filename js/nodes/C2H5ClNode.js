// Copyright 2013-2019, University of Colorado Boulder

/**
 * C2H5Cl Molecule
 * Structure is similar to C2H6, but with Cl replacing one of the H's.
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
  function C2H5ClNode( options ) {

    options = merge( { atomOptions: {} }, options );

    // atoms
    const leftNode = new AtomNode( Element.C, options.atomOptions );
    const centerNode = new AtomNode( Element.C, merge( {
      centerX: leftNode.right + ( 0.25 * leftNode.width ),
      centerY: leftNode.centerY
    }, options.atomOptions ) );
    const smallTopLeftNode = new AtomNode( Element.H, merge( {
      centerX: leftNode.centerX,
      centerY: leftNode.top
    }, options.atomOptions ) );
    const smallBottomLeftNode = new AtomNode( Element.H, merge( {
      centerX: smallTopLeftNode.centerX,
      centerY: leftNode.bottom
    }, options.atomOptions ) );
    const smallLeftNode = new AtomNode( Element.H, merge( {
      centerX: leftNode.left,
      centerY: leftNode.centerY
    }, options.atomOptions ) );
    const smallTopRightNode = new AtomNode( Element.H, merge( {
      centerX: centerNode.centerX,
      centerY: centerNode.top
    }, options.atomOptions ) );
    const smallBottomRightNode = new AtomNode( Element.H, merge( {
      centerX: centerNode.centerX,
      centerY: centerNode.bottom
    }, options.atomOptions ) );
    const rightNode = new AtomNode( Element.Cl, merge( {
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

  nitroglycerin.register( 'C2H5ClNode', C2H5ClNode );

  return inherit( Node, C2H5ClNode );
} );
