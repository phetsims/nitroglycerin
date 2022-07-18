// Copyright 2013-2021, University of Colorado Boulder

/**
 * Base class for molecules with N atoms aligned on the horizontal axis, for N > 0.
 * Note that here is technically no such thing as a single-atom molecule,
 * but allowing N=1 simplifies the Equation model.
 * <p/>
 * Origin is at geometric center of the node's bounding rectangle.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import Vector2 from '../../../dot/js/Vector2.js';
import optionize from '../../../phet-core/js/optionize.js';
import StrictOmit from '../../../phet-core/js/types/StrictOmit.js';
import { Node, NodeOptions } from '../../../scenery/js/imports.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode, { AtomNodeOptions } from './AtomNode.js';
import Element from '../Element.js';

type SelfOptions = {

  // options propagated to each AtomNode
  atomNodeOptions?: AtomNodeOptions;

  // direction of overlap, leftToRight or rightToLeft
  direction?: 'leftToRight' | 'rightToLeft';

  // amount of overlap between atoms
  overlapPercent?: 0.25;
};

export type HorizontalMoleculeNodeOptions = SelfOptions & StrictOmit<NodeOptions, 'children'>;

export default class HorizontalMoleculeNode extends Node {

  protected constructor( elements: Element[], providedOptions?: HorizontalMoleculeNodeOptions ) {

    const options = optionize<HorizontalMoleculeNodeOptions, StrictOmit<SelfOptions, 'atomNodeOptions'>, NodeOptions>()( {
      direction: 'leftToRight',
      overlapPercent: 0.25
    }, providedOptions );

    // Add atoms from left to right, overlapping consistently.
    const atomNodes: AtomNode[] = [];
    let previousNode: Node | null = null;
    elements.forEach( element => {
      const currentNode = new AtomNode( element, options.atomNodeOptions );
      atomNodes.push( currentNode );
      if ( previousNode !== null ) {
        const overlap = ( options.overlapPercent * currentNode.width );
        if ( options.direction === 'leftToRight' ) {
          currentNode.left = previousNode.right - overlap;
        }
        else {
          currentNode.right = previousNode.left + overlap;
        }
      }
      previousNode = currentNode;
    } );

    options.children = [ new Node( {
      children: atomNodes,
      center: Vector2.ZERO // origin at geometric center
    } ) ];

    super( options );
  }
}

nitroglycerin.register( 'HorizontalMoleculeNode', HorizontalMoleculeNode );