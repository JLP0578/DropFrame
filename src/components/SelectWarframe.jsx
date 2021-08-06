import React, { Component } from 'react';
import { warframeGet } from "@components/API/WarframeGetData";
import { SearchBar } from '@components/SearchBar/SearchBar';

class SelectWarframe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            warframeJSON: this.props.warframeJSON,
            searchBar: {
                value: '',
                placeholder: 'Search',
            },
            datalist: [],
            partlist: [],
        }
    }

    handleValueDataList() {
        const nomARechercher = document.getElementById("search");
        const listDeResultat = document.getElementById('WarframeName').childNodes;
        // const detail = document.getElementById('detail');
        for (let i = 0; i < listDeResultat.length; i++) {
            const valeurDeLaListeDeResultat = listDeResultat[i].value;
            const estLaMemeValeur = valeurDeLaListeDeResultat === nomARechercher.value;
            if (estLaMemeValeur) {
                this.getData(valeurDeLaListeDeResultat)
                nomARechercher.blur();
                break;
            }
        }
    }

    getData(name) {
        const premierElementRetourne = 0;
        const allDataWarframeSelected = warframeGet(this.state.warframeJSON, name, 'getData')[premierElementRetourne];
        // document.getElementById('detail').innerHTML = '<pre>' + JSON.stringify(allDataWarframeSelected, null, 2) + '</pre>';
    
        this.props.partlist(allDataWarframeSelected);
    }

    

    handleChangeSearchValue(evt) {
        const warframesFind = warframeGet(this.state.warframeJSON, evt.target.value, 'findName');
        const listNomTrouver = [];
        const premierNomTrouver = warframesFind[0];
        for (const [index, value] of warframesFind.entries()) {
            listNomTrouver.push(
                <option
                    key={index}
                    value={value}
                />
            );
        }
        this.setState({
            datalist: listNomTrouver,
            searchBar: {
                placeholder: premierNomTrouver,
                value: evt.target.value,
            },
        })
    }

    handleClickResetValue() {
        document.getElementById("search").value = '';
        document.getElementById('WarframeName').value = '';
        document.getElementById('detail').innerText = '';
        this.setState({
            searchBar: {
                placeholder: 'Search',
                value: '',
            },
        })
    }

    render() {
        const dataList = this.state.datalist;
        const inputTextAttribut = {
            id: 'search',
            name: 'search',
            placeholder: this.state.searchBar.placeholder,
            value: this.state.searchBar.value,
            onChange: (evt) => this.handleChangeSearchValue(evt),
            onInput: () => this.handleValueDataList(),
        };
        const buttonAttribut = {
            disabled: false,
            id: 'reset',
            name: 'reset',
            value: 'X',
            variante: "remove",
            onClick: () => this.handleClickResetValue(),
        };
        const datalistAttribut = {
            id: 'WarframeName',
            value: dataList,
        };

        return (
            <>
                <SearchBar
                    inputText={inputTextAttribut}
                    button={buttonAttribut}
                    datalist={datalistAttribut}
                />
                <div id="detail"></div>
            </>
        );
    }
}

export default SelectWarframe;
