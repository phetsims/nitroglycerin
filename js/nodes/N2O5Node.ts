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

    const atom1Node = new AtomNode( Element.O, atomNodeOptions );
    const atom2Node = new AtomNode( Element.O, atomNodeOptions );
    const atom3Node = new AtomNode( Element.O, atomNodeOptions );
    const atom4Node = new AtomNode( Element.O, atomNodeOptions );
    const atom5Node = new AtomNode( Element.O, atomNodeOptions );
    const atom6Node = new AtomNode( Element.N, atomNodeOptions );
    const atom7Node = new AtomNode( Element.N, atomNodeOptions );

    atom2Node.left = atom1Node.right;
    atom2Node.top = atom1Node.top;
    atom3Node.left = atom2Node.right;
    atom3Node.top = atom2Node.top;
    atom4Node.centerX = atom1Node.right;
    atom4Node.top = atom1Node.bottom;
    atom5Node.centerX = atom2Node.right;
    atom5Node.top = atom4Node.top;
    atom6Node.centerX = atom4Node.centerX;
    atom6Node.centerY = atom4Node.top;
    atom7Node.centerX = atom5Node.centerX;
    atom7Node.centerY = atom5Node.top;

    super( [ atom1Node, atom2Node, atom3Node, atom4Node, atom5Node, atom6Node, atom7Node ], providedOptions );
  }
}

nitroglycerin.register( 'N2O5Node', N2O5Node );