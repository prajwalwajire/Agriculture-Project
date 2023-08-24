import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <meta name='authors' content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "70vh" }}>
                <ToastContainer />
                {children}
            </main>
            <Footer />
        </div>
    )
};
Layout.defaultProps = {
    title: 'Fresh From Farms - Buy Now',
    description: 'fresh and healthy fruits',
    keywords: 'fruits, healthy, fresh, natural, direct from farms, low price',
    author: 'pbl',
};

export default Layout;
