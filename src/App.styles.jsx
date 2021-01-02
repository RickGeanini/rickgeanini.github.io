import styled from 'styled-components';

import Image from './bg.png'

export const MainFluid = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
`;

export const BgImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-image: url(${Image});
  background-size: cover;
`;

export const Text = styled.span`
  display: flex;
  font-family: "Impact";
  font-size: xx-large;
  text-shadow: 2px 2px #2c3e50;
  text-align: center;
  color: white;
`;