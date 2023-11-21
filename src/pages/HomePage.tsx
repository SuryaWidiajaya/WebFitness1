import Hero from '@/components/SectionHome/Hero';
import BlogSection from '@/components/SectionHome/BlogSection';
import ClassesSection from '@/components/SectionHome/ClassesSection';
import ContactSection from '@/components/SectionHome/ContactSection';
import Layout from '@/components/Layout/layout';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <BlogSection />
        <ClassesSection />
        <ContactSection />
      </Layout>
    </>
  );
}
