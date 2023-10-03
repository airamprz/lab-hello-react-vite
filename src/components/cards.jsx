function Cards({ urlImg, title, text }) {
    return (
      <div className="card">
        <img src={urlImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    );
  }
  
  export default Cards;
  