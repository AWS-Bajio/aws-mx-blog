import styled from "styled-components"

export default styled.header`
  width: 100%;
  box-shadow:  none;
  position: absolute;
  z-index: 999999999;
  
  
  .icon-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .behind {
    position: absolute;
    top: 35%;
  }
  
  .icon-default {
    transition: opacity .3s, transform .3s;
  }
  
  .large-input-mobile {
    background: none;
    border: none;
    border-bottom: 2px solid white;
    color: black;
    font-size: 14px;
    transition: width 0.3s;
    padding-right: 48px;
    width: 0%;
    height: 0%;
    float: right;
    box-sizing: border-box;
  }
  
  .large-input-mobile:focus {
    outline: 0;
  }
  
  .icon-hover {
    transition: opacity .3s, transform .3s;
    transform: rotate(-90deg) scale(.5);
    opacity: 0;
    }
    
  .icon-hover-active {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
  
  .icon-default-0 {
    transform: rotate(90deg) scale(.5);
    opacity: 0;
  }
  
  div {
    .menu-item-toolbar {
      float: right;
      height: 30px;
      line-height: 30px;
      li {
        display: inline-block;
        color: black;
        padding: 10px 8px 10px 42px;
        text-transform: uppercase;
        line-height: normal;
        font-size: 14px;
      }
    }
  }
  
  .logo-icon {
    width:125px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }
  
  #main-content {
    background-color: white;
    min-height:100vh;
    position:absolute;
    transition:all 0.2s linear;
    left: 0;
    }
  
  a {
    vertical-align: middle;
  }

  li {
    font-weight: 800;
  }
  .pointer {
    cursor: pointer;
  }
  
  .menu-icon-container:focus,
  .search-icon-container:focus,
  .closable_close:focus {
    outline: none;
    
  }

 
  #header-content,
  #header-mobile {
    height: 60px;
  }
  
  
  .closable-close-mobile {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px 0px 10px 0px;
    cursor: pointer;
    color: black;
  }

  .input-full-width {
    width: 100% !important;
    height: 45px;
  }

  .closable-mobile {
      position: relative;
      display: inline-block;
      width: 100%;
      font-size: 40px !important;
    }
  .last-item {
    padding-right: 0 !important;
    margin-right: 0 !important;
  }
  #search-panel {
    margin: 0;
    padding: 0;
  }

  .menu-icon-container,
  .search-icon-container {
    font-size: 20px;
    align-content: center;
    align-self: center;
  }

  /*
  ************
  Media Queries
  *************
  */

  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    #header-mobile {
      display: grid;
      grid-template-columns: auto auto auto;
      color: black;
      align-content: center;
      grid-gap: 18px;
      justify-items: center;
      margin: 0;
    }

    .menu-icon-container {
      justify-self: start;
      margin: 0;
    }

    .search-icon-container {
      justify-self: right;
      margin: 0;
    }
    
    .logo-icon {
      margin: auto;
      position: initial;
    } 
  
    .large-input-mobile {
      font-size: 14px;
    }

    .menu-item-toolbar {
      display: none;
    }
    
    .logo-large {
      display: none
    }
  }

  @media only screen and (min-device-width : 481px) {
    #header-mobile {
      display: none;
    }

    .menu-item-toolbar {
      display: none
    }
  }

  /* iPads (portrait and landscape) ----------- */
  @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    .logo-icon {
      width: 170px;;
    } 
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .logo-icon {
      width: 270px;;
    }
  }
`