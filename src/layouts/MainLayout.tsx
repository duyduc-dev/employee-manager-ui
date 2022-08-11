import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export interface PropsMainLayout {
  children: JSX.Element;
}

export default function MainLayout({ children }: PropsMainLayout) {
  return (
    <>
      <Header />
      <div className="mt-5">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col sm:flex-row px-5">
          <Sidebar />
          <div className="flex-1 ml-3">{children}</div>
        </div>
      </div>
    </>
  );
}
