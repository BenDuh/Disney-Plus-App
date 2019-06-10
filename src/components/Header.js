import React from 'react'
import {Row, Col} from 'antd'
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = ({gotoHome}) => {
    return (
        <Row>
            <Col md={21}>
                <img src={logo} className="App-logo" alt="logo" onClick={gotoHome}/>
            </Col>
            <Col md={3} className="icon-block">
                <Row>
                    <Col md={12}>
                        <FontAwesomeIcon icon="user" className="icon-app"/>
                    </Col>
                    <Col md={12}>
                        <FontAwesomeIcon icon="search" className="icon-app"/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Header
