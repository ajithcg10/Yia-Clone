import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function(showmodal,setShowmodal) {

  return  ( 
    <div>
      <CourseSpot>
        <MainDIv>
           <TopDiv>
              <LeftDiv>
                    <Student alt="Image" src={require("../../Asset/images/Course.svg").default} />
              </LeftDiv>
              <RightDiv>
                 <Title>Hurray!</Title>
                 <Decription>You have Successfully compeleted the Tefun course.. We will notify your examination date soon </Decription>
                 <DashboardButton to="/VideoPage/" >Go to Dashboard</DashboardButton>
              </RightDiv>
           </TopDiv>
           <BottomDiv>
               <DivImage src={require("../../Asset/images/Crossbar.svg").default} />
           </BottomDiv>
        </MainDIv>
      </CourseSpot>     
    </div>)

}

const CourseSpot =styled.div`
width: 100%;
z-index: 2;
height: 87vh;
top: 0;
left: 0;
position: absolute;
background-color: rgba(f,f,f,0.6);
backdrop-filter: blur(7px);
display: flex;
justify-content: center;
align-items: center;

`
const MainDIv= styled.div`
width: 58%;
height: 59vh;
border-radius: 10px;
display: flex;
background-color: #fff;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
background-image: url(${require("../../Asset/images/Bg1.svg").default}),
url(${require("../../Asset/images/Bg2.svg").default});
background-size: 118%;
background-repeat: no-repeat;
`
const TopDiv=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
position: absolute;
left: -63px;
border-radius: 8px;
`
const LeftDiv=styled.div`
width: 100%;
z-index: 1;
`
const Student= styled.img`
display: block;
width: 100%;  
`
const RightDiv=styled.div`
width: 50%;
text-align: center;
`
const Title=styled.h2``
const Decription=styled.p`
width: 100%;
color: #18484C;
text-align: center;
`
const DashboardButton=styled(Link)`
padding: 12px 14px;
background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
  background-size: 200%;
  transition: all 0.5s ease 0s;
  border-radius: 8px;
  color: #fff;
  display: inline-block;
  &:hover{
      cursor: pointer;
      background-position: right center;
      background-position-x: right;
      background-position-y: center;
  }
`
const BottomDiv=styled.div`
width: 100%;
position: absolute;
bottom: 0;
`
const DivImage=styled.img`
display: block;
width: 100%;
`