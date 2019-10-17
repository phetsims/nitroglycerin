// Copyright 2013-2019, University of Colorado Boulder

/**
 * PCl5 Molecule
 * Structure has 2 H's on the vertical axis, and 3 H's arranged in a triangle in the horizontal plane.
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
  function PCl5Node( options ) {

    options = merge( { atomOptions: {} }, options );

    // atoms
    const centerNode = new AtomNode( Element.P, options.atomOptions );
    const topNode = new AtomNode( Element.Cl, merge( {
      centerX: centerNode.centerX,
      centerY: centerNode.top
    }, options.atomOptions ) );
    const bottomNode = new AtomNode( Element.Cl, merge( {
      centerX: centerNode.centerX,
      centerY: centerNode.bottom
    }, options.atomOptions ) );
    const rightNode = new AtomNode( Element.Cl, merge( {
      centerX: centerNode.right,
      centerY: centerNode.centerY
    }, options.atomOptions ) );
    const topLeftNode = new AtomNode( Element.Cl, merge( {
      centerX: centerNode.left + ( 0.25 * centerNode.width ),
      centerY: centerNode.top + ( 0.25 * centerNode.height )
    }, options.atomOptions ) );
    const bottomLeftNode = new AtomNode( Element.Cl, merge( {
      centerX: centerNode.left + ( 0.1 * centerNode.width ),
      centerY: centerNode.bottom - ( 0.1 * centerNode.height )
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ rightNode, bottomNode, topLeftNode, centerNode, topNode, bottomLeftNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'PCl5Node', PCl5Node );

  return inherit( Node, PCl5Node );
} );
