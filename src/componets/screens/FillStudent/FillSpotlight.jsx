import React, { useEffect } from "react";
import styled from "styled-components";
import Bg from "../../../Asset/images/top.svg";
import { useState } from "react";
import Course from "../../include/Course";

export default function FillSpotlight() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [selected, setSelected] = useState();
  const [openmodal,setOpenmodal] = useState(false)
  const data = [
    { name: "Jamia" },
    { name: "Jamath college edakkara " },
    { name: "Jamia Mila Manjeri" },
    
  ];

  useEffect(() => {
    setSearchData(
      data.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search]);

  return (
    <FillSpot>
      <Main>
        <Title> 
          <H2>Fill your details </H2>
        </Title>
       
        <InputContainer>
          <LabelInput>Campus Name/Code*</LabelInput> <br></br>
          <Input
            type="text"
            placeholder="Campus Name"
            value={selected}
            onChange={(event) => {
              setSearch(event.target.value)
              setSelected(event.target.value)
              
            }}
          />
          <Value>
           
              {
              searchData.map((item)=>(<H3 onClick={()=>{
                  setSelected(item.name)
                  setSearchData([])
                  
              }}> 
                 <Minicrossbar>
                 </Minicrossbar>
                 {item.name}</H3>))}
              </Value>
          <br></br>
          <LabelInput>Select Class*</LabelInput> <br></br>
          <Select>
            <Option disabled>Slecte Class</Option>
            <Option>10</Option>
            <Option>12th</Option>
            <Option>graduate</Option>
          </Select>
          <br></br>
          <LabelInput>Select Division*</LabelInput> <br></br>
          <Select>
            <Option disabled>select Division</Option>
            <Option>A </Option>
            <Option>B</Option>
            <Option>C</Option>
          </Select>
        </InputContainer>
        <ButtonContainer>
          <BackButton  >Back</BackButton>
          <SubmitButton onClick={()=>{
            setOpenmodal(true)
          }} >Submit</SubmitButton>
        </ButtonContainer>
        <ColorSection></ColorSection>
      </Main>
      {openmodal && <Course />}
    </FillSpot>
  );
}
const FillSpot = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  height: 87vh;
  background-color: rgb(243, 249, 235);
  position: relative;
  top: 80px;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: 100px;
  align-items: center;
`;
const Main = styled.div`
  background-color: #fff;
  width: 30%;
  height: 73vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  padding: 0px 15px;
  border-radius: 14px;
  position: relative;
`;
const Title = styled.div`
  border-bottom: 1px solid #000;
  width: 100%;
  text-align: center;
  margin-bottom: 0px;
`;
const H2 = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;
const InputContainer = styled.div`
  width: 100%;
`;
const LabelInput = styled.label`
  margin: 10px 0;
  display: inline-block;
  font-weight: 400;
  color: #707070;
`;
const Input = styled.input`
  height: 20%;
  width: 98%;
  outline-color: #41ab79;
  border-radius: 5px;
  border: 1px solid;
  position:relative;
`;
const Select = styled.select`
  width: 100%;
  height: 20%;
  outline-color: #41ab79;
  border-radius: 5px;
`;
const Option = styled.option``;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  align-items: center;
  margin-top: 20%;
`;
const BackButton = styled.a`
  display: inline-block;
  padding: 10px 45px;
  margin-right: 15px;
  background-color: #fff;

  border-radius: 12px;
  border: 1px solid #000;
`;
const SubmitButton = styled.a`
  display: inline-block;
  padding: 10px 45px;
  background-color: aquamarine;

  border-radius: 12px;
  background-image: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
  background-size: 200%;
  transition: all 0.5s ease 0s;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-position: right center;
    background-position-x: right;
    background-position-y: center;
  }
`;
const ColorSection = styled.div`
  background-color: antiquewhite;
  width: 100%;
  height: 3vh;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 5px;
  background-image: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
`
const Value =styled.div`
background-color:#fff;
    border-radius: 15px;
    
    box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
    position: absolute;
    width: 92%;
    top: 30%;
`
const H3 =styled.h2`
   border-bottom: 2px solid #e6e6e6;
    padding: 2% 0;
    margin-bottom: 15px;
    position:relative ;
  font-weight:400;
  margin-left:10px ;

    &:hover{
        cursor: pointer;
    }
    &:last-child{
        margin-bottom: 0;
        border: 0;
    }
` 
const Minicrossbar= styled.div`
width:5px ;
height:80% ;
margin-right:10px ;
background-color:#16996b;
margin: 0;
  position: absolute;
  top: 50%;
  left:-10px ;
  border-top-right-radius:6px ;
  border-bottom-right-radius:6px ;
  transform: translateY(-50%);
`