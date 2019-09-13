// import React from 'react';
// import Quote from './component/Quote';

// function App() {
//   return (
//     <div className="App">
//       <h1>LOOK HERE <span role="img" aria-label="eyes">
//       👀
//         </span>
//       </h1>
//       <Quote />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Quote from "./components/Quote";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>
        Hello Kanye!{" "}
        <span role="img" aria-label="mic">
          🎙️
        </span>
      </h1>
      <Quote />
    </div>
  );
}

export default App;
