import React from 'react'
import styled from 'styled-components'
import TefunImg from '../../Asset/images/Tefun.svg'
// import Model from '../../Asset/images/pic1.jpeg'
import play from '../../Asset/images/white-play-icon-22.jpg'


export default function Tefun() {

    const Items =[
        {
           
            watch:"Watch Story",
            name:"Yasir",
            image:require("../../Asset/images/Yasir-min.jpg"),
            detial:"8th,Jamia Edavana"

        },
        {
           
            watch:"Watch Story",
            name:"Siyad",
            image:require("../../Asset/images/Siyad-min.jpg"),
            detial:"8th,Jamia Edavana"

        },
        {
           
            watch:"Watch Story",
            name:"Swathi Menon",
            image:require("../../Asset/images/three.jpg"),
            detial:"8th,Jamia Edavana"

        },
        {
           
            watch:"Watch Story",
            name:"Adhil",
            image:require("../../Asset/images/Adhil-min.jpg"),
            detial:"8th,Jamia Edavana"

        },
        {
           
            watch:"Watch Story",
            name:"Swathi Menon",
            image:require("../../Asset/images/Yasir-min.jpg"),
            detial:"8th,Jamia Edavana"

        },
        {
           
            watch:"Watch Story",
            name:"Swathi Menon",
            image:require("../../Asset/images/Siyad-min.jpg"),
            detial:"8th,Jamia Edavana"

        },
        {
           
            watch:"Watch Story",
            name:"Swathi Menon",
            image:require("../../Asset/images/three.jpg"),
            detial:"8th,Jamia Edavana"

        },
        {
           
            watch:"Watch Story",
            name:"Swathi Menon",
            image:require("../../Asset/images/Adhil-min.jpg"),
            detial:"8th,Jamia Edavana"

        },
        
    ]


    const Gallery=()=>{
        return Items.map((Item)=>{
            return  <MainDiv>
            <ImgBox>
                <BgBox>
                <Pic alt='Image' src={Item.image} />
                </BgBox>
                 
                <Story className='story'>
                    <Playbutton alt='Image' src={play} />
                    <WatchStory>{Item.watch}</WatchStory>
                </Story>
                <Box className='box'>
                <NameBox>{Item.name}</NameBox>
                <Detials>{Item.detial}</Detials>
                </Box>
        </ImgBox>
        </MainDiv>
        })
    }
  return (
     
     <Tefunsection>
          <Topsection>
              <HeadingImg>
                   <ImageContainer alt='Image' src={TefunImg} />
              </HeadingImg>
              <Title>
              എന്നുപറയുമ്പോൾ
              </Title>
              <Description>
              ടെക്കിസ്‌ ക്ലബ്ബിലൂടെ ടെക്നോളജിയിൽ മാറ്റം കൈവരിച്ച ഞങ്ങളുടെ കുട്ടി എൻജിനേഴ്‌സിന് പറയാനുള്ളത്
              </Description>
          </Topsection>
          <BottomSection>
              {Gallery()}
          </BottomSection>
      </Tefunsection>  
  )
}

const Tefunsection = styled.div`
padding-top: 19%;
@media all and (max-width:1080px){
    padding-top: 29%;
}
@media all and (max-width:641px){
    padding-top:47% ;
}
@media all and (max-width:420px){
    padding-top: 60%;
}


`
const Topsection = styled.div`
text-align: center;
`
const HeadingImg =styled.div`
width: 12%;
margin: 0 auto;
@media all and (max-width:980px){
    width:25% ;
}
@media all and (max-width:641px){
    width:35%;
}
`
const ImageContainer =styled.img`
/* display: block; */
width: 100%;
`
const Title = styled.h3`
font-size: 35px;
font-weight: 600;
@media all and (max-width:980px){
    font-size:28px ;
}
@media all and (max-width:641px){
    font-size:24px ;
}
`
const Description=styled.p`
    max-width: 52%;
    margin: 0 auto;
    color: #686763;
    @media all and (max-width:980px){
        max-width:75% ;
    }
    @media all and (max-width:641px){
        max-width:90% ;
    }
`

const BottomSection = styled.div`
padding:5%;
display: flex;
flex-wrap: wrap;
/* justify-content: space-between; */
@media all and (max-width:1280px){
    justify-content: center;
}
`
const MainDiv = styled.div`
width: 25%;
margin: 0 auto;
position: relative;
@media all and (max-width:1280px){
    width: 33%;
    margin: 0;
}
@media all and (max-width:980px){
    width:45%;
    
}
@media all and (max-width:768px){
width: 50%;

}
@media all and (max-width:640px){
width: 90%;
}
@media all and (max-width:420px){
    width: 100%;
}


&:hover{
    .box{
        bottom:  35%;
        transition: 0.8s;
        cursor: pointer;

    }
    .story{
        opacity: 1;
        transition: 0.8s;
        cursor: pointer;
    }
}  
`
const ImgBox =styled.div`
/* width: 100%; */
position: relative;
margin-right: 20px;
@media all and (max-width:768px){
    margin-right: 10px;
}

`
const BgBox=styled.div`
width: 100%;
/* transition: 1s;
&:hover{
    opacity: 0.5;
    transform: scale(1.1);
    transition: 1s;
} */
overflow: hidden;
border-radius: 15px;
background: #000;
`
const Pic =styled.img`
width: 100%;
display: block;
border-radius: 12px;
transition: 1s;

&:hover{
    opacity: 0.7;
    transform: scale(1.1);
    transition: 1s;
}

`
const TextBox =styled.div` 
position: absolute;
bottom: 25px;

`
const Box =styled.div`
position: absolute;
bottom: 15%;
text-align: center;
left: 0;
right: 0;
color: #fff;
transition: 1s;
/* @media all and (max-width:980px){
    left:25% ;
}
@media all and (max-width:768px){
   
} */
`
const NameBox =styled.h2`
font-size: 24px;
padding: 0;
margin: 0;
font-weight: 500;
`

const Detials =styled.h3`
padding: 0;
margin: 0;
font-size: 16px;
font-weight: 500;
opacity: 0.5;
`
const Story= styled.div`
display: flex;
width: 90%;
/* height: 9vh; */
background-color: #fff;
align-items: center;
justify-content: center;
border-radius: 12px;
position: relative;
bottom: 70px;
left: 0;
right: 0;
margin: 0 auto;
opacity: 0;
transition: 1s;
/* @media all and (max-width:1280px){
    height: 20vh;
}
@media all and (max-width:980px){
    height:12vh;
}
@media all and (max-width:768px){
    height: 14vh;
    bottom: 78px;
    
} */
`
const Playbutton=styled.img`
width: 10%;
`
const WatchStory =styled.h4`
margin-left: 10px;
font-weight: 500;
`



