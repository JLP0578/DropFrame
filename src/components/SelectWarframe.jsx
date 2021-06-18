import React, {Component} from 'react';
import {findByName, getDataByName, warframeGetData} from "./API/WarframeGetData";

// ========================================

class SelectWarframe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            warframeJSON: this.props.warframeJSON,
            datalist: [],
            partlist: [],
        }
    }

    onInputDataList(evt) {
        const val = document.getElementById("search");
        const opts = document.getElementById('WarframeName').childNodes;
        // const detail = document.getElementById('detail');
        for (let i = 0; i < opts.length; i++) {
            const valeurOption = opts[i].value;
            if (valeurOption === val.value) {
                // detail.innerText = valeurOption;
                this.getData(valeurOption)
                val.blur();
                break;
            }
        }
    }

    getData(name) {
        const premierElementRetourne = 0;
        const allDataWarframeSelected = warframeGetData(this.state.warframeJSON, name, 'getDataByName')[premierElementRetourne];
        // document.getElementById('detail').innerHTML = '<pre>' + JSON.stringify(allDataWarframeSelected, null, 2) + '</pre>';
    
        this.props.partlist(allDataWarframeSelected);
    }

    onChangeInput(evt) {
        const warframesFind = warframeGetData(this.state.warframeJSON, evt.target.value, 'findName');
        const listNomTrouver = [];
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
        })
    }

    onClickInput() {
        const val = document.getElementById("search");
        const opts = document.getElementById('WarframeName');
        const detail = document.getElementById('detail');
        detail.innerText = '';
        val.value = '';
        opts.value = '';
    }

    render() {
        const dataList = this.state.datalist;

        return (
            <>
                <input
                    autoComplete="off"
                    id={"search"}
                    type={"text"}
                    name={"search"}
                    placeholder={"search"}
                    onChange={(evt) => this.onChangeInput(evt)}
                    onInput={(evt) => this.onInputDataList(evt)}
                    list={"WarframeName"}
                />
                <input
                    id={"reset"}
                    type={"submit"}
                    name={"reset"}
                    value={"X"}
                    onClick={() => this.onClickInput()}
                />
                <datalist id={"WarframeName"}>
                    {dataList}
                </datalist>
                <div id={"detail"}>

                </div>
            </>
        );
    }
}

export default SelectWarframe;
