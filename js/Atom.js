// Copyright 2013-2021, University of Colorado Boulder

// @ts-nocheck
/**
 * Object for actual element properties (symbol, radius, etc.)
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import Element from './Element.js';
import nitroglycerin from './nitroglycerin.js';

let idCounter = 1;

class Atom {

  /**
   * @param {Element} element
   */
  constructor( element ) {

    // @public (read-only)
    this.element = element;
    this.symbol = element.symbol;
    this.covalentRadius = element.covalentRadius;
    this.covalentDiameter = element.covalentRadius * 2;
    this.electronegativity = element.electronegativity;
    this.atomicWeight = element.atomicWeight;
    this.color = element.color;

    // IDs for uniqueness and fast lookups
    this.reference = ( idCounter++ ).toString( 16 );
    this.id = `${this.symbol}_${this.reference}`;
  }

  /**
   * @param {string} symbol
   * @returns {Atom}
   * @public
   */
  static createAtomFromSymbol( symbol ) {
    return new Atom( Element.getElementBySymbol( symbol ) );
  }

  /**
   * @param {Atom} atom
   * @returns {boolean}
   * @public
   */
  hasSameElement( atom ) {
    return this.element.isSameElement( atom.element );
  }

  // @public
  isHydrogen() {
    return this.element.isHydrogen();
  }

  // @public
  isCarbon() {
    return this.element.isCarbon();
  }

  // @public
  isOxygen() {
    return this.element.isOxygen();
  }

  // @public
  toString() {
    return this.symbol;
  }
}

nitroglycerin.register( 'Atom', Atom );
export default Atom;