// Copyright 2013-2019, University of Colorado Boulder

/**
 * OF2 Molecule
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
function OF2Node( options ) {

  options = merge( { atomOptions: {} }, options );

  // atoms
  const centerNode = new AtomNode( Element.O, options.atomOptions );
  const leftNode = new AtomNode( Element.F, merge( {
    centerX: centerNode.left,
    centerY: centerNode.centerY + ( 0.25 * centerNode.height )
  }, options.atomOptions ) );
  const rightNode = new AtomNode( Element.F, merge( {
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

inherit( Node, OF2Node );
export default OF2Node;