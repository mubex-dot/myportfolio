import travelJournal from "../images/travel-journal.PNG";
import unitConverter from "../images/unit-converter.PNG";
import passwordGen from "../images/password-generator.PNG";
import basketballCounter from "../images/scoreboard.PNG";

function myWork() {
  return (
    <section id="work">
      <div className="work">
        <div className="work-body">
          <h2 className="title work-title">My projects</h2>
          <p className="work-subtitle">
            A short glimpse of some of my projects
          </p>
          <div className="portfolio">
            <div className="project">
              <a href="https://mubarak-scrimba2.netlify.app/">
                <img className="travel" src={travelJournal} alt=""></img>
              </a>
              <a href="https://basketball-counter-ou12fp89k-mubex-dot.vercel.app/">
                <img
                  className="basketball"
                  src={basketballCounter}
                  alt=""
                ></img>
              </a>
            </div>
            <div className="project">
              <a href="https://password-generator-77t3-ll578nr0m-mubex-dot.vercel.app/">
                <img className="password" src={passwordGen} alt=""></img>
              </a>
              <a href="https://unit-converter-2.vercel.app/">
                <img className="unit" src={unitConverter} alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default myWork;
