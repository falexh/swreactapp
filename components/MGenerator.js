import React, {Component} from 'react'
import Loader from './Loader'


class MGenerator extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }


  componentDidMount() {
    const num = Math.floor((Math.random() * 10) + 1)
    this.setState({loading: true})
    fetch("https://swapi.co/api/people/" + num)
      .then(response => response.json())
      //where you receive data, you want to save it in your state
      .then(data => {
        this.setState({
          loading: false,
          character: data
        })
      })
  }


  appearHandler = () => {
    const num = Math.floor((Math.random() * 10) + 1)
    this.setState({loading: true})
    fetch("https://swapi.co/api/people/" + num)
      .then(response => response.json())
      //where you receive data, you want to save it in your state
      .then(data => {
        this.setState({
          loading: false,
          character: data
        })
      })
  }

  vanishHandler = () => {
    this.setState({
      character: ""
    })
  }

  render() {
    const swChar = this.state.loading ? <Loader /> : this.state.character.name
    const swHeight = this.state.character.height
    const swEyeColor = this.state.character.eye_color
    return (
      <div className="apiData">
        <br />
        <h3>Name: {swChar}</h3>
        <h3>Height: {swHeight}</h3>
        <h3>Eye-Color: {swEyeColor}</h3>
        <br />
        <button onClick = {this.appearHandler} type="button" className="btn btn-success"> Click for a new character! </button>
        <br />
        <br />
        <button onClick = {this.vanishHandler} type="button" className="btn btn-danger"> Make Them Vanish! </button>
        <br />
        <br />
      </div>
    )
  }

}

export default MGenerator
