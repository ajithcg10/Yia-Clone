import React from 'react'
import styled from 'styled-components'
import Phone from '../../Asset/images/phone-g-call.svg'
import Scissor from '../../Asset/images/scissors.svg'
import certificate from '../../Asset/images/certificate-r.svg'
import Device from '../../Asset/images/devices.svg'
import Certify from '../../Asset/images/certificate.svg'

export default function School() {
  return (
    <Schooljoin>
        <Top>
            <Title>How <Color>School Can join</Color></Title>
        </Top>
        <Botttom>
            <Box>
                <Item>
                    <SquareBox>
                        <ImageContainer>
                            <Image alt='Image' src={Phone} />
                        </ImageContainer>
                    </SquareBox>
                    <Description>Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് Talrop-ന്റെ ടീമുമായി 858 999 8744 എന്ന നമ്പറിൽ കോൺടാക്ട് ചെയ്യാവുന്നതാണ്.</Description>
                </Item>
                <Item>
                    <SquareBox className='one'>
                        <ImageContainer className='one'>
                            <Image alt='Image' src={Scissor} />
                        </ImageContainer>
                    </SquareBox>
                    <Description>സ്കൂളിന്റെ ലോഗോയും ആവശ്യ വിവരങ്ങളും നൽകുക.</Description>
                </Item>
                <Item>
                    <SquareBox className='two'>
                        <ImageContainer className='two'>
                            <Image alt='Image' src={certificate} />
                        </ImageContainer>
                    </SquareBox>
                    <Description>സ്കൂൾ നിശ്ചയിക്കുന്ന ഉദ്ഘാടന ദിനത്തിൽ ആവശ്യമായ Inauguration Video ഡിജിറ്റലായി Talrop നൽകുന്നതാണ്.</Description>
                </Item>
                <Item>
                    <SquareBox className='three'>
                        <ImageContainer className='three'>
                            <Image alt='Image' src={Device} />
                        </ImageContainer>
                    </SquareBox>
                    <Description>Mobile, Tab, Laptop, Desktop Computer എന്നിവയിൽ ഏതെങ്കിലും ഡിവൈസുകൾ ഉപയോഗിച്ച് Talrop ലഭ്യമാക്കുന്ന Web, Android, iOS പ്ലാറ്റ്ഫോമുകളിലൂടെ കുട്ടികൾക്ക് പഠിക്കുവാൻ സാധിക്കും.</Description>
                </Item>
                <Item>
                    <SquareBox className='four'>
                        <ImageContainer className='four'>
                            <Image alt='Image' src={Certify} />
                        </ImageContainer>
                    </SquareBox>
                    <Description>വിജയകരമായി പൂർത്തീകരിക്കുന്ന വിദ്യാർത്ഥികൾക്ക് ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നു.</Description>
                </Item>
            </Box>
            <Button href='#'>Join for free</Button>
        </Botttom>
    </Schooljoin>
  )
}
const Schooljoin = styled.div`
padding: 5%;
text-align: center;
`
const Top =styled.div`
text-align: center;
margin-bottom: 80px;
`
const Title=styled.h1`
 color: #49a76e;   
 font-weight:500 ;
`
const Color=styled.span`
display: block;
color: #000;
`
const Botttom=styled.div`
text-align:center;
`
const Box =styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Item=styled.li`
width: 29%;
display: flex;
flex-direction: column;
align-items: center;
margin-left:20px;
position: relative;
margin-bottom: 50px;

&:first-child{

    &::after{
        content:" 01";
        color:#c1c1c1;
        position: absolute;
        font-size: 50px;
    top: -38px;
    left: 83px;
    font-weight: 600;
    opacity: 0.5;
    
    }
}
&:nth-child(2){

    &::after{
        content:" 02";
        color:#c1c1c1;
        position: absolute;
        font-size: 50px;
    top: -38px;
    left: 83px;
    font-weight: 600;
    opacity: 0.5;
    
    }
}
&:nth-child(3){
    
    &::after{
        content:" 03";
        color: #c1c1c1;
        position: absolute;
        font-size: 50px;
    top: -38px;
    left: 83px;
    font-weight: 600;
    opacity: 0.
    
    }
}
&:nth-child(4){
    
    &::after{
        content:" 04";
        color:#c1c1c1;
        position: absolute;
        font-size: 50px;
    top: -38px;
    left: 83px;
    font-weight: 600;
    opacity: 0.5;
    
    }
}
&:nth-child(5){
    
    &::after{
        content:" 05";
        color:#c1c1c1;
        position: absolute;
        font-size: 50px;
    top: -38px;
    left: 83px; 
    font-weight: 600;
    opacity: 0.5;
    
    }
}

@media all and (max-width:980px){
      width:40%;   
   }
   @media all and (max-width:768px){
       width:55% ;
   }
`
const SquareBox=styled.div`
/* width: 40%; */
padding: 60px;
background-color: rgb(0, 154, 102);
transform: rotate(21deg);
border-radius: 27px;
position: relative;
margin-bottom: 15px;

&.one{
    background-color: #fbb82c;

}
&.two{
    background-color: #ff5b2f;
}
&.three{
    background-color: #b257ff;
}
&.four{
    background-color: #4c9afe;
}
`
const ImageContainer=styled.div`
    position: absolute;
    bottom: 15px;
    right: -18px;
    padding: 10px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid rgb(0, 154, 102);
    
    transform: rotate(340deg);

    &.one{
    background: #fff;
    border-radius: 50%;
    border: 1px solid #fbb82c;
    padding: 15px;
    
    transform: rotate(340deg);

    }
    &.two{
    background: #fff;
    border-radius: 50%;
    border: 1px solid #ff5b2f;
    padding: 14px 18px;
    
    transform: rotate(340deg);

    }
    &.three{
    background: #fff;
    border-radius: 50%;
    border: 1px solid #b257ff;
    padding: 16px 15px;
    
    transform: rotate(340deg);

    }
    &.four{
    background: #fff;
    border-radius: 50%;
    border: 1px solid #4c9afe;
    padding: 8px 14px;
    
    transform: rotate(340deg);

    }
`
const Image =styled.img`
display: block;
`
const Description=styled.p`
max-width: 100%;
text-align: center;
opacity: 0.7;
margin:0 auto ;
@media all and (max-width:980px){
       font-size:14px;  
   }
   @media all and (max-width:420px){
       font-size: 13px;
   }

`
const Button=styled.a`
display: inline-block;
padding: 15px 45px;

text-align: center;
color: #fff;
font-weight: 500;
font-size: 18px;
background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
background-size: 200%;
transition: all 0.5s ease 0s;
border-radius: 8px;
&:hover{
    cursor: pointer;
    background-position: right center;
    background-position-x: right;
    background-position-y: center;
}


`