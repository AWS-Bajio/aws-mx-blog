import styled from 'styled-components';
import { white } from './colors';

const wrapper = styled.div`
  background-color: ${white};
  min-height: 100vh;

  .container {
    max-width: 100%;
    margin: 0 30px;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    min-width: 320px;
  }

  .featured-post {
    height: 300px;
    margin-top: 70px;
  }

  .posts-and-side-content {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  .collaborators {
    height: 200px;
  }

  .communities {
    height: 200px;
  }

  /*
  ************
  Media Queries
  *************
  */

  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  }

  /* iPads (portrait and landscape) ----------- */
  @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    .container {
      margin: 0 50px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {

    .container {
      margin: 0 100px;
    }

    .featured-post {
      height: 550px;
    }

    .posts-and-side-content {
      flex-direction: row;
    }

    .side-content {
      min-width: 300px;
    }
  }
`;

export default wrapper;
