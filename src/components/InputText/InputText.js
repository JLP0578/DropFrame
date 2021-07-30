import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInputText = styled.input`
    background-color: #fff;
    color: #333;
    border-color: #333;
    border-radius: 3px;
    border: 2px solid;
    
    line-height: 0px;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    width: auto;
    height: 35px;
    
    &:hover {
        transition: 80ms;
        border: 2px solid grey;
        cursor: pointer;
    }  
`;

export const InputText = ({disabled, id, name, value, placeholder, onChange, onInput, variante, ...props}) => {
    return (
        <StyledInputText
            type="text"
            disabled={disabled}
            name={name}
            id={id}
            className={variante}
            onChange={onChange}
            onInput={onInput}
            value={value}
            placeholder={placeholder}
            {...props}
        />
    );
};

InputText.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    variante: PropTypes.string,
};

InputText.defaultProps = {
    disabled: false,
    id: '',
    name: '',
    value: '',
    placeholder: 'Valider',
    onChange: undefined,
    onInput: undefined,
    variante: '',
};
