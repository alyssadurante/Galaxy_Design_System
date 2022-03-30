/* eslint-disable global-require */
import React from 'react';
import { Link } from 'gatsby';
import iconList from '../../data/icons.json';
import './icon-overview.scss';

class IconOverview extends React.Component {
  renderItems = (currentItem, componentName) => {
    const { icon } = currentItem;


    Object.keys(iconList.icons).map((icon) => {
      var singleIcon = iconList.icons[icon];
     componentName = singleIcon.component[0].name;
      console.log(singleIcon.component[1].name);
   })

    let iconUrl;
    iconUrl = `https://streamlinehq.com/icons/${currentItem.svgLink
        .toLowerCase()
        .replace(' ', '-')}`;

    let iconImg;
    try {
      iconImg = require(`./images/${icon}.svg`).default;
    } catch (e) {
      // eslint-disable-next-line global-require
      iconImg = require('./images/NoImage.svg').default;
    }
    
    
    return (
      <li className="component-item m-10" key={icon}>
        <div className="bx--aspect-ratio bx--aspect-ratio--align bx--aspect-ratio--1x1">
          <div className="bx--aspect-ratio--object">
          <Link to={iconUrl} className="component-item__link" target="_blank">
              <img
                src={iconImg}
                alt={icon}
                className="component-item__img icon_img"
              />
              <p className="component-name">{icon}</p>
              </Link>
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
