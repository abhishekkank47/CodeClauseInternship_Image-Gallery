import React from "react";
import { FaDownload } from "react-icons/fa";

const ImageCards = () => {
  return (
    <>
      <div className="d-flex flex-wrap">

        {/* card */}
        <div className="card me-3" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="Image" />
          <div className="card-body">
            <h5 className="card-title">Image Title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button to="#" className="btn btn-primary">
              Download <FaDownload />
            </button>
          </div>
        </div>
        {/* card */}

        {/* card */}
        <div className="card me-3" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="Image" />
          <div className="card-body">
            <h5 className="card-title">Image Title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button to="#" className="btn btn-primary">
              Download <FaDownload />
            </button>
          </div>
        </div>
        {/* card */}

                {/* card */}
                <div className="card me-3" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="Image" />
          <div className="card-body">
            <h5 className="card-title">Image Title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button to="#" className="btn btn-primary">
              Download <FaDownload />
            </button>
          </div>
        </div>
        {/* card */}

      </div>
    </>
  );
};

export default ImageCards;
