// Copyright 2013-2020, University of Colorado Boulder

/**
 * Miscellaneous chemistry functions.
 */

import nitroglycerin from './nitroglycerin.js';

const ChemUtils = {

  /**
   * Creates a symbol (HTML fragment) based on the list of atoms in the molecule.
   * The atoms must be specified in order of appearance in the symbol.
   * Examples:
   *    [C,C,H,H,H,H] becomes "C<sub>2</sub>H<sub>4</sub>"
   *    [H,H,O] becomes "H<sub>2</sub>O"
   *
   * @param {Element[]} elements
   * @returns {string}
   * @public
   */
  createSymbol: function( elements ) {
    return ChemUtils.toSubscript( ChemUtils.createSymbolWithoutSubscripts( elements ) );
  },

  /**
   * Creates a symbol (text) based on the list of atoms in the molecule.
   * The atoms must be specified in order of appearance in the symbol.
   * Examples:
   *    [C,C,H,H,H,H] becomes "C2H4"
   *    [H,H,O] becomes "H2O"
   *
   * @param {Element[]} elements
   * @returns {string}
   * @public
   */
  createSymbolWithoutSubscripts: function( elements ) {
    let result = '';
    let atomCount = 1;
    const length = elements.length;
    for ( let i = 0; i < length; i++ ) {
      if ( i === 0 ) {
        // first atom is treated differently
        result += elements[ i ].symbol;
      }
      else if ( elements[ i ] === elements[ i - 1 ] ) {
        // this atom is the same as the previous atom
        atomCount++;
      }
      else {
        // this atom is NOT the same
        if ( atomCount > 1 ) {
          // create a subscript
          result += atomCount;
        }
        atomCount = 1;
        result += elements[ i ].symbol;
      }
    }
    if ( atomCount > 1 ) {
      // create a subscript for the final atom
      result += atomCount;
    }
    return result;
  },

  /**
   * Return an integer that can be used for sorting atom symbols alphabetically. Lower values will be returned for
   * symbols that should go first. Two-letter symbols will come after a one-letter symbol with the same first
   * character (Br after B). See http://en.wikipedia.org/wiki/Hill_system, for without carbon
   *
   * @param {Element} element
   * @returns {number} Value for sorting
   * @public
   */
  nonCarbonHillSortValue: function( element ) {
    // TODO: if it's a performance issue, we should put these in Element itself
    // yes, will totally fail if our Unicode code point of the 2nd character is >1000. Agile coding? We like to live on the edge
    let value = 1000 * element.symbol.charCodeAt( 0 );
    if ( element.symbol.length > 1 ) {
      value += element.symbol.charCodeAt( 1 );
    }
    return value;
  },

  /**
   * Returns an integer that can be used for sorting atom symbols for the Hill system when the molecule contains
   * carbon. See http://en.wikipedia.org/wiki/Hill_system
   *
   * @param {Element} element
   * @returns {number} Value for sorting (lowest is first)
   * @public
   */
  carbonHillSortValue: function( element ) {
    // TODO: if it's a performance issue, we should put these in Element itself
    if ( element.isCarbon() ) {
      return 0;
    }
    else if ( element.isHydrogen() ) {
      return 1;
    }
    else {
      return ChemUtils.nonCarbonHillSortValue( element );
    }
  },

  /**
   * Handles HTML subscript formatting for molecule symbols.
   * All numbers in a string are assumed to be part of a subscript, and will be enclosed in a <sub> tag.
   * For example, 'C2H4' becomes 'C<sub>2</sub>H<sub>4</sub>'.
   * @param {string} inString the input plaintext string
   * @returns {string} HTML fragment
   * @public
   */
  toSubscript: function( inString ) {
    let outString = '';
    let sub = false; // are we in a <sub> tag?
    const isDigit = function( c ) {
      return ( c >= '0' && c <= '9' );
    };
    for ( let i = 0; i < inString.length; i++ ) {
      const c = inString.charAt( i );
      if ( !sub && isDigit( c ) ) {
        // start the subscript tag when a digit is found
        outString += '<sub>';
        sub = true;
      }
      else if ( sub && !isDigit( c ) ) {
        // end the subscript tag when a non-digit is found
        outString += '</sub>';
        sub = false;
      }
      outString += c;
    }
    // end the subscript tag if inString ends with a digit
    if ( sub ) {
      outString += '</sub>';
      sub = false;
    }
    return outString;
  },

  /**
   * @param {Atom[]} atoms A collection of atoms in a molecule. NOTE: in Java, they were Element objects!
   * @returns {string} The molecular formula of the molecule in the Hill system. Returned as an HTML fragment. See
   *         http://en.wikipedia.org/wiki/Hill_system for more information.
   * @public
   */
  hillOrderedSymbol: function( atoms ) {
    const containsCarbon = _.some( atoms, atom => atom.isCarbon() );
    const sortedAtoms = _.sortBy( atoms, containsCarbon ?
                                         ChemUtils.carbonHillSortValue :  // carbon first, then hydrogen, then others alphabetically
                                         ChemUtils.nonCarbonHillSortValue // compare alphabetically since there is no carbon
    );
    return ChemUtils.createSymbol( sortedAtoms );
  }
};

nitroglycerin.register( 'ChemUtils', ChemUtils );
export default ChemUtils;