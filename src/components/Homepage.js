import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import DesignSystem from './Cover.png';

const BannerText = () => <div><h1>Galaxy Design System</h1>
<p>Use AnswerRocket's end-to-end design language to create simple, intuitive and beautiful experiences.</p>
</div>
;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={DesignSystem} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#0080FF"
      color="white"
    />
  )
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
