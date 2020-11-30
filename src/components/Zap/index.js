import React from 'react';
import styled from 'styled-components';

export const ZapZap = styled.a`
  position: fixed;
  bottom: 3vh;
  right: 3vw;
  padding: 10px;
  z-index: 10000000;
`;

function Zap () {
    return (
      <ZapZap href="https://api.whatsapp.com/send?phone=5541999995556" target="_blank">
      <img src="http://cdn.onlinewebfonts.com/svg/img_5666.png" width="50" height="50" />
      </ZapZap>
    )
}

export default Zap;
