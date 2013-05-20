// Copyright 2002-2013, University of Colorado

/**
 * Object for actual element properties (symbol, radius, etc.)
 *
 * @author Jonathan Olson <olsonsjc@gmail.com>
 */

define( function( require ) {
  "use strict";
  
  var Atom = function( element ) {
    this.element = element;
    this.symbol = element.symbol;
    this.radius = element.radius;
    this.diameter = element.radius * 2;
    this.electronegativity = element.electronegativity;
    this.atomicWeight = element.atomicWeight;
    this.color = element.color;
  };

  Atom.prototype = {
    constructor: Atom,

    hasSameElement: function( atom ) {
      return this.element.isSameElement( atom.element );
    },

    isHydrogen: function() {
      return this.element.isHydrogen();
    },

    isCarbon: function() {
      return this.element.isCarbon();
    },

    isOxygen: function() {
      return this.element.isOxygen();
    },

    toString: function() {
      return this.symbol;
    }
  };
  
  return Atom;
} );
