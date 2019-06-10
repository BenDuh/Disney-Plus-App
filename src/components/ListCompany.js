import React, { Component } from 'react';
import { getCompanyRequest } from '../reducer/reducers/companyReducer'
import {connect} from 'react-redux'
import Header from './Header';
import CardMovie from './CardMovie'
import { NavLink } from 'react-router-dom'

class ListCompany extends Component {
    componentDidMount(){
        this.props.getCompany(this.props.match.params.cid)
    }
    gotoHome = () =>{
        this.props.history.push(`/`)
    }
    gotoMovie = id =>{
        console.log(this.props.history.location)
        this.props.history.push(`movie/${id}`)
    }
    render() {
        console.log('company', this.props.company)
        const ListCompany =  this.props.company.map(movie =>{
            return(
              <div>
                <CardMovie id={movie.id} image={movie.poster} gotoMovie={this.gotoMovie}/>
              </div>
          )})
        return (
            <div className="App">
                <header className="App-header">
                    <Header gotoHome={this.gotoHome}/>
                </header>
                <div>
                    {ListCompany}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        company: state.companyReducer.company
    }
  }
  const mapDispatchToProps = {
    getCompany: getCompanyRequest
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListCompany);
  