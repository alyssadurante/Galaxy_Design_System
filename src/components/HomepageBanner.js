import React from 'react';
import { Grid, Column, Row } from './Grid';

const HomepageBanner = ({ image, position, renderText }) => (
  <Grid className="grid-banner">
    <Row className="row-banner">
      <Column colLg={6}><h1 class="main-title">Galaxy Design System v1.1</h1>
      <br/>
      <p>Use AnswerRocket's end-to-end design language to create simple, intuitive and beautiful experiences.</p>
      </Column>

    <Column colLg={6}>
        <img src="https://res.cloudinary.com/dgcfg5cwe/image/upload/v1643763174/components_cipnq0.svg"></img>
    </Column>
    </Row>
  </Grid>
);

export default HomepageBanner;
