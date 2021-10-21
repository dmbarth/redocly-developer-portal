import React from 'react';
//@ts-ignore
// import data from '../sidebars.yaml';
import { useStaticQuery, graphql } from 'gatsby';

export const RenderData = () => {
  const data = useStaticQuery(graphql`
    query {
      allSidebar(filter: {name: {eq: "training"}}) {
        nodes {
          id
          name
          items {
            label
            items {
              label
              link
            }
          }
        }
      }
    }
  `);

  return (
    <React.Fragment>
      {JSON.stringify(data.allSidebar)}
    </React.Fragment>
  )
}
