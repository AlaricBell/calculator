import type { NextPage } from 'next'
import Head from 'next/head'

const Layout: NextPage<{children: any}> = ({children}) => {
    return (
        <div className="layout">
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Hi! this is my personal portfolio page. If you like what you see feel free to contact me." />
                <title>Calculator</title>
            </Head>
            {/* Navbar */}
            {children}
            {/* Footer */}
        </div>
    )
}

export default Layout;