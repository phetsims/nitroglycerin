// Copyright 2013-2019, University of Colorado Boulder

/**
 * H2S Molecule
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
  function H2SNode( options ) {

    options = merge( { atomOptions: {} }, options );

    // atoms
    const bigNode = new AtomNode( Element.S, options.atomOptions );
    const smallLeftNode = new AtomNode( Element.H, merge( {
      centerX: bigNode.left,
      centerY: bigNode.bottom - ( 0.25 * bigNode.height )
    }, options.atomOptions ) );
    const smallRightNode = new AtomNode( Element.H, merge( {
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
