// Copyright 2013-2021, University of Colorado Boulder

/**
 * S Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EmptyObjectType from '../../../phet-core/js/types/EmptyObjectType.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode, { HorizontalMoleculeNodeOptions } from './HorizontalMoleculeNode.js';

type SelfOptions = EmptyObjectType;
export type SNodeOptions = SelfOptions & HorizontalMoleculeNodeOptions;

export default class SNode extends HorizontalMoleculeNode {

  public constructor( providedOptions?: SNodeOptions ) {
    super( [ Element.S ], providedOptions );
  }
}

nitroglycerin.register( 'SNode', SNode );