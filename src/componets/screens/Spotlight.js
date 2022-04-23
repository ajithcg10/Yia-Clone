import React from 'react'
import styled from 'styled-components'
import Tefun from '../../Asset/images/Tefun.svg'
import Talrop from '../../Asset/images/640.svg'
import Spotmin from '../../Asset/images/spot-min.jpeg'
import Arrowimage from '../../Asset/images/arrow.svg'
import Googleplay from '../../Asset/images/grey-and-play.svg'
import play from '../../Asset/images/white-play-icon-22.jpg'
import Bg from '../../Asset/images/elipse.svg'
import Linesbg from "../../Asset/images/lines-bg.svg"

export default function Spotlight() {
  return (
      <> 
         <SpotlightBox>
             <Left>
                 <LeftLogo>
                     <Image alt='Image' src={Tefun}  />
                 </LeftLogo>
                 <Title>
                 Technology Fundamental Program
                 </Title>
                <Description>
                    കേരളത്തിലെ<Color> 20 ലക്ഷം</Color> സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് സൗജന്യമായി ടെക്ക്നോളജി പഠിക്കാം!
                </Description>
                <Subdescription>
                    ഇത് Industry 4.0 കാലഘട്ടം, ടെക്ക്‌നോളജിയുടെ പുത്തൻ സാധ്യതകൾ ഇനി നമ്മുടെ കുട്ടികൾ അറിയണം. സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ തൊട്ടറിയുവാനും, ടെക്ക്-സാക്ഷരത ഉറപ്പുവരുത്തുന്നതിനുമുള്ള സൗജന്യാവസരം ഒരുക്കുകയാണ് Talrop.
                </Subdescription>
                <Sponsored>
                    <Iconimage alt='Image' src={Talrop}  />
                </Sponsored>
                <Buttonbox>
                    <Joinbutton href='#'>Join for free</Joinbutton>
                    <Enquirebutton href='#'>Register school</Enquirebutton>
                </Buttonbox>
             </Left>
             <Right>
                 <MainBox>
                    <ImageBox>
                        <Spotmini alt='Image' src={Spotmin} />
                    </ImageBox>
                    <Playbutton>
                        <Playicon alt='Image' src={play} />
                    </Playbutton>
                    <Arrowbox>
                        <Icon alt='Image' src={Arrowimage} />
                    </Arrowbox>
                 </MainBox>
                 <PlayBox>
                     <Gplay alt='Image'  src={Googleplay} />
                 </PlayBox>

             </Right>
         </SpotlightBox>
       
      </>
    
  )
}
const SpotlightBox =styled.div`
padding:60px  50px 50px;
display: flex;
background-color: rgb(243, 249, 235);
justify-content: space-between;
/* background-size: 1000px; */
/* align-items: center; */
border-radius:20px;
position: relative;
top: 150px;
background-image: url(${Linesbg});
background-repeat: no-repeat;
background-size: 1000px;
background-position: left 10% top 0px;

&::after{
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    right: -65px;
    bottom: -12%;
    z-index: -1;
    background-image: url(${Bg});
    background-repeat: no-repeat;
    @media all and (max-width:1280px){
        right: -45px;
        bottom: -8%;
    }
    @media all and (max-width:980px){
        display:none ;
    }
}

@media all and (max-width:1080px){
        flex-direction: column;
        align-items: center;

}

@media all and (max-width:640px){
text-align:center ;
}
`
const Left =styled.div`
width: 45%;
@media all and (max-width:1280px){
width: 40%;
}
@media all and (max-width:1080px){
      width  :100% ;
    }
`
const LeftLogo =styled.div`
width: 40%;
@media all and (max-width:640px){
    margin:0 auto ;
    width: 55%;
}
`
const Image = styled.img`
display: block;
width: 100%;
`
const Title = styled.h3`
font-weight: 500;
font-size: 24px;
margin-bottom: 20px;
@media all and (max-width:1280px){
font-size: 22px;
}
@media all and (max-width:640px){
    font-size:18px ;
}
`
const Description=styled.p`
font-size: 25px;
font-weight: 600;
margin: 0;
@media all and (max-width:1280px){
font-size: 23px;
}
@media all and (max-width:640px){
   width:100% ;
font-size:14px ;
}
`
const Color=styled.span`
font-family: 800;
font-size: 25px;
color: #0fa76f;
`
const Subdescription=styled.p`
    font-size: 20px;
    color: rgb(84, 84, 84);
    width: 90%;
    line-height: 1.3em;
    @media all and (max-width:1280px){
        width: 100%;
        font-size: 19px;
    }
    @media all and (max-width:640px){
    font-size:14px ;
}
   
`
const Sponsored =styled.div`
    margin-bottom: 25px;
    width: 80%;
    @media all and (max-width:1080px){
        width: 100%;
    }
`
const Iconimage =styled.img`
width: 100%;
display: block;
`
const Buttonbox=styled.div`
display: flex;
justify-content: space-between;
margin-right: 30px;
align-items: center;
margin-bottom: 30px;
@media all and (max-width:1080px){
        justify-content: center;
        flex-direction: column;
        margin-right: 0;
        
    }
`
const Joinbutton=styled.a`
display: inline-block;
width: 238px;
height: 60px;
margin-right: 30px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
font-weight: 500;
font-size: 18px;
background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
background-size: 200%;
transition: all 0.5s ease 0s;
border-radius: 8px;
@media all and (max-width:1080px){
        margin-right: 0;
        margin-bottom: 15px;
    }
    @media all and (max-width:640px){
    width:175px ;
    height:50px ;
}
@media all and (max-width:420px){
    font-size: 16px;
}

&:hover{
    cursor: pointer;
    background-position: right center;
    background-position-x: right;
    background-position-y: center;
}
`
const Enquirebutton=styled.a`
display: flex;
color: rgb(15, 167, 111);
align-items: center;
font-size: 18px;
justify-content: center;
cursor: pointer;
width: 238px;
height: 60px;
border:2px solid rgb(15, 167, 111);
border-radius:8px ;
background-color: #fff;
font-weight: 500;
@media all and (max-width:640px){
    width:175px ;
    height:50px ;
}
@media all and (max-width:420px){
    font-size: 16px;
}

`
const Right = styled.div`
width: 51%;
position: relative;

@media all and (max-width:1280px){
    width: 55%;
}
@media all and (max-width:1080px){
       width : 70%;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       margin-bottom: 40px;
    }
    @media all and (max-width:980px){
        width:75%;
    }
    @media all and (max-width:768px){
        width:100% ;
    }
    
`
const ImageBox= styled.div`
width: 100%;
transform: rotate(2deg);
border-radius:10px;
overflow: hidden;
position: relative;
margin-bottom: 20px;
`
const Spotmini=styled.img`
display: block;
width: 100%;
`
const Arrowbox=styled.div`
width: 30%;
position: absolute;
bottom: -57px;
left: -93px;
@media all and (max-width:980px){
    bottom: -35px;
    left: -88px;
}
@media all and (max-width:640px){
   bottom: -11px;
   left:-44px ;
}
`
const Icon=styled.img`
display: block;
width: 100%;
`
const PlayBox =styled.div`
position: absolute;
right: 0    ;
width: 30%;
bottom: 30px;
@media all and (max-width:1280px){
    bottom: 0;
}
@media all and (max-width:1080px){
    right: auto;
    width: 25%;
    bottom: -63px;
}
@media all and (max-width:980px){
    width:35%;
}
@media all and (max-width:640px){
    width:50% ;
}
`
const Gplay =styled.img`
width: 100%;
display: block;
`
const MainBox=styled.div`
   position: relative;
`
const Playbutton=styled.div`
width: 10%;
position: absolute;
top: 40%;
right: 39%;
left: auto;
bottom: auto;
fill: #fff;
padding: 15px 15px;
background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
border-radius:50%;
@media all and (max-width:1080px){
        
    }
`

const Playicon=styled.img`
display: block;
width: 100%;

`







