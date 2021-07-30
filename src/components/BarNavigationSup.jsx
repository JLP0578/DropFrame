import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBarNavigationSup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    p{
        line-height:3em;
    }
`;

class BarNavigationSup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <StyledBarNavigationSup id={this.props.id}>
                <div>
                    <h1>DropFarme</h1>
                    <p>recherchez une warframe</p>
                </div>
            </StyledBarNavigationSup>
        );
    }
}

BarNavigationSup.propTypes = {
    id: PropTypes.string,
};

BarNavigationSup.defaultProps = {
    id: 'BarNavigationSup',
};

export default BarNavigationSup;