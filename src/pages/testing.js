import React from 'react'
import { graphql } from 'gatsby'
const Testing = ({data}) => {
        return (
        <div>
            <h2>
                Testing {data.site.info.title}
            </h2>
            
        </div>
    )
} 
export const data = graphql`
{
    site {
      info: siteMetadata {
        title
        simpleData
        person {
          age
          name
        }
        complexData {
          age
          name
        }
        author
      }
    }
  }
  `
export default Testing
