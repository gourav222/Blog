import React, { useState } from "react";
import Table from "./Table";
import AddNewBlog from "./AddNewBlog";
import { Link } from "react-router-dom";
function Headers({ change, setChange }) {
  return (
    <div>
      <div className="header">
        <h1>Library</h1>
        <button className="new-blog">
          <Link to="/add">New blog</Link>
        </button>
      </div>
      <Table change={change} setChange={setChange} />
    </div>
  );
}

export default Headers;
