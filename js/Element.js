// Copyright 2013-2020, University of Colorado Boulder

/**
 * Object for actual element properties (symbol, radius, etc.)
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import PhetColorScheme from '../../scenery-phet/js/PhetColorScheme.js';
import nitroglycerin from './nitroglycerin.js';

class Element {

  /**
   * @param symbol {string}
   * @param covalentRadius {number} Covalent radius, in picometers. For a quick chart,
   *        see http://en.wikipedia.org/wiki/Atomic_radii_of_the_elements_(data_page)
   * @param vanDerWaalsRadius {number} Van der Waals radius, in picometers. See chart at
   *        http://en.wikipedia.org/wiki/Atomic_radii_of_the_elements_(data_page)
   * @param electronegativity {number|null} in Pauling units, see
   *        https://secure.wikimedia.org/wikipedia/en/wiki/Electronegativity, is null when undefined for an element
   *        (as is the case for noble gasses)
   * @param atomicWeight {number} In atomic mass units (u). from http://www.webelements.com/periodicity/atomic_weight/
   * @param color {Color|string} Color used in visual representations
   */
  constructor( symbol, covalentRadius, vanDerWaalsRadius, electronegativity, atomicWeight, color ) {

    // @public (read-only)
    this.symbol = symbol;
    this.covalentRadius = covalentRadius;
    this.vanDerWaalsRadius = vanDerWaalsRadius;
    this.electronegativity = electronegativity;
    this.atomicWeight = atomicWeight;
    this.color = color;
  }

  /**
   * @param {string} symbol
   * @returns {Element}
   * @public
   */
  static getElementBySymbol( symbol ) {
    assert && assert( Element.elementMap[ symbol ], 'Element not found: ' + symbol );
    return Element.elementMap[ symbol ];
  }

  // @public
  isSameElement( element ) {
    return element.symbol === this.symbol;
  }

  // @public
  isHydrogen() {
    return this.isSameElement( Element.H );
  }

  // @public
  isCarbon() {
    return this.isSameElement( Element.C );
  }

  // @public
  isOxygen() {
    return this.isSameElement( Element.O );
  }

  // @public
  toString() {
    return this.symbol;
  }
}

nitroglycerin.register( 'Element', Element );

// @public @static
Element.Ar = new Element( 'Ar', 97, 188, null, 39.948, '#FFAFAF' );
Element.B = new Element( 'B', 85, 192, 2.04, 10.811, 'rgb(255,170,119)' ); // peach/salmon colored, CPK coloring
Element.Be = new Element( 'Be', 105, 153, 1.57, 9.012182, 'rgb(194,255,95)' ); // beryllium
Element.Br = new Element( 'Br', 114, 185, 2.96, 79.904, 'rgb(190,30,20)' ); // brown
Element.C = new Element( 'C', 77, 170, 2.55, 12.0107, 'rgb(178,178,178)' );
Element.Cl = new Element( 'Cl', 100, 175, 3.16, 35.4527, 'rgb(136,242,21)' );
Element.F = new Element( 'F', 72, 147, 3.98, 18.9984032, 'rgb(245,255,36)' );
Element.H = new Element( 'H', 37, 120, 2.20, 1.00794, '#ffffff' );
Element.I = new Element( 'I', 133, 198, 2.66, 126.90447, '#940094' ); // dark violet, CPK coloring
Element.N = new Element( 'N', 75, 155, 3.04, 14.00674, '#0000ff' );
Element.Ne = new Element( 'Ne', 69, 154, null, 20.1797, '#1AFFFB' );
Element.O = new Element( 'O', 73, 152, 3.44, 15.9994, PhetColorScheme.RED_COLORBLIND );
Element.P = new Element( 'P', 110, 180, 2.19, 30.973762, 'rgb(255,154,0)' );
Element.S = new Element( 'S', 103, 180, 2.58, 32.066, 'rgb(212,181,59)' );
Element.Si = new Element( 'Si', 118, 210, 1.90, 28.0855, 'rgb(240,200,160)' ); // tan, Jmol coloring listed from https://secure.wikimedia.org/wikipedia/en/wiki/CPK_coloring
Element.Sn = new Element( 'Sn', 145, 217, 1.96, 118.710, '#668080' ); // tin
Element.Xe = new Element( 'Xe', 108, 216, 2.60, 131.293, '#429eb0' ); // radius is based on calculated (not empirical) data

// @public @static
Element.elements = [
  Element.Ar, Element.B, Element.Be, Element.Br, Element.C, Element.Cl, Element.F, Element.H, Element.I, Element.N,
  Element.Ne, Element.O, Element.P, Element.S, Element.Si, Element.Sn, Element.Xe
];

// @public @static maps symbol => element
Element.elementMap = {};
_.each( Element.elements, function( element ) {
  Element.elementMap[ element.symbol ] = element;
} );

export default Element;