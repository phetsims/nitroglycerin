// Copyright 2013-2026, University of Colorado Boulder

/**
 * N2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import Element from '../Element.js';
import HorizontalMoleculeNode, { HorizontalMoleculeNodeOptions } from './HorizontalMoleculeNode.js';

type SelfOptions = EmptySelfOptions;
export type N2NodeOptions = SelfOptions & HorizontalMoleculeNodeOptions;

export default class N2Node extends HorizontalMoleculeNode {

  public constructor( providedOptions?: N2NodeOptions ) {
    super( [ Element.N, Element.N ], providedOptions );
  }
}
