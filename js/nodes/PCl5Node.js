// Copyright 2013-2017, University of Colorado Boulder

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
  var nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function PCl5Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var centerNode = new AtomNode( Element.P, options.atomOptions );
    var topNode = new AtomNode( Element.Cl, _.extend( {
      centerX: centerNode.centerX,
      centerY: centerNode.top
    }, options.atomOptions ) );
    var bottomNode = new AtomNode( Element.Cl, _.extend( {
      centerX: centerNode.centerX,
      centerY: centerNode.bottom
    }, options.atomOptions ) );
    var rightNode = new AtomNode( Element.Cl, _.extend( {
      centerX: centerNode.right,
      centerY: centerNode.centerY
    }, options.atomOptions ) );
    var topLeftNode = new AtomNode( Element.Cl, _.extend( {
      centerX: centerNode.left + ( 0.25 * centerNode.width ),
      centerY: centerNode.top + ( 0.25 * centerNode.height )
    }, options.atomOptions ) );
    var bottomLeftNode = new AtomNode( Element.Cl, _.extend( {
      centerX: centerNode.left + ( 0.1 * centerNode.width ),
      centerY: centerNode.bottom - ( 0.1 * centerNode.height )
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ rightNode, bottomNode, topLeftNode, centerNode, topNode, bottomLeftNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'PCl5Node', PCl5Node );

  return inherit( Node, PCl5Node );
} );
