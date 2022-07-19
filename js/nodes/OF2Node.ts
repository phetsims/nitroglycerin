// Copyright 2013-2022, University of Colorado Boulder

/**
 * OF2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import { combineOptions } from '../../../phet-core/js/optionize.js';
import EmptyObjectType from '../../../phet-core/js/types/EmptyObjectType.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode, { AtomNodeOptions } from './AtomNode.js';
import MoleculeNode, { MoleculeNodeOptions } from './MoleculeNode.js';

type SelfOptions = EmptyObjectType;
export type OF2NodeOptions = SelfOptions & MoleculeNodeOptions;

export default class OF2Node extends MoleculeNode {

  public constructor( providedOptions?: OF2NodeOptions ) {

    const atomNodeOptions = providedOptions?.atomNodeOptions;

    // atoms
    const centerNode = new AtomNode( Element.O, atomNodeOptions );
    const leftNode = new AtomNode( Element.F, combineOptions<AtomNodeOptions>( {
      centerX: centerNode.left,
      centerY: centerNode.centerY + ( 0.25 * centerNode.height )
    }, atomNodeOptions ) );
    const rightNode = new AtomNode( Element.F, combineOptions<AtomNodeOptions>( {
      centerX: centerNode.right,
      centerY: centerNode.centerY + ( 0.25 * centerNode.height )
    }, atomNodeOptions ) );

    const atomNodes = [ leftNode, centerNode, rightNode ];

    super( atomNodes, providedOptions );
  }
}

nitroglycerin.register( 'OF2Node', OF2Node );