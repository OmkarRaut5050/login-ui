import React from "react";

import { Container, Logo, Navlinks, BuyButton, Link } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <Logo>
        <span>Material Dashboard 2 PRO</span>
      </Logo>
      <Navlinks>
        <Link>Page</Link>
        <Link>Authentication</Link>
        <Link>Applications</Link>
        <Link>Ecommerce</Link>
        <Link>Docs</Link>
      </Navlinks>
      <BuyButton>BUY NOW</BuyButton>
    </Container>
  );
};

export default Header;
