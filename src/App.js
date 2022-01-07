import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Categories from './components/Categories';
import News from './components/News';
import Search from './components/Search';
import LoadingBar from 'react-top-loading-bar';
import { Route, Routes } from 'react-router-dom';


function App() {

  const pageSize = 3;
  const apiKey = '8a92a92bc7824d8f9554b973422070a2';


  const [progress, setProgress] = useState(0);
  const [value, setvalue] = useState('');


// code for setting light and dark theme
  const [mode, setmode] = useState(false);
  const toggleMode = ()=> {
    if(mode===false){
      setmode(true);
    }else{
      setmode(false);
    }
  }

// code for changing body color
  if(mode){
    document.body.className = 'bg-dk-body';
  }else{
    document.body.className = 'bg-lt-body';
  }


  return (
    <div>
    {/* top loading bar component */}
    <LoadingBar
        height={6}
        color='#E94560'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
    />

    {/* navbar component */}
    <Navbar mode={mode} toggleMode={toggleMode} />

    {/* categories component  */}
    <Categories mode={mode}/>

    {/* search box component  */}
    <Search mode={mode} value={value} setvalue={setvalue} />


    <Routes>
    {/* Routes to category link  */}
    <Route exact path='/' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
    <Route exact path='/business' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
    <Route exact path='/entertainment' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
    <Route exact path='/health' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/>
    <Route exact path='/sports' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
    <Route exact path='/technology' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="tech" pageSize={pageSize} country="in" category="technology"/>}/>
    <Route exact path='/science' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}/>

    {/* routing to search box query */}
    <Route exact path={`/${value}`} element={<News mode={mode} q={value} setProgress={setProgress} apiKey={apiKey} key={value} pageSize={pageSize}/>}/>
    </Routes>
    </div>
  );
}

export default App;
