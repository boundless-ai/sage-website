import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="description"
                    content="AI powered document reader."
                />
                <meta name="image" content="https://sagereader.com/cover.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
