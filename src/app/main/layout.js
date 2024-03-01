"use client";
export default function MainLayout({children}) {
    
    const mainConteinerClass = "self-start m-2 top-2 bg-glass border w-[100%] rounded-3xl transition-all duration-500 border-solid border-glass relative"
  return (
    <div className={mainConteinerClass}>
      {children}
    </div>
  );
}
