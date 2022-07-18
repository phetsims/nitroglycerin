// Copyright 2013-2022, University of Colorado Boulder

/**
 * C2H5Cl Molecule
 * Structure is similar to C2H6, but with Cl replacing one of the H's.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Vector2 from '../../../dot/js/Vector2.js';
import merge from '../../../phet-core/js/merge.js';
import optionize from '../../../phet-core/js/optionize.js';
import StrictOmit from '../../../phet-core/js/types/StrictOmit.js';
import { Node, NodeOptions } from '../../../scenery/js/imports.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode, { AtomNodeOptions } from './AtomNode.js';

type SelfOptions = {
  atomNodeOptions?: AtomNodeOptions;
};

export type C2H5ClNodeOptions = SelfOptions & StrictOmit<NodeOptions, 'children'>;

export default class C2H5ClNode extends Node {

  public constructor( providedOptions?: C2H5ClNodeOptions ) {

    const options = optionize<C2H5ClNodeOptions, StrictOmit<SelfOptions, 'atomNodeOptions'>, NodeOptions>()( {
      // No defaults, but we set options.children below.
    }, providedOptions );

    // atoms
    const leftNode = new AtomNode( Element.C, options.atomNodeOptions );
    const centerNode = new AtomNode( Element.C, merge( {
      centerX: leftNode.right + ( 0.25 * leftNode.width ),
      centerY: leftNode.centerY
    }, options.atomNodeOptions ) );
    const smallTopLeftNode = new AtomNode( Element.H, merge( {
      centerX: leftNode.centerX,
      centerY: leftNode.top
    }, options.atomNodeOptions ) );
    const smallBottomLeftNode = new AtomNode( Element.H, merge( {
      centerX: smallTopLeftNode.centerX,
      centerY: leftNode.bottom
    }, options.atomNodeOptions ) );
    const smallLeftNode = new AtomNode( Element.H, merge( {
      centerX: leftNode.left,
      centerY: leftNode.centerY
    }, options.atomNodeOptions ) );
    const smallTopRightNode = new AtomNode( Element.H, merge( {
      centerX: centerNode.centerX,
      centerY: centerNode.top
    }, options.atomNodeOptions ) );
    const smallBottomRightNode = new AtomNode( Element.H, merge( {
      centerX: centerNode.centerX,
      centerY: centerNode.bottom
    }, options.atomNodeOptions ) );
    const rightNode = new AtomNode( Element.Cl, merge( {
      left: centerNode.centerX + ( 0.11 * leftNode.width ),
      centerY: centerNode.centerY
    }, options.atomNodeOptions ) );

    options.children = [ new Node( {
      children: [
        smallBottomRightNode, smallTopRightNode, centerNode, rightNode,
        smallLeftNode, leftNode, smallBottomLeftNode, smallTopLeftNode
      ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];

    super( options );
  }
}

nitroglycerin.register( 'C2H5ClNode', C2H5ClNode );