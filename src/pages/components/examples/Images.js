import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"
const Images = () => {
  return (
    <Wrapper>
      <StaticImage
        src=".../src/assets/images/recipes/big.jpg"
        alt="food"
        placeholder="tracedSVG"
        layout="fullwidth"
        className="example-img"
        as="section"
      />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;

  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
  }
`

export default Images
