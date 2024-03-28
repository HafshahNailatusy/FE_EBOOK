import * as React from "react";

class Book extends React.Component() {
    render(){
  return (
    <div className="book">
    <div className="pt-20 pl-20 bg-stone-300 max-w-[1538px] max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-16 max-md:mt-10">
            <div className="flex flex-col justify-center border border-black border-solid">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/150e6ada345ace70009d9e2fbaf1a31b1fe6434eda6604a45eee434a98e67da6?apiKey=e7967e048c52422bbf3b91c27d720717&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/150e6ada345ace70009d9e2fbaf1a31b1fe6434eda6604a45eee434a98e67da6?apiKey=e7967e048c52422bbf3b91c27d720717&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/150e6ada345ace70009d9e2fbaf1a31b1fe6434eda6604a45eee434a98e67da6?apiKey=e7967e048c52422bbf3b91c27d720717&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/150e6ada345ace70009d9e2fbaf1a31b1fe6434eda6604a45eee434a98e67da6?apiKey=e7967e048c52422bbf3b91c27d720717&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/150e6ada345ace70009d9e2fbaf1a31b1fe6434eda6604a45eee434a98e67da6?apiKey=e7967e048c52422bbf3b91c27d720717&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/150e6ada345ace70009d9e2fbaf1a31b1fe6434eda6604a45eee434a98e67da6?apiKey=e7967e048c52422bbf3b91c27d720717&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/150e6ada345ace70009d9e2fbaf1a31b1fe6434eda6604a45eee434a98e67da6?apiKey=e7967e048c52422bbf3b91c27d720717&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/150e6ada345ace70009d9e2fbaf1a31b1fe6434eda6604a45eee434a98e67da6?apiKey=e7967e048c52422bbf3b91c27d720717&"
                className="w-full aspect-[0.77]"
              />
            </div>
            <div className="flex gap-2 mt-7 font-semibold text-center text-white">
              <div className="self-start px-12 pt-4 pb-2 text-2xl tracking-wide bg-neutral-500 rounded-[30px] max-md:px-5">
                {" "}
                Buy E-book
              </div>
              <div className="justify-center px-7 py-3.5 text-4xl tracking-wider whitespace-nowrap bg-neutral-500 rounded-[30px] max-md:px-5">
                +
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-20 text-stone-600 max-md:mt-10">
            <div className="text-4xl font-semibold tracking-wider leading-6">
              The Mystwick School of Musicraft
            </div>
            <div className="mt-4 text-3xl tracking-wide leading-6">
              Jessica Khoury
            </div>
            <div className="mt-6 text-2xl font-bold tracking-wide leading-6">
              Rp. 106.000
            </div>
            <div className="mt-6 text-lg font-light tracking-wide text-black">
              Amelia Jones always dreamed of attending the Mystwick School of
              Musicraft, where the world’s most promising musicians learn to
              create magic. So when Amelia botches her audition, she thinks her
              dream has met an abrupt and humiliating end—until the school
              agrees to give her a trial period. Amelia is determined to prove
              herself, vowing to do whatever it takes to become the perfect
              musician. Even if it means pretending to be someone she isn’t.
              Meanwhile, a mysterious storm is brewing that no one, not even the
              maestros at Mystwick, is prepared to contain. Can Amelia find the
              courage to be true to herself in time to save her beloved school
              from certain destruction?
            </div>
            <div className="mt-9 text-lg font-light tracking-wide text-black">
              368 pages
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
    }
}

export default Book;
