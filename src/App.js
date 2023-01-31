import "./App.css";

//rcc
import React, {useState} from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

//copeid from react router dom website
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar' 

// export default class App extends Component {
const App =()=> {
  const pageSize = 5;

  // state = {
  //   progress: 0
  // }

  const [progress , setProgress] = useState(0)

  // setProgress = (progress) => {
  //   setState({progress: progress})
  // }
  // render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={6} country="in" category="general" />}>   </Route>

            <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={6} country="in" category="general" />}>   </Route>
              
         
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={6} country="in" category="business" />}></Route>
              
            
            <Route exact path="/entertainment" element={ <News setProgress={setProgress} key="entertainment" pageSize={6} country="in" category="entertainment" />}></Route>
            

            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={6} country="in" category="health" />}> </Route>
            <Route exact path="/science" element={ <News setProgress={setProgress} key="science" pageSize={6} country="in" category="science" />}>  </Route>
             
          
            <Route exact path="/sports"  element={<News setProgress={setProgress} key="sports" pageSize={6} country="in" category="sports" />}></Route>
        
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={6} country="in" category="technology" />}> </Route>
              
           
          </Routes>
        </BrowserRouter>
      </div>
    );
  // }
}




export default App;