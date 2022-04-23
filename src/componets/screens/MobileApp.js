import React from 'react'
import '../../App.css';
import styled from 'styled-components'
import Linesbg from "../../Asset/images/lines-bg.svg"
function MobileApp() {
  return (
    <Container>
        <BgContainer>
            <LeftBox>
                <Heading>Download Our mobile <br />App To Make IT Easier</Heading>
                <SubHeading>Tefun-ലൂടെ ടെക്ക്‌നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ എളുപ്പമാക്കാൻ yia.ai മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.</SubHeading>
                <DownloadBox>
                    <Item>
                        <Image src={require("../../Asset/images/green-and-play.svg").default} alt="image"/>
                    </Item>
                    <Item>
                        <Image src={require("../../Asset/images/green-and-play.svg").default} alt="image"/>
                    </Item>
                </DownloadBox>
            </LeftBox>
            <RightBox>
                <AppsImg src={require("../../Asset/images/mobile-app.png")} alt="mobile-app"/>
            </RightBox>
        </BgContainer>
    </Container>
  )
}

const Container = styled.div`
    padding: 50px 0;
`;
const BgContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
   background-color: rgb(243, 249, 235);
   padding: 6% 65px;
   border-radius: 25px;
   background-image: url(${Linesbg});
   background-position: left 10% top 0px;
   background-repeat: no-repeat;
   background-size: 700px;
   @media all and (max-width:980px){
       flex-direction:column-reverse ;
       text-align:center ;
   }
   @media all and (max-width:420px){
       padding: 6% 35px;
   }

   
`;
const LeftBox = styled.div`
    width: 45%;
    @media all and (max-width:980px){
        width:100% ;
    }
`;
const Heading = styled.h3`
    font-weight: 500;
    font-size: 34px;
    margin-bottom: 30px;
    @media all and (max-width:980px){
        font-size:30px ;
    }
    @media all and (max-width:640px){
        font-size:22px ;
    }
    @media all and (max-width:420px){
        font-size: 20px;
    }

`;
const SubHeading = styled.h4`
    color: #8b8f87;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 50px;
    @media all and (max-width:980px){
        font-size: 20px;
    }
    @media all and (max-width:420px){
        font-size: 16px;
    }

`;
const DownloadBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width:980px){
        width:60% ;
        margin:0 auto ;
    }
    @media all and (max-width:640px){
        width: 100%;
    }
`;
const Item = styled.div`
    width: 45%;
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;
const RightBox = styled.div`
    width: 55%;
    position: absolute;
    top: -3%;
    right: -3%;
    @media all and (max-width:980px){
        position:unset ;
        width:80%;
    }
    @media all and (max-width:768px){
        width: 90%;
    }
`;

const AppsImg = styled.img`
     display: block;
    width: 100%;
`;


export default MobileApp