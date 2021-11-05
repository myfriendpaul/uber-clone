import tw from "tailwind-styled-components";

const Search = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
        </FromToIcons>
      </InputContainer>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
  bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
  bg-white px-4
`;

const BackButton = tw.img`
  h-12
`;

const FromToIcons = tw.div`

`;

const InputContainer = tw.div`

`;

const Circle = tw.img`

`;
