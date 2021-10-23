import '../styles/global.css';
import React from 'react';
import { Link } from 'gatsby';
import Wrapper from '../styles/FeaturedPostItem';
import Image from './common/Image';

// Formatter to be used with the TimeAgo library to show text in spanish.

const FeaturedPostItem = ({ post }) => {
  const { slug, title, featured_media } = post;

  return (
    <Wrapper>
      <Link to={`/${slug}`}>
        <Image
          className={'img-cover'}
          extraStyles={{
            backgroundImage: `url(${featured_media})`,
          }}
        />
        <div className="post-content container">
          <h3 className="featured-legend"> Artículo destacado</h3>
          <h1 className="featured-title">{title} </h1>
        </div>
      </Link>
    </Wrapper>
  );
};

export default FeaturedPostItem;
