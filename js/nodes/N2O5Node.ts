// Copyright 2025, University of Colorado Boulder

//TODO https://github.com/phetsims/balancing-chemical-equations/issues/170 Structure has not been reviewed.
/**
 * N2O5 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import { HorizontalMoleculeNodeOptions } from './HorizontalMoleculeNode.js';
import AtomNode from './AtomNode.js';
import MoleculeNode from './MoleculeNode.js';

type SelfOptions = EmptySelfOptions;
export type N2O5NodeOptions = SelfOptions & HorizontalMoleculeNodeOptions;

export default class N2O5Node extends MoleculeNode {

  public constructor( providedOptions?: N2O5NodeOptions ) {

    const atomNodeOptions = providedOptions?.atomNodeOptions;

    // Atoms, from left to right, top to bottom ...
    const ONode1 = new AtomNode( Element.O, atomNodeOptions );
    const ONode2 = new AtomNode( Element.O, atomNodeOptions );
    const ONode3 = new AtomNode( Element.O, atomNodeOptions );
    const ONode4 = new AtomNode( Element.O, atomNodeOptions );
    const ONode5 = new AtomNode( Element.O, atomNodeOptions );
    const NNode1 = new AtomNode( Element.N, atomNodeOptions );
    const NNode2 = new AtomNode( Element.N, atomNodeOptions );

    ONode2.left = ONode1.right;
    ONode2.top = ONode1.top;
    ONode3.left = ONode2.right;
    ONode3.top = ONode2.top;
    ONode4.centerX = ONode1.right;
    ONode4.top = ONode1.bottom;
    ONode5.centerX = ONode2.right;
    ONode5.top = ONode4.top;
    NNode1.centerX = ONode4.centerX;
    NNode1.centerY = ONode4.top;
    NNode2.centerX = ONode5.centerX;
    NNode2.centerY = ONode5.top;

    // super( [ atom4Node, atom5Node, atom1Node, atom6Node, atom2Node, atom7Node, atom3Node ], providedOptions );
    super( [ ONode5, ONode1, NNode1, ONode2, NNode2, ONode3, ONode4 ], providedOptions );
  }
}

nitroglycerin.register( 'N2O5Node', N2O5Node );