/* eslint-disable global-require */
import React from 'react';
import { Link } from 'gatsby';
import iconList from '../../data/icons.json';
import './icon-overview.scss';

class IconOverview extends React.Component {
  renderItems = (currentItem) => {
    const { icon } = currentItem;
    let iconUrl;
    iconUrl = `https://app.streamlinehq.com/icons/streamline-bold/${currentItem.svgLink
        .toLowerCase()
        .replace(' ', '-')}`;

    let iconImg;
    try {
      iconImg = require(`./images/${icon}.svg`).default;
    } catch (e) {
      // eslint-disable-next-line global-require
      iconImg = require('./images/NoImage.svg').default;
    }
    Object.entries(iconList).map((icons) => {
     console.log(icons)
  })
    
    return (
      <li className="component-item m-10" key={icon}>
        <div className="bx--aspect-ratio bx--aspect-ratio--align bx--aspect-ratio--1x1">
          <div className="bx--aspect-ratio--object">
          <Link to={iconUrl} className="component-item__link" target="_blank">
              <img
                src={iconImg}
                alt={icon}
                className="component-item__img"
              />
              <p className="component-name">{icon}</p>
              </Link>
              <h5>When to Use</h5>
          </div>
        </div>
      </li>
    );
  };

  render() {
    return (
      <div>
      <div className="bx--row">
        <div className="bx--col-lg-12 bx--no-gutter">
          <ul className="component-overview">
            {Object.keys(iconList.icons).map((icon) =>
              this.renderItems(iconList.icons[icon])
            )}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default IconOverview;
