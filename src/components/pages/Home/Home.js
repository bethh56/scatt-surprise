import React from 'react';

import { Link } from 'react-router-dom';

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
        <Link to='/scats/s56465465'> View Single </Link>
        <Link to='/new'> View New </Link>
      </div>
    );
  }
}

export default Home;
