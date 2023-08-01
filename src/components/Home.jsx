import "../styles/home.css";
import pic from "../images/1.jpg";
import img1 from "../images/01.jpg";
import img2 from "../images/02.jpg";
import img3 from "../images/03.jpg";
import img4 from "../images/04.jpg";
import img5 from "../images/05.jpg";

const HomeHeader = () => {
  return (
    <header className="home-header">
      <h2>CHALA SECONDARY</h2>
      <ul>
        <li>Departments</li>
        <li>Faciliies</li>
        <li>Management</li>
        <li>Gallery</li>
      </ul>
    </header>
  );
};

const Welcome = () => {
  return <main className="welcome-sec"></main>;
};

const IntroInfo = () => {
  return (
    <div className="intro-info">
      <div className="ii-text-cont">
        <h2>OUR MOTTO</h2>
        <p>ELIMU NI MWANGAZA</p>
      </div>
      <div className="ii-text-cont">
        <h2>OUR VISION</h2>
        <p>To convert the school to a center of academic excellence</p>
      </div>
      <div className="ii-text-cont">
        <h2>OUR MISSION</h2>
        <p>
          To anable students realize their potential through identification &
          development of individuals talents
        </p>
      </div>
    </div>
  );
};

const IntroImageSec = () => {
  return (
    <div className="intro-image-sec">
      <img src={img1} />
      <img src={img2} />
      <img src={img3} />
    </div>
  );
};

const HomeAboutUs = () => {
  return (
    <div className="home-about-us">
      <section className="home-about-us-text">
        <h1>A LITTLE ABOUT US</h1>
        <p>
          Chala Secondary School is located in Chala / Njukini Ward / Division
          in Taveta Sub-County Coast Region. The School is about 17km North of
          Taveta Town along the Rombo-Loitoktok Road. It stands on 24.06ha piece
          of Arable land and also boasts of a serene and an ambient environment
          very suitable for learning. The School was built back in 1982 with a
          sole purpose of assisting the Girl child who was considered as a
          source of wealth but at later changed to a Mixed Day and Boarding
          School to date. The school has since then grown in leaps and bounds
          from an initial population of less than 50 students to the current
          population of 321 as of February 2020 and the numbers are soaring... reamore
        </p>
      </section>

      <section className="home-our-detail">
        <ul>
          <h1>OUR SCHOOL</h1>
          <li>Day/Boarding :Day and Boarding</li>
          <li>DGender : Mixed</li>
          <li>Level : secondary School</li>
          <li>Ownership : Public</li>
          <li>Sponsor:ACK</li>
          <li>Student needs :Ordinary</li>
        </ul>
        <ul>
          <h1>OUR LOCATION</h1>
          <li>Region :Coast</li>
          <li>County : Taita Taveta</li>
          <li>Sub County : Taveta</li>
          <li>Constituency : Teveta</li>
          <li>Division : Taveta</li>
          <li>Ward: Chala</li>
        </ul>
        <ul>
          <h1>OUR STAFF</h1>
          <li>DTSC Male Teachers :10</li>
          <li>TSC Female Teachers : 7</li>
          <li>PA/BOM :0</li>
          <li>NTS Male :9</li>
          <li>NTS Female:7</li>
          <li></li>
        </ul>
      </section>
    </div>
  );
};

const HomeFooter = () => {
  return (
    <div className="home-footer">
      <ul>
        <li>TEL:254708733750</li>
        <li>P.O BOX 140-80302,TAVETA</li>
        <li>Email: Chalasecondary@gmail.com</li>
        <br />
        <h3>CHALA SECONDARY SCHOOL</h3>
      </ul>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <header>
        <HomeHeader />
        <Welcome />
        <IntroInfo />
        <IntroImageSec />
        <HomeAboutUs />
        <HomeFooter />
      </header>
    </div>
  );
};

export default Home;

//https://github.com/ChrisMadeda-Dev/ChalaSec.git

/* 
Key personalities who were very instrumental in the inception of the
          School included; Retired Senior Chief Rama Leshamta a well polished
          administrator adorned with several awards and recommendations to
          match. He is also an astute farmer and a family man.
 */
