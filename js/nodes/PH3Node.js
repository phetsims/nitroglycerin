// Copyright 2013-2015, University of Colorado Boulder

/**
 * PH3 Molecule
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
  function PH3Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var bigNode = new AtomNode( Element.P, options.atomOptions );
    var smallLeftNode = new AtomNode( Element.H, _.extend( {
      centerX: bigNode.left,
      centerY: bigNode.bottom - ( 0.25 * bigNode.height )
    }, options.atomOptions ) );
    var smallRightNode = new AtomNode( Element.H, _.extend( {
      centerX: bigNode.right,
      centerY: smallLeftNode.centerY
    }, options.atomOptions ) );
    var smallBottomNode = new AtomNode( Element.H, _.extend( {
      centerX: bigNode.centerX,
      centerY: bigNode.bottom
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ smallLeftNode, smallRightNode, bigNode, smallBottomNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'PH3Node', PH3Node );

  return inherit( Node, PH3Node );
} );
