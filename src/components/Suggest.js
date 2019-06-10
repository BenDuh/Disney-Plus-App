import React,{Component} from 'react'
import CardMovie from './CardMovie';
import ScrollMenu from 'react-horizontal-scrolling-menu'
import { Row, Carousel } from 'antd';
import Slider from "react-slick"

export default class Suggest extends Component {
      onSelect = key => {
        this.setState({ selected: key });
      }
    render() {
        let i = 0;
        const orderMovies = this.props.movies.map(movie =>{
        i++;
        return(
            <div>
                {i <= 8 &&
                    <CardMovie key={movie.id} id={movie.id} image={movie.poster} cover={true} gotoMovie={this.props.gotoMovie}/>
                }
            </div>
        )    
        })
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
          }
        return (
            <Slider {...settings}>{orderMovies}</Slider>
        )
    }
}