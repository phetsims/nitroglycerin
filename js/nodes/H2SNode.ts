// Copyright 2013-2021, University of Colorado Boulder

/**
 * H2S Molecule
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
export type H2SNodeOptions = SelfOptions & MoleculeNodeOptions;

export default class H2SNode extends MoleculeNode {

  public constructor( providedOptions?: H2SNodeOptions ) {

    const atomOptions = providedOptions?.atomNodeOptions;

    // atoms
    const bigNode = new AtomNode( Element.S, atomOptions );
    const smallLeftNode = new AtomNode( Element.H, merge( {
      centerX: bigNode.left,
      centerY: bigNode.bottom - ( 0.25 * bigNode.height )
    }, atomOptions ) );
    const smallRightNode = new AtomNode( Element.H, merge( {
      centerX: bigNode.right,
      centerY: smallLeftNode.centerY
    }, atomOptions ) );

    const atomNodes = [ bigNode, smallLeftNode, smallRightNode ];

    super( atomNodes, providedOptions );
  }
}

nitroglycerin.register( 'H2SNode', H2SNode );