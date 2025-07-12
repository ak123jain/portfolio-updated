//  import React from 'react';

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black to-zinc-900 text-white flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-lg bg-zinc-950 p-8 rounded-2xl shadow-lg border border-zinc-800">
//         <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>

//         <form className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Name</label>
//             <input
//               type="text"
//               placeholder="Your name"
//               className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Your email"
//               className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Message</label>
//             <textarea
//               rows="4"
//               placeholder="Your message"
//               className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white py-2 px-4 rounded-md font-semibold"
//           >
//             Send Message
//           </button>
//         </form>

//         <div className="mt-6 text-sm text-gray-400">
//           <p>Email: <a href="mailto:aj9882854@gmail.com" className="text-purple-400 hover:underline">aj9882854@gmail.com</a></p>
//           <p>Phone: <a href="tel:+917668597362" className="text-purple-400 hover:underline">+91 7668597362</a></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
 


 import React, { useEffect, useState } from "react";
import vd from "../assets/video.mp4";

const Contact = () => {
  const [size, setSize] = useState({ width: 300, height: 300 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 1000; // Scroll amount to grow fully

      const progress = Math.min(scrollY / maxScroll, 1); // clamp 0-1

      // From 300px to 100vw (or 100% screen width)
      const targetWidth = 300 + progress * (window.innerWidth - 300);
      const targetHeight = 300 + progress * (window.innerHeight - 300);

      setSize({ width: targetWidth, height: targetHeight });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full bg-black">
      {/* Scroll trap area */}
      <section className="h-[250vh] relative">
        {/* Video stays fixed in center */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <video
            src={vd}
            autoPlay
            loop
            muted
            className="rounded-xl shadow-xl transition-all duration-300 ease-out object-cover"
            style={{
              width: `${size.width}px`,
              height: `${size.height}px`,
            }}
          />
        </div>
      </section>

      {/* Content after zoom */}
      <section className="h-screen bg-gray-100 flex items-center justify-center text-3xl font-bold">
        Section 1 - About
      </section>

      <section className="h-screen bg-white flex items-center justify-center text-3xl font-bold">
        Section 2 - Features
      </section>

      <section className="h-screen bg-gray-200 flex items-center justify-center text-3xl font-bold">
        Section 3 - Contact
      </section>
    </main>
  );
};

export default Contact;
