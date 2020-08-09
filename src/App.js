import React,{Component} from 'react';
import './App.css';

import {  Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import corona from './images/image.png';

class App extends Component{
  state = {
  	data: {},
  	country: ''
  }
  
  async componentDidMount() {
  	const fetchedData = await fetchData()
  	this.setState({data: fetchedData})
 	console.log(this.state.data)
  }

  handleCountryChange = async (country) => {
  	const fetchedData = await fetchData(country)
  	this.setState({data: fetchedData, country: country})
  }

  render(){
  	const { data, country } = this.state;

    return(
      <div className="container">
      	<img alt='COVID-19' src={corona} className="image"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }	
}

export default App;
