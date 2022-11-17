import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  gap:10px;
  flex-direction: column;
  
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border-radius:5px;
  
  padding: 0px 10px;
  border: 1.5px solid rgb(73 75 218);
  transition: all 200ms ease-in-out;
  font-size: 12px;
  background-color:#050318;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
    
  }

  &:not(:last-of-type) {
    color:#fff;
  }

  &:focus {
    color:#fff;
    outline: none;
    border-bottom: 2px solid rgb(147 11 232);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient( 58deg, rgb(0 4 255) 20%, rgb(169 0 255) 100% );

  &:hover {
    filter: brightness(1.03);
  }
`;
