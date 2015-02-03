// Copyright 2002-2015, University of Colorado

/**
 * SO2 Molecule
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
  function SO2Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    Node.call( this );

    // atom nodes
    var centerNode = new AtomNode( Element.S, options.atomOptions );
    var leftNode = new AtomNode( Element.O, options.atomOptions );
    var rightNode = new AtomNode( Element.O, options.atomOptions );

    // rendering order
    var parentNode = new Node();
    this.addChild( parentNode );
    parentNode.addChild( leftNode );
    parentNode.addChild( centerNode );
    parentNode.addChild( rightNode );

    // layout
    var x = 0;
    var y = 0;
    centerNode.setTranslation( x, y );
    x = centerNode.left;
    y = centerNode.y + ( 0.25 * leftNode.height );
    leftNode.setTranslation( x, y );
    x = centerNode.right;
    y = centerNode.y + ( 0.25 * rightNode.height );
    rightNode.setTranslation( x, y );

    // move origin to geometric center
    parentNode.center = Vector2.ZERO;
  }

  return inherit( Node, SO2Node );
} );
