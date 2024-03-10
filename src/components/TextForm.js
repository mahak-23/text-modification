import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "warning");
  };

  const handleDelete = () => {
    setText("");
    props.showAlert("Deleted the content", "danger");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3 my-2">
          <h3 htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.heading}
          </h3>
          <textarea
            className={`form-control bg-${
              props.mode === "dark" ? "secondary" : "light"
            }`}
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="Enter text here"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              //   backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button
            disabled={text.length === 0}
            className="btn btn-primary"
            onClick={handleUpClick}
          >
            To UpperCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary"
            onClick={handleLowClick}
          >
            To LowerCase
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-secondary"
            onClick={handleDelete}
          >
            Delete Content
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div
          className={`card text-bg-${
            props.mode === "dark" ? "secondary" : "light"
          } mb-3`}
          style={{ maxWidth: "18rem", marginTop: "20px" }}
        >
          <h5 className="card-header">Your Text Summary</h5>
          <div className="card-body">
            <p className="card-text">
              {
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
              Words and {text.length} characters
            </p>
            <p className="card-text">
              {0.008 *
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length}{" "}
              Minutes read
            </p>
          </div>
        </div>
        <div
          className={`card text-bg-${
            props.mode === "dark" ? "secondary" : "light"
          }`}
        >
          <h5 className="card-header">Preview</h5>
          <div className="card-body">
            <p className="card-text">
              {text.length > 0 ? text : "Nothing to preview!"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextForm;
