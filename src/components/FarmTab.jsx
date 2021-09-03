import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@components/Button/Button';
import { CardLocalStorage } from '@components/CardLocalStorage/CardLocalStorage'

const StyledFarmTab = styled.div`
    display: block
    background-color: red;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
`;

const NOM_LOCAL_STORAGE = 'DropFrame';


class FarmTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocalStorage: []
        };
    }

    componentDidMount() {
        const hasLocalStorage = localStorage.getItem(NOM_LOCAL_STORAGE);
        if (hasLocalStorage) this.loadLocalStorage();
    }

    componentDidUpdate(){
        const isNameNotEmpty = this.props.currentWarframeName != "";
        const isPartNotEmpty = Object.keys(this.props.currentWarframePart).length != 0;
        if(isNameNotEmpty && isPartNotEmpty) {
            this.addLocalStorage(this.props.currentWarframeName, this.props.currentWarframePart);
            this.props.resetPropsFarmTab();
        }
    }

    createLocalStorage() {
        const currentLocalStorage = localStorage.getItem(NOM_LOCAL_STORAGE);
        if (currentLocalStorage == null || currentLocalStorage == "") localStorage.setItem(NOM_LOCAL_STORAGE, "");
    }

    resetLocalStorage() {
        localStorage.setItem(NOM_LOCAL_STORAGE, "");
        this.setState({
            currentLocalStorage: [],
        });
    }

    removeOneLocalStorage(){
    }
        
    saveLocalStorage() {
        localStorage.setItem(NOM_LOCAL_STORAGE, JSON.stringify(this.state.currentLocalStorage));
    }

    loadLocalStorage() {
        let currentLocalStorage = localStorage.getItem(NOM_LOCAL_STORAGE);
        currentLocalStorage = JSON.parse(currentLocalStorage);

        this.setState({
            currentLocalStorage: currentLocalStorage,
        });
    }

    addLocalStorage(name, part) {
        // const currentLocalStorage = localStorage.getItem(NOM_LOCAL_STORAGE);
        let objItem = this.structureItemLocalStorage(name, part);

        let local = [...this.state.currentLocalStorage];
        local.push(objItem)

        this.setState({
            currentLocalStorage: local,
        },() => {
            this.saveLocalStorage();
        });
    }

    structureItemLocalStorage(name, part) {
        return {
            "id": "",
            "properties": {
                "name": name,
                "part": part.nom,
                "image": part.img
            }
        }
    }

    render() {
        return (
            <StyledFarmTab id={this.props.id}>
                <h2>FarmTab</h2>
                <Button
                    id="resetLocalStorage"
                    name="reset"
                    value="Reset"
                    variante="remove"
                    onClick={() => this.resetLocalStorage()}
                />
                <StyledDiv>
                    {this.state.currentLocalStorage.length != 0 
                        && this.state.currentLocalStorage.map((item, index) => {
                            return (
                                <CardLocalStorage
                                    onClick={() => this.removeOneLocalStorage(item.id)}
                                    key={index}
                                    item={item}
                                />
                            );
                        })

                    }
                </StyledDiv>
            </StyledFarmTab>
        );
    }
}

FarmTab.propTypes = {
    id: PropTypes.string,
};

FarmTab.defaultProps = {
    id: 'FarmTab',
};

export default FarmTab;