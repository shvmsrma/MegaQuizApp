import React, { Component } from 'react';
import axios from 'axios';
export default class AddQuestion extends Component {

    constructor(props){
        super(props);

    this.onChangeques = this.onChangeques.bind(this);
    this.onChangeques_type = this.onChangeques_type.bind(this);
    this.onChangeans = this.onChangeans.bind(this);
    this.onChangeoptions = this.onChangeoptions.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



        this.state = {
            ques :'',
            ques_type:'',
            ans :'',
            options: [],
        }
    }

    onChangeques(e){
        this.setState({
            ques:e.target.value
        });
    }
    onChangeques_type(e){
        this.setState({
            ques_type:e.target.value
        });
    }
    onChangeans(e){
        this.setState({
            ans:e.target.value
        });
    }
    onChangeoptions(e){
        this.setState({
            options:e.target.value.split(",")
        });
    }
    onSubmit(e){
        e.preventDefault();

        const question = {
            ques:this.state.ques,
            ques_type:this.state.ques_type,
            ans:this.state.ans,
            options:this.state.options
        }
        console.log(question)

        axios.post('https://megaquizappbackend.herokuapp.com/question/add',question)
        .then(res =>console.log(res.data))

        window.location = '/';
    }

  render() {
    return (
        <div>
        <h3>Add New Question</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Type the Question: </label>
            <input type = "text"
                required
                className="form-control"
                value={this.state.ques}
                onChange={this.onChangeques}>
                
            </input>
          </div>
          <div className="form-group"> 
            <label>Type of Question: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.ques_type}
                onChange={this.onChangeques_type}
                />
          </div>
          <div className="form-group">
            <label>Correct Answer </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.ans}
                onChange={this.onChangeans}
                />
          </div>
          <div className="form-group">
            <label>Options </label>
            <div>
                <input
                selected={this.state.options}
                onChange={this.onChangeoptions}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Add Question" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}