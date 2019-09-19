// Copyright 2013-2019, University of Colorado Boulder

/**
 * SO3 Molecule
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
  function SO3Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var centerNode = new AtomNode( Element.S, options.atomOptions );
    var leftNode = new AtomNode( Element.O, _.extend( {
      centerX: centerNode.left,
      centerY: centerNode.centerY + ( 0.2 * centerNode.height )
    }, options.atomOptions ) );
    var rightNode = new AtomNode( Element.O, _.extend( {
      centerX: centerNode.right,
      centerY: centerNode.centerY + ( 0.2 * centerNode.height )
    }, options.atomOptions ) );
    var topNode = new AtomNode( Element.O, _.extend( {
      centerX: centerNode.centerX + ( 0.08 * centerNode.width ),
      centerY: centerNode.left + ( 0.08 * centerNode.height )
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ topNode, leftNode, centerNode, rightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'SO3Node', SO3Node );

  return inherit( Node, SO3Node );
} );
