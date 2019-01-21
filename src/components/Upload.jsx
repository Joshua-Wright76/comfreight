import React, { Component } from 'react';

class Upload extends Component {
    constructor(props){
        super(props);
        this.state = {
            wireTransferNeeded: 0,
            totalInvoiceAmount: 0,
            invoiceChangeHandler: e => {
                this.setState({wireTransferNeeded: Math.round(e.target.value * 0.03)})
                console.log(this.state.wireTransferNeeded);
            }
        }
    }
    render(){
        return (
            <div className = "uploadForms">
                <form>
                    <div className = "fileUpload"></div>
                        <label htmlFor="totalAmount">Total Invoice Amount</label>
                        <input id = "totalAmount" onChange = {this.state.invoiceChangeHandler}></input>
                        
                        <label htmlFor="companyName">Company Name</label>
                        <input id = "companyName"></input>

                        <label htmlFor="companyAddress">Bill To Company Address</label>
                        <input id="companyAddress"></input>
                </form>
                <form> 
                    <label htmlFor="firstPickup">First Pickup</label>
                    <input id = "firstPickup"></input>
                        
                    <label htmlFor="finalDestination">Final Destination</label>
                    <input id = "finalDestination"></input>

                    <label htmlFor="loadNumber">Load Number:</label>
                    <input id="loadNumber"></input>
                    <div className = "equipmentDiv">
                        <select name="Equipent Type">
                            <option value="">Please Choose An Option</option>
                            <option value="Truck">Truck</option>
                            <option value="Semi-Truck">Semi-Truck</option>
                            <option value="Horse">Horse</option>
                            <option value="Magic Carpet">Skateboard</option>
                            <option value="Bugatti">Bugatti</option>
                        </select>
                        <label htmlFor="loadLength"></label>
                        <input type="text" id="loadLength"/>
                    </div>
                    <div className="wireTransfer">
                        <p>Wire Trasfer Needed: {this.state.wireTransferNeeded}</p>
                        <input type="checkBox"/>
                    </div>
                </form>
            </div>
        )
    }
}

/*
total invoice am0ut * (1 - discount) - 25(if wwtf is checked off)
*/

export default Upload