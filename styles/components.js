import styled from "styled-components";

//h1
export const Heading1 = styled.h1`
  font-size: 48px;
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
  max-width: 736px;
  margin: 0 auto;
`;

//header
export const Navbar = styled.nav`
  height: 60px;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
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
        color: ${props => props.theme.colors.text};
        transition: color 0.1s linear;
        &:hover {
          color: black;
        }
      }
    }
  }
`;