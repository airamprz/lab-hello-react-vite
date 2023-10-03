import Header from "./components/header/header";
import Cards from "./components/cards";

function App() {
  return (
    <>
      <Header />
      <div className="cards row row-cols-2 row-cols-lg-4 g-2 g-lg-3 m-auto">
        <Cards
          title="Declarative"
          text="React makes it painless to create interactive UIs."
          urlImg="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
        />
        <Cards
          title="Components"
          text="Build encapsulated components that manage their state."
          urlImg="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
        />
        <Cards
          title="Single-Way"
          text="A set of immutable values are passed to the component's."
          urlImg="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
        />
        <Cards
          title="JSX"
          text="Statically-typed, designed to run on modern browsers."
          urlImg="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
        />
      </div>
    </>
  );
}

export default App;
