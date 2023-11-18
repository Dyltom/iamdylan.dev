import { Container } from '@mui/material';
import ContactForm from '../../components/Contact/Form';

const ContactPage: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
      }}
    >
      <ContactForm />
    </Container>
  );
};

export default ContactPage;
