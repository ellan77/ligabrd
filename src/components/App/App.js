import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.sass";
import Layout from "../Layout/Layout";
import ResultsContainer from '../Results/ResultsContainer'
import TurnirTableContainer from '../TurnirTable/TurnirTableContainer'
import TeamsListContainer from '../Teams/TeamsListContainer'



class App extends Component {
  render() {
    
    return (
      <>
      
        <Route path="/" exact render={() => <>
          <Layout >
            <ResultsContainer />
          </Layout>
          </>} />

          <Route path="/calendar" render={() => <>
          <Layout >
            
          </Layout>
          </>} />

          <Route path="/tournament" render={() => <>
          <Layout >
            <TurnirTableContainer />
          </Layout>
          </>} />

          <Route path="/teams" render={() => <>
            <Layout >
            <TeamsListContainer />
            </Layout>
           </>} />

           <Route path="/test" render={() => <>
            <Layout >
            
            </Layout>
           </>} />

          {/* <Route render= {()=> <p>Error 404: Not found</p>} /> */}
        
      </>
    );
  }
}

export default App;
