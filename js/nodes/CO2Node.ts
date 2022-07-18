// Copyright 2013-2020, University of Colorado Boulder

/**
 * CO2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EmptyObjectType from '../../../phet-core/js/types/EmptyObjectType.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode, { HorizontalMoleculeNodeOptions } from './HorizontalMoleculeNode.js';

type SelfOptions = EmptyObjectType;
export type CO2NodeOptions = SelfOptions & HorizontalMoleculeNodeOptions;

class CO2Node extends HorizontalMoleculeNode {

  public constructor( providedOptions?: CO2NodeOptions ) {
    super( [ Element.O, Element.C, Element.O ], providedOptions );
  }
}

nitroglycerin.register( 'CO2Node', CO2Node );
export default CO2Node;