import { Col, Container, Row } from 'react-bootstrap';

import { UserProvider } from './containers/UserContext';

export default function App() {
  return (
    <UserProvider>
      <Container>
        <Row>
          <Col>Col1</Col>
          <Col>Col2</Col>
        </Row>
      </Container>
    </UserProvider>
  );
}
