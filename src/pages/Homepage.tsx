import { h, FunctionComponent } from 'preact';
import {
  Navbar,
  BannerCard,
  SearchBar,
  MenuCard,
  Carousel,
} from '../components';
import Banner from '../assets/images/banner.jpg';
import Cake from '../assets/images/cake-strawberry.jpg';

const Homepage: FunctionComponent = () => {
  const images = [
    'https://media.istockphoto.com/photos/piece-of-sachertorte-sachr-cake-on-white-plate-top-view-copy-space-picture-id1296474411?b=1&k=20&m=1296474411&s=170667a&w=0&h=KwzSC3hrY3ZE07GJ3P08E5WZO72eHqqe7XKxUmX8Pk4=',
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1565004602745-718e1b0d44f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80',
  ];
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

      <section class="grid gap-x-6 gap-y-20 grid-cols-12 my-20">
        <section class="self-center col-span-3 lg:col-span-4">
          <h3 class="font-dancing text-primary">What's new</h3>
          <p class="font-garamond font-medium text-xl mt-2">
            Chocolate Cream donuts with caramel topping
          </p>
        </section>
        <section class="col-span-5 lg:col-span-8 flex justify-center items-center">
          <span class="h-full border-[1px] border-primary opacity-70 mr-12"></span>
          <div>
            <h4 class="italic">Hello! Our sweets are well prepared for you.</h4>
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
          class="h-full object-cover col-span-4 lg:col-span-12 lg:justify-self-center"
          src={Cake}
          alt="sweet cake"
        />
      </section>

      <section class="mb-20">
        <h4 class="font-garamond italic text-primary">Try our new recipes</h4>
        <div class="grid grid-cols-2 gap-8">
          <MenuCard
            title="Strawberry pie & vanilla milk"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              reiciendis ad officiis doloremque quis veniam ab quo odio animi
              eligendi."
            type="desserts"
            size="large"
            rate={4}
            price={7.0}
            image="https://images.unsplash.com/photo-1593424718424-cf4d83f3def1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
          <MenuCard
            title="Chocolate cheesecake & strawberry juice"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis ad officiis doloremque quis veniam ab quo odio animi
          eligendi."
            type="desserts"
            size="large"
            rate={5}
            price={6.5}
            image="https://images.unsplash.com/photo-1508737804141-4c3b688e2546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </section>

      <section class="mb-20">
        <h4 class="font-garamond italic text-primary">
          Explore delicious recipes
        </h4>
        <div class="grid grid-cols-4 lg:grid-cols-2 gap-8">
          <MenuCard
            title="Brownie chocolate on top"
            description=""
            type="desserts"
            size="small"
            rate={5}
            price={4.5}
            image="https://media.istockphoto.com/photos/piece-of-sachertorte-sachr-cake-on-white-plate-top-view-copy-space-picture-id1296474411?b=1&k=20&m=1296474411&s=170667a&w=0&h=KwzSC3hrY3ZE07GJ3P08E5WZO72eHqqe7XKxUmX8Pk4="
          />
          <MenuCard
            title="Oreo chocolate ice cream"
            description=""
            type="desserts"
            size="small"
            rate={5}
            price={4.7}
            image="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <MenuCard
            title="Ferrero cupcake"
            description=""
            type="desserts"
            size="small"
            rate={5}
            price={3.65}
            image="https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <MenuCard
            title="Chocolate & vanilla pancake"
            description=""
            type="desserts"
            size="small"
            rate={5}
            price={5.5}
            image="https://images.unsplash.com/photo-1565004602745-718e1b0d44f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </section>

      <section class="mb-20">
        <Carousel images={images} />
      </section>
    </div>
  );
};

export default Homepage;
