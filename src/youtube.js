import React from 'react';
import './youtube.css'
import ReactPlayer from 'react-player';

export default class YoutubeVideo extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            inputurl : "",
            url : ""
        }
    }

    changeHandler = (event) => {
        this.setState({inputurl:event.target.value})
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.setState({url: this.state.inputurl})
    }
    render(){
        return(
            <div id="outerlayer"><br/><br/>
                <div id="main5"><br/><br/>
                
                    <header>
                        <form onSubmit={this.submitHandler}>
                            <input onChange={this.changeHandler} id="myinput" className="form-control pm-2" type="text" placeholder="url of video"></input>
                            <button id="btn1">play</button>
                        </form>

                         <ReactPlayer id="myplayer" url={this.state.url}controls={true}/>   
                        </header>
                </div>
            </div>
        )
    }
}