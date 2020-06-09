import React from 'react';
import scatsData from '../../../helpers/data/scatsData';

import './SingleScat.scss';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const { scatId } = this.props.match.params;
    scatsData.getSingleScat(scatId)
      .then((response) => this.setState({ scat: response.data }))
      .catch((err) => console.error('unable to get single scat: ', err));
  }

  removeScat = () => {
    const { scatId } = this.props.match.params;
    scatsData.deleteScat(scatId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to delete single item', err));
  }

  render() {
    const { scat } = this.state;

    return (
      <div className="SingleScat m-2 p-3" style={{ backgroundColor: scat.color }}>
        <h1>{scat.location}</h1>
        <p>Shape: {scat.shape}</p>
        <p>Size: {scat.size}</p>
        <p>Temperature: {scat.temperature}</p>
        <p>Viscosity: {scat.viscosity}</p>
        <p>Location: {scat.location}</p>
        <p>Notes: {scat.notes}</p>
        <p>Was it Fulfilling? {scat.wasFulfilling ? 'Yes' : 'No'}</p>
        <button className="btn btn-danger" onClick={this.removeScat}> Delete </button>
      </div>
    );
  }
}

export default SingleScat;
