// Copyright 2013-2021, University of Colorado Boulder

// @ts-nocheck
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
import merge from '../../../phet-core/js/merge.js';
import { Node } from '../../../scenery/js/imports.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';

class HorizontalMoleculeNode extends Node {
  /**
   * @param {Array.<Element>} elements
   * @param {Object} [options]
   */
  constructor( elements, options ) {

    options = merge( {
      atomOptions: {},
      direction: 'leftToRight', // {string} direction of overlap, leftToRight or rightToLeft
      overlapPercent: 0.25 // {number} amount of overlap between atoms
    }, options );

    // add atoms from left to right, overlapping consistently
    const children = [];
    let previousNode = null;
    _.each( elements, element => {
      const currentNode = new AtomNode( element, options.atomOptions );
      children.push( currentNode );
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

    assert && assert( !options.children, 'HorizontalMoleculeNode sets children' );
    options.children = [ new Node( {
      children: children,
      center: Vector2.ZERO // origin at geometric center
    } ) ];

    super( options );
  }
}

nitroglycerin.register( 'HorizontalMoleculeNode', HorizontalMoleculeNode );
export default HorizontalMoleculeNode;