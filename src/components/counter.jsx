import React from "react";

export const Counter = (props) => {
  const formateCounter = () => {
    return props.value === 0 ? <div>Empty</div> : props.value;
  };

  const getBageClasses = () => {
    let classes = "badge m-3 ";
    classes += props.value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const imgUrl = "https://picsum.photos/50";

  return (
    <>
      <div className="container d-flex">
        <div className="container d-flex justify-content-between">
          <img src={imgUrl} alt="any pic" />
          <span className={getBageClasses()}>
            <b>{formateCounter()}</b>
          </span>
        </div>
        <div className="container d-flex justify-content-center">
          <span>{props.name}</span>
        </div>

        <div className="container d-flex justify-content-end">
          <button
            className="badge bg-primary btn btn-sm m-2"
            onClick={() => props.onInc(props.id)}
          >
            Increment
          </button>
          <button
            className="badge bg-danger btn btn-sm m-2"
            onClick={() => props.onDec(props.id)}
          >
            Decriment
          </button>
          <button
            className="badge bg-danger btn btn-sm m-2"
            onClick={() => props.onDelete(props.id)}
          >
            Удалить
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};
