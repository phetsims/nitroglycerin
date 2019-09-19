// Copyright 2013-2019, University of Colorado Boulder

/**
 * NO2 Molecule
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
  function NO2Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    const centerNode = new AtomNode( Element.N, options.atomOptions );
    const leftNode = new AtomNode( Element.O, _.extend( {
      centerX: centerNode.left,
      centerY: centerNode.centerY + ( 0.25 * centerNode.height )
    }, options.atomOptions ) );
    const rightNode = new AtomNode( Element.O, _.extend( {
      centerX: centerNode.right,
      centerY: leftNode.centerY
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ leftNode, centerNode, rightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'NO2Node', NO2Node );

  return inherit( Node, NO2Node );
} );
