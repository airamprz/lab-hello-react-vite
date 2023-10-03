function Header() {
  return (
    <div className="header-style bg-secondary text-light">
      <div className="d-flex justify-content-between">
        <img className="nav-img" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" />
        <img className="nav-img" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" />
      </div>
      <div>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn a Frontend framework from scratch, to become a Ninja
          Developer.
        </p>
        <button className="btn btn-light">Awesome!</button>
      </div>
    </div>
  );
}

export default Header;
