import React from 'react'
import SVG from 'react-inlinesvg'
import  {scale} from "./Helpers";
import styled, { css, keyframes } from "styled-components";

export class EachCountry extends React.Component{
    constructor(props){
        super(props);
        this.state ={isSelected:false};
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected(){
        this.setState((prevState)=>{
            return {isSelected: !prevState.isSelected};
        });
    }

    render(){
        const svgPath = `https://storage.googleapis.com/ceramics/assets/${this.props.iso}.svg`;
        const width = this.props.width;
        const height = this.props.height;
        const lat = this.props.latLon[0];
        const lon = this.props.latLon[1];
        const count = this.props.objectCount;
        const country = this.key;
        const {isSelected} = this.state;
        // console.log(objectIDs)


        // https://storage.googleapis.com/ceramics/with_country_crops/${eachID}.png


        let imageCloud;
        if (isSelected){
            imageCloud = <div style={{position:'relative'}}>
                <h1 style={{marginTop:Math.round(Math.random() * this.props.height),
                    marginLeft:Math.round(Math.random() * this.props.width)}}> {this.props.country}</h1>
                <h1 style={{top:Math.round(Math.random() * this.props.height),
                    left:Math.round(Math.random() * this.props.width)}}> {this.props.objectCount}</h1>
                {this.props.objectIDs.map((each)=><img key={each} src={`https://storage.googleapis.com/ceramics/with_country_crops/${each}.png`} style={{width:'100px',
                    height:'100px',
                    top:Math.round(Math.random() * this.props.height),
                    left:Math.round(Math.random() * this.props.width),
                    position:'absolute'}} />)}

            </div>
        }

        const countryStyle = {
            opacity: scale(this.props.objectCount,1,2616,0.1,1),
            marginTop: Math.round(scale(-lat, -56.264,40.901,height/10, height/10*9)),
            marginLeft: Math.round(scale(lon, -102.553,174.886,height/10, width-height/10)),
            width: 100,
            height: 100,
            position: 'absolute'
        };
        const fillColor = isSelected?"#A6807A":"#384e68"
        const floating = keyframes`
            from {-webkit-transform:translate(0, 0px);}
            65% {-webkit-transform:translate(0, 50px);}
            to {-webkit-transform: translate(0, -0px);}`;
        const spinning = keyframes`
            0% {-webkit-transform: rotate(0deg);}
            100% {-webkit-transform: rotate(360deg);}`;
        const Float = styled.div`
            animation: ${spinning} 4s easy-in-out infinite`;

        console.log(Math.round(scale(-lat, -56.264,40.901,height/10, height/10*9)));
        return(
            <div style={{position:'absolute'}}>
                <SVG className="float spin" src={svgPath} onMouseEnter={this.handleSelected} onMouseLeave={this.handleSelected} style={countryStyle} uniquifyIDs={true} preProcessor={code => code.replace(/fill=".*?"/g, `fill=${fillColor}`)}/>

                {imageCloud}
            </div>
        )
    }

}
