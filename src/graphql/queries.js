/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const postsByTag = /* GraphQL */ `
  query PostsByTag(
    $tagID: ID
    $postID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByTag(
      tagID: $tagID
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
      EventSpeakers {
        items {
          id
          eventID
          authorID
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        EventSpeakers {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        EventSpeakers {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
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
      events {
        items {
          id
          eventID
          authorID
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
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        events {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAuthors = /* GraphQL */ `
  query SyncAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuthors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        events {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const postsByCreatedAt = /* GraphQL */ `
  query PostsByCreatedAt(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByCreatedAt(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const tagsByUpdatedAt = /* GraphQL */ `
  query TagsByUpdatedAt(
    $updatedAt: AWSDateTime
    $sortDirection: ModelSortDirection
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tagsByUpdatedAt(
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAuthorPosts = /* GraphQL */ `
  query SyncAuthorPosts(
    $filter: ModelAuthorPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuthorPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPostTags = /* GraphQL */ `
  query SyncPostTags(
    $filter: ModelPostTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEventAuthors = /* GraphQL */ `
  query SyncEventAuthors(
    $filter: ModelEventAuthorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEventAuthors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        eventID
        authorID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        event {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
