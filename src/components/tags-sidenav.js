import { Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import { graphql } from "gatsby"

/**
 * TagsSideNavWrapper element, used to set style to a component.
 */
const TagsSideNavWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;

  .tags-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 42px;
    grid-gap: 12px 24px;
    align-content: center;
    align-self: center;
    align-items: center;
  }

  .tags-container a {
    align-self: center;
    color: #aaa;
    font-size: 18px;
  }
`

/**
 * @function TagsSideNav
 * @author Uriel
 * TagsSideNav to show the main tags.
 * Note: The order is taken from the most popular tag (the one with most
 * publicated posts) to the least one.
 * TODO: Agregar el campo count para identificar cuántos elementos existen y ordenarlos de acuerdo al más popular
 */
const TagsSideNav = () => {
  const data = useStaticQuery(graphql`
    query {
      posts {
        listTags(limit: 10) {
          items {
            id
            name
            slug
            posts {
              items {
                id
              }
            }
          }
        }
      }
    }
  `)

  const tags = data.posts.listTags.items
  let tagsElem = []
  tags.forEach((tag) => {
    const {id,slug,name,posts:{items}} = tag;
    console.log("itemssss",items)
    if(items && items.length > 0){
      console.log(`push ${slug} ${name}`);
      tagsElem.push(
        <Link key={id} to={"/publicaciones/" + slug}>
          {name}
        </Link>
      )
    }
  })

  return (
    <TagsSideNavWrapper>
      <h3>Etiquetas</h3>
      <div className="tags-container">{tagsElem}</div>
    </TagsSideNavWrapper>
  )
}

/**
 * Default props for the TagsSideNav Component
 */
TagsSideNav.propTypes = {}

export default TagsSideNav
