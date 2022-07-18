// Copyright 2013-2021, University of Colorado Boulder

// @ts-nocheck
/**
 * C2H4 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Vector2 from '../../../dot/js/Vector2.js';
import merge from '../../../phet-core/js/merge.js';
import { Node } from '../../../scenery/js/imports.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';

class C2H4Node extends Node {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( { atomNodeOptions: {} }, options );

    // atoms
    const bigLeftNode = new AtomNode( Element.C, options.atomNodeOptions );
    const smallOffset = 0.165 * bigLeftNode.width;
    const bigRightNode = new AtomNode( Element.C, merge( {
      left: bigLeftNode.centerX + ( 0.25 * bigLeftNode.width ),
      centerY: bigLeftNode.centerY
    }, options.atomNodeOptions ) );
    const smallTopLeftNode = new AtomNode( Element.H, merge( {
      centerX: bigLeftNode.left + smallOffset,
      centerY: bigLeftNode.top + smallOffset
    }, options.atomNodeOptions ) );
    const smallTopRightNode = new AtomNode( Element.H, merge( {
      centerX: bigRightNode.right - smallOffset,
      centerY: bigRightNode.top + smallOffset
    }, options.atomNodeOptions ) );
    const smallBottomLeftNode = new AtomNode( Element.H, merge( {
      centerX: bigLeftNode.left + smallOffset,
      centerY: bigLeftNode.bottom - smallOffset
    }, options.atomNodeOptions ) );
    const smallBottomRightNode = new AtomNode( Element.H, merge( {
      centerX: bigRightNode.right - smallOffset,
      centerY: bigRightNode.bottom - smallOffset
    }, options.atomNodeOptions ) );

    assert && assert( !options.children, 'C2H4Node sets children' );
    options.children = [ new Node( {
      children: [ smallTopRightNode, smallTopLeftNode, bigLeftNode, bigRightNode, smallBottomLeftNode, smallBottomRightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];

    super( options );
  }
}

nitroglycerin.register( 'C2H4Node', C2H4Node );
export default C2H4Node;