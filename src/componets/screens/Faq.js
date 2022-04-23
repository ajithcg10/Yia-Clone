import React, { useState } from 'react'
import '../../App.css';
import styled from 'styled-components'

function Faq() {
const [clicked,setClicked]=useState(false)
const [Select,SetSelect]=useState()
const [Items]=useState([
    {
        id:1,
        text:"എങ്ങനെയാണ് സ്കൂളുകൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുക",
        subhead:[
            {
                answer:"LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്."
            }
        ]
    },
    {
        id:2,
        text:"എങ്ങനെയാണ് സ്കൂളുകൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുക",
        subhead:[
            {
                answer:"LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്."
            }
        ]
    }
    ,
    {
        id:3,
        text:"എങ്ങനെയാണ് സ്കൂളുകൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുക",
        subhead:[
            {
                answer:"LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്."
            }
        ]
    }
    ,
    {
        id:4,
        text:"എങ്ങനെയാണ് സ്കൂളുകൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുക",
        subhead:[
            {
                answer:"LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്."
            }
        ]
    }
])

   const lessons =()=>{
       return Items.map((item)=>{
           return <Item>
           <Top>
           <Text>{item.text}</Text>
           <ArrowBox onClick={()=>{
               setClicked(clicked=> !clicked)
               SetSelect(item.id)
           }}>
               <ArrowImg src={require("../../Asset/images/down-arrow.svg").default } alt="down-arrow"/>
           </ArrowBox>
           </Top>
           {
               item.subhead.map((sub)=>{
                   return <Bottom className={Select===item.id && clicked ? "Active" :"" }>
                   <Answer>{sub.answer}</Answer>
               </Bottom>
               })
           }
       </Item>
       })
   }



  return (
    <Container>
        <TopHeading>Frequently</TopHeading>
        <BottomHeading>Asked Questions</BottomHeading>
        <ListBox>
            {lessons()}
        </ListBox>
    </Container>
  )
}

const Container = styled.div`
    padding: 5% 0;
`;
const TopHeading = styled.h3`
    font-weight: 500;
    font-size: 34px;
    margin-bottom: 10px;
    color: #49a76e;
    text-align: center;
`;
const BottomHeading = styled.h3`
    font-weight: 500;
    font-size: 34px;
    margin-bottom: 60px;
    margin-top: 0;
    text-align: center;
`;
const ListBox = styled.ul`
    width: 70%;
    margin: 0 auto;
    @media all and (max-width:768px){
        width: unset;
    }
`;
const Item = styled.li`
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    border: 1px solid #DCDCDC;
    border-radius: 10px;
    background-color: #f8fbf4;
    &:last-child{
        margin-bottom: 0;
    }
    @media all and (max-width:768px){
        width: unset;
        padding: 5px 11px;
    }
`;
const Text = styled.p`
    color:  #333;
    font-size: 18px;
    font-weight: 500;
    @media all and (max-width:640px){
        font-size: 15px;    
    }
`;
const ArrowBox = styled.div`
    width: 18px;
    @media all and (max-width:768px){
        width:40px;
    }
`;
const ArrowImg = styled.img`
    display: block;
    width: 100%;
`;

const Top= styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
`
const Bottom=styled.div`
display: none;
&.Active{
    display: block;
}
`
 const Answer=styled.p``

export default Faq