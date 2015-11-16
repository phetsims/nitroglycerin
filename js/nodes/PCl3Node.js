// Copyright 2013-2015, University of Colorado Boulder

/**
 * PCl3 Molecule
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
  function PCl3Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var centerNode = new AtomNode( Element.P, options.atomOptions );
    var leftNode = new AtomNode( Element.Cl, _.extend( {
      centerX: centerNode.left,
      centerY: centerNode.bottom - ( 0.25 * centerNode.height )
    }, options.atomOptions ) );
    var rightNode = new AtomNode( Element.Cl, _.extend( {
      centerX: centerNode.right,
      centerY: leftNode.centerY
    }, options.atomOptions ) );
    var bottomNode = new AtomNode( Element.Cl, _.extend( {
      centerX: centerNode.centerX,
      centerY: centerNode.bottom
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ leftNode, rightNode, centerNode, bottomNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'PCl3Node', PCl3Node );

  return inherit( Node, PCl3Node );
} );
