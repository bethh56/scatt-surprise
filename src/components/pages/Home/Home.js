import React from 'react';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const scatId = 'scat123456';
    this.props.history.push(`/edit/${scatId}`);
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <button className="btn btn-dark" onClick={this.editEvent}>Edit a Thing</button>
      </div>
    );
  }
}

export default Home;
