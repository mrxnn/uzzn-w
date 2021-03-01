import styled from "styled-components";

//h1
export const Heading1 = styled.h1`
  font-size: 61px;
  letter-spacing: -1px;
  margin-bottom: ${(props) => props.mb}px;
`;

//h2
export const Heading2 = styled.h2`
  font-size: 40px;
  letter-spacing: -1.5px;
  margin-bottom: ${(props) => props.mb}px;
`;

//h3
export const Heading3 = styled.h3`
  font-size: 22px;
`;

//paragraph
export const Text = styled.p`
  color: ${props => props.theme.colors.text};
  margin-bottom: ${(props) => props.mb}px;
`;

//brand logo
export const Logo = styled.h3`
  font-size: 24px;
  letter-spacing: -.5px;
`;

//container
export const Container = styled.div`
  width: 90%;
  max-width: 736px;
  margin: 0 auto;
  text-align: ${props => props.centered ? 'center' : ''};
  border-bottom: ${props => props.bordered ? '1px solid #ebe9e9' : ''}
`;

//CTA
export const Button = styled.button`
  border: none;
  font: inherit;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-size: 15px;
  padding: 8px 20px;
  border-radius: 999px;
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
  border-bottom: 1px solid #ebe9e9;
  margin-bottom: 54px;
  ul {
    display: flex;
    align-items: center;
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