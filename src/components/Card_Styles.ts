import { css, styled } from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

const Card = styled.article`
  min-height: 350px;
  max-width: 300px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  height: 170px;
  margin-bottom: 20px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Discription = styled.div`
  padding: 0 10px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: #000000;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #abb3ba;
  line-height: 20px;
  max-width: 260px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 10px;
`;

type StyledBtnPropsType = {
	primary?: boolean;
	secondary?: boolean;
 };

const Button = styled.button<StyledBtnPropsType>`
  border: 2px solid #4e71fe;
  min-width: 86px;
  height: 30px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  transition: all 0.2s;
  cursor: pointer;
  font-family: inherit;

  ${(props) =>
    props.primary &&
    css<StyledBtnPropsType>`
      background-color: #4e71fe;
      color: #ffffff;

      &:hover {
        background-color: #ffffff;
        color: #4e71fe;
      }
    `}

  ${(props) =>
    props.secondary &&
    css<StyledBtnPropsType>`
      background-color: #ffffff;
      color: #4e71fe;

      &:hover {
        background-color: #4e71fe;
        color: #ffffff;
      }
    `}
`;


export const S = {
	Wrapper, Card, Image, Discription, Title, Text , ButtonsWrapper, Button 
}