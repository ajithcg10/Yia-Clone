import React from 'react'
import styled from 'styled-components'
import '../../App.css';

function Footer() {
  return (
        <BgContainer>
            <LogoBox>
                <Link href='#'>
                    <LogoImg alt="Image" src={require("../../Asset/images/logo-grey.svg").default}/>
                </Link>
            </LogoBox>
            <SocialMediaBox>
                <Item >
                    <Link href='https://www.instagram.com/talropworld/'>
                    <Img alt="Image" src={require("../../Asset/images/instagram.svg").default}/>
                    </Link>
                </Item>
                <Item>
                    <Link href='https://www.facebook.com/talropworld/'>
                    <Img alt="Image" src={require("../../Asset/images/facebook.svg").default}/>
                    </Link>
                </Item>
                <Item>
                    <Link href='https://twitter.com/talropworld/'></Link>
                    <Img alt="Image" src={require("../../Asset/images/twitter.svg").default}/>
                </Item>
                <Item>
                    <Link href='https://www.linkedin.com/company/talrop/'>
                    <Img alt="Image" src={require("../../Asset/images/linkedin.svg").default}/>
                    </Link>
                </Item>
                <Item>
                    <Link href='https://www.youtube.com/c/talrop'>
                    <Img alt="Image" src={require("../../Asset/images/youtube.svg").default}/>
                    </Link>
                </Item>
            </SocialMediaBox>
            <ContactBox>
                <Link href='https://api.whatsapp.com/send/?phone=%2B918589998744&text&app_absent=0'>
                     <PhNo>+91 858 99925678</PhNo>
                </Link> 
                <Link href='mailto: yiaai@talrop.com;'>
                     <Mail>yiaai@talrop.com</Mail>
                </Link>
                
            </ContactBox>
            <BottomTextBox>
                <LeftText>&copy; 2022,<Link href='https://talrop.com/'> Talrop Private Limited</Link></LeftText>
                <RightText>Terms Of Service Privacy Policy</RightText>
            </BottomTextBox>
        </BgContainer>
  )
}

const BgContainer = styled.div`
    padding: 60px 0 50px;
    background-color: rgb(30, 30, 30);
    width:100% ;
    /* &.wrapper{
        width: 100%;
    } */
`;
const LogoBox = styled.div`
    width: 10%;
    margin: 0 auto 30px;
    @media all and (max-width:980px){
        width:13%;
    }
    @media all and (max-width:768px){
        width:15%;
    }
    @media all and (max-width:640px){
        width: 20%;
    }
`;
const LogoImg = styled.img`
    display: block;
    width: 100%;
`;
const SocialMediaBox = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 0px;
    padding: 0;
    width: 20%;
    @media all and (max-width:980px){
        width:30%;
    }
    @media all and (max-width:768px){
        width:40% ;
    }
    @media all and (max-width:640px){
        width: 50%;
    }
`;
const Item = styled.li`
    width: 8%;
    &:nth-child(2){
        width: 5%;
    }
    /* &:hover{

    } */
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const ContactBox = styled.div`
    width: 25%;
    margin: 0 auto 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width:980px){
        width:35% ;
    }
    @media all and (max-width:768px){
        width:40% ;
    }
    @media all and (max-width:640px){
        width: 65%; 
    }
`;
const PhNo = styled.h5`
    color: #949494;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 0;
`;
const Mail = styled.h5`
   color: #949494; 
   font-size: 14px;
   margin-bottom: 0;
   font-weight: 400;
`;
const BottomTextBox = styled.ul`
    width: 30%;
    margin: 0 auto ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    @media all and (max-width:1280px){
        width: 38%;
    }
    @media all and (max-width:980px){
        width:50%;
    }
    @media all and (max-width:768px){
        width:60% ;
    }
    @media all and (max-width:640px){
        width: 90%;
    }
    @media all and (max-width:420px){
        width: 100%;
        flex-direction: column;
    }

`;
const LeftText = styled.li`
    color: #949494;
    font-size: 13px;
    font-weight: 400;
    @media all and (max-width:420px){
        margin-bottom: 10px;
    }

`;
const RightText = styled.li`
    color: #949494;
    font-size: 13px;
    font-weight: 400;
`;
const Link=styled.a`
 color: #949494;
`

export default Footer