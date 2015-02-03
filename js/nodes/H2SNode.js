// Copyright 2002-2015, University of Colorado

/**
 * H2S Molecule
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
  function H2SNode( options ) {

    options = _.extend( { atomOptions: {} }, options );

    Node.call( this );

    // atom nodes
    var smallLeftNode = new AtomNode( Element.H, options.atomOptions );
    var smallRightNode = new AtomNode( Element.H, options.atomOptions );
    var bigNode = new AtomNode( Element.S, options.atomOptions );

    // rendering order
    var parentNode = new Node();
    this.addChild( parentNode );
    parentNode.addChild( bigNode );
    parentNode.addChild( smallLeftNode );
    parentNode.addChild( smallRightNode );

    // layout
    var x = 0;
    var y = 0;
    bigNode.setTranslation( x, y );
    x = bigNode.left;
    y = bigNode.bottom - ( 0.25 * bigNode.height );
    smallLeftNode.setTranslation( x, y );
    x = bigNode.right;
    y = smallLeftNode.y;
    smallRightNode.setTranslation( x, y );

    // move origin to geometric center
    parentNode.center = Vector2.ZERO;
  }

  return inherit( Node, H2SNode );
} );
