import React from 'react';
// import { Container } from "../../common/Container/index"
import { FooterWrapper, Flex, Details } from './styles';

export const Footer = () => (
  <FooterWrapper>
    <Flex>
      <Details>
          © Bella Rose {new Date().getFullYear()}
      </Details>
    </Flex>
  </FooterWrapper>
);
