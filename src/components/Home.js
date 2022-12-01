import Mubarak from "../images/Mubarak.PNG";

function Home() {
  return (
    <section className="intro" id="home">
      <h1 className="title home-title">
        Hi, my name is <strong>Mubarak Ibrahim</strong>
      </h1>
      <p className="subtitle home-subtitle">Frontend Developer</p>
      <img src={Mubarak} alt="Mubarak"></img>
    </section>
  );
}

export default Home;
