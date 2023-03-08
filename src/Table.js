import axios from 'axios';
import React, { Component } from 'react';

import {Navigate} from 'react-router-dom';
import {useParams} from "react-router-dom";
class Table extends Component {
    state = {
        data: []
    }


    componentDidMount() {
        axios.get('http://127.0.0.1:8080/findall').then(response =>{this.setState({data: response.data});
    })
    .catch(error => {console.log(error);
    });
    }deleteData(s_no,e){
    axios.delete("http://127.0.0.1:8080/deleteById/{id}").then(response =>{console.log(response);
        const data=this.state.data.filter(item =>item.s_no !==s_no);
        this.setState({data});
    })
}


    


    render(){
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>S_no</th>
                        <th>fantasy</th>
                        <th>Science_Fiction</th>
                        <th>Horror</th>
                        <th>Romance</th>
                        <th>Thriller</th>
                        <th>Mystery</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(book => (
                        <tr key={book.s_no}>
                            <td>{book.s_no}</td>
                            <td>{book.fantasy}</td>
                            <td>{book.science_Fiction}</td>
                            <td>{book.horror}</td>
                            <td>{book.romance}</td>
                            <td>{book.thriller}</td>
                            <td>{book.mystery}</td>
                            <td>
                                <button className='btn btn-danger' onClick={(e)=> this.deleteData(book.s_no,e)}>Delete</button>
                            </td>
                            <td>
                            <button className='btn btn-danger' onClick={this.handleSubmit}>{this.state.update && <Navigate to={'/Update/'+`${book.s_no}`}/>}Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}


export default Table;