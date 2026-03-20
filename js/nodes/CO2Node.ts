// Copyright 2013-2026, University of Colorado Boulder

/**
 * CO2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import Element from '../Element.js';
import HorizontalMoleculeNode, { HorizontalMoleculeNodeOptions } from './HorizontalMoleculeNode.js';

type SelfOptions = EmptySelfOptions;
export type CO2NodeOptions = SelfOptions & HorizontalMoleculeNodeOptions;

class CO2Node extends HorizontalMoleculeNode {

  public constructor( providedOptions?: CO2NodeOptions ) {
    super( [ Element.O, Element.C, Element.O ], providedOptions );
  }
}

export default CO2Node;
