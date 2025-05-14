// Copyright 2025, University of Colorado Boulder

/**
 * P2O5 molecules
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';
import MoleculeNode, { MoleculeNodeOptions } from './MoleculeNode.js';

type SelfOptions = EmptySelfOptions;
export type P2O5NodeOptions = SelfOptions & MoleculeNodeOptions;

export default class P2O5Node extends MoleculeNode {

  public constructor( providedOptions?: P2O5NodeOptions ) {

    const atomNodeOptions = providedOptions?.atomNodeOptions;

    // Atoms of each species, numbered from left to right ...
    const O1 = new AtomNode( Element.O, atomNodeOptions );
    const O2 = new AtomNode( Element.O, atomNodeOptions );
    const O3 = new AtomNode( Element.O, atomNodeOptions );
    const O4 = new AtomNode( Element.O, atomNodeOptions );
    const O5 = new AtomNode( Element.O, atomNodeOptions );
    const P1 = new AtomNode( Element.P, atomNodeOptions );
    const P2 = new AtomNode( Element.P, atomNodeOptions );

    const atomNodes = [ O4, P2, O5, O2, P1, O3, O1 ];

    // Layout is relative to P1, the leftmost P atom.
    P2.left = P1.right - 5;
    P2.centerY = P1.centerY - 5;

    O1.centerX = P1.left;
    O1.centerY = P1.centerY;

    O2.centerX = P1.centerX - 5;
    O2.centerY = P1.top;

    O3.centerX = P1.right;
    O3.top = P1.top;

    O4.centerX = P2.centerX + 5;
    O4.centerY = P2.bottom - 5;

    O5.centerX = P2.right;
    O5.centerY = P2.top + 5;

    super( atomNodes, providedOptions );
  }
}

nitroglycerin.register( 'P2O5Node', P2O5Node );