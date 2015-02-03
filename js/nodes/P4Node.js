// Copyright 2002-2015, University of Colorado

/**
 * P4 Molecule
 * Structure is tetrahedral
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
  function P4Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var topNode = new AtomNode( Element.P, options.atomOptions );
    var bottomLeftNode = new AtomNode( Element.P, _.extend( {
      x: topNode.left + ( 0.3 * topNode.width ),
      y: topNode.bottom + ( 0.2 * topNode.width )
    }, options.atomOptions ) );
    var bottomRightNode = new AtomNode( Element.P, _.extend( {
      x: topNode.right,
      y: topNode.bottom
    }, options.atomOptions ) );
    var bottomBackNode = new AtomNode( Element.P, _.extend( {
      x: topNode.left,
      y: topNode.centerY + ( 0.2 * topNode.height )
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ bottomBackNode, bottomRightNode, bottomLeftNode, topNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  return inherit( Node, P4Node );
} );
