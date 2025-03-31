// Copyright 2025, University of Colorado Boulder

//TODO https://github.com/phetsims/balancing-chemical-equations/issues/170 Structure has not been reviewed.
/**
 * H2O2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';
import MoleculeNode, { MoleculeNodeOptions } from './MoleculeNode.js';

type SelfOptions = EmptySelfOptions;
export type H2O2NodeOptions = SelfOptions & MoleculeNodeOptions;

class H2O2Node extends MoleculeNode {

  public constructor( providedOptions?: H2O2NodeOptions ) {

    const atomNodeOptions = providedOptions?.atomNodeOptions;

    // atoms
    const bigLeftNode = new AtomNode( Element.O, atomNodeOptions );
    const bigRightNode = new AtomNode( Element.O, atomNodeOptions );
    const smallLeftNode = new AtomNode( Element.H, atomNodeOptions );
    const smallRightNode = new AtomNode( Element.H, atomNodeOptions );

    // Layout
    bigRightNode.centerX = bigLeftNode.right;
    bigRightNode.centerY = bigLeftNode.bottom - ( 0.25 * bigLeftNode.height );
    smallLeftNode.centerX = bigLeftNode.left;
    smallLeftNode.bottom = bigLeftNode.bottom;
    smallRightNode.centerX = bigRightNode.right;
    smallRightNode.top = bigRightNode.top;

    const atomNodes = [ bigLeftNode, smallRightNode, bigRightNode, smallLeftNode ];

    super( atomNodes, providedOptions );
  }
}

nitroglycerin.register( 'H2O2Node', H2O2Node );
export default H2O2Node;