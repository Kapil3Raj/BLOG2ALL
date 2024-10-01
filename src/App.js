import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Nav from "./components/navbar";
import Herosec from "./components/herosection";
import Addblog from "./components/addblog";
import Blogcard from "./components/blogcard";
import Viewblogs from "./components/viewblogs";
import Deleteblog from "./components/deleteblog";
import Editblog from "./components/editblog";

function App() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('Data');
    return savedData ? JSON.parse(savedData) : [];
  });

  function condata(event) {
    setData(prevData => [...prevData, { id: uuidv4(), ...event }]);
  }

  function condata1(event){
    setData(event)
  }

  function deleteb(d) {
    setData(d);
  }

  useEffect(() => {
    localStorage.setItem('Data', JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/blog2all" element={<Herosec />} />
          <Route path="/add" element={<Addblog condata={condata} />} />
          <Route path="/blogcard" element={<Blogcard data={data} />} />
          <Route path="/viewblogs/:id" element={<Viewblogs />} />
          <Route path="/deleteblog/:id" element={<Deleteblog deleteb={deleteb} data={data} />} />
          <Route path="/editblog/:id" element={<Editblog condata1={condata1} data={data} deleteb={deleteb} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
