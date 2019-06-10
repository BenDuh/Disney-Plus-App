import React,{Component} from 'react'
import CardMovie from './CardMovie';
import { Row, Carousel } from 'antd';

export default class News extends Component {   
      setSelected = ev => {
        const { value } = ev.target;
        this.setState({ selected: String(value) });
      };
    
    render() {
        const orderMovies = this.props.movies.map(movie =>{
            return(
                <CardMovie key={movie.id} id={movie.id} image={movie.poster} cover={false} gotoMovie={this.props.gotoMovie}/>
            )    
        })
        return (
          <Row className="scrollbar-wrapper">{orderMovies}</Row>
        )
    }
}
