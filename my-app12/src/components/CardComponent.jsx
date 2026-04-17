import { Card, Button, Col, Row, Container } from 'react-bootstrap';

function CardComponent() {
  const projects = [
    {
      title: 'Portfolio Website',
      text: 'Personal portfolio built with React and Bootstrap.',
    },
    {
      title: 'College Event Page',
      text: 'Responsive event landing page.',
    },
    {
      title: 'Dashboard UI',
      text: 'Modern admin dashboard layout.',
    },
  ];

  return (
    <Container className="py-5" id="projects">
      <h2 className="text-center mb-4">Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.text}</Card.Text>
                <Button variant="outline-primary">View</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardComponent;
