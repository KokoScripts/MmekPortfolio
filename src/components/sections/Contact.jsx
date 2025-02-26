import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section className="py-20 px-6 bg-[#1a1f2e]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Do you have a minute? Let's Talk.</h2>
          <p className="text-xl text-gray-300 mb-8">
            What do you want us to work on together? I'm at your service.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://x.com/KokoScripts" className="hover:text-blue-400"><Twitter /></a>
            <a href="https://github.com/KokoScripts" className="hover:text-blue-400"><Github /></a>
            <a href="https://www.linkedin.com/in/mmek-abasi-ekon/" className="hover:text-blue-400"><Linkedin /></a>
            <a href="mailto:mmekekon@gmail.com" className="hover:text-blue-400"><Mail /></a>
          </div>
        </div>
      </section>

      <footer className="py-6 px-6 bg-[#1a1f2e]">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 MmekAbasi Ekon. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}