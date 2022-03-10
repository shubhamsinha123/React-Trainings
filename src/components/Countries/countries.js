import React, { Component } from "react";
// import blankImg from "./blank.gif";

// import "./flag.css";

import countriesList from '../../json/listalldata.json';

class Country extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            items: "",
            data: []
        };
    }
    componentDidMount()
    {
        fetch(countriesList)
        .then(res =>
            {
                this.setState({
                    items: res.type,
                    // data: res.items[0]
                })
            })
            .catch(error => {
                console.error(error);
                this.setState({
                  error: true
                });
            });   
    }

    // renderCountry = country => {
    // const { search } = this.state;
    // var code = country.code.toLowerCase();

    /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/
    render() {
        console.log(this.state.items)
        return (
            <div className="col-md-3" style={{ marginTop: "20px" }}>
                </div>
        );
    };
}
export default Country;
