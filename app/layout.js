
import "./globals.css";
import ClientLoader from '@/app/ClientLoader';
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({
  subsets: ['latin'], 
  weight: ['500'],   
  display: 'swap',    
});

export const metadata = {
  title: "asaad-abo-faour",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${montserrat.className} antialiased`}
      >
        <ClientLoader>
         {children}
        </ClientLoader>
        
      
      </body>
    </html>
  );
}
