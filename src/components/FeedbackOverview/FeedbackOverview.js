/* eslint-disable global-require */
import React from 'react';
import { Link } from 'gatsby';


class FeedbackOverview extends React.Component {

  render() {
    return (
      <div className="bx--row">
        <div className="bx--col-lg-12 bx--no-gutter">
            <div>If you need a new component that is not currently in Galaxy, please fill out this <a href="/feedback">form</a> and email it over to the Design Team (Alyssa). I'll take a look at your request and get back to you.</div>
        </div>
      </div>
    );
  }
}

export default FeedbackOverview;
