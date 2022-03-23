import { h, FunctionComponent } from 'preact';

const Footer: FunctionComponent = () => {
  return (
    <footer class="flex flex-col bg-primary-light h-[500px] w-full">
      <div class="flex flex-col justify-center items-center h-5/6">
        <h3 class="font-semibold italic">FamRest</h3>
        <p class="nav-text mb-4">Family Cooking Restaurant</p>
        <p class="text-center w-[400px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
          blanditiis id aliquid quis nobis.
        </p>
      </div>
      <div class="h-1/6 pt-4 text-xs">
        <div class="flex flex-col">
          <hr class="bg-gray-200 w-full h-0.5" />
          <div class="flex justify-between mt-4">
            <p class="ml-16">Privacy Policy</p>
            <p class="mr-16">2022 Copyright. All rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
