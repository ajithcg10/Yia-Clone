import React from 'react'
import '../../App.css';
import styled from 'styled-components'

function StudentJoin() {
  return (
    <Container>
        <TopTitle>How</TopTitle>
        <BottomTitle>Students Can Join</BottomTitle>
        <MainContainer>
            <LeftBox>
                <Item>
                    <NumberBox>01</NumberBox>
                    <Text>വിദ്യാർത്ഥികൾക്ക് Virtual Schooling-ലൂടെ ഇഷ്ടമുള്ള സമയത്ത് പഠിക്കാൻ സാധിക്കും.</Text>
                </Item>
                <Item>
                    <NumberBox>02</NumberBox>
                    <Text>വിദ്യാർത്ഥികൾക്ക് Virtual Schooling-ലൂടെ ഇഷ്ടമുള്ള സമയത്ത് പഠിക്കാൻ സാധിക്കും.</Text>
                </Item>
                <Item>
                    <NumberBox>03</NumberBox>
                    <Text>വിദ്യാർത്ഥികൾക്ക് Virtual Schooling-ലൂടെ ഇഷ്ടമുള്ള സമയത്ത് പഠിക്കാൻ സാധിക്കും.</Text>
                </Item>
                <Item>
                    <NumberBox>04</NumberBox>
                    <Text>വിദ്യാർത്ഥികൾക്ക് Virtual Schooling-ലൂടെ ഇഷ്ടമുള്ള സമയത്ത് പഠിക്കാൻ സാധിക്കും.</Text>
                </Item>
            </LeftBox>
            <RightBox>
                <JoinImg src={require("../../Asset/images/join-img.png")} alt="Image"/>
            </RightBox>
        </MainContainer>
    </Container>
  )
}

const Container = styled.div`
    padding: 50px 0;
    width: 90%;
    margin: 0 auto;
  
`;
const TopTitle = styled.h2`
    font-weight: 500;
    font-size: 34px;
    margin: 0;
    color: #49a76e;
    @media all and (max-width:980px){
      text-align:center;
      
   }
`;
const BottomTitle = styled.h2`
    font-size: 34px;
    margin-bottom: 60px;
    margin-top: 0;
    font-weight:500 ;
    @media all and (max-width:980px){
      text-align:center;
      
   }
  
`;
const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media all and (max-width:980px){

        flex-direction:column-reverse ;
      
   }
   
`;
const LeftBox = styled.ul`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    &::before{
        content:"";
        position: absolute;
        width: 2px;
        height: 77%;
        border-left: 2px dashed #49a76e ;
        left: -1%;
        top: 0;
        bottom: 0;
        margin: auto 0;
        z-index: 2;
        @media all and (max-width:1280px){
     height:76% ;
      
   }
    @media all and (max-width:1080px){
      height: 80%;
      top: -66px;
   }
    }
    @media all and (max-width:980px){
        width:100% ;
    }
   
`;
const Item = styled.li`
    padding: 17px 30px 22px 49px;
    position: relative;
    background-color: #ebf2fa;
    border-radius: 10px;
    margin-bottom: 20px;
    transition: 1s;
    &:hover{
        background-color: #fff6ed;
        transition: 1s;
        cursor: pointer;
    }
    &:last-child{
        margin-bottom: 0;
    }
    @media all and (max-width:1080px){
        padding: 0 30px 0px 49px;
    }
    @media all and (max-width:980px){
        padding: 11px 30px 11px 49px;
    }
    @media all and (max-width:420px){
        padding: 0px 30px 0px 49px;
    }

`;
const NumberBox = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 3px solid #49a76e;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: -28px;
    color:#49a76e ;
    font-weight: 600;
    z-index: 5;
    background-color: #fff;
`;
const Text = styled.p`
font-size: 16px;
font-weight: 400;
@media all and (max-width:1080px){
    font-size: 15px;
}
@media all and (max-width:640px){
    font-size: 14px;
}
`;
const RightBox = styled.div`
    width: 40%;
    /* position: absolute; */
    
    top: -13%;
    right: 0%;
    @media all and (max-width:980px){
        width:75% ;
        margin-bottom:15px ;
    }
`
const JoinImg = styled.img`
    display: block;
    width: 100%;
`;

export default StudentJoin