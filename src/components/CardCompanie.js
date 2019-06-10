import React from 'react'
import { Col } from 'antd';

const CardCompanie = ({name, gotoCompany}) => {
    return (
        <Col span={6} className="card-image" onClick={()=>gotoCompany(name)}>
            <div className="card-companie">
                <img src={process.env.PUBLIC_URL + `img/companies/logo-${name}.png`} alt=""/>
            </div>
        </Col>
    )
}

export default CardCompanie
