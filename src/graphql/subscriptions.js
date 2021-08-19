/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor {
    onCreateAuthor {
      id
      firstName
      lastName
      photo
      description
      twitter
      linkedin
      facebook
      github
      youtube
      posts {
        items {
          id
          authorID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor {
    onUpdateAuthor {
      id
      firstName
      lastName
      photo
      description
      twitter
      linkedin
      facebook
      github
      youtube
      posts {
        items {
          id
          authorID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor {
    onDeleteAuthor {
      id
      firstName
      lastName
      photo
      description
      twitter
      linkedin
      facebook
      github
      youtube
      posts {
        items {
          id
          authorID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      authors {
        items {
          id
          authorID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      title
      content
      featured_media
      slug
      type
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      excerpt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      authors {
        items {
          id
          authorID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      title
      content
      featured_media
      slug
      type
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      excerpt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      authors {
        items {
          id
          authorID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      title
      content
      featured_media
      slug
      type
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      excerpt
      updatedAt
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
      id
      posts {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      slug
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      id
      posts {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      slug
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      id
      posts {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      slug
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAuthorPost = /* GraphQL */ `
  subscription OnCreateAuthorPost {
    onCreateAuthorPost {
      id
      authorID
      postID
      author {
        id
        firstName
        lastName
        photo
        description
        twitter
        linkedin
        facebook
        github
        youtube
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        authors {
          nextToken
        }
        title
        content
        featured_media
        slug
        type
        tags {
          nextToken
        }
        createdAt
        excerpt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAuthorPost = /* GraphQL */ `
  subscription OnUpdateAuthorPost {
    onUpdateAuthorPost {
      id
      authorID
      postID
      author {
        id
        firstName
        lastName
        photo
        description
        twitter
        linkedin
        facebook
        github
        youtube
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        authors {
          nextToken
        }
        title
        content
        featured_media
        slug
        type
        tags {
          nextToken
        }
        createdAt
        excerpt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAuthorPost = /* GraphQL */ `
  subscription OnDeleteAuthorPost {
    onDeleteAuthorPost {
      id
      authorID
      postID
      author {
        id
        firstName
        lastName
        photo
        description
        twitter
        linkedin
        facebook
        github
        youtube
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        authors {
          nextToken
        }
        title
        content
        featured_media
        slug
        type
        tags {
          nextToken
        }
        createdAt
        excerpt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePostTag = /* GraphQL */ `
  subscription OnCreatePostTag {
    onCreatePostTag {
      id
      postID
      tagID
      post {
        id
        authors {
          nextToken
        }
        title
        content
        featured_media
        slug
        type
        tags {
          nextToken
        }
        createdAt
        excerpt
        updatedAt
      }
      tag {
        id
        posts {
          nextToken
        }
        name
        slug
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePostTag = /* GraphQL */ `
  subscription OnUpdatePostTag {
    onUpdatePostTag {
      id
      postID
      tagID
      post {
        id
        authors {
          nextToken
        }
        title
        content
        featured_media
        slug
        type
        tags {
          nextToken
        }
        createdAt
        excerpt
        updatedAt
      }
      tag {
        id
        posts {
          nextToken
        }
        name
        slug
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePostTag = /* GraphQL */ `
  subscription OnDeletePostTag {
    onDeletePostTag {
      id
      postID
      tagID
      post {
        id
        authors {
          nextToken
        }
        title
        content
        featured_media
        slug
        type
        tags {
          nextToken
        }
        createdAt
        excerpt
        updatedAt
      }
      tag {
        id
        posts {
          nextToken
        }
        name
        slug
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
