/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      id
      date
      title
      image
      details
      location
      priority
      type
      link
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      id
      date
      title
      image
      details
      location
      priority
      type
      link
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      id
      date
      title
      image
      details
      location
      priority
      type
      link
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        items {
          id
          authorID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        items {
          id
          authorID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        items {
          id
          authorID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      content
      featured_media
      slug
      type
      createdAt
      excerpt
      _version
      _deleted
      _lastChangedAt
      updatedAt
      authors {
        items {
          id
          authorID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          postID
          tagID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      content
      featured_media
      slug
      type
      createdAt
      excerpt
      _version
      _deleted
      _lastChangedAt
      updatedAt
      authors {
        items {
          id
          authorID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          postID
          tagID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      content
      featured_media
      slug
      type
      createdAt
      excerpt
      _version
      _deleted
      _lastChangedAt
      updatedAt
      authors {
        items {
          id
          authorID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          postID
          tagID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
      id
      name
      slug
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        items {
          id
          postID
          tagID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      id
      name
      slug
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        items {
          id
          postID
          tagID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      id
      name
      slug
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        items {
          id
          postID
          tagID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateAuthorPost = /* GraphQL */ `
  subscription OnCreateAuthorPost {
    onCreateAuthorPost {
      id
      authorID
      postID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        posts {
          nextToken
          startedAt
        }
      }
      post {
        id
        title
        content
        featured_media
        slug
        type
        createdAt
        excerpt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        authors {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onUpdateAuthorPost = /* GraphQL */ `
  subscription OnUpdateAuthorPost {
    onUpdateAuthorPost {
      id
      authorID
      postID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        posts {
          nextToken
          startedAt
        }
      }
      post {
        id
        title
        content
        featured_media
        slug
        type
        createdAt
        excerpt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        authors {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onDeleteAuthorPost = /* GraphQL */ `
  subscription OnDeleteAuthorPost {
    onDeleteAuthorPost {
      id
      authorID
      postID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        posts {
          nextToken
          startedAt
        }
      }
      post {
        id
        title
        content
        featured_media
        slug
        type
        createdAt
        excerpt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        authors {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onCreatePostTag = /* GraphQL */ `
  subscription OnCreatePostTag {
    onCreatePostTag {
      id
      postID
      tagID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      post {
        id
        title
        content
        featured_media
        slug
        type
        createdAt
        excerpt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        authors {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
      }
      tag {
        id
        name
        slug
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        posts {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onUpdatePostTag = /* GraphQL */ `
  subscription OnUpdatePostTag {
    onUpdatePostTag {
      id
      postID
      tagID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      post {
        id
        title
        content
        featured_media
        slug
        type
        createdAt
        excerpt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        authors {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
      }
      tag {
        id
        name
        slug
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        posts {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onDeletePostTag = /* GraphQL */ `
  subscription OnDeletePostTag {
    onDeletePostTag {
      id
      postID
      tagID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      post {
        id
        title
        content
        featured_media
        slug
        type
        createdAt
        excerpt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        authors {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
      }
      tag {
        id
        name
        slug
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        posts {
          nextToken
          startedAt
        }
      }
    }
  }
`;
