import React from 'react';
import './master.css';

class PhotoEntry extends React.Component {

  render() {

    const image_path = "../images/" + this.props.src;

    return <div className="photo-entry-block" >
              <a href={image_path}>
                 <img className="photo-img" src={image_path} alt={image_path}/>
              </a>
              <h3>{this.props.prompt}</h3>
           </div>
  }

}

export default PhotoEntry;
