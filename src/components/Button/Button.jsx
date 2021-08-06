import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color } from '@theme/theme';

const StyledButton = styled.button`
    background-color: #fff;
    color: #333;
    border-color: #333;
    border-radius: 3px;
    border: 2px solid;
    
    line-height: 0px;
    margin: 0.5em 1em;
    padding: 1.60em 1em;

    width: auto;
    height: 35px;
    
    &:hover {
        transition: 80ms;
        border: 2px solid grey;
        cursor: pointer;
    }
    &.default {
        color: ${color.secondary.alternative};
        border-color: ${color.primary.base};
        background-color: ${color.primary.base};
        &:hover {
            background-color: ${color.primary.alternative};
            border-color: ${color.primary.alternative};
        }
    }
    
    &.remove {
        color: ${color.secondary.alternative};
        border-color: ${color.error.base};
        background-color: ${color.error.base};
        &:hover {
            background-color:  ${color.error.alternative};
            border-color:  ${color.error.alternative};
        }
    }
    
`;

export const Button = ({disabled, id, name, value, onClick, variante, ...props}) => {
    return (
        <StyledButton
            type="button"
            disabled={disabled}
            name={name}
            id={id}
            className={variante}
            onClick={onClick}
            {...props}
        >
            {value}
        </StyledButton>
    );
};

Button.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
    variante: PropTypes.string,
};

Button.defaultProps = {
    disabled: false,
    id: '',
    name: '',
    value: 'Valider',
    onClick: undefined,
    variante: '',
};
