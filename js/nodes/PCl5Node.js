// Copyright 2013-2020, University of Colorado Boulder

/**
 * PCl5 Molecule
 * Structure has 2 H's on the vertical axis, and 3 H's arranged in a triangle in the horizontal plane.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Vector2 from '../../../dot/js/Vector2.js';
import merge from '../../../phet-core/js/merge.js';
import Node from '../../../scenery/js/nodes/Node.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';

class PCl5Node extends Node {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( { atomOptions: {} }, options );

    // atoms
    const centerNode = new AtomNode( Element.P, options.atomOptions );
    const topNode = new AtomNode( Element.Cl, merge( {
      centerX: centerNode.centerX,
      centerY: centerNode.top
    }, options.atomOptions ) );
    const bottomNode = new AtomNode( Element.Cl, merge( {
      centerX: centerNode.centerX,
      centerY: centerNode.bottom
    }, options.atomOptions ) );
    const rightNode = new AtomNode( Element.Cl, merge( {
      centerX: centerNode.right,
      centerY: centerNode.centerY
    }, options.atomOptions ) );
    const topLeftNode = new AtomNode( Element.Cl, merge( {
      centerX: centerNode.left + ( 0.25 * centerNode.width ),
      centerY: centerNode.top + ( 0.25 * centerNode.height )
    }, options.atomOptions ) );
    const bottomLeftNode = new AtomNode( Element.Cl, merge( {
      centerX: centerNode.left + ( 0.1 * centerNode.width ),
      centerY: centerNode.bottom - ( 0.1 * centerNode.height )
    }, options.atomOptions ) );

    assert && assert( !options.children, 'PCl5Node sets children' );
    options.children = [ new Node( {
      children: [ rightNode, bottomNode, topLeftNode, centerNode, topNode, bottomLeftNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];

    super( options );
  }
}

nitroglycerin.register( 'PCl5Node', PCl5Node );
export default PCl5Node;