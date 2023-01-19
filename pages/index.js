import styled from "styled-components";
import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Screen = styled.div`
    background: #f5f9f5;
    background-size: stretch;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        align-items: start;
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 100px;
    }
`;

export const Title = styled.div`
  color: #2DB12D;
  font-size: 8vw;
  font-weight: 600;
  font-family: ${inter.style.fontFamily};
  
  @media (max-width: 768px) {
    font-size: 60px;
    text-align: left;
    flex-wrap: wrap;
`;

export const Subtitle = styled.div`
  color: #2DB12D;
  font-size: 4vw;
  font-weight: 500;
  font-family: ${inter.style.fontFamily};
  
  @media (max-width: 768px) {
    font-size: 35px;
    text-align: left;
    flex-wrap: wrap;
`;

export const Button = styled.a`
  z-index: 1;
  background: linear-gradient(to bottom, #44C644, #098809);
  padding: 12px 60px;
  border-radius: 100px;
  color: white;
  font-size: 3vw;
  font-weight: 500;
  font-family: ${inter.style.fontFamily};
  text-decoration: none;
  transition: 0.2s ease-out;

  &:hover {
    transform: scale(1.06);
    transition: 0.2s ease-out;
  }
  
  @media (max-width: 768px) {
    font-size: 35px;
`;

export default function Home() {
    return (
        <>
            <Head>
                <title>Sage Reader</title>
                <meta
                    name="description"
                    content="AI powered document reader."
                />
                <meta name="image" content="https://sagereader.com/cover.png" />
            </Head>
            <Screen>
                <ContentContainer>
                    <Title>Sage</Title>
                    <br />
                    <br />
                    <Subtitle>AI Powered PDF Reader</Subtitle>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button href="https://forms.gle/QdLcaFMHoN6rdSfX8">
                        Request
                    </Button>
                </ContentContainer>
            </Screen>
        </>
    );
}
