import React from "react";

const Blogs = () => {
  return (
    <div className="md:mx-28 mx-8 my-10 ">
      <div>
        <h3 className="text-2xl font-bold my-6">What is Context API?</h3>
        <p className="text-xl mb-10">
          Context API is a hook that is made to simplify data flow in react. If
          we have a bunch of components that belong to one another. And we want
          to pass data form parent component we have pass many props. So it's
          not a efficient way of passing data. Context API helps to create
          global data that can be passed into components very effectively and
          prevents props-drilling.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold my-6">
          Inline vs Block vs Inline-block
        </h3>
        <div className="text-xl mb-10">
          <p>
            <span className="font-semibold">Inline Element : </span>
            Inline elements are html elements that can't have any height or
            width. It doesn't create new line.
          </p>
          <p>
            <span className="font-semibold">Inline-block Element : </span>
            Inline-blocks are elements that acts like inline but we can set
            height or width for them. It does't occupy full width like block
            elements so It doesn't create new line.
          </p>
          <p>
            <span className="font-semibold">Block Element : </span>
            Block elements occupy full width and we can set specific height and
            width for them. So It creates new line.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
