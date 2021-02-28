import styled from "styled-components";

//h1
export const Heading1 = styled.h1`
  font-size: 61px;
  letter-spacing: -1px;
`;

//h3
export const Heading3 = styled.h3`
  font-size: 28px;
  letter-spacing: -1px;
`;

//p
export const Text = styled.p`
  color: ${props => props.theme.colors.text};
`;

//container
export const Container = styled.div`
  width: 90%;
  max-width: 680px;
  margin: 0 auto;
`;

//header
export const Navbar = styled.nav`
  height: 110px;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  ul {
    display: flex;
    list-style-type: none;
    li {
      &:not(:last-child) {
        margin-right: 32px;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;