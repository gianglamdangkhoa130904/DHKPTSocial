import React from 'react';
import Header from '../components/Header';
import PopularCategories from '../components/PopularCategories';
import PopularProducts from '../components/PopularProducts';
import NewProducts from '../components/NewProducts';
import Advertisement from '../components/Advertisement';

const CustomerHomePage = () => {
  return (
    <div className="overflow-x-hidden ">
      <Header />
      <div className="w-screen">
        <div className="w-full bg-violet-500 h-96 mt-48 mb-9"></div>
      </div>
      <PopularCategories />
      <div className="container mx-auto my-9 flex gap-5 max-md:flex-col">
        <aside className="w-[20%] max-md:ml-0 max-xl:w-full">
          <Advertisement />
        </aside>
        <main className="w-[80%] max-md:ml-0 max-md:w-full ml-11">
          <PopularProducts />
          <NewProducts />
        </main>
      </div>
    </div>
  );
};

export default CustomerHomePage;