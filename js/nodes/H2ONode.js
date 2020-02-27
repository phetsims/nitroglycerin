// Copyright 2013-2019, University of Colorado Boulder

/**
 * H2O Molecule
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
function H2ONode( options ) {

  options = merge( { atomOptions: {} }, options );

  // atoms
  const bigNode = new AtomNode( Element.O, options.atomOptions );
  const smallLeftNode = new AtomNode( Element.H, merge( {
    centerX: bigNode.left,
    centerY: bigNode.bottom - ( 0.25 * bigNode.height )
  }, options.atomOptions ) );
  const smallRightNode = new AtomNode( Element.H, merge( {
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

inherit( Node, H2ONode );
export default H2ONode;