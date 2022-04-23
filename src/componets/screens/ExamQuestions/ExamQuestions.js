import React from 'react'
import styled from 'styled-components';
import { useState,useEffect } from 'react';
// import { Link } from 'react-router-dom';
import OtherHeader from '../../include/OtherHeader';
import {
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';

export default function()   {

  const navigate = useNavigate();
    const [ hour, setHour ] = useState(3);
    const [ minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(0);
    const [selectid,setSelectid]=useState();
  const [clicked,setClicked]=useState(false)
  const [nextquestion,setNextquestion]=useState(0)


  
    useEffect(()=>{
      const myInterval = setInterval(() => {
          if (seconds > 0) {
              setSeconds(seconds - 1);
          }
          if (seconds === 0) {
              if (minutes > 0) {
                  setMinutes(minutes-1)
                  setSeconds(59);
              } if (minutes === 0)  {
                  if(hour > 0){
                      setHour(hour - 1)
                      setMinutes(59);
                      setSeconds(59);
                  }
                  if(hour === 0){
                      clearInterval(myInterval);
                  }
              }
          }
      }, 1000)
  
      return ()=> { 
          clearInterval(myInterval);  
      };
  });
  const [Items]=useState([
    { 
      id:1,
      heading:"In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
      subhead: [{
        id:1,
        text: "A",
        question:"1850s"},
        {
        id:2,
        text: "B",
        question:"1880s"
        },
        { id:3,
          text: "C",
          question:" 1859s"},
        {
        id:4,
        text: "D",
        question:"1990s"
      },
      ]
    },
    { 
      id:2,
      heading:"	What is part of a database that holds only one type of information?",
      subhead: [{
        id:1,
        text: "A",
        question:"	Report"},
        {
        id:2,
        text: "B",
        question:"Field"
        },
        { id:3,
          text: "C",
          question:"Record"},
        {
        id:4,
        text: "D",
        question:"File"
      },
      ]
    },
    { 
      id:3,
      heading:"	'OS' computer abbreviation usually means ?",
      subhead: [{
        id:1,
        text: "A",
        question:"	Order of Significance"},
        {
        id:2,
        text: "B",
        question:"Open Software"
        },
        { id:3,
          text: "C",
          question:"Operating System"},
        {
        id:4,
        text: "D",
        question:"Optical Sensor"
      },
      ]
    },
    { 
      id:3,
      heading:".MOV' extension refers usually to what kind of file?",
      subhead: [{
        id:1,
        text: "A",
        question:"Image file"},
        {
        id:2,
        text: "B",
        question:"Animation/movie file"
        },
        { id:3,
          text: "C",
          question:"Audio file"},
        {
        id:4,
        text: "D",
        question:"MS Office document"
      },
      ]
    },
  ])

  const Next =()=>{
    
    const change = nextquestion + 1;
    if(change < Items.length){
        setNextquestion(change)
    }else{
      navigate( '/Examination/')
    }
  }
  
  // let Gallery =()=>{
  //  return Items.map((item)=>{
  //     return (
  //     <>
  //       <ContentTitle>{item.heading}</ContentTitle>
  //       <ContentBox>
  //         { 
  //            item.subhead.map((sub)=>{
  //              return (
  //              <List onClick={()=>{
  //                setClicked(clicked=> !clicked)
  //                setSelectid(sub.id)
  //              }} className={selectid===sub.id && clicked ? "active" : ""} >
  //              <Text>{sub.text}</Text>
  //              <Question>{sub.question}</Question>
  //          </List>)
  //            })
             
  //         }

          
  //       </ContentBox>  
  //     </>)
  //   })
  // }
  
    return (
        <>
        <OtherHeader/>
         <div className='wrapper'>
             <ExmaSpotlight>
              <TopDiv>
                  <TopLeft>
                      <TopLogo>
                        <Logo alt='Image' src={require("../../../Asset/images/LOG.svg").default} />
                      </TopLogo>
                      <TopTitle>Tefun Examination</TopTitle>
                  </TopLeft>
                  <TopRight>
                    <TopSubtitle>Time Remaining</TopSubtitle> 
                    <Timer>{hour} :  {minutes}  : {seconds}</Timer>                 
                  </TopRight>
              </TopDiv>
              <BottomDiv>
                <ContentDiv>
                    <ContentLeft>
                      <Box>
                          <Div>
                              <CriclePoint>
                              </CriclePoint>
                              <Span>Start</Span>
                          </Div> 
                          <Start>01</Start>
                          <End>02</End>
                      </Box>
                    </ContentLeft>
                    <Main> 
                       <ContentTitle>{Items[nextquestion].heading}</ContentTitle>
                       <ContentBox>
                            {Items[nextquestion].subhead.map((sub)=>{
                               return  <List onClick={()=>{
                                 const id = sub.id
                                 setSelectid(id)
                               }} className={selectid===sub.id ? "active" : "" } >
                                 <Text>{sub.text}</Text>
                               <Question>{sub.question}</Question>
                               </List>
                            })}           
                       </ContentBox>
                    </Main>
                </ContentDiv>
                <ButtonContainer>
                  <StartButton> 
                      <Button onClick={Next}>
                          Next <Arrow alt='Image' src={require("../../../Asset/images/Arrow right.svg").default} /> 
                      </Button> 
                          
                          
                    </StartButton>
                </ButtonContainer>
                
              </BottomDiv>
             </ExmaSpotlight>
          </div>
        </>
     
    )
  }
  const ExmaSpotlight=styled.div`
  position: relative;
  top: 90px;  
  `
  const TopDiv=styled.div`
  /* width: 100%; */
  display: flex;
  background-color: #FFF6F9;
  padding: 0px 30px;
  align-items: center;
  justify-content: space-between;
  height: 11vh;
  margin-bottom: 15px;
  border-radius: 8px;
  `
  const TopLeft=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  
  `
  const TopLogo=styled.div`
  margin-right: 15px; 
  padding: 15px;
  background-color: #D2814B;
  border-radius: 50%;
  `
  const Logo=styled.img`
  display: block;
  width: 100%;
  `
  const TopTitle=styled.h3`
  color: #373737;
  font-weight:500 ;
  `
  const TopRight=styled.div``
  const TopSubtitle=styled.h5`
  color: #333333;
  font-weight:500 ;
  margin:0 ;
  `
  const Timer=styled.h1`
  color: #333333;
  margin:0 ;
  font-weight:500 ;
  `
  
  const BottomDiv=styled.div`
  width: 100%;
  background-color: #FAFDFB;
  height: 71vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  border-radius: 8px;
  `
  const Heading=styled.h2``
  const Color=styled.span`
  
  `
  const ContentDiv=styled.div`
  display: flex;
  width: 74%;
  justify-content: end;
  align-items: center;
  `
  const ContentLeft=styled.div`
  /* display: flex; */
  position: absolute;
  left: 10%;
  /* flex-direction: column;
  justify-content: baseline;
  align-items: baseline; */
  /* border-left: 2px dashed #000; */
  `
  const Box=styled.div`
  position: relative;
  height: 200px;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;  
  &::after{
      content: "";
      border-left: 2px dashed #50b265 ;
     position: absolute;
     height: 200px;
      top: 23px;
      left: 9px;
     
  }
  `
  const Div=styled.div`
  display: flex;
  position: absolute;
  top: 0;
  `
  const CriclePoint=styled.div`
  padding: 10px;
  background-color: #BFBFBF;
  border-radius: 50%; 
  margin-right: 10px;
  /* display: flex;
  flex-direction: column; */
  
  `
  const Span=styled.span`
   color: #BFBFBF;
  `
  const Start=styled.h4`
  position: absolute;
  top: 100px;
  background-color: #fafdfb;
    z-index: 1;
    color: #50b265;
    font-size: 24px
  `
  const End=styled.h4`
  position: absolute;
  top: 200px;
  z-index: 1;
  color: #BFBFBF;
  background-color: #FAFDFB;
  `
  const StartButton=styled.div`
  color: #fff;
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
  const Arrow=styled.img`
margin-left: 10px;
  width: 15px;
  `
  const Button= styled.a`
  display: inline-block;
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  padding: 10px 60px;
  `

  const Main=styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: baseline;
  align-items: baseline;
  `
  const ContentTitle=styled.p`
  width:100%;
  font-weight: 300;
 `
  const ContentBox=styled.ul`
  padding: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  `
  const List =styled.li`
  display: flex;
  height: 9vh;
  width: 100%;
  background-color: #E8E8E8;
 padding-left: 19px;
 margin-bottom: 10px;
 border-radius: 8px; 
 cursor: pointer;
 &.active{
   border:1px solid #8dc23e; 
   cursor: pointer;
 } 
  `
  const Text=styled.h4`
    margin-right: 10px;
    width: 5%;
    background-color: #fff;
    height: 34%;
    font-weight:500 ;
  `
  const Question=styled.h4`
  font-weight: 500;
  `
  const ButtonContainer=styled.div`
  width: 78%;
  display: flex;
  justify-content: flex-end;
  `
