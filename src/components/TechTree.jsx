import React, {Component, useState, useLayoutEffect} from 'react';
import {Tree, simplePathMaker} from "react-tech-tree";
import {linkPathMaker} from './tech-tree-helper'
import usePosition from "./usePosition";
import "./techTree.css";

// ========================================

// const MOCK_nodes = [
//     [
//         {id: "base_compo_0", name: "Blueprint", className: "Base compo_0"},
//         {id: "base_compo_4", name: "Orokin Cell", className: "SubBase compo_4"},
//     ], [
//         {id: "base_compo_1", name: "Neuroptics", className: "SubBase compo_1"},
//         {id: "base_compo_2", name: "System", className: "SubBase compo_2"},
//         {id: "base_compo_3", name: "Chassis", className: "SubBase compo_3"},
//     ]
//     ], [
//         { id: "sub_1_compo_1", name: "Ferrite", className: "Sub compo_1"},
//         { id: "sub_2_compo_1", name: "Ferrite", className: "Sub compo_2"},
//         { id: "sub_3_compo_1", name: "Ferrite", className: "Sub compo_3"},
//     ]
//     , [
//         { id: "sub_1_compo_2", name: "Rubedo", className: "Sub compo_1"},
//         { id: "sub_2_compo_2", name: "Rubedo", className: "Sub compo_2"},
//         { id: "sub_3_compo_2", name: "Rubedo", className: "Sub compo_3"},
//     ]
//     , [
//         { id: "sub_1_compo_3", name: "Argon", className: "Sub compo_1"},
//         { id: "sub_2_compo_3", name: "Argon", className: "Sub compo_2"},
//         { id: "sub_3_compo_3", name: "Argon", className: "Sub compo_3"},
//     ]
//     , [
//         { id: "sub_1_compo_4", name: "Azurite", className: "Sub compo_1"},
//         { id: "sub_2_compo_4", name: "Azurite", className: "Sub compo_2"},
//         { id: "sub_3_compo_4", name: "Azurite", className: "Sub compo_3"},
//     ]
// ];
// const MOCK_links = [
//     {from: "base_compo_0", to: "base_compo_1"},
//     {from: "base_compo_0", to: "base_compo_2"},
//     {from: "base_compo_0", to: "base_compo_3"},
//     {from: "base_compo_0", to: "base_compo_4"},
//
//     {from: "base_compo_1", to: "sub_1_compo_1"},
//     {from: "base_compo_1", to: "sub_1_compo_2"},
//     {from: "base_compo_1", to: "sub_1_compo_3"},
//     {from: "base_compo_1", to: "sub_1_compo_4"},
//
//     {from: "base_compo_2", to: "sub_2_compo_1"},
//     {from: "base_compo_2", to: "sub_2_compo_2"},
//     {from: "base_compo_2", to: "sub_2_compo_3"},
//     {from: "base_compo_2", to: "sub_2_compo_4"},
//
//     {from: "base_compo_3", to: "sub_3_compo_1"},
//     {from: "base_compo_3", to: "sub_3_compo_2"},
//     {from: "base_compo_3", to: "sub_3_compo_3"},
//     {from: "base_compo_3", to: "sub_3_compo_4"},
//
//     {from: "base_compo_4", to: "sub_4_compo_1"},
//     {from: "base_compo_4", to: "sub_4_compo_2"},
//     {from: "base_compo_4", to: "sub_4_compo_3"},
//     {from: "base_compo_4", to: "sub_4_compo_4"},
//
// ];
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

const TechTree = ({nodes}) => {
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

    const MyNodeElement = ({name, id, className}) => {
        const partOfWarframe = name;
        const partName = partOfWarframe.name;
        let partImg = partOfWarframe.imageName || '';

        function ClickButton(partOfWarframe) {
            alert(partOfWarframe.name);
        }

        if (partName === undefined || id === undefined) className = 'hidden';
        if (partImg.includes('-neuroptics.')) partImg = 'neuroptics.png';
        if (partImg.includes('-systems.')) partImg = 'systems.png';
        if (partImg.includes('-chassis.')) partImg = 'chassis.png';
        return (
            <button id={id} onClick={() => ClickButton(partOfWarframe)} className={`buttonWithImg ${className}`}>
                <img width={"73"} height={"50"} src={'./src/data/' + partImg}/>
                {partName}
            </button>
        );
    }
    return (
        <>
            <Tree
                id={"tech_tree"}
                links={links}
                nodes={nodes}
                NodeElement={MyNodeElement}
                linkProps={linkProps}
            />
        </>
    );
}

export default TechTree;
