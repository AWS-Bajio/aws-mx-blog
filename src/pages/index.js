import React from 'react';
import ScrollingLayout from '../components/ScrollingLayout';
import SEO from '../components/SEO';
import SideNav from '../components/sidenav';
import FeaturedPostItem from '../components/FeaturedPostItem';
import Wrapper from '../styles/blog';
import { graphql } from 'gatsby';
import PostsTable from '../components/posts/PostsTable';
import PropTypes from 'prop-types';
import 'react-multi-carousel/lib/styles.css';

const Index = ({ data, pageContext }) => {
  const {
    posts: {
      postsByCreatedAt: { items: postItems },
    },
  } = data;

  const { numPages, currentPage } = pageContext;

  return (
    <Wrapper>
      <ScrollingLayout location="/blog">
        <SEO title="AWS MX Blog" />
        {postItems?.length && <FeaturedPostItem post={postItems[0]} />}
        <div className="container">
          <div className="main-content">
            {/** TODO: What happens if there are no posts? */}

            <div className="posts-and-side-content">
              {/* The featured post is removed using slice(1)*/}
              <PostsTable
                posts={postItems.slice(1)}
                currentPage={currentPage || 0}
                totalNumberOfPages={numPages || 0}
              />

              <div className="side-content">
                <SideNav />
                {/*TODO: Add collaborators component*/}
                <div className="collaborators" />
                {/*TODO: Add communities component*/}
                <div className="communities" />
              </div>
            </div>
          </div>
        </div>
      </ScrollingLayout>
    </Wrapper>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

/**
 * Query to retrieve every entry from blog
 */
// eslint-disable-next-line no-undef
export const postsQuery = graphql`
  query {
    posts {
      postsByCreatedAt(type: "Post", sortDirection: DESC, limit: 11) {
        items {
          id
          title
          content
          excerpt
          slug
          createdAt
          authors {
            items {
              author {
                firstName
                lastName
              }
            }
          }
          featured_media
        }
      }
    }
  }
`;
