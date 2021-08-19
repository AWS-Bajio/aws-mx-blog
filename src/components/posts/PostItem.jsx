import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Wrapper, WrapperImg, ContentWrapper, Title, Excerpt } from './styles';
import Image from '../common/Image';
import ContentFooter from "./ContentFooter"
import { strip, getFirstAuthorName } from '../../utils/TextUtils';

const PostItem = ({ post }) => {
  const { title, featured_media, createdAt, authors, excerpt } = post;
  const imageStyles = {
    ...WrapperImg,
    backgroundImage: `url(${featured_media})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
  const [itemTitle, setItemTitle] = useState("")
  const [itemExcerpt, setItemExcerpt] = useState("")

  useEffect(()=> {
    setItemTitle(strip(title))
    setItemExcerpt(strip(excerpt))
  },[title, excerpt])

  return (
    <Wrapper>
      <Image extraStyles={imageStyles} />
      <ContentWrapper>
        <Title>{itemTitle}</Title>
        <Excerpt>{itemExcerpt}</Excerpt>
        <ContentFooter author={getFirstAuthorName(authors)} postCreationDate={createdAt} />
      </ContentWrapper>
    </Wrapper>
  )
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostItem;
