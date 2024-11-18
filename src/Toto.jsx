function Toto({ todoname, tododate, clickbtn }) {
  return (
    <div className="container">
      <div className="row kgrow">
        <div className="col-sm-6">{todoname}</div>
        <div className="col-sm-4">{tododate}</div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-danger kgbutton"
            onClick={() => clickbtn(todoname)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Toto;
