import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Steps from '@/components/Steps';
import PreRegister from '@/components/PreRegister';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Steps />
      <PreRegister />
    </main>
  );
}
