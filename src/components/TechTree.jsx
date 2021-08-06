import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Tree } from "react-tech-tree";
import { linkPathMaker } from '@dist/techTree/tech-tree-helper';

import "@dist/techTree/techTree.css";

const resize = () => {
    const originalWidth = window.innerWidth;
    const originalHeight = window.innerHeight;
    window.resizeTo(originalWidth-1, originalHeight-1)
    console.log('resize',originalWidth-1, originalHeight-1)
    window.resizeTo(originalWidth, originalHeight)
    console.log('resize',originalWidth, originalHeight)
}

const MOCK_links_by_4 = [
    {from: "base_compo_0", to: "base_compo_1"},
    {from: "base_compo_0", to: "base_compo_2"},
    {from: "base_compo_0", to: "base_compo_3"}
];
const MOCK_links_by_5 = [
    {from: "base_compo_0", to: "base_compo_1"},
    {from: "base_compo_0", to: "base_compo_2"},
    {from: "base_compo_0", to: "base_compo_3"},
    {from: "base_compo_0", to: "base_compo_4"}
];
class TechTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        const linkProps = {pathMaker: linkPathMaker};
        let links = MOCK_links_by_5;
        // if(nodes.length !== 0) {
        //     console.log('nodes[0].length',nodes[0].length)
        //     if(nodes[0].length === 1) {
        //         links = MOCK_links_by_4;
        //     }
        //     if(nodes[0].length === 2) {
        //         links = MOCK_links_by_5;
        //     }
        //     console.log('links',links)
        // }
        const that = this;
        const MyNodeElement = ({name, id, className}) => {
            const partOfWarframe = name;
            const partName = partOfWarframe.name;
            let partImg = partOfWarframe.imageName || '';

            function ClickButton() {
                const itemSelected = {
                    nom: partName,
                    img: partImg,
                }
                that.props.itemSelected(itemSelected);
            }
            if (partName === undefined || id === undefined) className = 'hidden';

            // if (partImg.includes('prime-neuroptics.')) {
            //     partImg = 'prime-neuroptics.png';
            // } else partImg = 'neuroptics.png';
            
            // if (partImg.includes('prime-systems.')) {
            //     partImg = 'prime-systems.png';
            // } else partImg = 'systems.png';

            // if (partImg.includes('prime-chassis.')) {
            //     partImg = 'prime-chassis.png';
            // } else partImg = 'chassis.png';

            return (
                <button id={id} onClick={() => ClickButton(partOfWarframe)} className={`buttonWithImg ${className}`}>
                    <img width={"73"} height={"50"} src={'./src/data/' + partImg}/>
                    {partName}
                </button>
            );
        }

        return (
            <Tree
                id={"tech_tree"}
                links={links}
                nodes={this.props.nodes}
                NodeElement={MyNodeElement}
                linkProps={linkProps}
            />
        );  
    }  
}

TechTree.propTypes = {
    id: PropTypes.string,
};

TechTree.defaultProps = {
    id: 'FarmTab',
};

export default TechTree;