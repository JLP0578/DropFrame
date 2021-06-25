import React, {Component} from 'react';
import SelectWarframe from "./SelectWarframe";
import TechTree from "./TechTree";

import { warframeGetData, warframeGetName } from './API/WarframeGetData';

const Items = require('warframe-items');

// const items = new Items({category: ['Warframes']});
const items = require('/src/data/AllWarframeData.json');


//TODO bug entre une warframe puis equinox

// ========================================

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            partlist: {},
        }
        this.handlePartList = this.handlePartList.bind(this);
    }

    componentDidMount(){
        //document.getElementById('detail').innerHTML = '<pre>' + JSON.stringify(items, null, 2) + '</pre>';
        // GENERATOR FILES JSON
        // let tabName = [];
        // items.map((item) => {
        //     tabName.push({
        //         "uniqueName": item.uniqueName,
        //         "name": item.name,
        //         "description": item.description,
        //         "imageName": item.imageName,

        //         "productCategory": item.productCategory,
        //         "type": item.type,
        //         "category": item.category,

        //         "buildPrice": item.buildPrice,

        //         "wikiaUrl": item.wikiaUrl,
        //         "wikiaThumbnail": item.wikiaThumbnail,

        //         "components": item.components
        //     });
        // })
        // document.getElementById('detail').innerHTML = '<pre>' + JSON.stringify(tabName, null, 2) + '</pre>';
    }

    handlePartList(objWarframeSelected) {
        let partsWarframe = objWarframeSelected.components.map((part) => part);

        let blueprint = [partsWarframe.find((part) => part.name === 'Blueprint')]
        let neuroptics, chassis, systems, others;
        if(objWarframeSelected.name !== 'Equinox') {
            neuroptics = [partsWarframe.find((part) => part.name === 'Neuroptics')]
            chassis = [partsWarframe.find((part) => part.name === 'Chassis')]
            systems = [partsWarframe.find((part) => part.name === 'Systems')]
            others = partsWarframe.filter((part) => part.name !== 'Blueprint' && part.name !== 'Neuroptics' && part.name !== 'Chassis' && part.name !== 'Systems')
            partsWarframe = blueprint.concat(neuroptics.concat(chassis.concat(systems).concat(others)));
        } else {
            others = partsWarframe.filter((part) => part.name !== 'Blueprint')
            partsWarframe = blueprint.concat(others);
        }

        let nodes, links;
        if (partsWarframe.length === 5) {
            nodes = [
                [
                    {id: "base_compo_0", name: partsWarframe[0], className: "Base compo_0"},
                    {id: "base_compo_4", name: partsWarframe[4], className: "SubBase compo_4"},
                ], [
                    {id: "base_compo_1", name: partsWarframe[1], className: "SubBase compo_1"},
                    {id: "base_compo_2", name: partsWarframe[2], className: "SubBase compo_2"},
                    {id: "base_compo_3", name: partsWarframe[3], className: "SubBase compo_3"}
                ]
            ];
        } else if (partsWarframe.length === 4) {
            nodes = [
                [
                    {id: "base_compo_0", name: partsWarframe[0], className: "Base compo_0"},
                ], [
                    {id: "base_compo_1", name: partsWarframe[1], className: "SubBase compo_1"},
                    {id: "base_compo_2", name: partsWarframe[2], className: "SubBase compo_2"},
                    {id: "base_compo_3", name: partsWarframe[3], className: "SubBase compo_3"}
                ]
            ];
        }
        this.setState({
            nodes: nodes,
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>DropFarme</h1>
                <p>recherchez une warframe</p>
                <SelectWarframe warframeJSON={items} partlist={this.handlePartList}/>
                {this.state.nodes && this.state.nodes.length !== 0 &&
                    <TechTree nodes={this.state.nodes} />
                }
            </React.Fragment>
        );
    }
}

export default App;
