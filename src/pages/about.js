import React from 'react';
import PropTypes from 'prop-types';

const el = ({ data }) => (
  <div>
    <h1>
      About {data.site.siteMetadata.title}
    </h1>
    <p>
      {JSON.stringify(data)}
      We&#39;re the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </div>
);

el.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default el;

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
