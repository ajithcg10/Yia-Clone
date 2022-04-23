import React, { useState } from 'react'
import styled from 'styled-components'
import Alert from '../../../Asset/images/alert.svg'
import VideoPic from '../../../Asset/images/Video.png'
import Speaker from '../../../Asset/images/speaker.svg'
import { Link } from 'react-router-dom'
import OtherHeader from '../../include/OtherHeader'
import ReactPlayer from 'react-player'
export default function VideoPageSpotlight() {
    const  [clicked ,setClicked]=useState(false)
    const [Selectid,setSelctid ]=useState() 
    console.log(clicked);
    const [Items] =useState([
        {
            id:1,
            heading:"Leasson",
            subheads:[
                {
                        Lesson:"What is Technolgy",
                        Duration:"4.6s",   
                },
                {
                    Lesson:"What is Technolgy",
                    Duration:"4.6s",   
            },
            {
                Lesson:"What is Technolgy",
                Duration:"4.6s",   
        },
            ]
        },
        {
            id:2,
            heading:"Leasson",
            subheads:[
                {
                        Lesson:"What is Technolgy",
                        Duration:"4.6s",   
                },
            ]
        },
        {
            id:3,
            heading:"Leasson",
            subheads:[
                {
                        Lesson:"What is Technolgy",
                        Duration:"4.6s",   
                },
            ]
        },
        {
            id:4,
            heading:"Leasson",
            subheads:[
                {
                        Lesson:"What is Technolgy",
                        Duration:"4.6s",   
                },
            ]
        },
        {
            id:5,
            heading:"Leasson",
            subheads:[
                {
                        Lesson:"What is Technolgy",
                        Duration:"4.6s",   
                },
            ]
        },
        {
            id:6,
            heading:"Leasson",
            subheads:[
                {
                        Lesson:"What is Technolgy",
                        Duration:"4.6s",   
                },
            ]
        },
        {
            id:7,
            heading:"Leasson",
            subheads:[
                {
                        Lesson:"What is Technolgy",
                        Duration:"4.6s",   
                },
            ]
        },
        {
            id:8,
            heading:"Leasson",
            subheads:[
                {
                        Lesson:"What is Technolgy",
                        Duration:"4.6s",   
                },
            ]
        },
        {
            id:9,
            heading:"Leasson",
            subheads:[
                {
                        Lesson:"What is Technolgy",
                        Duration:"4.6s",   
                },
            ]
        }
        ,
        {
            id:10,
            heading:"Leasson",
            subheads:[
                {
                        Lesson:"What is Technolgy",
                        Duration:"4.6s",   
                },
            ]
        }
        ,
        {
            id:11,
            heading:"Leasson",
            subheads:[
                {
                        Lesson:"What is Technolgy",
                        Duration:"4.6s",   
                },
            ]
        }
        ,
        {
            id:12,
            heading:"Leasson",
            subheads:[
                {
                        Lesson:"What is Technolgy",
                        Duration:"4.6s",   
                },
            ]
        }

    ]) 
    
    const lessons=()=>{
            return Items.map((item)=>{
                return (
                <RightBox>
                      <RightItem>
                         <MainDiv>
                         <TopDiv>
                <RightTitle>{item.heading}</RightTitle>
                    <DownArro alt='Image' onClick={()=>{
                        setClicked(clicked=> !clicked)
                        setSelctid(item.id)
                        }} src={require("../../../Asset/images/down-arrow.svg").default } />
                </TopDiv>
                        </MainDiv>
                        {
                            item.subheads.map((sub)=>{
                                return <BottomLessons className={Selectid === item.id &&  clicked ? 'active':""}>
                                <Div>
                                    <Content>
                                        <Tick alt='Image' src={require("../../../Asset/images/green-tick.svg").default} />
                                        <Chapter>{sub.Lesson}</Chapter>
                                    </Content>
                                    <Duration>{sub.Duration}</Duration>
                                </Div>
                          </BottomLessons>
                            })
                         
                        }
                          
                      </RightItem>
                  </RightBox>
                
                 ) })}
                
  return (
      <>
      <OtherHeader />
      <Spotlight>
          <Top>
              <AlertImg>
                  <AlertImage src ={Alert} />
                  <Span>Your examination date announced</Span>
              </AlertImg>
              <Description>Your test will be held between 6 Feb 2022 and 20 Feb 2022.</Description>
          </Top>
          <Main>
              <MainLeft>
                  <LeftTop>
                      <ImageContainer>
                          {/* <Video src= {VideoPic} /> */} 
                          <ReactPlayer controls url='https://www.youtube.com/watch?v=t1XCzWlYWeA' width={"100%"} height={"70vh"}  />
                          <VideoControle>
                              {/* <ControlLeft>
                                  <H2>Sound</H2>
                                  <Sound src={Speaker} />
                              </ControlLeft>
                              <ControlRight>
                                  <Item>
                                      <H2>Speed</H2>
                                      <One>1X</One>
                                  </Item>
                                  <Item>
                                      <H2>Quality</H2>
                                      <One>Auto</One>
                                  </Item>
                                  <Item>
                                      <H2>Fullscreen</H2>
                                    <ScreenImg src={require("../../../Asset/images/max.svg").default} />
                                  </Item>
                              </ControlRight> */}
                          </VideoControle>
                          {/* <Box>
                              <Li>
                                  <Backward src={require("../../../Asset/images/backward.svg").default} />
                              </Li>
                              <Li>
                                  <Play src={require("../../../Asset/images/play.svg").default} />
                              </Li>
                              <Li>
                                  <Forward src={require("../../../Asset/images/forward.svg").default} />
                              </Li>
                         </Box>  */}
                         <TextSection>
                          <TitleSection>
                              <Title>
                              Technology Fundamentals
                              </Title>
                              <TitleDescription>Introduction</TitleDescription>
                          </TitleSection>
                          <MarkButton to="/ExamInsturactiond/">Mark as Complete</MarkButton>
                      </TextSection>
                      </ImageContainer>
                  </LeftTop>
                  <LeftBottom>
                      <Advertisement>
                          <Steyp src={require("../../../Asset/images/small.svg").default} />
                      </Advertisement>
                      <Parnter>
                          <Talrop src={require("../../../Asset/images/1080.svg").default} />
                      </Parnter>
                  </LeftBottom>
              </MainLeft>

              <MainRight>
                  {lessons()}
              </MainRight>
          </Main>
      </Spotlight>
      </>
  )
}
const Spotlight= styled.div`
padding: 10px 10px;
position:relative ;
top:90px ;
`
const Top =styled.div`
background-color: rgb(255, 243, 236);
padding:14px;
border-radius: 10px;

`
const AlertImg= styled.div`
display: flex;
align-items: center;
`
const AlertImage=styled.img`
margin-right: 10px;
`
const Span=styled.span`
color:#e4796a;
font-weight: 500;
font-size: 17px;
margin: 0;
`
const Description = styled.p`
margin: 0;
margin-left: 36px;
font-weight:500 
`
const Main=styled.div`
display: flex;
padding-top: 2%;
width: 100%;
`
const MainLeft=styled.div`
width: 85%;
margin-right:10px;
`
const LeftTop=styled.div`
background-color: #f1f1f1;
border-radius: 8px;
padding: 1%;
`
const ImageContainer=styled.div`
position: relative;
width: 95%; 
`
const Video=styled.img`
display: block;
width: 100%;
`
const VideoControle=styled.div`
position: absolute;
top: 0;
display: flex;
justify-content: space-around;
width: 100%;
`
const ControlLeft=styled.div`
display: flex;
width: 8%;
justify-content: space-between;
align-items: center;
`
const H2 =styled.h2`
margin-right: 10px;
font-size: 16px;
color: #fff;
font-weight: 500;   
`
const Sound=styled.img`
width: 30%;
display: block;
transition: 0.7s;
&:hover{
    transform: scale(1.2);
transition: 0.7s;
}
`
const ControlRight=styled.div`
display: flex;
color: #fff;
`
const Item=styled.div`
display: flex;
justify-content: space-around;
margin-right: 10%;
align-items: center ;
`
const One=styled.h3`
padding: 3px  5px;
border: 2px solid #fff;
font-size: 16px;
font-weight:500 ;
transition: 0.5s;
&:hover{
    transform: scale(1.2);
transition: 0.7s;
}
`
const ScreenImg=styled.img`
transition: 0.7s;
&:hover{
    transform: scale(1.2);
transition: 0.7s;
}
`
const Box =styled.ul`
position: absolute;
top: 45%;
left: 20%;
display:flex;
justify-content: space-between;
align-items: center;
width: 45%;
opacity: 0;
transition: 0.9s;
&:hover{
transition: 0.9s;
opacity: 1;
}
`
const Li=styled.li`
display: block;
width: 60px; 
transition: 0.7s;
&:hover{
    transform: scale(1.2);
transition: 0.7s;
}   
`
const Backward=styled.img``
const Play=styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const Forward=styled.img``
const TextSection=styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`
const TitleSection=styled.div``
const Title =styled.p`
margin: 15px 0;
opacity: 0.8;
`
const TitleDescription=styled.h3`
margin: 0;
font-weight:500 ;
`
const MarkButton=styled(Link)`
font-weight: 500;
font-size: 18px;
background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
background-size: 200%;
transition: all 0.5s ease 0s;
border-radius: 8px;
padding: 13px 16px;
color: #fff;

