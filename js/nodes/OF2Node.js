// Copyright 2013-2019, University of Colorado Boulder

/**
 * OF2 Molecule
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
  function OF2Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    const centerNode = new AtomNode( Element.O, options.atomOptions );
    const leftNode = new AtomNode( Element.F, _.extend( {
      centerX: centerNode.left,
      centerY: centerNode.centerY + ( 0.25 * centerNode.height )
    }, options.atomOptions ) );
    const rightNode = new AtomNode( Element.F, _.extend( {
      centerX: centerNode.right,
      centerY: centerNode.centerY + ( 0.25 * centerNode.height )
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ leftNode, centerNode, rightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'OF2Node', OF2Node );

  return inherit( Node, OF2Node );
} );
