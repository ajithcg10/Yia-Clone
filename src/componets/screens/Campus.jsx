import React from 'react'
import '../../App.css';
import styled from 'styled-components'
import jamia from '../../Asset/images/jamia.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Campus() 
{
   

const Items=[
    {
        image:jamia,
        title:"Jamia Nadviyya Arts  Science College",
        subTitle:"Malappuram"
    },
    {
        image:require("../../Asset/images/college1.png"),
        title:"Jamia Nadviyya Arts  Science College",
        subTitle:"Malappuram"
    },
    {
        image:require("../../Asset/images/college2.webp"),
        title:"Jamia Nadviyya Arts  Science College",
        subTitle:"Malappuram"
    },
    {
        image:require("../../Asset/images/college4.png"),
        title:"Jamia Nadviyya Arts  Science College",
        subTitle:"Malappuram"
    },
    {
        image:require("../../Asset/images/college5.png"),
        title:"Jamia Nadviyya Arts  Science College",
        subTitle:"Malappuram"
    },
    {
        image:require("../../Asset/images/college6.webp"),
        title:"Jamia Nadviyya Arts  Science College",
        subTitle:"Malappuram"
    },
    {
        image:require("../../Asset/images/college7.png"),
        title:"Jamia Nadviyya Arts  Science College",
        subTitle:"Malappuram"
    },
    {
        image:require("../../Asset/images/college7.png"),
        title:"Jamia Nadviyya Arts  Science College",
        subTitle:"Malappuram"
    },
    ,
    {
        image:require("../../Asset/images/college2.webp"),
        title:"Jamia Nadviyya Arts  Science College",
        subTitle:"Malappuram"
    },
    {
        image:require("../../Asset/images/college4.png"),
        title:"Jamia Nadviyya Arts  Science College",
        subTitle:"Malappuram"
    },
    {
        image:require("../../Asset/images/college5.png"),
        title:"Jamia Nadviyya Arts  Science College",
        subTitle:"Malappuram"
    },
    {
        image:require("../../Asset/images/college6.webp"),
        title:"Jamia Nadviyya Arts  Science College",
        subTitle:"Malappuram"
    },
    {
        image:jamia,
        title:"Jamia Nadviyya Arts  Science College",
        subTitle:"Malappuram"
    },
    {
        image:require("../../Asset/images/college1.png"),
        title:"Jamia Nadviyya Arts  Science College",
        subTitle:"Malappuram"
    },
]

    const Gallery=()=>{ 
        return Items.map((item)=>{
            
            return <Item>
                        <LogoBox>
                            <Logo alt="Image" src={item.image} />
                        </LogoBox>
                        <Title>{item.title}</Title>
                        <SubTitle>{item.subTitle}</SubTitle> 
                  </Item>
                       
                 
        })
    }
  return (
    <Container>
        <Heading><Assosiate>Assosiated</Assosiate> Campuses</Heading>
        <SubHeading>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dolor mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis  </SubHeading>
        <Carousel>
            <ItemContainerTop>
                {Gallery()}
            </ItemContainerTop>
            <ItemContainerTop>
                {Gallery()}
            </ItemContainerTop>
            <ItemContainerTop>
                {Gallery()}
            </ItemContainerTop>
        </Carousel>
        <BottomText>And <Color>300</Color> more Campuses All Over Kerala</BottomText>
    </Container>
  )
}

const Container = styled.div`
padding: 30px 0;
text-align: center;
   background: #f3f9eb  ;
`;
const Heading = styled.h2`
   
    font-weight: 500;
    font-size: 36px;
    margin-bottom: 10px;
    @media all and (max-width:980px){
        font-size: 30px;
    }
`;
const Assosiate = styled.span`
   color: #49a76e;
  
`;
const SubHeading = styled.h5`
   width: 55%;
   margin: 0 auto;
   color: #656661;
   font-size: 18px;
   font-weight: 500;
   margin-bottom: 40px;
   @media all and (max-width:980px){
       width:75% ;
   }
   @media all and (max-width:768px){
       width:90% ;
   }
   @media all and (max-width:641px){
       width:100%;
       
   }
`;
const ItemContainerTop = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 90%;
   margin: 0 auto;
   flex-wrap: wrap;
   @media all and (max-width:980px){
       justify-content: center;
      
   }
`;
const ItemContainerBottom = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 50px;
  
   
`;
const Item = styled.li`
   width: 14%;
   margin-bottom: 20px;
   @media all and (max-width:980px){
       width:24% ;
   }
   @media all and (max-width:768px){
       width:33% ;
   }
   @media all and (max-width:641px){
       width:50%;
   }
`;
const LogoBox = styled.div`
   width: 50%;
   margin: 0 auto;
`;
const Logo = styled.img`
   width: 100%;
   display: block;
   border-radius: 50%;
`;
const Title = styled.h3`
   font-size: 14px;
   font-weight: 500;
   margin-bottom: 5px;
`;
const SubTitle = styled.h4`
   font-size: 12px;
   font-weight: 500;
   color: #49a76e;
`;
const BottomText = styled.h4`
   font-size: 16px;
   font-weight: 500;
   color: #2d2d2b;
`;
const Color = styled.span`
   color: #49a76e;
   font-weight: 600;
`;



export default Campus