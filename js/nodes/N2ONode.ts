// Copyright 2013-2020, University of Colorado Boulder

/**
 * N2O Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EmptyObjectType from '../../../phet-core/js/types/EmptyObjectType.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode, { HorizontalMoleculeNodeOptions } from './HorizontalMoleculeNode.js';

type SelfOptions = EmptyObjectType;
export type N2ONodeOptions = SelfOptions & HorizontalMoleculeNodeOptions;

export default class N2ONode extends HorizontalMoleculeNode {

  public constructor( providedOptions?: N2ONodeOptions ) {
    super( [ Element.N, Element.N, Element.O ], providedOptions );
  }
}

nitroglycerin.register( 'N2ONode', N2ONode );