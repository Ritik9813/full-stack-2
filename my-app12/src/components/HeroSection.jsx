import { Container, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <section className="bg-light py-5 text-center">
      <Container>
        <h1 className="display-5 fw-bold">Hi, I’m a Web Developer</h1>
        <p className="lead mt-3">
          I build modern, responsive web applications using React.
        </p>
        <Button variant="primary" size="lg" className="mt-3">
          View My Work
        </Button>
      </Container>
    </section>
  );
}

export default HeroSection;
