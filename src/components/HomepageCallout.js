import React from 'react';
import { Grid, Column, Row } from './Grid';
import { grid, row, firstColumn, secondColumn } from './Callout.module.scss';

const HomepageCallout = ({
  ...rest
}) => {
  return (
    <Grid
      style={{ width: '100%', maxWidth: '100%' }}
      className={grid}
      {...rest}>
      <Row className={row}>
        <Column colLg={6} colMd={6} className={`${firstColumn} homepage-card`}>
        <div>
          <a class="css-jq5ucr" href="/components">
            <div class="css-1dcp76l-image-wrapper">
              <img src="https://res.cloudinary.com/dgcfg5cwe/image/upload/v1643763174/components_cipnq0.svg" alt="" class="css-1pf0x3y"></img>
            </div>    
            <div class="css-1kao9ru-content-wrapper">
              <h2 class="headline2 css-1ap99dr-content-heading">Components</h2>
              <p class="lg css-1voojgg-content-description">Components are the intuitive building blocks of our design system.</p>
              <p class="link css-1a1v1z7-clickable-card-animated-link">Explore our components
                <span role="presentation" aria-hidden="true" class="css-ytzf8j">
                  <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                    <path d="M11.793 5.793a.999.999 0 000 1.414L15.586 11H6a1 1 0 000 2h9.586l-3.793 3.793a.999.999 0 000 1.414c.39.39 1.024.39 1.415 0l5.499-5.5a.997.997 0 00.293-.679v-.057a.996.996 0 00-.293-.678l-5.499-5.5a1 1 0 00-1.415 0z" fill="currentColor" fill-rule="evenodd"></path>
                  </svg>
                </span>
              </p>
            </div>
          </a>
        </div>
        </Column>
        <Column colLg={6} colMd={6} className={secondColumn}>
        <div>
          
            </div>
        </Column>
      </Row>
    </Grid>
  );
};


export default HomepageCallout;
