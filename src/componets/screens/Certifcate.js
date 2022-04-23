import React from 'react'
import Medal from '../../Asset/images/medal+.svg'
import Certifiy from '../../Asset/images/certificate.png'
import Arrow from '../../Asset/images/arrow.svg'
import styled from 'styled-components'

export default function Certifcate(){
    return (
      <Container>
          <Box>
              <MedalBox>
                  <MedalImg alt='Image' src={Medal}/>
              </MedalBox>
              <Heading>Certification</Heading>
              <SubHeading>പ്രോഗ്രാം പൂർത്തിയാക്കുന്ന എല്ലാ വിദ്യാർത്ഥികൾക്കും സ്കൂൾ ലോഗോയോടു കൂടിയ കംപ്ലീഷൻ സർട്ടിഫിക്കറ്റുകൾ.</SubHeading>
              <Certificate>
                  <CertificateImg alt="Image" src={Certifiy} />
              </Certificate>
              <ArrowImgBox>
                  <ArrowImg alt="Image" src={Arrow} />
              </ArrowImgBox>
          </Box>
      </Container>
    )
  }
  
  const Container = styled.div`
      padding: 50px 0;
      @media all and (max-width:980px){
       text-align:center ;
   }
   @media all and (max-width:980px){
       width:100% ;
   }
   
  `;
  const Box = styled.div`
      width: 90%;
      margin: 0 auto;
      background-image: linear-gradient(to right, #5ab757, #31b375, #00ad8d, #05a59d, #359ca4);
      position: relative;
      padding: 8% 50px;
      border-radius: 15px;
      @media all and (max-width:980px){
          width: unset;
      }
  `;
  
  const MedalBox = styled.div`
      width:50px;
      position: absolute;
      top: 0;
      @media all and (max-width:420px){
          width: 40px;
      }

  `;
  const MedalImg = styled.img`
      width: 100%;
      display: block;
  `;
  const Heading = styled.h1`
      font-size: 32px;
      color: #fff;
      font-weight:500;
      max-width: 50%;
      margin-bottom: 10px;
      @media all and (max-width:980px){
     margin:0 auto ;
      margin-bottom:10px ;
      @media all and (max-width:420px){
          font-size: 29px;
      }

   }
  `;
  const SubHeading = styled.p`
      font-size: 16px;
      color: #fff;
      font-weight:300;
      max-width: 45%;
      @media all and (max-width:980px){
       margin: 0 auto ;
       max-width:75% ;
      margin-bottom:10px ;
   }
   @media all and (max-width:641px){
       max-width:100%;
   }
   @media all and (max-width:420px){
       font-size: 15px;
   }
  `;
  const Certificate = styled.div`
      width: 56%;
      position: absolute;
      top: -49px;
      right: 0;
      transform: rotate(4deg);
      @media all and (max-width:980px){
    position:unset;
      margin:0 auto ;
      width:85%;
   }
   @media all and (max-width:641px){
       width:100% ;
   }
  `
  const CertificateImg = styled.img`
  width: 100%;
      display: block;
  `;
  const ArrowImgBox = styled.div`
      position: absolute;
      bottom: -100px;
      right: 48%;
      width: 161px;
      @media all and (max-width:980px){
       display:none;
      
   }
  `;
  const ArrowImg = styled.img`
  width: 100%;
      display: block;
  `;
