import Me from '../images/me.jpeg';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <div className="circle">
          <img src={Me} alt="Me" />
        </div>
        <div className="paragraph">
          <h2 className="headings">About me</h2>
          <p>
            I started coding in high school. That's where I first met the world
            of web development. Since then I completely fell in love with it and
            that's why I've kept on learning new stuff: to help me make even
            more awesome projects!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
