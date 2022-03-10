import React from "react";

const Page = () => {
  return (
    <>
      {/*    Logo declaring now */}
      <nav>
        <a href="">
          <img src=""></img>
        </a>

        {/*    Logo declared now */}

        {/*  menu down below */}
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Web Series</a>
          </li>
          <li>
            <a href="#">Drama</a>
          </li>
        </ul>

        {/* search   */}
        <div className="search">
          <input type="text" placeholder="Find your stuff here...">
            </input>
        </div>
      </nav>
    </>
  );
};
export default Page;
