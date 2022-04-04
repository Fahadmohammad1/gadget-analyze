import React from "react";

const Blogs = () => {
  return (
    <div className="w-3/4 mx-auto mt-6 text-justify">
      <div className="mt-7 border-4 p-5 rounded-lg border-green-300">
        <h1 className="text-3xl font-bold text-[#4d3b69]">
          What is Context API?
        </h1>
        <p className="font-medium pt-3">
          Context API is the effective way to pass data to any components
          globally. We use context api to avoid props drilling. We don't need
          pass data parent to child if we use context api. You need{" "}
          <strong>React.createContext()</strong> to use context api. And wrap
          the components with <strong>.Provider</strong> to pass the data by
          value.
        </p>
      </div>
      <div className="mt-7 border-4 p-5 rounded-lg border-green-300">
        <h1 className="text-3xl font-bold text-[#4d3b69]">
          What is Symantic Tag?
        </h1>
        <p className="font-medium pt-3">
          Symantic tag is clearly describes what we are doing inside that tag.
          Like in <strong>Article</strong> defines article,{" "}
          <strong>Header</strong> defines heading section in a webpage. In
          article tag we definitly writes our blog and article. Symantic tags
          are very helpful for machine and developer both.
          <strong>Header, main, nav, footer</strong> this tags explain the
          difference area of a website.
        </p>
      </div>
      <div className="mt-7 border-4 p-5 rounded-lg border-green-300">
        <h1 className="text-3xl font-bold text-[#4d3b69]">
          What do you know about "inline" , "block" , "inline-block"?
        </h1>
        <p className="font-medium pt-3">
          <strong>block</strong> elements takes the whole available space. It
          always start a new line. <strong>h1, div, section</strong> are block
          elements.
          <br />
          <strong>Inline</strong> takes spaces as per its content. height and
          width has no effect in inline.
          <br />
          <strong>inline-block</strong> display a elements as a inline. We can
          set heigt width in inline-block
          <br />
        </p>
      </div>
    </div>
  );
};

export default Blogs;
