// Copyright 2013-2019, University of Colorado Boulder

/**
 * H2O Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  var Element = require( 'NITROGLYCERIN/Element' );
  var inherit = require( 'PHET_CORE/inherit' );
  var nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function H2ONode( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var bigNode = new AtomNode( Element.O, options.atomOptions );
    var smallLeftNode = new AtomNode( Element.H, _.extend( {
      centerX: bigNode.left,
      centerY: bigNode.bottom - ( 0.25 * bigNode.height )
    }, options.atomOptions ) );
    var smallRightNode = new AtomNode( Element.H, _.extend( {
      centerX: bigNode.right,
      centerY: smallLeftNode.centerY
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ bigNode, smallLeftNode, smallRightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'H2ONode', H2ONode );

  return inherit( Node, H2ONode );
} );
