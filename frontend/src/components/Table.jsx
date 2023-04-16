import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Description from "./Description";
function Table({ change, setChange }) {
  const [data, setData] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/demo.api.admin.circlesnow.com/ProductRESTService.svc/getschedmsg"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [change]);
  let allBlogs = data;
  console.log(allBlogs);
  return (
    <>
      <div className="blogData">
        <table className="table">
          <tr className="tableHeader">
            <th>Cover image</th>
            <th>Launch date</th>
            <th>Title</th>
            <th>Author</th>
          </tr>

          {allBlogs.length
            ? allBlogs.map((items, index) => {
                return (
                  <tbody key={index} className="tableBody">
                    <tr>
                      <td>
                        <img
                          className="coverImage"
                          src={items["image_link"]}
                          alt="dfd"
                        />
                      </td>
                      <td className="launchDate">{items["launchdate"]}</td>
                      <td>
                        <button
                          className="titleButton"
                          onClick={() => {
                            setShowDescription(true);
                            setDescription(items["description"]);
                          }}
                        >
                          {items["title"]}
                        </button>
                      </td>
                      <td>{items["author"]}</td>
                    </tr>
                  </tbody>
                );
              })
            : console.log("NOt working")}
        </table>
      </div>
      {showDescription ? (
        <Description
          setShowDescription={setShowDescription}
          description={description}
        />
      ) : null}
    </>
  );
}

export default Table;
