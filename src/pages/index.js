import 'react-multi-carousel/lib/styles.css';
import React, { Component } from 'react';
import ScrollingLayout from '../components/ScrollingLayout';
import SEO from '../components/SEO';
import SideNav from '../components/sidenav';
import DeprecatedPostItem from '../components/DeprecatedPostItem';
import Wrapper from '../styles/blog';
import { graphql } from 'gatsby';
import PostsTable from "../components/posts/PostsTable"

class Blog extends Component {
  arePostsAvailable = () => {
    const posts = this.getPosts();
    return posts.length > 0;
  };


  getPosts = () => {
    const {
      data: {
        posts: {
          postsByCreatedAt: { items },
        },
      },
    } = this.props;
    return items;
  };

  renderMainPost = () => {
    if (!this.arePostsAvailable()) {
      return null;
    }
    const posts = this.getPosts();
    return (
      <div className="featured-post">
        <DeprecatedPostItem post={posts[0]} key="0" i="0" isFeaturedPost={true} />
      </div>
    );
  };

  renderPosts = () => {
    const {
      pageContext: { numPages, currentPage },
    } = this.props;
    // Getting all posts except the first one already used as MainPost
    const posts = this.getPosts().slice(1);
    return (
      <PostsTable posts={posts} currentPage={currentPage || 0} totalNumberOfPages={numPages || 0} />
    );
  };

  render() {
    return (
      <Wrapper>
        <ScrollingLayout location="/blog">
          <SEO title="AWS MX Blog" />
          <div className="container">
            <div  className="main-content">
              {this.renderMainPost()}
              <div className="posts-and-side-content">
                {this.renderPosts()}
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
  }
}

export default Blog;

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
