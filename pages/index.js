import Contact from '@/components/Contact';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Stack from '@/components/Stack';
import { meta } from '@/data/config';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="p-6 lg:p-20 max-w-4xl m-auto w-full">
        <Hero />
        <div className="p-0 space-y-10">
          <Education />
          <Projects />
          <Stack />
          <Contact />
          <Footer/>
        </div>
      </div>
    </>
  );
}
