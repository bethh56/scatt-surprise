import React from 'react';
import { Link } from 'react-router-dom';

import './ScatCard.scss';
import scatShape from '../../../helpers/propz/scatShape';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatShape,
  }

  render() {
    const { scat } = this.props;
    const singleLink = `/scats/${scat.id}`;
    const editLink = `/edit/${scat.id}`;
    return (
      <div className="ScatCard col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{scat.location}</h5>
            <p className="card-text">{scat.notes}</p>
            <Link className="btn btn-info m-1" to={singleLink}> View </Link>
            <Link className="btn btn-warning m-1" to={editLink}> Edit </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;
