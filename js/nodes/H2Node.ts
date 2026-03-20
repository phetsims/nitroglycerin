// Copyright 2013-2026, University of Colorado Boulder

/**
 * H2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import Element from '../Element.js';
import HorizontalMoleculeNode, { HorizontalMoleculeNodeOptions } from './HorizontalMoleculeNode.js';

type SelfOptions = EmptySelfOptions;
export type H2NodeOptions = SelfOptions & HorizontalMoleculeNodeOptions;

export default class H2Node extends HorizontalMoleculeNode {

  public constructor( providedOptions?: H2NodeOptions ) {
    super( [ Element.H, Element.H ], providedOptions );
  }
}
