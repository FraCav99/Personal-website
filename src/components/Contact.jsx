import LinkedinIcon from '../images/linkedin.svg';
import GithubIcon from '../images/github.svg';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-wrapper">
        <h2 className="headings">Get in touch</h2>
        <p>
          I’m currently looking for new opportunities and I’m open to job offers
          either remote or on-site. If you think I can be a good fit for your
          team feel free to get in touch at any time.
        </p>
        <a href="mailto:Francesco.cav99@outlook.it" className="link-btn">
          Send me a message
        </a>
        <div className="social-container">
          <a
            href="https://www.linkedin.com/in/francescocavallo99/"
            className="icon"
          >
            <LinkedinIcon />
          </a>
          <a href="https://github.com/FraCav99" className="icon">
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
