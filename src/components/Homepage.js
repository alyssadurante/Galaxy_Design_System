import React from 'react';
import HomepageBanner from './HomepageBanner';
import HomepageCallout from './HomepageCallout';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

const customProps = {
  Banner: <HomepageBanner />,
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
