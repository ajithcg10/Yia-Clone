import React, { useState } from 'react'
import styled from 'styled-components'

function OtherHeader() {
    const [clicke,setClicked]=useState(false)
  return (
    <HeaderContainer className='wrapper'>
            <LeftLogo>
                <Logo src={require("../../Asset/images/logo.svg").default} alt="Logo"/>
            </LeftLogo>
            <RightBox>
                <BellButton>
                    <Bell src={require("../../Asset/images/Layer 2.svg").default} alt="bell"/>
                </BellButton>
                <UserBox>
                    <LogoLetter onClick={()=>{
                        setClicked(true)
                    }} >M</LogoLetter>
                    <User>Mark Anderson</User>
                </UserBox>
            </RightBox>
            <Hamburg className={clicke ? "active" :"" }>
                <TopDIv>
                    <Profile>
                        <Arrow onClick={()=>{
                            setClicked(false)
                        }}>
                            <ArrowImg src={require("../../Asset/images/back.svg").default} />
                        </Arrow>
                        <Title>Profile</Title>
                    </Profile>
                    <LogLetter>M</LogLetter>  
                </TopDIv>
                <BottomDiv>
                    <Name>Mark Anderson</Name>
                    <Number>9074417467</Number>
                    <Box>
                        <List>
                            <School>
                                <SchoolImg src={require("../../Asset/images/school.svg").default} />
                            </School>
                            <Text>
                                <H6>Campus</H6>
                                <H4>Talrop</H4>
                            </Text>
                        </List>
                        <List>
                            <School>
                                <SchoolImg src={require("../../Asset/images/book.svg").default} />
                            </School>
                            <Text>
                                <H6>Class</H6>
                                <H4>10</H4>
                            </Text>
                        </List>
                        <List>
                            <School>
                                <SchoolImg src={require("../../Asset/images/cap.svg").default} />
                            </School>
                            <Text>
                                <H6>Division</H6>
                                <H4>A</H4>
                            </Text>
                        </List>
                    </Box>
                    <Logout>
                        <LogoImg src={require("../../Asset/images/logout.svg").default} />
                        <H3>Logout</H3>
                    </Logout>
                </BottomDiv>
            </Hamburg>
    </HeaderContainer> 
  )
}
const HeaderContainer = styled.div`
    height:80px;
    padding:10px;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position: fixed;
    width: 100%;
    border-bottom: 1px solid #E6E6E6;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(8px);
    z-index:50;
`;
const LeftLogo = styled.div`
    width:100px;
    display:inline-block;
`;
const Logo = styled.img`
    display:block;
    width:100%
`;
const RightBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const BellButton = styled.div`
    width: 30px;
    border-right: 1px solid #000;
    padding-right: 14px;
    margin-right: 15px;
`;
const Bell = styled.img`
    display: block;
    width: 100%;
`;
const UserBox = styled.div`
    display: flex;
    align-items: center;
`;
const LogoLetter = styled.div`
    font-size: 20px;
    font-weight: 500;
    padding: 15px;
    color: #fff;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    border-radius: 50%;
    margin-right: 10px;
`;

const Name = styled.h4`
    font-size: 18px;
    font-weight: 500;
`;

const Hamburg =styled.div`
position: absolute;
right: 0;
top: 0px;
background-color: #fff;
width: 22%;
padding: 20px;
display: none;
&.active{
display: block;
}
`
const TopDIv=styled.div`
display: flex;
flex-direction: column;
background-color: rgb(247, 255, 233);
background-image: url(${require("../../Asset/images/lines-bg.svg").default});
position: relative; 
padding: 17px 13px;
background-size: 90%;
border-radius: 10px;
margin-bottom: 12%;
`
const Profile=styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
margin-bottom: 30px;
`
const Title=styled.h2`
text-align: center;
width: 71%;
font-weight: 500;
font-size: 20px;
    
`
const Arrow=styled.div`
width: 14%;
`
const ArrowImg=styled.img`
display: block;
width: 100%;
`
const BottomDiv=styled.div`
text-align: center;
`
const User=styled.h4`
margin: 0;
`
const Number= styled.h3`
margin: 0;
font-weight: 500;
color: rgb(86, 192, 130);
`
const Box =styled.ul`
display: flex;
flex-direction: column;

`
const List= styled.li`
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 10px;
background: rgb(249, 249, 251);
border: 1px solid rgb(245, 243, 243);
padding: 10px 10px;
border-radius: 8px;
`
const School =styled.div`
margin-right: 10px;
`
const SchoolImg=styled.img`
display: block;
width: 100%;
`
const Text =styled.div``
const H6=styled.h6`
margin: 0;
color: grey;
font-weight: 500;
`
const H4=styled.h4`
margin: 0;

`
const Logout=styled.div`
display: flex;
width: 10%;
`
const LogoImg=styled.img`
display: block;
width: 100%;
margin-right: 10px;
`
const H3=styled.h3`
color: rgb(231, 43, 43);
font-weight: 500;
`
const LogLetter=styled.div`
padding: 15px;
background-color: green;
border-radius: 50%;
width: 24px;
position: absolute;
right: 0;
left: 0;
bottom: -30px;
margin: 0 auto;
text-align: center;
color: #fff;    
`




export default OtherHeader