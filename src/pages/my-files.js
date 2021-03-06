import React from 'react';
import PropTypes from 'prop-types';

const el = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>My Site&#39;s Files</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }) => (
            <tr>
              <td>
                {node.relativePath}
              </td>
              <td>
                {node.prettySize}
              </td>
              <td>
                {node.extension}
              </td>
              <td>
                {node.birthTime}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

el.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default el;

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
