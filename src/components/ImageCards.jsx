import React, { useState } from "react";

import { FaDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const ImageCards = () => {

  const []= useState('')
  const []= useState('')

  return (
    <>
      <div className="">
        {/* card */}
        <div className="card mt-3 me-5" style={{ width: "18rem" }}>
          <img
            src="https://picsum.photos/id/14/200/300"
            className="card-img-top"
            alt="Image"
          />
          <div className="card-body">
            <h4 className="card-title text-center">Image Title</h4>
            <p className="card-text">
              <strong>
                <ul className="imgParameters">
                  <li>
                    <FaEye /> 185563
                  </li>
                  <li>
                    <FaRegHeart /> 1987
                  </li>
                  <li>Total Downloads : 895</li>
                </ul>
              </strong>
              <div className='d-flex flex-wrap mt-2 tags'>
                <span>#tag</span>
                <span>#tag</span>
                <span>#tag</span>
                <span>#tag</span>
                <span>#tag</span>
                <span>#tag</span>
                </div>
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
