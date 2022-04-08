import React from "react";
import BingMap from '../map/Map';
import PushPin from '../../classes/models/pushPin';

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            latitudine:0,
            longitudine:0,
            pushPins:[]

        };
    }

    

    handleSubmit = e => {
        e.preventDefault();
        this.forceUpdate();
        console.log("sto entrando");
        console.log("latitudine: "+this.state.latitudine+" longitudine: "+this.state.longitudine);
        let n=new PushPin(this.state.latitudine,this.state.longitudine);
        this.state.pushPins.push(n.inserisciPunto());  
        console.log(this.state.pushPins.length);

    }

    handleChange = e => {
        //console.log(this.state.latitudine,this.state.longitudine);
        if(e.target.value){
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }

    render() {
        return(
            <div>
                <BingMap coordinate={[this.state.latitudine,this.state.longitudine,this.state.pushPins]}/>
                <form className="d-flex" onSubmit={this.handleSubmit}>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="input-group">
                                    <label/>Latitudine
                                    <input type="number" className="input-group" name="latitudine" value={this.state.name} onChange={this.handleChange}/>
                                </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="input-group">
                                <label/>Longitudine
                                <input type="number" className="input-group" name="longitudine" value={this.state.name}  onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="input-group">
                                <button className="btn btn-danger">Submit!</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }


}