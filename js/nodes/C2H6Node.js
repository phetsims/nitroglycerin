// Copyright 2013-2019, University of Colorado Boulder

/**
 * C2H6 Molecule
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
function C2H6Node( options ) {

  options = merge( { atomOptions: {} }, options );

  // atoms
  const leftNode = new AtomNode( Element.C, options.atomOptions );
  const rightNode = new AtomNode( Element.C, merge( {
    centerX: leftNode.right + ( 0.25 * leftNode.width ),
    centerY: leftNode.centerY
  }, options.atomOptions ) );
  const smallTopLeftNode = new AtomNode( Element.H, merge( {
    centerX: leftNode.centerX,
    centerY: leftNode.top
  }, options.atomOptions ) );
  const smallBottomLeftNode = new AtomNode( Element.H, merge( {
    centerX: smallTopLeftNode.centerX,
    centerY: leftNode.bottom
  }, options.atomOptions ) );
  const smallLeftNode = new AtomNode( Element.H, merge( {
    centerX: leftNode.left,
    centerY: leftNode.centerY
  }, options.atomOptions ) );
  const smallTopRightNode = new AtomNode( Element.H, merge( {
    centerX: rightNode.centerX,
    centerY: rightNode.top
  }, options.atomOptions ) );
  const smallBottomRightNode = new AtomNode( Element.H, merge( {
    centerX: rightNode.centerX,
    centerY: rightNode.bottom
  }, options.atomOptions ) );
  const smallRightNode = new AtomNode( Element.H, merge( {
    centerX: rightNode.right,
    centerY: rightNode.centerY
  }, options.atomOptions ) );

  options.children = [ new Node( {
    children: [ smallBottomRightNode, smallTopRightNode, rightNode, smallRightNode, smallLeftNode, leftNode, smallBottomLeftNode, smallTopLeftNode ],
    center: Vector2.ZERO // origin at geometric center
  } ) ];
  Node.call( this, options );
}

nitroglycerin.register( 'C2H6Node', C2H6Node );

inherit( Node, C2H6Node );
export default C2H6Node;