&:hover{
    cursor: pointer;
    background-position: right center;
    background-position-x: right;
    background-position-y: center;
}
`
const LeftBottom=styled.div``
const Advertisement=styled.div``
const Steyp=styled.img`
display: block;
width: 100%;
margin: 30px 0;
`
const Parnter=styled.div``
const Talrop=styled.img`
display: block;
width: 100%;
` 


const MainRight=styled.div`
width: 35%;

`
const RightBox =styled.ul`
margin-top:0 ;
`
const RightItem= styled.li`

`
const TopDiv=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #f1f1f1;
width: 90%;
height: 10vh;
padding:0  4%;
border-radius: 8px;
margin-bottom: 20px;
`
const MainDiv=styled.div`

`

const RightTitle=styled.h2`
    font-size: 22px;
    font-weight: 500;
    max-width: 100%;
    color:#15232E;
margin: 0;
`
const DownArro=styled.img`
display: block;
margin: 0;
width: 7%;
margin-left: 2px;
`
const BottomLessons=styled.div`
display: none;
justify-content: space-between;
&.active{
    display: block;
}
`
const Div=styled.div`
justify-content: space-between;
display: flex;
width: 95%;
padding:3px ;
align-items: center;
border-radius: 8px;
&:hover{
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
    color: #fff;
    opacity: 0.9;
}
`
const Content=styled.div`
display: flex;
`
const Tick=styled.img`
width: 7%; 
margin-right: 10px;
`
const Chapter=styled.h4`
font-weight: 500;
opacity: 0.9;
`
const Duration=styled.h5`
font-weight: 500;
opacity: 0.9;
`
{/* <TopDiv>
                              <RightTitle>Lesson 1</RightTitle>
                              <DownArro onClick={()=>(
                                  setClicked(clicked=> !clicked)
                                  )} src={require("../../../Asset/images/down-arrow.svg").default } />
                          </TopDiv>  */}