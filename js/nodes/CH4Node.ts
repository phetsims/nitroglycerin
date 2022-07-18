// Copyright 2013-2021, University of Colorado Boulder

/**
 * CH4 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import merge from '../../../phet-core/js/merge.js';
import EmptyObjectType from '../../../phet-core/js/types/EmptyObjectType.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';
import MoleculeNode, { MoleculeNodeOptions } from './MoleculeNode.js';

type SelfOptions = EmptyObjectType;
export type CH4NodeOptions = SelfOptions & MoleculeNodeOptions;

export default class CH4Node extends MoleculeNode {

  public constructor( providedOptions?: CH4NodeOptions ) {

    const atomOptions = providedOptions?.atomNodeOptions;

    // atoms
    const bigNode = new AtomNode( Element.C, atomOptions );
    const smallOffset = 0.165 * bigNode.width;
    const smallTopLeftNode = new AtomNode( Element.H, merge( {
      centerX: bigNode.left + smallOffset,
      centerY: bigNode.top + smallOffset
    }, atomOptions ) );
    const smallTopRightNode = new AtomNode( Element.H, merge( {
      centerX: bigNode.right - smallOffset,
      centerY: smallTopLeftNode.centerY
    }, atomOptions ) );
    const smallBottomLeftNode = new AtomNode( Element.H, merge( {
      centerX: smallTopLeftNode.centerX,
      centerY: bigNode.bottom - smallOffset
    }, atomOptions ) );
    const smallBottomRightNode = new AtomNode( Element.H, merge( {
      centerX: smallTopRightNode.centerX,
      centerY: smallBottomLeftNode.centerY
    }, atomOptions ) );

    const atomNodes = [ smallTopRightNode, smallBottomLeftNode, bigNode, smallTopLeftNode, smallBottomRightNode ];

    super( atomNodes, providedOptions );
  }
}

nitroglycerin.register( 'CH4Node', CH4Node );