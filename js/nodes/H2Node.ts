// Copyright 2013-2020, University of Colorado Boulder

/**
 * H2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EmptyObjectType from '../../../phet-core/js/types/EmptyObjectType.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode, { HorizontalMoleculeNodeOptions } from './HorizontalMoleculeNode.js';

type SelfOptions = EmptyObjectType;
export type H2NodeOptions = SelfOptions & HorizontalMoleculeNodeOptions;

export default class H2Node extends HorizontalMoleculeNode {

  public constructor( providedOptions?: H2NodeOptions ) {
    super( [ Element.H, Element.H ], providedOptions );
  }
}

nitroglycerin.register( 'H2Node', H2Node );