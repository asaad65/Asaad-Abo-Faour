
import "./globals.css";
import ClientLoader from '@/app/ClientLoader';

import { Montserrat } from "next/font/google";


const montserrat = Montserrat({
  subsets: ['latin'], // أو ['latin', 'arabic'] إذا كنت تدعم العربية
  weight: ['500'],    // يجب أن تكون مصفوفة من القيم النصية
  display: 'swap',    // اختياري لكنه مفيد لتحسين الأداء
});
// ${montserrat.className} 

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
