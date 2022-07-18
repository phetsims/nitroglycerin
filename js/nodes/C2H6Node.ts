// Copyright 2013-2022, University of Colorado Boulder

/**
 * C2H6 Molecule
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
export type C2H6NodeOptions = SelfOptions & MoleculeNodeOptions;

export default class C2H6Node extends MoleculeNode {

  public constructor( providedOptions?: C2H6NodeOptions ) {

    const atomOptions = providedOptions?.atomNodeOptions;

    // atoms
    const leftNode = new AtomNode( Element.C, atomOptions );
    const rightNode = new AtomNode( Element.C, merge( {
      centerX: leftNode.right + ( 0.25 * leftNode.width ),
      centerY: leftNode.centerY
    }, atomOptions ) );
    const smallTopLeftNode = new AtomNode( Element.H, merge( {
      centerX: leftNode.centerX,
      centerY: leftNode.top
    }, atomOptions ) );
    const smallBottomLeftNode = new AtomNode( Element.H, merge( {
      centerX: smallTopLeftNode.centerX,
      centerY: leftNode.bottom
    }, atomOptions ) );
    const smallLeftNode = new AtomNode( Element.H, merge( {
      centerX: leftNode.left,
      centerY: leftNode.centerY
    }, atomOptions ) );
    const smallTopRightNode = new AtomNode( Element.H, merge( {
      centerX: rightNode.centerX,
      centerY: rightNode.top
    }, atomOptions ) );
    const smallBottomRightNode = new AtomNode( Element.H, merge( {
      centerX: rightNode.centerX,
      centerY: rightNode.bottom
    }, atomOptions ) );
    const smallRightNode = new AtomNode( Element.H, merge( {
      centerX: rightNode.right,
      centerY: rightNode.centerY
    }, atomOptions ) );

    const atomNodes = [
      smallBottomRightNode, smallTopRightNode, rightNode, smallRightNode,
      smallLeftNode, leftNode, smallBottomLeftNode, smallTopLeftNode
    ];

    super( atomNodes, providedOptions );
  }
}

nitroglycerin.register( 'C2H6Node', C2H6Node );