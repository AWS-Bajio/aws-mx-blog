/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        posts {
          nextToken
        }
        name
        slug
        createdAt
        updatedAt
      }
      nextToken
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
      nextToken
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
        posts {
          nextToken
        }
        name
        slug
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
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
        post {
          id
          title
          content
          featured_media
          slug
          type
          createdAt
          excerpt
          updatedAt
        }
        tag {
          id
          name
          slug
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
