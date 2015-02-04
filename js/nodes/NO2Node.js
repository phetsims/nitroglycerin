// Copyright 2002-2015, University of Colorado

/**
 * NO2 Molecule
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
  function NO2Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var centerNode = new AtomNode( Element.N, options.atomOptions );
    var leftNode = new AtomNode( Element.O, _.extend( {
      x: centerNode.left,
      y: centerNode.y + ( 0.25 * centerNode.height )
    }, options.atomOptions ) );
    var rightNode = new AtomNode( Element.O, _.extend( {
      x: centerNode.right,
      y: leftNode.y
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ leftNode, centerNode, rightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  return inherit( Node, NO2Node );
} );
