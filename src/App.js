import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import {useState} from 'react'
import useFetch from './component/useFetch';
import Diaries from './component/Diaries';
import View from './component/View';
import Add from './component/Add';
import Update from './component/Update';


function App() {

  const url = "http://localhost:5000/diary";
  const [diaries,setDiaries] = useState([]);

  useFetch({setDiaries,url});
  console.log(diaries);
  return (
    <div >
      <Router>

        <Navbar/>
        <Switch>
          <Route path='/' exact>
              <h1>Home</h1>
          </Route>

         

          <Route path='/diarylist' exact>
            <h1>Diary List</h1>
            <hr/>
            <Diaries diaries={diaries} url={url} setDiaries={setDiaries}/>
          </Route>

         
        </Switch>
      </Router>
    </div>
  );
}

export default App;