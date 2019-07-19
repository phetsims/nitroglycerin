// Copyright 2013-2017, University of Colorado Boulder

/**
 * CH2O Molecule
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
  function CH2ONode( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var leftNode = new AtomNode( Element.C, options.atomOptions );
    var smallOffset = 0.165 * leftNode.width;
    var rightNode = new AtomNode( Element.O, _.extend( {
      centerX: leftNode.right + ( 0.25 * leftNode.width ),
      centerY: leftNode.centerY
    }, options.atomOptions ) );
    var smallTopNode = new AtomNode( Element.H, _.extend( {
      centerX: leftNode.left + smallOffset,
      centerY: leftNode.top + smallOffset
    }, options.atomOptions ) );
    var smallBottomNode = new AtomNode( Element.H, _.extend( {
      centerX: smallTopNode.centerX,
      centerY: leftNode.bottom - smallOffset
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ smallTopNode, leftNode, rightNode, smallBottomNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'CH2ONode', CH2ONode );

  return inherit( Node, CH2ONode );
} );
