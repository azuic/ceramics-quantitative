import React from 'react'
import {EachCountry} from "./EachCountry";
import useWindowDimensions from "./Helpers"
import styled, {keyframes} from "styled-components";
export class Countries extends React.Component{
    constructor(props){
        super(props);
        this.state = {oneCountrySelected:false}
    }

    clickOnOne=()=>{
        this.setState((prevState)=>{
            return {oneCountrySelected: !prevState.oneCountrySelected};
        });
    }

    render(){

        const mainSize = {
            width:this.props.width,
            height:this.props.height,
            margin: 0,
            position: 'relative'
        };
        return(
            <div style={mainSize}>

                {this.props.data.map(
                        (each)=> <EachCountry key={each.country} country={each.country} objectCount={each.objectCount} objectList={each.objectList}
                        isoCode={each.isoCode} latLon={each.latLon} size={each.size} width={this.props.width} height={this.props.height}/>
                        )}
            </div>
        )
    }

}
