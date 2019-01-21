import React, { Component } from 'react';
import constants from '../constants.js'
import Upload from './Upload.jsx';
import Credit from './Credit.jsx';
import History from './History.jsx';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: constants.UPLOAD,
            setTab: tab => {
                this.setState({activeTab: tab});
            }
        }
    }
    render(){
        let activeSlide;

        if(this.state.activeTab === constants.UPLOAD) activeSlide = <Upload/>
        if(this.state.activeTab === constants.CREDIT) activeSlide = <Credit/>
        if(this.state.activeTab === constants.HISTORY) activeSlide = <History/>

        
        return (
            <div className = "main">
                <h1>Comfreight</h1>
                <div className = "tabs">
                    <button onClick = {e => this.state.setTab(constants.UPLOAD)}>Upload</button>
                    <button onClick = {e => this.state.setTab(constants.CREDIT)}>Credit</button>
                    <button onClick = {e => this.state.setTab(constants.HISTORY )}>History</button>
                </div>
                {activeSlide}
            </div>
        )
    }
        
}


export default Main;