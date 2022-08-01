import styled from "styled-components";

export const Container = styled.div`
  height: 30px;
  width: 85%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

export const Logo = styled.div`
  width: 15%;
  padding: 10px;
  span {
    color: white;
    font-size: 15px;
    font-weight: bolder;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Navlinks = styled.div`
  width: 80%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  margin: 0px auto;
  justify-content: center;
`;

export const Link = styled.div`
  color: white;
  font-weight: 700;
  padding: 10px;
  margin: 0px 20px;
  transition: all 0.7s ease-out;

  &:hover {
    color: darkgray;
    cursor: pointer;
  }
`;

export const BuyButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bolder;
  width: 5.5%;
  padding: 5px 10px;
  color: white;
  background-color: #e43270;
  border-radius: 4px;

  &:hover {
    box-shadow: rgba(226, 45, 110) 0px 5px 15px;
    cursor: pointer;
  }
`;
