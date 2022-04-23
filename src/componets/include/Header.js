import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../../Asset/images/logo.svg'
import ham from '../../Asset/images/menu-icon.svg'
import India from '../../Asset/images/india-flag.jpeg'
import Arrowimg from '../../Asset/images/arrow (1).svg'
import bg from "../../Asset/images/decorator.svg"
import Phone from '../../Asset/images/phone.svg'
import Close from '../../Asset/images/close.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  const [clicked,setClicked] = useState(false)
  return (
      
        <Heading>
            <Main>
              <Head>
                  <LeftLogo>
                      <Image src={Logo} />
                  </LeftLogo>
                    <Rigth>
                      <Button href='#'>Join Now</Button>
                    <Hamburger onClick={()=>{setClicked(true)}} >
                        <Hamburgericon src={ham} />
                    </Hamburger>
                  </Rigth>
                </Head>
                <LoginPage className={clicked ? 'active' : ""} >
              <NavLeft>
                <CloseImageContainer onClick={()=>{setClicked(false)}}>
                  <CloseImg src={Close} />
                </CloseImageContainer>
              </NavLeft>
              <NavRight>
                <Title>Login to your account</Title>
                <SubTitle>Enter your registered phone number</SubTitle>
                <Phonenumber>
                    <ImageContainer>
                      <IndiaImage src={India} />
                    </ImageContainer>
                    <Arrow>
                      <Pic src={Arrowimg} />
                    </Arrow>
                    <InputContainer>
                      <InputImg src={Phone} />
                    <Input type="Number"    placeholder="+91  Enter Your Phone Number" />
                    </InputContainer>
                    
                </Phonenumber>
                <NextButton  className='one'  to="/Fillstudent/">Next</NextButton>
                <Subdescription><Color>New to Yiaai? </Color>Create an account</Subdescription>
                <Hr />
                <Description>Terms of service</Description>
              </NavRight>
            </LoginPage>
            </Main>
            {/* <LoginPage>
              <NavLeft></NavLeft>
              <NavRight>
                <Title>Login to your account</Title>
                <SubTitle>Enter your registered phone number</SubTitle>
                <Phonenumber>
                    <ImageContainer>
                      <IndiaImage src={India} />
                    </ImageContainer>
                    <Arrow>
                      <Pic src={Arrowimg} />
                    </Arrow>
                    <Input type="text" placeholder="Enter Your Phone Number" />
                </Phonenumber>
                <Button className='one'>Next</Button>
                <Subdescription>New to Yiaai? Create an account</Subdescription>
                <Hr />
                <Description>Terms of service</Description>
              </NavRight>
            </LoginPage> */}
        </Heading> 
      
    
  )
}
const Heading =styled.div`
/* height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
padding-top:20px;
background-color:transparent; */
position: fixed;
width: 100%;
z-index: 500;
`
 const Main=styled.div`
position: relative;
box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(8px);
 `
 const Head=styled.div`
 padding: 0 10px; 
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
padding-top:17px;
background-color:transparent;
@media all and (max-width:420px){
  padding: 0 0;
}
 `
const LeftLogo =styled.div`
width: 10%;
margin-left: 60px;
@media all and (max-width:768px){
  width: 15%;
}
@media all and (max-width:640px){
  width: 20%;
}
`
const Image =styled.img`
display: block;
width: 100%;
`;
const  Button=styled.a`
display: inline-block;
padding: 15px 30px;
background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
border-radius: 8px;
color: #fff;
font-weight: 500;
font-size: 20px;
background-size: 200%;
transition: all 0.5s ease 0s;
&:hover{
    cursor: pointer;
    background-position: right center;
    background-position-x: right;
    background-position-y: center;
}
@media all and (max-width:980px){
  padding: 11px 30px
}
@media all and (max-width:768px){
  padding: 8px 20px;
}
@media all and (max-width:640px){
  display: none;
}

`
const Rigth =styled.div`
display: flex;
align-items: center;
margin-right: 60px;

`
const Hamburger=styled.div`
margin-left:45px ;
`
const Hamburgericon=styled.img`
display: block;
width: 100%;
`
const LoginPage =styled.div`
position: fixed;
width: 100%;
text-align: center;
z-index: 500;

display: none;
&.active{
display: flex;

}
`
const NavLeft= styled.div`
width: 60%;
background-color: rgba(0, 0, 0, 0.6);
height: 100vh;
position: relative;
top: -117px;
`
const NavRight = styled.div`
width: 40%;
height: 100vh;
position: relative;
top: -117px;
right: 0;
background-color: rgb(255, 255, 255);
background-image: url(${bg});
background-repeat: no-repeat;
display: flex;
flex-direction: column; 
justify-content: center;
padding: 0px 60px;

`
const Title=styled.h1`
color: #000;
text-align: left;
font-weight: 500;
opacity: 0.9;
`
const SubTitle=styled.h3`
color:#000;
text-align: left;
font-weight: 500;
opacity: 0.9;
`
const Phonenumber = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;
`
const ImageContainer =styled.div`
width: 10%;
margin-right: 15px;
display: flex;
align-items: center;
`
const IndiaImage= styled.img`
display: block;
width: 100%;
object-fit: cover;
border-radius: 50%; 
`
const Arrow =styled.div`
transform: rotate(90deg);
margin-right: 10px;
`
const Pic =styled.img``
 const Subdescription=styled.h4`
 color: #5fb952;
 font-weight: 500;
 font-size: 23px;


`
const Color=styled.span`
color: #000;
`
 const Hr =styled.hr`
 width: 70%;
 `
  const Description =styled.p`
  padding: 39px 0 10px;
  margin: 0;
  font-size: 23px;
  font-weight: 500;
  `
const InputContainer=styled.div`
position: relative;
display: flex;
width: 100%;
/* margin-top: 40px; */
align-items: center;
justify-content: center;
border: 2px solid #000;
border-radius: 8px;
padding:0 2% 0;
`
const InputImg=styled.img`
/* position: absolute; */
margin-right: 10px;
`

const Input=styled.input`
width: 95%;
height: 9vh;
font-size: 20px;
font-weight: 500;
color: rgb(0, 0, 0);
border-radius: 8px;
border: none;
outline: none;
Input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
  -webkit-appearance: none;
  margin: 0;
}
&::after{
  content: "";
  background-image: url(${Phone});
  background-size: 100%;
}
`

const  NextButton =styled(Link)`
display: inline-block;
width: 100%;
padding: 10px 0;
background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
margin: 0 auto;
margin-top: 50px;
display: flex;
align-items: center;
justify-content: center;
background-size: 200%;
transition: all 0.5s ease 0s;
border-radius: 12px;
color: #fff;
font-size: 25px;
font-weight: 500;
&:hover{
    cursor: pointer;
    background-position: right center;
    background-position-x: right;
    background-position-y: center;
}
`

const CloseImageContainer=styled.div`
position: absolute;
right: 5px;
top: 5px;
padding: 5px;
width: 2%;
background-color: #fff; 
border-radius: 50%;
`
const CloseImg=styled.img`
display: block;
width: 100%;
`


 
