import React from 'react'
import SVG from 'react-inlinesvg'
import  {scale} from "./Helpers";
import styled, { css, keyframes } from "styled-components";
// import Sketch from 'react-p5';
import {objectData} from "./Data"
import P5Wrapper from "react-p5-wrapper";

export class EachCountry extends React.Component{
    constructor(props){
        super(props);
        this.state ={isSelected:false};
        this.handleSelected = this.handleSelected.bind(this);
        this.sketch = this.sketch.bind(this);
    }

    handleSelected(){
        this.setState((prevState)=>{
            return {isSelected: !prevState.isSelected};
        });
    }

    sketch(p){
        const count = this.props.objectCount;
        const list = this.props.objectList;
        const country = this.props.country;
        // const w = window.innerWidth;
        // const h = window.innerHeight;
        const w =1000;
        const h =1000;
        p.setup=()=>{
            p.createCanvas(w, h);
        }
        p.draw=()=>{
            // p.clear();
            p.background(0,0);
            p.noStroke();
            // const side=(w-40)/count;
            const startX=w/2-15;
            const startY=0;

            for (let i=0; i<count; i++){
                const obj = objectData.find(function(e){ return e.objectID===list[i]})
                if (obj !== undefined){
                    p.fill(obj.colors[0]);
                    p.rect(startX, startY+10*i,obj.percents[0]*30,10);
                    p.fill(obj.colors[1]);
                    p.rect(startX+obj.percents[0]*30,  startY+10*i, obj.percents[1]*30, 10);
                    p.fill(obj.colors[2]);
                    p.rect(startX+(obj.percents[0]+obj.percents[1])*30,  startY+10*i, obj.percents[2]*30,10);
                } else {
                    p.fill('rgba(255,255,255, 0.25)');
                    p.rect(startX,0,30,500);
                }

            }
        }
    }

    render(){
        const svgPath = `https://storage.googleapis.com/ceramics/assets/${this.props.isoCode}.svg`;
        const width = this.props.width;
        const height = this.props.height;
        const lat = this.props.latLon[0];
        const lon = this.props.latLon[1];
        // const count = this.props.objectCount;
        // const country = this.key;
        const {isSelected} = this.state;
        // console.log(objectIDs)
        // const list = this.props.objectList;
        let colors;
        if (isSelected){
            colors = (
                <div style={{top:0}}>
                    <p style={{'font-size':scale(this.props.objectCount,1,2616,32,300), }}>{this.props.country}</p>
                    <p style={{'font-size':scale(this.props.objectCount,1,2616,32,300), }}>{this.props.objectCount}</p>
                    <P5Wrapper sketch={this.sketch} style={{'z-index':50, top:0}} />
                </div>
            )
        }
        const sizeScale=scale(this.props.size, 2180,3600950,20,500)
        const countryStyle = {
            opacity: scale(this.props.objectCount,1,2616,0.1,1),
            top: Math.round(scale(-lat, -56.264,40.901,height/10, height/10*9)),
            left: Math.round(scale(lon, -102.553,174.886,height/10, width-height/10)),
            width: sizeScale,
            height: sizeScale,
            position: 'absolute',
            'z-index':0
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
            animation: ${floating} 4s easy-in-out infinite`;



        return(
                <div>
                    <SVG className="float" src={svgPath} onClick={this.handleSelected} style={countryStyle} uniquifyIDs={true} preProcessor={code => code.replace(/fill=".*?"/g, `fill=${fillColor}`)}/>

                    {colors}
                </div>

        )
    }

}
