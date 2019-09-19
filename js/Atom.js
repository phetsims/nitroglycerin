// Copyright 2013-2019, University of Colorado Boulder

/**
 * Object for actual element properties (symbol, radius, etc.)
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

define( require => {
  'use strict';

  // modules
  const Element = require( 'NITROGLYCERIN/Element' );
  const inherit = require( 'PHET_CORE/inherit' );
  const nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );

  let idCounter = 1;

  const Atom = function( element ) {
    this.element = element;
    this.symbol = element.symbol;
    this.covalentRadius = element.covalentRadius;
    this.covalentDiameter = element.covalentRadius * 2;
    this.electronegativity = element.electronegativity;
    this.atomicWeight = element.atomicWeight;
    this.color = element.color;

    // IDs for uniqueness and fast lookups
    this.reference = (idCounter++).toString( 16 );
    this.id = this.symbol + '_' + this.reference;
  };

  nitroglycerin.register( 'Atom', Atom );

  return inherit( Object, Atom, {

    // @public
    hasSameElement: function( atom ) {
      return this.element.isSameElement( atom.element );
    },

    // @public
    isHydrogen: function() {
      return this.element.isHydrogen();
    },

    // @public
    isCarbon: function() {
      return this.element.isCarbon();
    },

    // @public
    isOxygen: function() {
      return this.element.isOxygen();
    },

    // @public
    toString: function() {
      return this.symbol;
    }
  }, {

    // @public @static
    createAtomFromSymbol: function( symbol ) {
      return new Atom( Element.getElementBySymbol( symbol ) );
    }
  } );
} );
