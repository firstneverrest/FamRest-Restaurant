import { h, FunctionComponent } from 'preact';
import Cake from '../assets/images/cake.png';

const Greeting: FunctionComponent = () => {
  return (
    <div class="grid gap-x-6 gap-y-20 grid-cols-8 my-20">
      <section class="self-center col-span-2 lg:col-span-3">
        <h4 class="font-dancing text-primary">What's new</h4>
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
          <h4 class="italic">Hello! My name is Carlos. Your new sweet chef!</h4>
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
        class="h-full lg:h-4/6 object-cover col-span-2 lg:col-span-8 lg:justify-self-center"
        src={Cake}
        alt="sweet cake"
      />
    </div>
  );
};

export default Greeting;
