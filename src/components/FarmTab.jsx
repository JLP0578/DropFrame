import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFarmTab = styled.div`
    display: block
    background-color: red;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: orange;

    .card{
        background-color: yellow;
    }
`;

class FarmTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount() {
        // localStorage.setItem('myData', this.props.);
        const hasLocalStorage = localStorage.getItem('DropFrame');
        console.log('hasLocalStorage',hasLocalStorage)
        if(hasLocalStorage) this.loadLocalStorage();
    }

    loadLocalStorage() {
        
    }

    render() {
        return (
            <StyledFarmTab id={this.props.id}>
                <h2>FarmTab</h2>
                <StyledDiv>
                    <div className="card">
                        <div className="card_title">
                            <h3>System Rhino Prime</h3>
                            <img/>
                        </div>
                        <div className="card_content">
                            <p>FarmTab</p>
                        </div>
                    </div>
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