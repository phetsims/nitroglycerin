// Copyright 2013-2021, University of Colorado Boulder

/**
 * CH3OH Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Vector2 from '../../../dot/js/Vector2.js';
import merge from '../../../phet-core/js/merge.js';
import { Node } from '../../../scenery/js/imports.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';

class CH3OHNode extends Node {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( { atomNodeOptions: {} }, options );

    // atoms
    const leftNode = new AtomNode( Element.C, options.atomNodeOptions );
    const smallTopNode = new AtomNode( Element.H, merge( {
      centerX: leftNode.centerX,
      centerY: leftNode.top
    }, options.atomNodeOptions ) );
    const smallBottomNode = new AtomNode( Element.H, merge( {
      centerX: smallTopNode.centerX,
      centerY: leftNode.bottom
    }, options.atomNodeOptions ) );
    const smallLeftNode = new AtomNode( Element.H, merge( {
      centerX: leftNode.left,
      centerY: leftNode.centerY
    }, options.atomNodeOptions ) );
    const rightNode = new AtomNode( Element.O, merge( {
      centerX: leftNode.right + ( 0.25 * leftNode.width ),
      centerY: leftNode.centerY
    }, options.atomNodeOptions ) );
    const smallRightNode = new AtomNode( Element.H, merge( {
      centerX: rightNode.right,
      centerY: rightNode.centerY
    }, options.atomNodeOptions ) );

    assert && assert( !options.children, 'CH3OHNode sets children' );
    options.children = [ new Node( {
      children: [ smallBottomNode, smallTopNode, leftNode, smallLeftNode, smallRightNode, rightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];

    super( options );
  }
}

nitroglycerin.register( 'CH3OHNode', CH3OHNode );
export default CH3OHNode;