import React, { useState } from 'react'
import styled from 'styled-components'
import { useEffect } from 'react';  
import { Link } from 'react-router-dom';
import OtherHeader from '../../../include/OtherHeader';


export default function () {
  const [ hour, setHour ] = useState(3);
  const [ minutes, setMinutes ] = useState(0);
  const [seconds, setSeconds ] =  useState(0);

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
const Items=[
  {
    image: require("../../../../Asset/images/Group.svg").default,
    text:"ഇനി സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ തൊട്ടറിയുവാനും"
  },
  {
    image: require("../../../../Asset/images/Group.svg").default,
    text:"ഇനി സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ തൊട്ടറിയുവാനും"
  },
  {
    image: require("../../../../Asset/images/Group.svg").default,
    text:"ഇനി സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ തൊട്ടറിയുവാനും"
  },
  {
    image: require("../../../../Asset/images/Group.svg").default,
    text:"ഇനി സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ തൊട്ടറിയുവാനും"
  },
  {
    image: require("../../../../Asset/images/Group.svg").default,
    text:"ഇനി സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ തൊട്ടറിയുവാനും"
  },
]


let Gallery =()=>{
 return Items.map((item)=>{
    return (
    <>
    <ContentRight>
    <RightPoint>
          <Cricle alt='Image' src={item.image}/>
        </RightPoint>
        <Description>{item.text}</Description>
    </ContentRight>
       
    
    </>)
  })
}

  return (
      <>
      <OtherHeader/>
       <div className='wrapper'>
           <ExmaSpotlight>
            {/* <TopDiv>
                <TopLeft>
                    <TopLogo>
                      <Logo alt='Image' src={require("../../../../Asset/images/LOG.svg").default} />
                    </TopLogo>
                    <TopTitle>Tefun Examination</TopTitle>
                </TopLeft>
                <TopRight>
                  <TopSubtitle>Time Remaining</TopSubtitle> 
                  <Timer>{hour} :  {minutes}  : {seconds}</Timer>                 
                </TopRight>
            </TopDiv> */}
            <BottomDiv>
              <Heading>Examination<Color> Insturaction</Color> </Heading>
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
                        {Gallery()}
                        <StartButton> 
                          <Button to="/ExamQuestionsd/">
                              Start Exam Now 
                          </Button>   
                              <Arrow alt='Image' src={require("../../../../Asset/images/Arrow right.svg").default} /> 
                        </StartButton>
                  </Main>
              </ContentDiv>
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
const TopRight=styled.div`


`
const TopSubtitle=styled.h5`
color: #333333;
margin:0 ;
font-weight:500 ;
`
const Timer=styled.h1`
color: #333333;
margin:0 ;
font-weight:500 ;
`

const BottomDiv=styled.div`
width: 100%;
background-color: #FAFDFB;
height: 77vh;
padding: 2% 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
text-align: center;
border-radius: 8px;
`
const Heading=styled.h2`
color:#38c95f ;
font-weight:500 ;
`
const Color=styled.span`
color:#000 ;
`
const ContentDiv=styled.div`
display: flex;
width: 74%;
justify-content: end;
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
background-color: #50b265;
border-radius: 50%; 
margin-right: 10px;
/* display: flex;
flex-direction: column; */

`
const Span=styled.span`

`
const Start=styled.h4`
position: absolute;
top: 100px;
background-color: #FAFDFB;
z-index: 1;
color: #BFBFBF;
`
const End=styled.h4`
position: absolute;
top: 200px;
z-index: 1;
color: #BFBFBF;
background-color: #FAFDFB;
`

const ContentRight=styled.div`
display: flex;
align-items: unset;
margin-bottom: 30px;  

`
const RightPoint=styled.div`
margin-right: 10px;
width: 20px;

`
const Cricle=styled.img`
width: 100%;
display: block;
`
const Description=styled.span`
`
const Main=styled.div`
display: flex;
flex-direction: column;
`
const StartButton=styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 40%;
height: 9vh;
margin: 0 auto;
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
width: 19px;
`
const Button= styled(Link)`
display: inline-block;
font-weight: 500;
font-size: 20px;
color: #fff;
`