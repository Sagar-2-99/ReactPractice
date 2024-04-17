//Above line will store the path to the image and it's a
//way for dynamic import of the image

import Header from "./components/Header/Header.jsx";
import CORE_CONCEPT from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  {/* Here instead of <div></div> we can send the <Fragment></Fragment> Here to return multiple values or <> and </>s */}
  return (
    <div> 
      <Header />
      <main>
        <CORE_CONCEPT/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
