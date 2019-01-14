import React, { Component } from 'react';
import constants from '../constants.js'
import Upload from './Upload.jsx';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: constants.UPLOAD
        }
    }
    render(){

        if(this.state.activeTab === constants.UPLOAD){
            return (
                <div className = "main">
                    <h1>Comfreight</h1>
                    <div className = "tabs">
                        <button>Upload</button>
                        <button>Credit</button>
                        <button>History</button>
                    </div>
                    <Upload></Upload>
                </div>
                )
        } else if (this.state.activeTab === constants.CREDIT){
            return (
                <div className = "main">
                    <h1>Comfreight</h1>
                    <div className = "tabs">
                        <button>Upload</button>
                        <button>Credit</button>
                        <button>History</button>
                    </div>
                    {/* <Credit></Credit> */}
                </div>
                )
        } else if (this.state.activeTab === constants.HISTORY){
            return (
                <div className = "main">
                    <h1>Comfreight</h1>
                    <div className = "tabs">
                        <button>Upload</button>
                        <button>Credit</button>
                        <button>History</button>
                    </div>
                    {/* <History></History> */}
                </div>
                )
        }
        return 
    }
}

export default Main;