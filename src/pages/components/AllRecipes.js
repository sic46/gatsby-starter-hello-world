import React from "react"
import RecipeList from "./RecipeList"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes

  return (
    <section className="recipes-container">
      <h4>All recipes</h4>
      <TagsList recipes={recipes} />
      <RecipeList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
