// Copyright 2013-2020, University of Colorado Boulder

/**
 * CH4 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Vector2 from '../../../dot/js/Vector2.js';
import merge from '../../../phet-core/js/merge.js';
import { Node } from '../../../scenery/js/imports.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';

class CH4Node extends Node {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( { atomOptions: {} }, options );

    // atoms
    const bigNode = new AtomNode( Element.C, options.atomOptions );
    const smallOffset = 0.165 * bigNode.width;
    const smallTopLeftNode = new AtomNode( Element.H, merge( {
      centerX: bigNode.left + smallOffset,
      centerY: bigNode.top + smallOffset
    }, options.atomOptions ) );
    const smallTopRightNode = new AtomNode( Element.H, merge( {
      centerX: bigNode.right - smallOffset,
      centerY: smallTopLeftNode.centerY
    }, options.atomOptions ) );
    const smallBottomLeftNode = new AtomNode( Element.H, merge( {
      centerX: smallTopLeftNode.centerX,
      centerY: bigNode.bottom - smallOffset
    }, options.atomOptions ) );
    const smallBottomRightNode = new AtomNode( Element.H, merge( {
      centerX: smallTopRightNode.centerX,
      centerY: smallBottomLeftNode.centerY
    }, options.atomOptions ) );

    assert && assert( !options.children, 'CH4Node sets children' );
    options.children = [ new Node( {
      children: [ smallTopRightNode, smallBottomLeftNode, bigNode, smallTopLeftNode, smallBottomRightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];

    super( options );
  }
}

nitroglycerin.register( 'CH4Node', CH4Node );
export default CH4Node;