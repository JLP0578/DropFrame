import React, {Component} from 'react';
import SelectWarframe from "./SelectWarframe";
import TechTree from "./TechTree";

const Items = require('warframe-items');

const items = new Items({category: ['Warframes']});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            links: [],
            partlist: {},
        }
        this.handlePartList = this.handlePartList.bind(this);
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
            links = [
                {from: "base_compo_0", to: "base_compo_1"},
                {from: "base_compo_0", to: "base_compo_2"},
                {from: "base_compo_0", to: "base_compo_3"},
                {from: "base_compo_0", to: "base_compo_4"}
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
            links = [
                {from: "base_compo_0", to: "base_compo_1"},
                {from: "base_compo_0", to: "base_compo_2"},
                {from: "base_compo_0", to: "base_compo_3"},
            ];
        }
        this.setState({
            nodes: nodes,
            links: links
        });
    }

    render() {
        const controlStates = () => {
            return this.state.links && this.state.nodes && this.state.links.length !== 0 && this.state.nodes.length !== 0
        }

        return (
            <React.Fragment>
                <h1>DropFarme</h1>
                <p>recherchez une warframe</p>
                <SelectWarframe warframeJSON={items} partlist={this.handlePartList}/>
                {controlStates &&
                <TechTree
                    links={this.state.links}
                    nodes={this.state.nodes}
                />
                }
            </React.Fragment>
        );
    }
}

export default App;
