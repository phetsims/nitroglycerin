// Copyright 2013-2020, University of Colorado Boulder

/**
 * CH3OH Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Vector2 from '../../../dot/js/Vector2.js';
import inherit from '../../../phet-core/js/inherit.js';
import merge from '../../../phet-core/js/merge.js';
import Node from '../../../scenery/js/nodes/Node.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';

/**
 * @param {Object} [options]
 * @constructor
 */
function CH3OHNode( options ) {

  options = merge( { atomOptions: {} }, options );

  // atoms
  const leftNode = new AtomNode( Element.C, options.atomOptions );
  const smallTopNode = new AtomNode( Element.H, merge( {
    centerX: leftNode.centerX,
    centerY: leftNode.top
  }, options.atomOptions ) );
  const smallBottomNode = new AtomNode( Element.H, merge( {
    centerX: smallTopNode.centerX,
    centerY: leftNode.bottom
  }, options.atomOptions ) );
  const smallLeftNode = new AtomNode( Element.H, merge( {
    centerX: leftNode.left,
    centerY: leftNode.centerY
  }, options.atomOptions ) );
  const rightNode = new AtomNode( Element.O, merge( {
    centerX: leftNode.right + ( 0.25 * leftNode.width ),
    centerY: leftNode.centerY
  }, options.atomOptions ) );
  const smallRightNode = new AtomNode( Element.H, merge( {
    centerX: rightNode.right,
    centerY: rightNode.centerY
  }, options.atomOptions ) );

  options.children = [ new Node( {
    children: [ smallBottomNode, smallTopNode, leftNode, smallLeftNode, smallRightNode, rightNode ],
    center: Vector2.ZERO // origin at geometric center
  } ) ];
  Node.call( this, options );
}

nitroglycerin.register( 'CH3OHNode', CH3OHNode );

inherit( Node, CH3OHNode );
export default CH3OHNode;