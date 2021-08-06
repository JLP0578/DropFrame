import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@components/Button/Button';
import { InputText } from '@components/InputText/InputText';

const StyledSearchBar = styled.div`
    input{
        margin-right: 0px;
    }
    button{
        margin-left: -2px;
    }
    
`;

export const SearchBar = ({id, inputText, button, datalist, ...props}) => {
    return (
        <StyledSearchBar id={id} { ...props}>
            <InputText
                type="text"
                id={inputText.id}
                name={inputText.name}
                autoComplete="off"
                list={datalist.id}
                placeholder={inputText.placeholder}
                value={inputText.value}
                variante={inputText.variante}
                onChange={inputText.onChange}
                onInput={inputText.onInput}
            />
            <Button
                id={button.id}
                name={button.name}
                value={button.value}
                variante={button.variante}
                onClick={button.onClick}
            />
            <datalist id={datalist.id}>
                {datalist.value}
            </datalist>
        </StyledSearchBar>
    );
};

SearchBar.propTypes = {
    inputText: PropTypes.object,
    button: PropTypes.object,
    datalist: PropTypes.object,
};

SearchBar.defaultProps = {
    inputText: {
        disabled: false,
        id: '',
        name: '',
        value: '',
        placeholder: 'Text',
        onChange: undefined,
        onInput: undefined,
        variante: ''
    },
    button: {
        disabled: false,
        id: '',
        name: '',
        value: 'Valider',
        onClick: undefined,
        variante: '',
    },
    datalist: {
        id: '',
        value: '',
    },
};
