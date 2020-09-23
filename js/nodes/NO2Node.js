// Copyright 2013-2020, University of Colorado Boulder

/**
 * NO2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Vector2 from '../../../dot/js/Vector2.js';
import merge from '../../../phet-core/js/merge.js';
import Node from '../../../scenery/js/nodes/Node.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';

class NO2Node extends Node {
  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( { atomOptions: {} }, options );

    // atoms
    const centerNode = new AtomNode( Element.N, options.atomOptions );
    const leftNode = new AtomNode( Element.O, merge( {
      centerX: centerNode.left,
      centerY: centerNode.centerY + ( 0.25 * centerNode.height )
    }, options.atomOptions ) );
    const rightNode = new AtomNode( Element.O, merge( {
      centerX: centerNode.right,
      centerY: leftNode.centerY
    }, options.atomOptions ) );

    assert && assert( !options.children, 'NO2Node sets children' );
    options.children = [ new Node( {
      children: [ leftNode, centerNode, rightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];

    super( options );
  }
}

nitroglycerin.register( 'NO2Node', NO2Node );
export default NO2Node;