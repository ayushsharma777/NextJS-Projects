import React from "react";

function Panel({ textHead, textTag, bgImage, bgButton, bgColor, hideButton }) {
  return (
    <section className="section-Panel" style={{ background: `${bgColor}` }}>
      <div className="item" style={{ background: `url(${bgImage})` }}>
        <div className="row">
          <div className="col-12 col-md-10">
            <h2
              className={`${
                textTag == undefined ? "heading-3 pb-50" : "heading-2"
              } white-text m-heading-4`}
            >
              {textHead}
            </h2>
          </div>
        </div>

        <div className="row top-10">
          <div className="col-10 col-md-8">
            <h2 className="heading-4 white-text m-heading-5">{textTag}</h2>
          </div>
        </div>

        <button
          className={`primary-button ${hideButton ? "d-none" : ""}`}
          style={{ backgroundColor: `${bgButton}` }}
        >
          KNOW MORE
        </button>
      </div>
    </section>
  );
}

export default Panel;
