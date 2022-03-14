import { h, FunctionComponent } from 'preact';
import { Navbar, BannerCard, SearchBar, MenuCard } from '../components';
import Banner from '../assets/images/banner.jpg';
import Cake from '../assets/images/cake.png';

const Homepage: FunctionComponent = () => {
  return (
    <div class="flex flex-col mx-14">
      <header class="grid grid-cols-3 items-center">
        <p>Favorite</p>
        <div class="text-center">
          <h1 class="font-semibold italic">FamRest</h1>
          <p class="nav-text">Family Cooking Restaurant</p>
        </div>
        <span class="justify-self-end">
          <SearchBar />
        </span>
      </header>

      <span class="h-px w-full bg-gray-200 mt-16 mb-[24px]"></span>
      <Navbar />
      <div class="relative w-full">
        <img
          class="h-[450px] w-full object-cover mt-[24px]"
          src={Banner}
          alt="breakfast"
        />
        <BannerCard />
      </div>

      <section class="grid gap-x-6 gap-y-20 grid-cols-8 my-20">
        <section class="self-center col-span-2 lg:col-span-3">
          <h3 class="font-dancing text-primary">What's new</h3>
          <p class="font-garamond font-medium text-xl mt-2">
            Chocolate Cream donuts with caramel topping
          </p>
          <p class="font-garamond font-medium text-xl mt-2">
            Raspberry pie with vanilla ice cream
          </p>
        </section>
        <section class="col-span-4 lg:col-span-5 flex justify-center items-center">
          <span class="h-full border-[1px] border-primary opacity-70 mr-12"></span>
          <div>
            <h4 class="italic">
              Hello! My name is Carlos. Your new sweet chef!
            </h4>
            <p class="my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              reiciendis ad officiis doloremque quis veniam ab quo odio animi
              eligendi? Facere rerum sapiente quod odio dolor et! Reiciendis,
              laborum quos?
            </p>
            <a href="#" class="nav-text">
              view more
            </a>
          </div>
        </section>
        <img
          class="h-full lg:h-full object-cover col-span-2 lg:col-span-8 lg:justify-self-center"
          src={Cake}
          alt="sweet cake"
        />
      </section>

      <section class="mb-20">
        <h4 class="font-garamond italic">Try our new recipes</h4>
        <div class="grid grid-cols-2 gap-8">
          <MenuCard
            title="Strawberry pie & vanilla milk"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              reiciendis ad officiis doloremque quis veniam ab quo odio animi
              eligendi."
            type="desserts"
            image="https://images.unsplash.com/photo-1593424718424-cf4d83f3def1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
          <MenuCard
            title="Chocolate cheesecake & strawberry juice"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis ad officiis doloremque quis veniam ab quo odio animi
          eligendi."
            type="desserts"
            image="https://images.unsplash.com/photo-1508737804141-4c3b688e2546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
