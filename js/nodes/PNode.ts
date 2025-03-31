// Copyright 2025, University of Colorado Boulder

/**
 * P Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';
import MoleculeNode, { MoleculeNodeOptions } from './MoleculeNode.js';

type SelfOptions = EmptySelfOptions;
export type PNodeOptions = SelfOptions & MoleculeNodeOptions;

export default class PNode extends MoleculeNode {

  public constructor( providedOptions?: PNodeOptions ) {
    super( [ new AtomNode( Element.P, providedOptions?.atomNodeOptions ) ], providedOptions );
  }
}

nitroglycerin.register( 'PNode', PNode );