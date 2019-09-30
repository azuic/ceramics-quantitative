import React from 'react'
import SVG from 'react-inlinesvg'
import {countryData} from "./Data";
import {Countries} from "./Countries";

export class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const data = countryData;
        const mainSize = {
            width:this.props.width,
            height:this.props.height
        };
        console.log(this.props.width,this.props.height)
        return(
            <div style={mainSize}>
                <Countries data={data} width={this.props.width} height={this.props.height}/>
            </div>
        )
    }


}