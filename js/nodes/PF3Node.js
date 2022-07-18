// Copyright 2013-2021, University of Colorado Boulder

/**
 * PF3 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Vector2 from '../../../dot/js/Vector2.js';
import merge from '../../../phet-core/js/merge.js';
import { Node } from '../../../scenery/js/imports.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';

class PF3Node extends Node {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( { atomNodeOptions: {} }, options );

    // atoms
    const centerNode = new AtomNode( Element.P, options.atomNodeOptions );
    const leftNode = new AtomNode( Element.F, merge( {
      centerX: centerNode.left,
      centerY: centerNode.bottom - ( 0.25 * centerNode.height )
    }, options.atomNodeOptions ) );
    const rightNode = new AtomNode( Element.F, merge( {
      centerX: centerNode.right,
      centerY: leftNode.centerY
    }, options.atomNodeOptions ) );
    const bottomNode = new AtomNode( Element.F, merge( {
      centerX: centerNode.centerX,
      centerY: centerNode.bottom
    }, options.atomNodeOptions ) );

    assert && assert( !options.children, 'PF3Node sets children' );
    options.children = [ new Node( {
      children: [ leftNode, rightNode, centerNode, bottomNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];

    super( options );
  }
}

nitroglycerin.register( 'PF3Node', PF3Node );
export default PF3Node;