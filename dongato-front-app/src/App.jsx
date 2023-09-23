import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useLazyQuery, gql } from '@apollo/client';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const HELLO_QUERY = gql`
  query Hello($message: String!) {
    hello(message: $message)
  }
`;

function FormEmail() {
  const [message, setMessage] = useState('');
  const [getGreeting, { loading, error, data }] = useLazyQuery(HELLO_QUERY);

  const handleSubmit = (e) => {
    e.preventDefault();
    getGreeting({ variables: { message } });
  };

  if (loading) return <p>ᴥᴥᴥ Cargando ᴥᴥᴥ</p>;
  if (error) return <p>♨♨♨ Error, reinicie la apliación ♨♨♨</p>;

  return (
    <div className='form'>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formMessage">
          <Form.Control
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="correo.electronico@correounivalle.edu.co"
          />
        </Form.Group>
        <Button className='mt-2' variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      {data && <h2 className='mt-3'>{data.hello}</h2>}
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Container className="my-5">
        <Row>
          <Col xs={12} md={{ span: 8, offset: 3 }} lg= {{ span: 8, offset: 2 }}>
           <div className='App'>
            <h1>Webpage de Ventas y servicios</h1>
            <h1>Don gato y Asociados</h1>

            <a>¡Escribe tu correo para estar al tanto de nuevas actualizaciones!</a>
            </div>
              <FormEmail />
          </Col>
        </Row>
      </Container>
    </ApolloProvider>
  );
}

export default App;




