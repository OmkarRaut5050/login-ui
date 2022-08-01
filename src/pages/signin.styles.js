import styled from "styled-components";

export const Container = styled.div`
  height: 62%;
  width: 25%;
  position: relative;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 8px;
  background-color: #ffffff;
`;

export const TopCard = styled.div`
  height: 30%;
  width: 80%;
  top: -30px;
  left: 10%;
  border-radius: 10px;
  position: absolute;
  background-color: #e22e6d;
`;

export const Title = styled.div`
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0px;
  margin-top: 16px;
`;

export const IconWrapper = styled.div`
  display: flex;
  margin: 8px 18px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  color: white;
  font-size: 1.2rem;
  margin: 10% 10%;
  transition: 0.5s all ease-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

export const BottomCard = styled.div`
  margin-top: 150px;
`;

export const InputField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    font-size: 15px;
    font-weight: 600;
    margin: 0px 20px;
    margin-bottom: 30px;
    padding: 10px 10px;
    outline: none;
    border: 1px solid #d8dbdf;
    border-radius: 4px;
  }
`;

export const RemembermeContainer = styled.div`
  display: flex;
  margin: 0px 12px;
  align-items: center;
`;

export const SignInButton = styled.div`
  color: white;
  margin: 18px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 35px;
  width: 80%;
  background-color: #e0296a;
  transition: all 0.7s ease-out;

  &:hover {
    box-shadow: rgb(230, 52, 114) 0px 3px 3px;
    background-color: #e43170;
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px auto;
  color: #cdcdd7;
  font-weight: 700;
  span a {
    font-weight: 600;
    text-decoration: none;
    color: #ea6493;

    &:hover {
      text-decoration: underline;
    }
  }
`;
