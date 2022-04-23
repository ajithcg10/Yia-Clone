import React from 'react'
import styled from 'styled-components'
import Pic from '../../Asset/images/ai.jpg'
import Fifty from '../../Asset/images/card.svg'
export default function Topics() {
const Items=[
    {
        image:Pic,
        subtitle:"Artificial Intelligence",
       
    },
    {
        image:require("../../Asset/images/robotics.jpg"),
        subtitle:"Robotics",

    },
    {
        image:require("../../Asset/images/meta.jpg"),
        subtitle:"Metaverse",

    },
    {
        image:require("../../Asset/images/3d.jpg"),
        subtitle:"3D Printing",

    },
    {
        image:require("../../Asset/images/Group+49584.jpg"),
        subtitle:"Web 3.0",

    },
    {
        image:require("../../Asset/images/ar&vr.jpg"),
        subtitle:"AR & VR",

    },
    {
        image:require("../../Asset/images/iot.jpg"),
        subtitle:"IoT",

    },
    {
        image:require("../../Asset/images/car.jpg"),
        subtitle:"Driverless Cars",
        add:Fifty
    },

]
    const Gallery=()=>{
        return Items.map((item)=>{
            return  <Item>
            <ImageContainer>
                <Image alt='Image' src={item.image} />
            </ImageContainer>
            <SubTitle>{item.subtitle}</SubTitle>
            <Add>
                <Plus src={item.add} />
            </Add>
        </Item>
        })
    }
  return (
      <Topic>
        <Top>
            <Title>പുതിയ ടെക്ക്നോളജികൾ <Color>മനസ്സിലാക്കാം</Color></Title>
            <Description>ടെക്ക്-പഠനം വേറിട്ടതും, ക്രിയാത്മകവുമാക്കാൻ കഴിയുന്ന സിലബസ്.</Description>
        </Top>
        <Bottom>
            <Box>
                {Gallery()}
            </Box>
        </Bottom>
    </Topic>
  )
}
const Topic = styled.div``
const Top =styled.div`
text-align: center;
padding: 6%;

`
const Title=styled.h1`
color: #49a76e;
@media all and (max-width:980px){
   font-size:25px ;    
   }
   @media all and (max-width:768px){
       font-size:21px ;
   }
`
const Color=styled.span`
color: #000;
`
const Description=styled.p`
max-width: 45%;
margin: 0 auto;
@media all and (max-width:980px){
      max-width:75% ;  
   }
   @media all and (max-width:768px){
      max-width:80% ;
   }
   @media all and (max-width:641px){
       max-width:90%;
   }
`
const Bottom= styled.div``
const Box =styled.ul`
display: flex;
text-align: center;
flex-wrap: wrap;
justify-content: space-between;
@media all and (max-width:980px){
       justify-content: center;
      
   }
`
const Item=styled.li`
padding: 15px;
margin-bottom: 25px;
background-color: aqua;
width: 20%;
border-radius: 12px;
&:first-child{
    background-color: #e3f4e6;
}
:nth-child(2){
    background-color: #fff8e4;
}
:nth-child(3){
    background-color: #e2f9dd;
}
:nth-child(4){
    background-color: #efeafa;
}
:nth-child(5){
    background-color:#fff8e4;
}
:nth-child(6){
    background-color: #ebf2fa;
}
:nth-child(7){
    background-color: #e3f4e6;
}
:last-child{
    background-color:#f9eefb;  
    position :relative ;
}
@media all and (max-width:980px){
       width:25% ;
      margin-right:15px;
   }
   @media all and (max-width:768px){
       width:40%;
       margin-right: 10px;
   }
   @media all and (max-width:640px){
       width:100% ;
       margin: 0 auto;
       margin-bottom: 20px;
   }



`
const ImageContainer=styled.div`
width: 100%;

`
const Image=styled.img`
width: 100%;
display: block;
border-radius: 12px;
`
const SubTitle=styled.h3`
font-weight: 500;

`
const Add=styled.div`
position: absolute;
    width: 64%;
    bottom: -13%;
    right: -13%;
    @media all and (max-width:768px){
        width: 36%;
        bottom: 0;
        right: 0;
    }
`
const Plus=styled.img`
width: 100%;
display: block;
`
