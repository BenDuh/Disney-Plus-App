import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './index.css'

import {connect} from 'react-redux'
import { getMovieRequest } from './reducer/reducers/movieReducer'
import { getSuggestRequest } from './reducer/reducers/suggestReducer'
import { getCompanyRequest } from './reducer/reducers/companyReducer'

import Header from './components/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faUser, faFilm  } from '@fortawesome/free-solid-svg-icons'
import Cover from './components/Cover'
import Suggest from './components/Suggest'

import companies from './companies'
import CardCompanie from './components/CardCompanie';
import { Row, Carousel} from 'antd';
import News from './components/News';


library.add( faSearch, faUser, faFilm )

class App extends Component {
  state={
    coverHiglighted : {},
    companies : companies
  }
  componentDidMount(){
    this.props.getMovies()
    this.props.getSuggest()
    this.props.getCompany()
  }
  gotoHome = () =>{
    this.props.history.push(`/`)
  }
  gotoMovie = id =>{
    this.props.history.push(`movie/${id}`)
  }
  gotoCompany = id =>{
    this.props.history.push(`company/${id}`)
  }
  render() {
    const orderHighlithed =  this.props.movies.map(order =>{
      return(
        <div>
          {order.highlighted &&
            <Cover id={order.id} image={order.cover} gotoMovie={this.gotoMovie}/>
          }
        </div>
    )})
    const orderCompany = Object.keys(this.state.companies).map(companie =>{
      return(
        <CardCompanie name={companie} gotoCompany={this.gotoCompany}/>
      )
    })

    console.table('movie', this.props.company)
    return (
      <div className="App">
        <header className="App-header">
          <Header gotoHome={this.gotoHome}/>
        </header>
        {orderHighlithed}
        <div className="padding-land">
          <Row gutter={10}>
            {orderCompany}
          </Row>
        </div>
        <div className="padding-land">
          <h2>Nouveautés</h2>
          <News movies={this.props.movies} gotoMovie={this.gotoMovie}/> 
        </div>
        <div className="padding-land">
          <h2>Suggestions</h2>
          <Suggest movies={this.props.suggest} gotoMovie={this.gotoMovie}/> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      movies: state.movieReducer.movies,
      suggest: state.suggestReducer.suggest,
      company: state.companyReducer.company
  }
}
const mapDispatchToProps = {
  getMovies: getMovieRequest,
  getSuggest: getSuggestRequest,
  getCompany: getCompanyRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
