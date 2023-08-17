import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/layout/Layout";
import { SSRProvider } from "@react-aria/ssr";
import { NextUIProvider } from "@nextui-org/react";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";

import { SidebarProvider } from "@/components/contexts/SidebarContext";

import "../styles/globals.css";


const App = ({ Component, pageProps }) => {
    return (
        <NextUIProvider>
            <SidebarProvider>
                <Layout>
                    <Head>
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1"
                        />
                    </Head>
                    <NextNProgress
                        color="#0072F5"
                        startPosition={0.75}
                        stopDelayMs={300}
                        showOnSShallow={true}
                        height={3}
                        options={{
                            showSpinner: false,
                            easing: "ease",
                            speed: 500,
                        }}
                    />
                    <Component {...pageProps} />
                </Layout>
            </SidebarProvider>
        </NextUIProvider>
    );
};

export default App;