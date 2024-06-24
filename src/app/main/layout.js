"use client";
export default function MainLayout({children}) {
    
    const mainConteinerClass = "self-start h-[85.5%] p-3 top-1 bg-glass border w-[100%] rounded-3xl transition-all duration-500 border-solid border-glass relative"
  return (
    <div className={mainConteinerClass}>
      {children}
    </div>
  );
}
