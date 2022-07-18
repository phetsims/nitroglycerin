// Copyright 2013-2022, University of Colorado Boulder

/**
 * C2H4 Molecule
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

export type C2H4NodeOptions = SelfOptions & StrictOmit<NodeOptions, 'children'>;

export default class C2H4Node extends Node {

  public constructor( providedOptions?: C2H4NodeOptions ) {

    const options = optionize<C2H4NodeOptions, StrictOmit<SelfOptions, 'atomNodeOptions'>, NodeOptions>()( {
      // No defaults, but we set options.children below.
    }, providedOptions );

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

    options.children = [ new Node( {
      children: [ smallTopRightNode, smallTopLeftNode, bigLeftNode, bigRightNode, smallBottomLeftNode, smallBottomRightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];

    super( options );
  }
}

nitroglycerin.register( 'C2H4Node', C2H4Node );