import React from 'react';
import PageLayout from './page-layout';
import SEO from './SEO';
import styled from 'styled-components';
import SideNav from './sidenav';
import Title from './title';
import DeprecatedPostItem from './DeprecatedPostItem';
import Paginator from './paginator';
import { graphql } from 'gatsby';
import 'react-multi-carousel/lib/styles.css';

/**
 * Styled div of Tag Page
 */
const TagWrapper = styled.div`
  background-color: #ffffff;
  min-height: 99%;

  .post-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
  }

  .cover {
    grid-row: 1 / span 2;
  }

  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: white;
    margin-bottom: 30px;
  }
`;

const Tag = ({
  pageContext: { posts, tagName, numPages, currentPage, slug },
}) => {
  return (
    <TagWrapper>
      <PageLayout location="/blog">
        <SEO title={`${tagName} | Rocktech R+D`} />
        <div className="container">
          <div className="blog-container">
            <div className="entry-container">
              <Title title={tagName} subtitle="AWS MX"></Title>
              {/*cover*/}
              <div className="post-container">
                {posts.map((item, i) => (
                  <DeprecatedPostItem
                    post={item.post}
                    key={i}
                    i={i}
                    isCover={i === 0}
                  />
                ))}
              </div>
              <Paginator
                numPages={numPages}
                currentPage={currentPage}
                baseRoute={'/publicaciones/' + slug + '/'}
              />
            </div>
            <SideNav></SideNav>
          </div>
        </div>
      </PageLayout>
    </TagWrapper>
  );
};

/**
 * Exporting tag
 */
export default Tag;
