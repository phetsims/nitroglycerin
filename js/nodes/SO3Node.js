// Copyright 2002-2015, University of Colorado

/**
 * SO3 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  var Element = require( 'NITROGLYCERIN/Element' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function SO3Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var centerNode = new AtomNode( Element.S, options.atomOptions );
    var leftNode = new AtomNode( Element.O, _.extend( {
      x: centerNode.left,
      y: centerNode.y + ( 0.2 * centerNode.height )
    }, options.atomOptions ) );
    var rightNode = new AtomNode( Element.O, _.extend( {
      x: centerNode.right,
      y: centerNode.y + ( 0.2 * centerNode.height )
    }, options.atomOptions ) );
    var topNode = new AtomNode( Element.O, _.extend( {
      x: centerNode.x + ( 0.08 * centerNode.width ),
      y: centerNode.left + ( 0.08 * centerNode.height )
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ topNode, leftNode, centerNode, rightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  return inherit( Node, SO3Node );
} );
