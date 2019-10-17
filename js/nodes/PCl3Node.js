// Copyright 2013-2019, University of Colorado Boulder

/**
 * PCl3 Molecule
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
  function PCl3Node( options ) {

    options = merge( { atomOptions: {} }, options );

    // atoms
    const centerNode = new AtomNode( Element.P, options.atomOptions );
    const leftNode = new AtomNode( Element.Cl, merge( {
      centerX: centerNode.left,
      centerY: centerNode.bottom - ( 0.25 * centerNode.height )
    }, options.atomOptions ) );
    const rightNode = new AtomNode( Element.Cl, merge( {
      centerX: centerNode.right,
      centerY: leftNode.centerY
    }, options.atomOptions ) );
    const bottomNode = new AtomNode( Element.Cl, merge( {
      centerX: centerNode.centerX,
      centerY: centerNode.bottom
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ leftNode, rightNode, centerNode, bottomNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'PCl3Node', PCl3Node );

  return inherit( Node, PCl3Node );
} );
