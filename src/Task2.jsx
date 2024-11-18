import Toto from "./Toto";

function Task2({ TodoItems, clickbtn }) {
  return (
    <>
      <div className="item-container ">
        {TodoItems.map((items) => (
          <Toto
            key={items.date}
            tododate={items.date}
            todoname={items.name}
            clickbtn={clickbtn}
          ></Toto>
        ))}
      </div>
    </>
  );
}

export default Task2;

// <div className="container">
//             <div className="row kgrow">
//               <div className="col-sm-6">{items.name}</div>
//               <div className="col-sm-4">{items.date}</div>
//               <div className="col-sm-2">
//                 <button
//                   type="button"
//                   className="btn btn-danger kgbutton"
//                   onClick={() => clickbtn(items.name)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
