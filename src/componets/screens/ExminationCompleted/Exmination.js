import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import OtherHeader from '../../include/OtherHeader'


export default function Exmination() {
  return (
    <>
       <OtherHeader />
        <div className='wrapper'>    
            <ExmaSpotlight>
                <Main>
                    <TopDiv>
                        <Logo>
                            <LogoImg alt="Image" src={require("../../../Asset/images/Tefun-logo.svg").default} />
                        </Logo>
                        <Student>
                            <StudentImg alt="Image" src={require("../../../Asset/images/Student.svg").default}/>
                        </Student>
                        <Title>Congratulations!</Title>
                    <Subtitle>You have completed your examination.We will provide your certificate soon.</Subtitle>
                    <Button to={"/Chosse/"} >Go to Dashboard</Button>
                    </TopDiv>
                    {/* <Title>Congratulations!</Title>
                    <Subtitle>You have completed your examination.We will provide your certificate soon.</Subtitle>
                    <Button href='#' >Go to Dashboard</Button> */}
                </Main>   
            </ExmaSpotlight>
        </div> 


    </>
      
  )
}
const ExmaSpotlight= styled.div`
position: relative;
top: 87px; 
text-align: center;
width: 100%;
height: 65vh;
`
const Main=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

/* width: 100%;
height: 70vh; */

`
const TopDiv=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url(${require("../../../Asset/images/Bg1.svg").default})
, url(${require("../../../Asset/images/Bg2.svg").default});
width: 100%;
height: 85vh;
    position: relative;
    border-radius: 8px;
    /* background-position: left , top ; */
    background-repeat: no-repeat ,no-repeat;
    background-size: 100%;  
`

const Logo=styled.div`
width: 10%;
margin: 20px 0;
/* position: absolute; */  
`
const LogoImg=styled.img`
display: block;
width: 100%;
`
const Student=styled.div`
width: 35%  ;
/* margin-top:100px ; */

`
const StudentImg=styled.img`
display: block;
width: 100%;
`
const Title =styled.h3`
color: #5cb856;
letter-spacing: 0.1em;
margin-top: 10px;
`
const Subtitle=styled.p`
max-width: 34%;
color :#919b90;
opacity: 0.7 alt="Image";
margin: 0;
`
const Button=styled(Link)`
display: inline-block;
padding: 15px 30px;
background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
border-radius: 8px;
color: #fff;
font-weight: 500;
font-size: 18px;
margin: 16px 0;
background-size: 200%;
transition: all 0.5s ease 0s;
&:hover{
    cursor: pointer;
    background-position: right center;
    background-position-x: right;
    background-position-y: center;
}
`
