// Copyright 2013-2026, University of Colorado Boulder

/**
 * NO Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import Element from '../Element.js';
import HorizontalMoleculeNode, { HorizontalMoleculeNodeOptions } from './HorizontalMoleculeNode.js';

type SelfOptions = EmptySelfOptions;
export type NONodeOptions = SelfOptions & HorizontalMoleculeNodeOptions;

export default class NONode extends HorizontalMoleculeNode {

  public constructor( providedOptions?: NONodeOptions ) {
    super( [ Element.N, Element.O ], providedOptions );
  }
}
