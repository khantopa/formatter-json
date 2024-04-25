import NavBar from '@/components/NavBar';
import { Container, Typography } from '@mui/material';
import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - FormatterJSON.com</title>
      </Head>
      <main>
        <NavBar />
        <Container style={{ margin: '100px auto 40px' }}>
          <header>
            <Typography
              variant='h1'
              id='improving-json-formatting-a-comprehensive-guide'
              margin='40px 0 20px'
              fontWeight='600'
              fontSize={36}
            >
              Privacy Policy
            </Typography>
          </header>
          <section>
            <Typography
              variant='h2'
              margin='40px 0 20px'
              fontWeight='500'
              fontSize={30}
            >
              1. Introduction
            </Typography>
            <Typography>
              Welcome to formatterjson.com. This website provides tools to
              format JSON and convert JSON data into TypeScript interfaces, PHP
              arrays, and CSV files. This Privacy Policy informs you of our
              policies regarding the collection, use, and disclosure of personal
              information if any is collected.
            </Typography>
          </section>
          <section>
            <Typography
              variant='h2'
              margin='40px 0 20px'
              fontWeight='500'
              fontSize={30}
            >
              2. No Data Collection
            </Typography>
            <ul>
              <li>
                <strong>Personal Data:</strong> We do not collect any personal
                data from users of formatterjson.com. Users are free to use our
                tools without providing any personal information.
              </li>
              <li>
                <strong>Session Data:</strong> No session data (like IP
                addresses) or personal identifiers are logged by our service.
                Users can utilize our tools without any trace of their activity
                being stored.
              </li>
              <li>
                <strong>Cookies:</strong> We do not use cookies to track
                information or user preferences. Our service is designed to be
                used anonymously.
              </li>
            </ul>
          </section>
          <section>
            <Typography
              variant='h2'
              margin='40px 0 20px'
              fontWeight='500'
              fontSize={30}
            >
              3. Data Security
            </Typography>
            <Typography>
              As we do not collect or store any data, there is no risk of
              personal data breaches from our service.
            </Typography>
          </section>
          <section>
            <Typography
              variant='h2'
              margin='40px 0 20px'
              fontWeight='500'
              fontSize={30}
            >
              4. Third-Party Services
            </Typography>
            <Typography>
              We do not employ third-party services that track or collect
              personal data through our website.
            </Typography>
          </section>
          <section>
            <Typography
              variant='h2'
              margin='40px 0 20px'
              fontWeight='500'
              fontSize={30}
            >
              5. Children's Privacy
            </Typography>
            <Typography>
              Since our website does not collect any personal information, it is
              safe for all ages. We do not target or provide content
              specifically for children.
            </Typography>
          </section>
          <section>
            <Typography
              variant='h2'
              margin='40px 0 20px'
              fontWeight='500'
              fontSize={30}
            >
              6. Changes to This Privacy Policy
            </Typography>
            <Typography>
              Our Privacy Policy may change from time to time. However, any
              changes will be updated on this page with an effective date. We
              encourage users to periodically review this page for the latest
              information on our privacy practices.
            </Typography>
          </section>
          <section>
            <Typography
              variant='h2'
              margin='40px 0 20px'
              fontWeight='500'
              fontSize={30}
            >
              7. Contact Us
            </Typography>
            <Typography>
              If you have any questions about this Privacy Policy, please
              contact us via email at{' '}
              <a href='mailto:formatterjson@gmail.com'>
                formatterjson@gmail.com
              </a>
              .
            </Typography>
          </section>
        </Container>
      </main>
    </>
  );
};

export default PrivacyPolicy;
