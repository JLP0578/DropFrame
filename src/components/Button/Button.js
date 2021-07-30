import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color } from '@theme/theme';

const StyledButton = styled.button`
        background-color: #333;
        color: #fff;
        border-color: #333;
        border-radius: 3px;
        border: 2px solid;
        
        line-height: 0px;
        margin: 0.5em 1em;
        padding: 0.25em 1em;

        width: auto;
        height: 35px;
        
        &:hover {
            background-color: #000;
            border-color: #000;
            border: 2px solid;

            transition: 80ms;
            cursor: pointer;
        }
        &.default{
            background-color: ${color.primary.base};
            color: ${color.secondary.alternative};
            border-color: ${color.primary.base};
            &:hover {
                background-color: ${color.primary.alternative};
                border-color: ${color.primary.alternative};
            }
        }
        &.remove{
            background-color: ${color.error.base};
            color: ${color.secondary.alternative};
            border-color: ${color.error.base};
            &:hover {
                background-color: ${color.error.alternative};
                border-color: ${color.error.alternative};
            }
        }
    `;

export const Button = ({disabled, id, name, value, onClick, variante, ...props}) => {
        return (
            <StyledButton
                type="button"
                disabled={disabled}
                name={name}
                className={variante}
                id={id}
                onClick={onClick}
                {...props}
            >
                {value}
            </StyledButton>
        );
    }
;

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
    value: 'Cliquer',
    onClick: undefined,
    variante: '',
};
