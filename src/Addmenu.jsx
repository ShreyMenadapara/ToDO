function Addmenu({ clickbtn2, inputVal, dateVal, inputValue, dateValue }) {
  return (
    <div className="container">
      <div className="row kgrow">
        <div className="col-sm-6 btn-left">
          <input
            type="text"
            placeholder="Enter your work"
            className="inputVal"
            value={inputValue}
            id="input"
            onChange={(e) => inputVal(e)}
          />
        </div>
        <div className="col-sm-4">
          <input
            type="date"
            className="dateVal"
            value={dateValue}
            onChange={(e) => dateVal(e)}
          />
        </div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-success kgbutton"
            onClick={(e) => clickbtn2(e)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addmenu;
