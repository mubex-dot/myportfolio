import mustapha from "../images/mustapha.jpg";

function Home() {
  return (
    <section className="intro" id="home">
      <h1 className="title home-title">
        Hi, my name is <strong>Mustapha Yakubu</strong>
      </h1>
      <p className="subtitle home-subtitle">Frontend Developer</p>
      <img className="my-pic" src={mustapha} alt="mustapha"></img>
    </section>
  );
}

export default Home;
