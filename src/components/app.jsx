import React from 'react';
import {
  BrowserRouter, Routes, Route, useParams,
} from 'react-router-dom';

import YouTube from './youtube';

export default function App(props) {
  return (
    <BrowserRouter>
      <div>
        {/* <Nav /> */}
        <Routes>
          <Route element={<Welcome />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Test />} path="/test/:id" />
          <Route element={<FallBack />} path="*" />
          <Route element={<YouTube />} path="/youtube" />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

function FallBack(props) {
  return <div>URL Not Found</div>;
}

// function Nav(props) {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/test/id1">test id1</NavLink></li>
//         <li><NavLink to="/test/id2">test id2</NavLink></li>
//         <li><NavLink to="/youtube">YouTube</NavLink></li>

//       </ul>
//     </nav>
//   );
// }

function Test(props) {
  const { id } = useParams();
  return <div> ID: {id} </div>;
}

function About(props) {
  return <div> All there is to know about me </div>;
}
function Welcome(props) {
  return <div>Welcome</div>;
}
