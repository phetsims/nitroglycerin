// Copyright 2013-2019, University of Colorado Boulder

/**
 * C2H6 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  const Element = require( 'NITROGLYCERIN/Element' );
  const inherit = require( 'PHET_CORE/inherit' );
  const nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );
  const Node = require( 'SCENERY/nodes/Node' );
  const Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function C2H6Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    const leftNode = new AtomNode( Element.C, options.atomOptions );
    const rightNode = new AtomNode( Element.C, _.extend( {
      centerX: leftNode.right + ( 0.25 * leftNode.width ),
      centerY: leftNode.centerY
    }, options.atomOptions ) );
    const smallTopLeftNode = new AtomNode( Element.H, _.extend( {
      centerX: leftNode.centerX,
      centerY: leftNode.top
    }, options.atomOptions ) );
    const smallBottomLeftNode = new AtomNode( Element.H, _.extend( {
      centerX: smallTopLeftNode.centerX,
      centerY: leftNode.bottom
    }, options.atomOptions ) );
    const smallLeftNode = new AtomNode( Element.H, _.extend( {
      centerX: leftNode.left,
      centerY: leftNode.centerY
    }, options.atomOptions ) );
    const smallTopRightNode = new AtomNode( Element.H, _.extend( {
      centerX: rightNode.centerX,
      centerY: rightNode.top
    }, options.atomOptions ) );
    const smallBottomRightNode = new AtomNode( Element.H, _.extend( {
      centerX: rightNode.centerX,
      centerY: rightNode.bottom
    }, options.atomOptions ) );
    const smallRightNode = new AtomNode( Element.H, _.extend( {
      centerX: rightNode.right,
      centerY: rightNode.centerY
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ smallBottomRightNode, smallTopRightNode, rightNode, smallRightNode, smallLeftNode, leftNode, smallBottomLeftNode, smallTopLeftNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'C2H6Node', C2H6Node );

  return inherit( Node, C2H6Node );
} );
