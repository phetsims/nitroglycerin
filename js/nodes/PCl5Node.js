// Copyright 2002-2015, University of Colorado

/**
 * PCl5 Molecule
 * Structure has 2 H's on the vertical axis, and 3 H's arranged in a triangle in the horizontal plane.
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
  function PCl5Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    Node.call( this );

    // atom nodes
    var centerNode = new AtomNode( Element.P, options.atomOptions );
    var topNode = new AtomNode( Element.Cl, options.atomOptions );
    var bottomNode = new AtomNode( Element.Cl, options.atomOptions );
    var rightNode = new AtomNode( Element.Cl, options.atomOptions );
    var topLeftNode = new AtomNode( Element.Cl, options.atomOptions );
    var bottomLeftNode = new AtomNode( Element.Cl, options.atomOptions );

    // rendering order
    var parentNode = new Node();
    this.addChild( parentNode );
    parentNode.addChild( rightNode );
    parentNode.addChild( bottomNode );
    parentNode.addChild( topLeftNode );
    parentNode.addChild( centerNode );
    parentNode.addChild( topNode );
    parentNode.addChild( bottomLeftNode );

    // layout
    var x = 0;
    var y = 0;
    centerNode.setTranslation( x, y );
    x = centerNode.centerX;
    y = centerNode.top;
    topNode.setTranslation( x, y );
    x = centerNode.centerX;
    y = centerNode.bottom;
    bottomNode.setTranslation( x, y );
    x = centerNode.right;
    y = centerNode.centerY;
    rightNode.setTranslation( x, y );
    x = centerNode.left + ( 0.25 * centerNode.width );
    y = centerNode.top + ( 0.25 * centerNode.height );
    topLeftNode.setTranslation( x, y );
    x = centerNode.left + ( 0.1 * centerNode.width );
    y = centerNode.bottom - ( 0.1 * centerNode.height );
    bottomLeftNode.setTranslation( x, y );

    // move origin to geometric center
    parentNode.center = Vector2.ZERO;
  }

  return inherit( Node, PCl5Node );
} );
