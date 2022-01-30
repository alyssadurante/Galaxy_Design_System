/* eslint-disable global-require */
import React from 'react';
import { Link } from 'gatsby';
import componentList from '../../data/components.json';
import './component-overview.scss';

class ComponentOverview extends React.Component {
  renderItems = (currentItem) => {
    const { component } = currentItem;
    let componentUrl;
    componentUrl = `/molecules/${component
        .toLowerCase()
        .replace(' ', '-')}/usage`;

    let componentImg;
    try {
      componentImg = require(`./images/${component}.svg`).default;
    } catch (e) {
      // eslint-disable-next-line global-require
      componentImg = require('./images/NoImage.svg').default;
    }

    return (
      <li className="component-item" key={component}>
        <div className="bx--aspect-ratio bx--aspect-ratio--align bx--aspect-ratio--1x1">
          <div className="bx--aspect-ratio--object">
            <Link to={componentUrl} className="component-item__link">
              <img
                src={componentImg}
                alt={component}
                className="component-item__img"
              />
              <p className="component-name">{component}</p>
            </Link>
          </div>
        </div>
      </li>
    );
  };

  render() {
    return (
      <div className="bx--row">
        <div className="bx--col-lg-12 bx--no-gutter">
          <ul className="component-overview">
            {Object.keys(componentList.components).map((component) =>
              this.renderItems(componentList.components[component])
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default ComponentOverview;
