import { Content } from "@next/font/google";
import styled from "styled-components";
import { Screen, ContentContainer, Title, Subtitle, Button } from "./index.js";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const CenterAlign = styled.div`
    text-align: center;
`;

const DownloadButton = styled.a`
  z-index: 1;
  border: 6px solid #44C644;
  padding: 20px 60px;
  border-radius: 18px;
  color: #44C644;
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

const Link = styled.a`
    color: #44c644;
    font-family: ${inter.style.fontFamily};
    font-size: 2vw;
    font-weight: 400;
    transition: 0.2s ease-out;

    &:hover {
        transform: scale(1.06);
        transition: 0.2s ease-out;
    }

    @media (max-width: 768px) {
        font-size: 35px;
    }
`;

export default function Download() {
    return (
        <Screen>
            <ContentContainer>
                <br />
                <br />
                <Title>Sage Reader</Title>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <DownloadButton href="https://sagereader.com/download/Sage-0.1.0.tar.xz">
                    <CenterAlign>
                        Download
                        <br />
                        <span style={{ fontWeight: 300, fontSize: "2.6vw" }}>
                            for Apple Silicon Mac
                        </span>
                    </CenterAlign>
                </DownloadButton>
                <br />
                <br />
                <Link href="mailto:sagereaderapp@gmail.com?subject=Intel%20Support%20Request&body=Please%20add%20support%20for%20Intel%20macs!">
                    or request Intel Mac support
                </Link>
            </ContentContainer>
        </Screen>
    );
}