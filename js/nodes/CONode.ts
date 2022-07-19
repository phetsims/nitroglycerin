// Copyright 2013-2022, University of Colorado Boulder

/**
 * CO Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EmptyObjectType from '../../../phet-core/js/types/EmptyObjectType.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode, { HorizontalMoleculeNodeOptions } from './HorizontalMoleculeNode.js';

type SelfOptions = EmptyObjectType;
export type CONodeOptions = SelfOptions & HorizontalMoleculeNodeOptions;

class CONode extends HorizontalMoleculeNode {

  public constructor( providedOptions?: CONodeOptions ) {
    super( [ Element.C, Element.O ], providedOptions );
  }
}

nitroglycerin.register( 'CONode', CONode );
export default CONode;