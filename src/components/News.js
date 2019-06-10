import React,{Component} from 'react'
import CardMovie from './CardMovie'
import { Row, Carousel } from 'antd'
import Slider from "react-slick"

export default class News extends Component {   
      setSelected = ev => {
        const { value } = ev.target;
        this.setState({ selected: String(value) });
      };
    
    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 5
        }
        const orderMovies = this.props.movies.map(movie =>{
            return(
                <CardMovie key={movie.id} id={movie.id} image={movie.poster} cover={false} gotoMovie={this.props.gotoMovie}/>
            )    
        })
        return (
          <div>
            <Slider {...settings}>{orderMovies}</Slider>
          </div>
          
        )
    }
}
