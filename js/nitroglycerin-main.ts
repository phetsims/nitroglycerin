// Copyright 2022-2025, University of Colorado Boulder

/**
 * Main file for the nitroglycerin library demo.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../axon/js/Property.js';
import Screen from '../../joist/js/Screen.js';
import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import MoleculesScreenView from './demo/MoleculesScreenView.js';
import NitroglycerinStrings from './NitroglycerinStrings.js';
import ProfileColorProperty from '../../scenery/js/util/ProfileColorProperty.js';
import nitroglycerin from './nitroglycerin.js';

const titleStringProperty = NitroglycerinStrings.nitroglycerin.titleStringProperty;

// Color profile for the nitroglycerin demo. These color can be edited in the Color Editor.
const ColorProfile = {
  moleculesScreenBackgroundColorProperty: new ProfileColorProperty( nitroglycerin, 'moleculesScreenBackgroundColor', {
    default: '#d9ebff'
  } ),

  atomsStrokeProperty: new ProfileColorProperty( nitroglycerin, 'atomsStroke', {
    default: 'black'
  } )
};

class Model {
  public reset(): void { /* nothing to do */ }
}

simLauncher.launch( () => {

  const screens = [
    new Screen(
      () => new Model(),
      () => new MoleculesScreenView( ColorProfile.atomsStrokeProperty ), {
        name: new Property( 'Molecules' ),
        backgroundColorProperty: ColorProfile.moleculesScreenBackgroundColorProperty,
        tandem: Tandem.OPT_OUT
      } ) ];

  const simOptions: SimOptions = {
    credits: {
      leadDesign: 'PhET'
    }
  };

  const sim = new Sim( titleStringProperty, screens, simOptions );
  sim.start();
} );