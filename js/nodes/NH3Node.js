// Copyright 2013-2021, University of Colorado Boulder

/**
 * NH3 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Vector2 from '../../../dot/js/Vector2.js';
import merge from '../../../phet-core/js/merge.js';
import { Node } from '../../../scenery/js/imports.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';

class NH3Node extends Node {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( { atomOptions: {} }, options );

    // atoms
    const bigNode = new AtomNode( Element.N, options.atomOptions );
    const smallLeftNode = new AtomNode( Element.H, merge( {
      centerX: bigNode.left,
      centerY: bigNode.bottom - ( 0.25 * bigNode.height )
    }, options.atomOptions ) );
    const smallRightNode = new AtomNode( Element.H, merge( {
      centerX: bigNode.right,
      centerY: smallLeftNode.centerY
    }, options.atomOptions ) );
    const smallBottomNode = new AtomNode( Element.H, merge( {
      centerX: bigNode.centerX,
      centerY: bigNode.bottom
    }, options.atomOptions ) );

    assert && assert( !options.children, 'NH3Node sets children' );
    options.children = [ new Node( {
      children: [ smallLeftNode, smallRightNode, bigNode, smallBottomNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];

    super( options );
  }
}

nitroglycerin.register( 'NH3Node', NH3Node );
export default NH3Node;