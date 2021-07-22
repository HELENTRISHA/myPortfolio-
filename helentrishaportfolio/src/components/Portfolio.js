import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <img
        className="spiderweb"
        src="https://res.cloudinary.com/dnefeccae/image/upload/v1626918690/helenpictures/checkpoint_4/web_background_nyuk2l.jpg"
        alt=""
      />

      <div className="icons-projects">
        <div className="projects-icons1">
          <a target="_blank" href="">
            <img
              className="projects-icons1"
              src="https://res.cloudinary.com/dnefeccae/image/upload/v1626941073/helenpictures/checkpoint_4/favicon_ahiljz.png"
              alt=""
            />
          </a>
          <p className="pro-title1">.Scratch</p>
        </div>
        <div className="projects-icons2">
          <a target="_blank" href="">
            <img
              className="projects-icons2"
              src="https://res.cloudinary.com/dnefeccae/image/upload/v1626943141/helenpictures/checkpoint_4/Captura_de_pantalla_2021-04-09_a_las_9.17.44_lytkzg.png"
              alt=""
            />
          </a>
          <p className="pro-title2">Bright Flash</p>
        </div>

        <div className="projects-icons3">
          <a target="_blank" href="">
            <img
              className="projects-icons3"
              src="https://res.cloudinary.com/dnefeccae/image/upload/v1626941060/helenpictures/checkpoint_4/Screenshot_2021-07-22_at_09.48.50_jydmux.png"
              alt=""
            />
          </a>
          <p className="pro-title3">MarsAdvisor</p>
        </div>

        <div className="projects-icons4">
          <a target="_blank" href="">
            <img
              className="projects-icons4"
              src="https://res.cloudinary.com/dnefeccae/image/upload/v1626944053/helenpictures/checkpoint_4/wwhLogo-yellow_dyygdd_wgvqpx.png"
              alt=""
            />
          </a>
          <p className="pro-title4">WhenWhyHow</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
