import React, {Component} from "react";
import axios from 'axios';
import './Create.css'


class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
                s_no: '',
                fantasy: '',
                science_Fiction:'',
                horror: '',
                romance:'',
                thriller:'',
                mystery:'',
        };
    }


    handleaccidchange = (event) => {
        this.setState({s_no:event.target.value});   
    };


    handleclientnamechange = (event) => {
        this.setState({fantasy: event.target.value});
    };


    handlebanknamechange = (event) => {
        this.setState({science_Fiction: event.target.value});
    };


    handlebranchchange = (event) => {
        this.setState({horror: event.target.value});
    };


    handlemobilechange = (event) => {
        this.setState({romance: event.target.value});
    };


    handlemailidchange = (event) => {
        this.setState({thriller: event.target.value});
    };


    handlebalancechange = (event) => {
        this.setState({mystery: event.target.value});
    };


    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
                s_no : this.state.s_no,
                fantasy: this.state.fantasy,
                science_Fiction: this.state.science_Fiction,
                horror: this.state.horror,
                romance: this.state.romance,
                thriller: this.state.thriller,
                mystery: this.state.mystery
        };
        axios.post('http://127.0.0.1:8080/savedata', data)
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit} className="login-form" id="inputdata">
                <label className="login-label">S_no</label>
                <input 
                    className="login-input"
                    type="number"
                    value={this.state.s_no}
                    onChange={this.handleaccidchange}
                />
                <label className="login-label">fantasy</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.fantasy}
                    onChange={this.handleclientnamechange}
                />
                <label className="login-label">Science_Fiction</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.science_Fiction}
                    onChange={this.handlebanknamechange}
                />
                <label className="login-label">Horror</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.horror}
                    onChange={this.handlebranchchange}
                />
                <label className="login-label">Romance</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.romance}
                    onChange={this.handlemobilechange}
                />
                <label className="login-label">Thriller</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.thriller}
                    onChange={this.handlemailidchange}
                />
                <label className="login-label">Mystery</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.mystery}
                    onChange={this.handlebalancechange}
                />
                <button className="login-button" type="submit">Add</button>
            </form>
        )
    }
}


export default Create;