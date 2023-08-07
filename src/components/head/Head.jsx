import React from "react";
import Head from "next/head";

const CustomHead = ({ title }) => {
    return (
        <Head>
            <title>{`Abdulrahim - ${title} | Portfolio`}</title>
            <meta charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta property="og:title" content={title} key={title} />
            <link id = "favicon" rel="icon" href="/images/me.jpeg" type="image/x-icon" />
        </Head>
    );
};

export default CustomHead;
