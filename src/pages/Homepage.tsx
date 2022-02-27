import { h, FunctionComponent } from 'preact';
import Banner from '../assets/images/banner.jpg';

const Homepage: FunctionComponent = () => {
  return (
    <div class="flex flex-col items-center mx-14">
      <h1 class="font-semibold italic">FamRest</h1>
      <p class="nav-text">Family Cooking Restaurant</p>

      <span class="h-px w-full bg-gray-200 mt-16 mb-[24px]"></span>
      <img
        class="h-[450px] w-full object-cover mt-[24px]"
        src={Banner}
        alt="breakfast"
      />
    </div>
  );
};

export default Homepage;
