import React,{Component} from 'react'
import CardMovie from './CardMovie';
import ScrollMenu from 'react-horizontal-scrolling-menu'
import { Row, Carousel } from 'antd';

export default class Suggest extends Component {
    state = {
        selected: 0
      };
      onSelect = key => {
        this.setState({ selected: key });
      }
    render() {
        let i = 0;
        const orderMovies = this.props.movies.map(movie =>{
        i++;
        return(
            <div>
                {i <= 5 &&
                    <CardMovie key={movie.id} id={movie.id} image={movie.poster} cover={true} gotoMovie={this.props.gotoMovie}/>
                }
            </div>
        )    
        })
        const { selected } = this.state;
        return (
            // <ScrollMenu
            //   data={orderMovies}
            //   selected={selected}
            //   onSelect={this.onSelect}
            //   wheel={false}
            // />
            <Row className="scrollbar-wrapper">{orderMovies}</Row>
        )
    }
}