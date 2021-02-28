import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Wrapper, WrapperImg, ContentWrapper, Title, Excerpt } from './styles';
import ContentFooter from "./ContentFooter"
import { strip } from '../../utils/textUtils';

const PostItem = ({ post }) => {
  const { node: postInfo } = post;
  const { slug, title, featured_media, date, author, excerpt } = postInfo;

  return (
    <Wrapper>
      <Img fluid={featured_media.localFile.childImageSharp.fluid} style={WrapperImg} />
      <ContentWrapper>
        <Title>{strip(title)}</Title>
        <Excerpt>{strip(excerpt)}</Excerpt>
        <ContentFooter author={author.name} postCreationDate={date} />
      </ContentWrapper>
    </Wrapper>
  )
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostItem;
