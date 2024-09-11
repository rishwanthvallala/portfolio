import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@/components/theme-provider';
import { NavigationBar } from '@/components/nav-bar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/app/globals.css';

const metadata = {
    title: 'Rishwanth Vallala',
    description: 'I plan, design, build, test, and deploy software',
};

export default function Resume() {
    const [iframeWidth, setIframeWidth] = useState(768);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIframeWidth(600);
            } else {
                setIframeWidth(600 );
            }
            setIframeWidth(window.innerWidth - 32);
        };
        console.log('window.innerWidth', window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <Fragment>
                <Head>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                </Head>
                <NavigationBar />
                <main className="container mx-auto">
                    <h1 className="text-4xl font-bold text-center mt-8">
                        Rishwanth Vallala
                    </h1>
                    <p className="text-center text-lg text-muted-foreground">
                        I plan, design, build, test, and deploy software
                    </p>
                    {/* Embed your resume PDF here */}
                    <iframe
                        title="Rishwanth Vallala's Resume"
                        className="mt-8 border-none shadow-lg rounded-lg container mx-auto center"
                        src="/resume.pdf"
                        width="100%"
                        style={{ height: iframeWidth }}
                    ></iframe>
                </main>
                <footer className="container mx-auto py-4">
                    <a
                        href="https://github.com/rishwanthvallala/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className="text-center text-sm text-muted-foreground hover:text-white transition-all">
                            © Designed & Built by Rishwanth Vallala · 2024
                        </p>
                    </a>
                </footer>
                <Analytics />
                <SpeedInsights />
            </Fragment>
        </ThemeProvider>
    );
}
