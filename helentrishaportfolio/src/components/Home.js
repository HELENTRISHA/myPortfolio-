import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div className="homepage-container">
      <div className="back-img">
        <div className="title-name">
          <h1>HELEN TRISHA</h1>
          <hr></hr>
          <h2>WEB DEVLOPER </h2>
          <div className="my-journey">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              turpis urna, ultricies sed rhoncus id, ultricies sit amet massa.
              In eget neque sit amet lacus volutpat viverra. Sed consequat purus
              nec nisi mollis luctus. Phasellus ut consectetur ex.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
