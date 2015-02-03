// Copyright 2002-2015, University of Colorado

/**
 * PCl3 Molecule
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
  function PCl3Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    Node.call( this );

    // atoms
    var centerNode = new AtomNode( Element.P, options.atomOptions );
    var leftNode = new AtomNode( Element.Cl, _.extend( {
      x: centerNode.left,
      y: centerNode.bottom - ( 0.25 * centerNode.height )
    }, options.atomOptions ) );
    var rightNode = new AtomNode( Element.Cl, _.extend( {
      x: centerNode.right,
      y: leftNode.y
    }, options.atomOptions ) );
    var bottomNode = new AtomNode( Element.Cl, _.extend( {
      x: centerNode.x,
      y: centerNode.bottom
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ leftNode, rightNode, centerNode, bottomNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  return inherit( Node, PCl3Node );
} );
