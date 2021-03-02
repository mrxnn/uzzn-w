import { Container, Heading2, Text } from "../styles/components";

export default function Title() {
  return (
    <Container centered bordered>
      <Heading2 mb={24}>Blog</Heading2>
      <Text mb={64}>
        List of curated articles about English as foreign language
      </Text>
    </Container>
  );
}
