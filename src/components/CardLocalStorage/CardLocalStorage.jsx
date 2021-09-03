import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@components/Button/Button';

import { color } from '@theme/theme';

const StyledCardLocalStorage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    min-width: 155px;
    max-width: 155px;

    background-color: ghostwhite;
    box-shadow: 0px 0px 8px lightgrey;
    border-radius: 5px;

    .card_title, .card_action{
        text-align: center;
        .card_img{
            display: flex;
            justify-content: center;

            height: 100px;
        }
        h3{
            margin-bottom: 0px;
        }
        h4{
            margin-top: 0px;
        }
    }
    hr{
        width: 45%;
    }
    .card_content{
        margin-left: 20px;
        text-align: left;
    }
`;

export const CardLocalStorage = ({disabled, id, name, value, onClick, item, ...props}) => {
    const idWarframe = item.id;
    const nomWarframe = item.properties.name;
    const partWarframe = item.properties.part;
    const imagePart = item.properties.image;
    return (
        <StyledCardLocalStorage className="card">
            <div className="card_title">
                <div className="card_img">
                    <img width="146" height="100" src={'./src/data/' + imagePart} alt={partWarframe}/>
                </div>
                <hr/>
                <h3>{nomWarframe}</h3>
                <h4>{partWarframe}</h4>
            </div>
            <div className="card_content">
                <p>drop location</p>
            </div>
            <div className="card_action">
                <Button
                    id={"archive_"+idWarframe}
                    name="archive"
                    value="Archiver"
                    variante="remove"
                    onClick={onClick}
                />
            </div>
        </StyledCardLocalStorage>
    );
};

CardLocalStorage.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
    item: PropTypes.object,
};

CardLocalStorage.defaultProps = {
    disabled: false,
    id: '',
    name: '',
    onClick: undefined,
    item: {},
};
