import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css'

const App = () => {
  const firstName = "John"; 
  const greetingMessage = firstName ? `Hello, ${firstName}` : "Hello, there!";

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><Price /></Card.Subtitle>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
      <p>{greetingMessage}</p>
      {firstName && <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Profile" />}
    </div>
  );
};

export default App;
