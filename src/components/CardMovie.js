import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col } from 'antd';

const CardMovie = ({image, id, gotoMovie, cover = false}) => {
    return (
        <div>
            {!cover ?
                <Col span={4} className="card-movie" onClick={() =>gotoMovie(id)}>
                    <img src={image} alt=""/>
                    <FontAwesomeIcon icon="film" className="icon-movie"/>
                </Col>
                : 
                <Col span={4} className="card-movie" onClick={() =>gotoMovie(id)}>
                    <img className="img-movie" src={image} alt=""/>
                    <FontAwesomeIcon icon="film" className="icon-movie"/>
                </Col>
            }
        </div>
    )
}

export default CardMovie
