// Copyright 2002-2015, University of Colorado

/**
 * CH4 Molecule
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
  function CH4Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    Node.call( this );

    // atom nodes
    var bigNode = new AtomNode( Element.C, options.atomOptions );
    var smallTopLeftNode = new AtomNode( Element.H, options.atomOptions );
    var smallTopRightNode = new AtomNode( Element.H, options.atomOptions );
    var smallBottomLeftNode = new AtomNode( Element.H, options.atomOptions );
    var smallBottomRightNode = new AtomNode( Element.H, options.atomOptions );

    // rendering order
    var parentNode = new Node();
    this.addChild( parentNode );
    parentNode.addChild( smallTopRightNode );
    parentNode.addChild( smallBottomLeftNode );
    parentNode.addChild( bigNode );
    parentNode.addChild( smallTopLeftNode );
    parentNode.addChild( smallBottomRightNode );

    // layout
    var offsetSmall = smallTopLeftNode.width / 4;
    var x = 0;
    var y = 0;
    bigNode.setTranslation( x, y );
    x = bigNode.left + offsetSmall;
    y = bigNode.top + offsetSmall;
    smallTopLeftNode.setTranslation( x, y );
    x = bigNode.right - offsetSmall;
    y = bigNode.top + offsetSmall;
    smallTopRightNode.setTranslation( x, y );
    x = bigNode.left + offsetSmall;
    y = bigNode.bottom - offsetSmall;
    smallBottomLeftNode.setTranslation( x, y );
    x = bigNode.right - offsetSmall;
    y = bigNode.bottom - offsetSmall;
    smallBottomRightNode.setTranslation( x, y );

    // move origin to geometric center
    parentNode.center = Vector2.ZERO;
  }

  return inherit( Node, CH4Node );
} );
