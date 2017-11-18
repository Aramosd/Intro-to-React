import React, { Component } from 'react';
import Album from '../Album';
import Photo from '../Photo';
import { Switch, Route } from 'react-router';
import * as api from '../../api';
import './Main.css';

//TOCHECK
//      IT USED TO BE A STATELESS COMPONENT...
// const Main = () => {
//   return (
//     <div className="main">
//       Main
//     </div>
//   );
// }

class Main extends Component{
  /*
      WITH TYPESCRIPT

      constructor(props){
        super();

        this.state = {

        }
      }
  */ 
  state = {
    albums: {},
    photos: {}
  }

  componentWillMount(){
    this.setState({
      albums: api.getAlbums(),
      photos: api.getPhotos()
    });
  }

  render(){
    /* OPTION 1 */
    const { albums, photos } = this.state;
    const notFound = () => <h1>Component not found, sorry !!</h1>;

    const albumList = () => {
      return (
        /*  OPTION 2 */ 
        <AlbumList {...this.state} />
      );
    }

    /*TOCHECK*/
    return (
      <Switch>
        {/*<Route path="/" component={Album} />*/}
        <Route exact path="/" />
        <Route path="/albums" component={Album} />
        <Route path="/photos" component={Photo} />
        <Route render={notFound} />
      </Switch>
    );
    // return(
    //   <Album album={this.state.albums['album1']} 
    //     albumPhotos={Array.from(this.state.photos)} />
    // )
  }
}

export default Main;
