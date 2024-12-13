import mainImg from "../img/mainImg.jpg";
import sea from "../img/sea.jpg";
import forest from "../img/forest.jpg";
import { S } from "./Card_Styles";

const items = [
  {
    image: mainImg,
    title: "Headline",
    text: "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.",
  },
  {
    image: sea,
    title: "Hellloefr",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis at totam officia vel iste. Sequi cum cupiditate.",
  },
  {
    image: forest,
    title: "SuperBigTitle",
    text: "Lorem ipsum dolor sit, amet dolor sit, amet consectetur adiprem ipsum dolor sit, amet consectetur adip",
  },
  {
    image: mainImg,
    title: "Headline",
    text: "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.",
  },
  {
    image: mainImg,
    title: "Headline",
    text: "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.",
  },
  {
    image: forest,
    title: "SuperBigTitle",
    text: "Lorem ipsum dolor sit, amet dolor sit, amet consectetur adiprem ipsum dolor sit, amet consectetur adip",
  },
  {
    image: sea,
    title: "Hellloefr",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis at totam officia vel iste. Sequi cum cupiditate.",
  },
];

export const Card = () => {
  return (
    <S.Wrapper>
      {items.map((i, index) => {
        return (
          <S.Card key={index}>
            <S.Image src={i.image} />
            <S.Discription>
              <S.Title>{i.title}</S.Title>
              <S.Text>{i.text}</S.Text>
            </S.Discription>
            <S.ButtonsWrapper>
              <S.Button primary>See more</S.Button>
              <S.Button secondary>Save</S.Button>
            </S.ButtonsWrapper>
          </S.Card>
        );
      })}
    </S.Wrapper>
  );
};
