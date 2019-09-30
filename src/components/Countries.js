import React from 'react'
import {EachCountry} from "./EachCountry";
import useWindowDimensions from "./Helpers"
import styled, {keyframes} from "styled-components";
export class Countries extends React.Component{
    render(){

        const mainSize = {
            width:this.props.width,
            height:this.props.height,
        };
        return(
            <div style={mainSize}>

                {this.props.data.map(
                        (each)=> <EachCountry key={each.country} country={each.country} objectCount={each.objectCount} objectIDs={each.objectIDs}
                        iso={each.iso} latLon={each.latLon} width={this.props.width} height={this.props.height}/>
                        )}
            </div>
        )
    }

}
