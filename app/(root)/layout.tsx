import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
<<<<<<< HEAD
    <main className='root'>
      {/* Sidebar */}
      {/* MobileNav */}
        <div className="root-container">
            <div className="wrapper">
                {children}
            </div>
        </div>
        </main>
  )
}
=======
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};
>>>>>>> fca5274a9f91f7750ca8e7719750bef972d145d8

export default Layout;
