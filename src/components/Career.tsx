import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Sabudh Foundation(STPI)</h5>
              </div>
              <h3>Jan'25</h3>
            </div>
            <p>
              I built and shipped a bunch of ML models that actually worked—no cap,they were 92% accurate. Got deep into tweaking stuff with GridSearchCV and made them even better, so that was a big W. Whole thing was remote, super hands-on, and honestly just vibing with making data do cool things...
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>FRIHBI ENTERPRISES PVT. LTD.</h5>
              </div>
              <h3>July'25</h3>
            </div>
            <p>
              Brainstorming fresh features and AI drops for Shop.to... straight fire. Got my hands dirty building no-code, AI-powered biz apps with chill chat interfaces... felt low-key futuristic. Whole experience was remote, super collaborative, and just vibes all around!
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Soon</h4>
                <h5>Your Organization</h5>
              </div>
              <h3>NOW??</h3>
            </div>
            <p>
              Ahhh.....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
