// Copyright 2013-2021, University of Colorado Boulder

// @ts-nocheck
/**
 * OF2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Vector2 from '../../../dot/js/Vector2.js';
import merge from '../../../phet-core/js/merge.js';
import { Node } from '../../../scenery/js/imports.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';

class OF2Node extends Node {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( { atomNodeOptions: {} }, options );

    // atoms
    const centerNode = new AtomNode( Element.O, options.atomNodeOptions );
    const leftNode = new AtomNode( Element.F, merge( {
      centerX: centerNode.left,
      centerY: centerNode.centerY + ( 0.25 * centerNode.height )
    }, options.atomNodeOptions ) );
    const rightNode = new AtomNode( Element.F, merge( {
      centerX: centerNode.right,
      centerY: centerNode.centerY + ( 0.25 * centerNode.height )
    }, options.atomNodeOptions ) );

    assert && assert( !options.children, 'OF2Node sets children' );
    options.children = [ new Node( {
      children: [ leftNode, centerNode, rightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];

    super( options );
  }
}

nitroglycerin.register( 'OF2Node', OF2Node );
export default OF2Node;