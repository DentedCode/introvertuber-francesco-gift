import Header from './_partials/Header'
import Footer from './_partials/Footer'
import Head from 'next/head'

const MainLayout = ({ displayHeroSection, children }) => {
    return (
        <div>
            <Head>
                <title>Welcome to Francesco home!</title>
                <link rel="icon" href="/images/frencesco.svg" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                    integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
                    crossorigin="anonymous"
                />
            </Head>

            <Header />

            <main>{children}</main>

            <Footer />
        </div>
    )
}

export default MainLayout
