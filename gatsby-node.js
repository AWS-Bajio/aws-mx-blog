const path = require(`path`);
const slash = require(`slash`);

//Query que devuelve todos los posts y tags
const queryAllPostsAndTags = async graphql => {
  const {
    data: { posts },
  } = await graphql(`
    query {
      posts {
        listPosts {
          items {
            id
            content
            title
            slug
          }
        }
        listTags {
          items {
            id
            name
            slug
          }
        }
      }
    }
  `);
  return posts;
};

const createAllPostPages = async (posts, createPage, postTemplate) => {
  posts.forEach(async post => {
    const { id, slug } = post;
    createPage({
      // will be the url for the page
      path: `/${slug}`,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id,
      },
    });
  });
};

const createAllBlogPages = async (createPage, template, graphql) => {
  await graphql(
    `
      query somePosts($limit: Int!) {
        posts {
          postsByCreatedAt(type: "Post", sortDirection: DESC, limit: $limit) {
            items {
              id
              title
              content
              excerpt
              slug
              createdAt
              featured_media
              tags {
                items {
                  tag {
                    name
                  }
                }
              }
              authors {
                items {
                  author {
                    firstName
                    lastName
                  }
                }
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(res => {
    const { items: posts } = res.data.posts.postsByCreatedAt;

    // Create blog list pages (for Blog List Pagination, BLP)
    // Assign path /2, /3, p/4, etc
    const postsPerPage = 3;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      // Create blog list pages (for Blog List Pagination, BLP)
      // Assign path /2, /3, p/4, etc
      createPage({
        path: i === 0 ? `/publicaciones/` : `/publicaciones/${i + 1}`,
        component: slash(template),
        context: {
          id: `blog-${i + 1}`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          posts: posts.slice(i * postsPerPage, i * postsPerPage + postsPerPage),
          numPages,
          currentPage: i + 1,
        },
      });
    });
  });
};

const createAllTagPages = async (tags, createPage, template, graphql) => {
  const promises = [];
  tags.forEach(async tag => {
    promises.push(
      graphql(
        `
          query($id: ID!, $limit: Int!) {
            posts {
              postsByTag(tagID: $id, limit: $limit) {
                items {
                  post {
                    id
                    title
                    content
                    excerpt
                    slug
                    createdAt
                    featured_media
                    tags {
                      items {
                        tag {
                          id
                          name
                        }
                      }
                    }
                    authors {
                      items {
                        author {
                          id
                          firstName
                          lastName
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        { limit: 1000, id: tag.id }
      )
    );

    return Promise.all(promises).then(results => {
      results.forEach(res => {
        const { items: posts } = res.data.posts.postsByTag;
        const postsPerPage = 2;
        const numPages = Math.ceil(posts.length / postsPerPage);
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/publicaciones/${tag.slug}` : `/publicaciones/${tag.slug}/${i + 1}`,
            component: slash(template),
            context: {
              id: `blog-template-${i + 1}`,
              limit: postsPerPage,
              skip: i * postsPerPage,
              posts: posts.slice(
                i * postsPerPage,
                i * postsPerPage + postsPerPage
              ),
              numPages,
              tagName: tag.name,
              slug: tag.slug,
              currentPage: i + 1,
            },
          });
        });
      });
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postsAndTags = await queryAllPostsAndTags(graphql);
  const postTemplate = path.resolve(`./src/components/Post.js`);
  const pageTemplate = path.resolve(`./src/components/Blog.js`);
  const tagTemplate = path.resolve(`./src/components/Tag.js`);
  const { items: posts } = postsAndTags.listPosts;
  const { items: tags } = postsAndTags.listTags;
  await createAllPostPages(posts, createPage, postTemplate);
  await createAllBlogPages(createPage, pageTemplate, graphql);
  return createAllTagPages(tags, createPage, tagTemplate, graphql);
};

exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
    node: {
      console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    },
    devtool: 'eval-source-map',
  });
};
