// Copyright 2022-2025, University of Colorado Boulder

/**
 * MoleculesScreenView demonstrates the various molecule nodes that live in nitroglycerin/js/nodes/.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import ScreenView from '../../../joist/js/ScreenView.js';
import GridBox from '../../../scenery/js/layout/nodes/GridBox.js';
import nitroglycerin from '../nitroglycerin.js';
import C2H2Node from '../nodes/C2H2Node.js';
import C2H4Node from '../nodes/C2H4Node.js';
import C2H5ClNode from '../nodes/C2H5ClNode.js';
import C2H5OHNode from '../nodes/C2H5OHNode.js';
import C2H6Node from '../nodes/C2H6Node.js';
import CH2ONode from '../nodes/CH2ONode.js';
import CH3OHNode from '../nodes/CH3OHNode.js';
import CH4Node from '../nodes/CH4Node.js';
import Cl2Node from '../nodes/Cl2Node.js';
import CNode from '../nodes/CNode.js';
import CO2Node from '../nodes/CO2Node.js';
import CONode from '../nodes/CONode.js';
import CS2Node from '../nodes/CS2Node.js';
import F2Node from '../nodes/F2Node.js';
import H2Node from '../nodes/H2Node.js';
import H2ONode from '../nodes/H2ONode.js';
import H2SNode from '../nodes/H2SNode.js';
import HClNode from '../nodes/HClNode.js';
import HFNode from '../nodes/HFNode.js';
import N2Node from '../nodes/N2Node.js';
import N2ONode from '../nodes/N2ONode.js';
import NH3Node from '../nodes/NH3Node.js';
import NO2Node from '../nodes/NO2Node.js';
import NONode from '../nodes/NONode.js';
import O2Node from '../nodes/O2Node.js';
import OF2Node from '../nodes/OF2Node.js';
import P4Node from '../nodes/P4Node.js';
import PCl3Node from '../nodes/PCl3Node.js';
import PCl5Node from '../nodes/PCl5Node.js';
import PF3Node from '../nodes/PF3Node.js';
import PH3Node from '../nodes/PH3Node.js';
import SNode from '../nodes/SNode.js';
import SO2Node from '../nodes/SO2Node.js';
import SO3Node from '../nodes/SO3Node.js';
import P2O5Node from '../nodes/P2O5Node.js';
import N2O5Node from '../nodes/N2O5Node.js';
import H2O2Node from '../nodes/H2O2Node.js';
import PNode from '../nodes/PNode.js';
import TColor from '../../../scenery/js/util/TColor.js';

export default class MoleculesScreenView extends ScreenView {

  public constructor( atomsStroke: TColor ) {

    super();

    const moleculeNodeOptions = {
      atomNodeOptions: {
        stroke: atomsStroke,
        lineWidth: 0.5
      }
    };

    // MoleculeNode instances, in alphabetical order.
    const moleculeNodes = [
      new CNode( moleculeNodeOptions ),
      new C2H2Node( moleculeNodeOptions ),
      new C2H4Node( moleculeNodeOptions ),
      new C2H5ClNode( moleculeNodeOptions ),
      new C2H5OHNode( moleculeNodeOptions ),
      new C2H6Node( moleculeNodeOptions ),
      new CH2ONode( moleculeNodeOptions ),
      new CH3OHNode( moleculeNodeOptions ),
      new CH4Node( moleculeNodeOptions ),
      new Cl2Node( moleculeNodeOptions ),
      new CONode( moleculeNodeOptions ),
      new CO2Node( moleculeNodeOptions ),
      new CS2Node( moleculeNodeOptions ),
      new F2Node( moleculeNodeOptions ),
      new H2Node( moleculeNodeOptions ),
      new H2ONode( moleculeNodeOptions ),
      new H2O2Node( moleculeNodeOptions ),
      new H2SNode( moleculeNodeOptions ),
      new HClNode( moleculeNodeOptions ),
      new HFNode( moleculeNodeOptions ),
      new N2Node( moleculeNodeOptions ),
      new N2ONode( moleculeNodeOptions ),
      new N2O5Node( moleculeNodeOptions ),
      new NH3Node( moleculeNodeOptions ),
      new NONode( moleculeNodeOptions ),
      new NO2Node( moleculeNodeOptions ),
      new O2Node( moleculeNodeOptions ),
      new OF2Node( moleculeNodeOptions ),
      new PNode( moleculeNodeOptions ),
      new P2O5Node( moleculeNodeOptions ),
      new P4Node( moleculeNodeOptions ),
      new PCl3Node( moleculeNodeOptions ),
      new PCl5Node( moleculeNodeOptions ),
      new PF3Node( moleculeNodeOptions ),
      new PH3Node( moleculeNodeOptions ),
      new SNode( moleculeNodeOptions ),
      new SO2Node( moleculeNodeOptions ),
      new SO3Node( moleculeNodeOptions )
    ];

    // Layout in a grid
    const gridBox = new GridBox( {
      spacing: 20,
      autoColumns: 7,
      children: moleculeNodes,
      center: this.layoutBounds.center,
      scale: 1.5
    } );

    this.children = [ gridBox ];
  }
}

nitroglycerin.register( 'MoleculesScreenView', MoleculesScreenView );