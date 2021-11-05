import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import { useEffect } from "react";
import Map from "./components/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Paul Gonzalez</Name>
            <UserImage src="https://imgur.com/6rkgwLn.jpg" />
          </Profile>
        </Header>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col  h-screen
`;

const ActionItems = tw.div`
  flex-1
`;

const Header = tw.div`
  flex justify-between items-center
  
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex 
`;
const Name = tw.div`

`;
const UserImage = tw.img`
  h-28
`;
