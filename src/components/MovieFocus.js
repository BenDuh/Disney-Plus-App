import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getOnemovieRequest } from '../reducer/reducers/onemovieReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Header';
import { Row, Col } from 'antd';

class MovieFocus extends Component {
    componentDidMount(){
        this.props.getMovie(this.props.match.params.id)
    }
    gotoHome = () =>{
        this.props.history.push(`/`)
      }
    render() {
        console.log('onemovie', this.props.movie)
        return (
            <div className="App">
                <Header gotoHome={this.gotoHome}/>
                <Row className="description">
                    <Col md={12} className="card-movie flex-movie">
                        <img src={this.props.movie.poster} alt=""/>
                        <FontAwesomeIcon icon="film" className="icon-movie"/>
                    </Col>
                    <Col md={15} className="descrip-movie">
                        <h2>{this.props.movie.title}</h2>
                        <span>{this.props.movie.company}</span>
                        <p>{this.props.movie.description}</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.onemovieReducer.movie,
    }
}
const mapDispatchToProps = {
    getMovie: getOnemovieRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieFocus);