import { Component } from 'react';
import { Button } from '@mui/material';

import "../crud/style.css"

class Studentdetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      detail: {
        name: "",
        gender: "",
        marks: ""
      },
      record: [],
      flag: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  handleChange = e => {
    this.setState({ detail: { ...this.state.detail, [e.target.name]: e.target.value } })
  }

  handleSubmit = e => {
    if (this.state.detail.name !== "" && this.state.detail.gender !== "" && this.state.detail.marks !== "") {
      this.state.record.push(this.state.detail)
    }
    this.setState({
      detail: {
        name: "",
        gender: "",
        marks: ""
      }
    })
  }

  handleShow = e => {
    this.setState({ flag: !this.state.flag })
  }

  render() {

    return (
      <>
        <center>
          <div className='card'>
            <h1><u>Student Details</u></h1>
            <form>
              <label for="name">Name:</label>&nbsp;&nbsp;
              <input type="text" name="name" value={this.state.detail.name} id="name" onChange={(e) => this.handleChange(e)} /><br /><br />
              <label for="gender">Gender:</label>
              <input type="text" name="gender" value={this.state.detail.gender} id="gender" onChange={(e) => this.handleChange(e)} /><br /><br />
              <label for="marks">Marks:</label>&nbsp;&nbsp;
              <input type="text" name="marks" value={this.state.detail.marks} id="marks" onChange={(e) => this.handleChange(e)} /><br /><br /><br />
              <Button variant='contained' color='error' onClick={this.handleSubmit}>Submit</Button>
              &nbsp;&nbsp;&nbsp;
              <Button variant='contained' color='success' onClick={this.handleShow}>ShowDetails</Button>
            </form>
          </div>
          {
            this.state.flag && this.state.record.length > 0 ?
              <table border={2} width="70%">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Marks</th>
                  </tr>
                </thead>
                <tbody>{
                  this.state.record.map((datas, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{datas.name}</td>
                        <td>{datas.gender}</td>
                        <td>{datas.marks}</td>
                      </tr>
                    )
                  })
                }
                </tbody>
              </table>
              :
              <></>
          }
        </center>
      </>
    )
  }
}
export default Studentdetails;