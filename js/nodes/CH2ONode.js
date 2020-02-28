// Copyright 2013-2020, University of Colorado Boulder

/**
 * CH2O Molecule
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
function CH2ONode( options ) {

  options = merge( { atomOptions: {} }, options );

  // atoms
  const leftNode = new AtomNode( Element.C, options.atomOptions );
  const smallOffset = 0.165 * leftNode.width;
  const rightNode = new AtomNode( Element.O, merge( {
    centerX: leftNode.right + ( 0.25 * leftNode.width ),
    centerY: leftNode.centerY
  }, options.atomOptions ) );
  const smallTopNode = new AtomNode( Element.H, merge( {
    centerX: leftNode.left + smallOffset,
    centerY: leftNode.top + smallOffset
  }, options.atomOptions ) );
  const smallBottomNode = new AtomNode( Element.H, merge( {
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

inherit( Node, CH2ONode );
export default CH2ONode;