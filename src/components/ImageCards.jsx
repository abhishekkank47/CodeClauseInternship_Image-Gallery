import React, { useEffect, useState } from "react";

import { FaDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const ImageCards = ({query}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiReq = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=45256859-0a9224935aa51358a1277fcc7&q=${query}&image_type=photo&pretty=true`
        );
        const data = await response.json();
        console.log(data)
        setImages(data.hits);
      } catch (error) {
        console.log(error);
      }
      
    };
    apiReq();
  }, [query]);
  return (
    <>
      <div className="d-flex flex-wrap cardsBlock ps-5">
        {images.map((img) => (
          <div className="card mt-3 me-5" style={{ width: "18rem" }}>
            <img src={img.webformatURL} className="card-img-top" height={'300'} alt="Image" />
            <div className="card-body">
              <h5 style={{color:'blue'}}>Photo by : {img.user}</h5>
              <p className="card-text">
                <strong>
                  <ul className="imgParameters">
                    <li>
                      <FaEye /> {img.views}
                    </li>
                    <li>
                      <FaRegHeart /> {img.likes}
                    </li>
                    <li>Total Downloads : {img.downloads}</li>
                  </ul>
                </strong>
                <div className="d-flex flex-wrap mt-2 tags">
                  {img.tags.split(",").map((t, index) => (
                    <span key={index}>#{t}</span>
                  ))}

                </div>
              </p>
              <a href={img.largeImageURL} className="btn btn-primary">
                Download <FaDownload />
              </a>
            </div>
          </div>
        ))}

      </div>
    </>
  );
};

export default ImageCards;
