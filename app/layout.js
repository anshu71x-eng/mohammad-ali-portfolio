import './globals.css';

export const metadata = {
  title: 'Mohammad Ali - AI Specialist & Full-Stack Developer',
  description: 'Voice Agents, Web Development, AI Automation. Building intelligent solutions from Kota, Rajasthan.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a2332" />
      </head>
      <body className="bg-[#1a2332] text-white">
        {children}
      </body>
    </html>
  );
}
