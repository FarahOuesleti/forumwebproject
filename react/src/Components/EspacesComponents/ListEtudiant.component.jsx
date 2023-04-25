import React, { Component } from 'react';
import StudentService from '../../Services/StudentService';

class ListEtudiant extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          student: []
        };
      }

      componentDidMount(){
        StudentService.getStudents().then((response) => {
         
          this.setState({ student: response.data });
        });
      }
      
    
    render() {

        console.log(this.state.student)
        return (
            <div>
                <h2 className="text-center">Student List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Cin </th>
                                <th> First Name </th>
                                <th> Last Name </th>
                                <th> Email </th>
                                <th> Sector </th>
                                <th> Telephone </th>
                                <th> Level </th>
                                <th> Confirmation </th>
                                <th> Adresse </th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.student.map((student) => (
                        <tr key={student.stdID}>
                            <td> {student.cin} </td>
                            <td> {student.stdFName}</td>
                            <td> {student.stdLName}</td>
                            <td> {student.stdMail}</td>
                            <td> {student.stdSector}</td>
                            <td> {student.stdTlf}</td>
                            <td> {student.stdLevel}</td>
                            <td> {student.stdConfirmation}</td>
                            <td> {student.stdAdr}</td>
                        </tr>
                    ))}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    
}

export default ListEtudiant;
