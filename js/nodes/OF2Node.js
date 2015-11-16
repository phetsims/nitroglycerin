// Copyright 2013-2015, University of Colorado Boulder

/**
 * OF2 Molecule
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
  var nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function OF2Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var centerNode = new AtomNode( Element.O, options.atomOptions );
    var leftNode = new AtomNode( Element.F, _.extend( {
      centerX: centerNode.left,
      centerY: centerNode.centerY + ( 0.25 * centerNode.height )
    }, options.atomOptions ) );
    var rightNode = new AtomNode( Element.F, _.extend( {
      centerX: centerNode.right,
      centerY: centerNode.centerY + ( 0.25 * centerNode.height )
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ leftNode, centerNode, rightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'OF2Node', OF2Node );

  return inherit( Node, OF2Node );
} );
