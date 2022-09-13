import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Includes/Header';
import Footer from './Includes/Footer';
import Home from './Includes/Home';
import IndiaData from './IndiaData';
import World from './World';
import './App.css'
import useFetch from './useFetch'
import TableSection from './TableWorld/WTableSection';
import Section from './Includes/Section';
import News from './News/News';
import Vaccine from './Vaccine/Vaccine';
import Page from './404Page/404';


function App() {
  const urls = [
    'https://disease.sh/v3/covid-19/countries',
    'https://disease.sh/v3/covid-19/all',
    'https://disease.sh/v3/covid-19/historical?lastdays=30',
    'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=30',
    'https://gnews.io/api/v4/search?q=covid&lang=en&token=0238548cd532be2c2f65a972615d655a',
    'https://disease.sh/v3/covid-19/historical/all?lastdays=500',
  ];

  const {
    countries,
    countrJson,
    global,
    dataHistorical,
    dataVaccine,
    news,
    dataHistAll,
    loading,
    error,
  } = useFetch(urls);
  if (error) return <p>Error!</p>;
  // console.log(global);
  // console.log(dataHistAll);

  return (
    <div className="App">
          <Router>
            <React.Fragment>
            <Header/>
              <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/india"  element={<> <IndiaData/> </>}></Route>
                <Route path="/world"  element={<> <World countries={countries} /><TableSection countries={countrJson} /><Section/> </>}></Route>
                <Route path="/vaccine"   element={<Page/>}></Route>
                <Route path="/news"   element={<News />}></Route>
              </Routes>
            <Footer/>
            </React.Fragment>
          </Router>
    </div>
  );
}

export default App;
