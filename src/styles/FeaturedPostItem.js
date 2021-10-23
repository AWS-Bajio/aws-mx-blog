import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  width: 100%;
  height: 40vh;
  margin-top: 140px;

  .img-cover {
    width: 100vw;
    height: 40vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
  }

  .post-content {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
  }

  .featured-legend {
    color: white;
    text-transform: none;
    font-weight: 800;
  }

  .featured-title {
    color: white;
    font-size: 6rem;
    text-transform: none;
    font-weight: 800;
  }

  /*
  ************
  Media Queries
  *************
  */
  /* Medium and small devices (992px and down) */
  @media only screen and (max-width: 992px) {
    .featured-title {
      font-size: 3rem;
    }
  }
`;
