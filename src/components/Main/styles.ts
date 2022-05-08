import styled from "styled-components";


export const Container = styled.main`
  position: relative;
  z-index: 0;
  padding: 0 10rem;
  overflow-x: hidden;
  #tsparticles{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .theme-switcher{
    position:fixed;
    bottom:15px;
    right:15px;

    label {
      cursor: pointer;
      text-indent: -9999px;
      width: 55px;
      height: 30px;
      background: var(--theme);
      display: block;
      justify-content: center;
      align-items: center;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
      border-radius: 100px;
      position: relative;
      margin-left: auto;
      right: 10px;
    }

    label:after {
      content: '';
      background: #FFF;
      width: 20px;
      height: 20px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      position: absolute;
      top: 5px;
      left: 4px;
     transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    }
  
    input:checked + label {
      background: var(--pink);
    }
  
    input:checked + label:after {
      left: calc(100% - 5px);
      -webkit-transform: translateX(-100%);
      -moz-transform: translateX(-100%);
      -ms-transform: translateX(-100%);
      -o-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    input[type=checkbox] {
      height: 0;
      width: 0;
      visibility: hidden;
      outline: none;
    }
  }

  @media (max-width: 740px){
    padding: 0 4rem;
  }

  @media(max-width: 360px){
    padding: 0 2rem;
  }
`