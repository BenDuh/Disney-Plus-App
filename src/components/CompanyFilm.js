import React, { Component } from 'react'

export default class CompanyFilm extends Component {
    
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header gotoHome={this.gotoHome}/>
                </header>
            </div>
        )
    }
}
