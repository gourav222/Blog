import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import closeIcon from "../images/close-icon.png";
function AddNewBlog({ change, setChange }) {
  const [coverImg, setCoverImg] = useState("");
  const [lauchDate, setLaunchDate] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const addNewBlog = () => {
    const blogData = {
      title: title,
      launchdate: lauchDate,
      author: author,
      image_link: coverImg,
      description: description,
    };
    axios
      .post(
        "http://localhost:4000/demo.api.admin.circlesnow.com/ProductRESTService.svc/schedMsg",
        blogData
      )
      .then((res) => console.log("Successfully add the data", res))
      .catch((error) => {
        console.log(error);
      });
    setCoverImg("");
    setLaunchDate("");
    setTitle("");
    setAuthor("");
    setDescription("");
    change ? setChange(false) : setChange(true);
  };
  return (
    <div className="addNewBlog">
      <main class="content">
        <form action="">
          <p>
            <label for="CoverImage">Cover Image Url</label>
            <input
              type="text"
              placeholder="https://photo.png"
              required
              value={coverImg}
              onChange={(e) => {
                setCoverImg(e.target.value);
              }}
            />
          </p>

          <p>
            <label for="LaunchDate">Launch date</label>
            <input
              type="text"
              placeholder="January 12,2023"
              required
              value={lauchDate}
              onChange={(e) => {
                setLaunchDate(e.target.value);
              }}
            />
          </p>

          <p>
            <label for="Title">Title</label>
            <input
              type="text"
              placeholder="The occean"
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </p>
          <p>
            <label for="Author">Author</label>
            <input
              type="text"
              placeholder="Ruskin Bond"
              required
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </p>
          <p>
            <label for="Description">Description</label>
            <input
              type="text"
              placeholder="Very good book...."
              required
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </p>
          <p>
            <label for="Submit"></label>
            <input
              type="submit"
              value="Add post"
              onClick={() => {
                addNewBlog();
              }}
            />
          </p>
        </form>
        <Link className="close-icon" to="/">
          <img src={closeIcon} alt="" />
        </Link>
      </main>
    </div>
  );
}

export default AddNewBlog;
