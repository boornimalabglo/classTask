import { Component } from 'react';
import { Button, TextField } from '@mui/material';

class Edit extends Component {
  constructor() {
    super()
    const studentsList = [
      {
        name: "arun",
        gender: "male",
        marks: "20",
      }, {
        name: "jinusha",
        gender: "female",
        marks: "55",
      }, {
        name: "ramya",
        gender: "female",
        marks: "75",
      }, {
        name: "ajeesh",
        gender: "male",
        marks: "60",
      }, {
        name: "jaison",
        gender: "male",
        marks: "65",
      }, {
        name: "megha",
        gender: "female",
        marks: "49",
      }, {
        name: "thinushiya",
        gender: "female",
        marks: "80",
      }, {
        name: "raja",
        gender: "male",
        marks: "35",
      }, {
        name: "kumar",
        gender: "male",
        marks: "40",
      }, {
        name: "rose",
        gender: "female",
        marks: "75",
      },
      {
        name: "smith",
        gender: "male",
        marks: "90",
      }, {
        name: "warner",
        gender: "male",
        marks: "80",
      }, {
        name: "harleen deol",
        gender: "female",
        marks: "50",
      }, {
        name: "mithali",
        gender: "female",
        marks: "85",
      }, {
        name: "dhoni",
        gender: "male",
        marks: "99",
      },
    ]
    this.state = {
      details: (studentsList)
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

  }

  handleChange = (e) => {
    this.state.change = e.target.value
  }

  handleRemove = (e) => {
    this.info = this.state.details.filter((data) => data.name !== e)
    this.setState({ details: this.info })
    this.setState({change:""})
  }


  render() {

    return (
      <>
        <center>
          <h1><u>Edit Details</u></h1><br/><br/><br/>
          <TextField type="text" variant='standard' value={this.state.change} placeholder='enter name' onChange={this.handleChange} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant='contained' onClick={(e) => this.handleRemove(this.state.change)}>Remove</Button><br /><br />
          <table border={2} width="50%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.details.map((record) => {
                  
                  return (
                    <tr>
                      <td>{record.name}</td>
                      <td>{record.gender}</td>
                      <td>{record.marks}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </center>

      </>
    )
  }
}
export default Edit;