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
    margin: 0 auto;

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
    width:210px;
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
    height: 70px;
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

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 768px) {
    #header-mobile {
      display: grid;
      grid-template-columns: auto auto auto;
      color: black;
      align-content: center;
      grid-gap: 18px;
      justify-items: center;
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
      width:210px;
      margin: auto;
      position: initial;
  }
  
  .large-input-mobile {
      font-size: 14px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    #header-mobile {
      display: grid;
      grid-template-columns: auto auto auto;
      color: black;
      align-content: center;
      grid-gap: 18px;
    }
    
    .large-input-mobile {
      font-size: 14px;
    }

  }
`