import { h, FunctionComponent } from 'preact';
import { Navbar, BannerCard, SearchBar } from '../components';
import Banner from '../assets/images/banner.jpg';

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
    </div>
  );
};

export default Homepage;
