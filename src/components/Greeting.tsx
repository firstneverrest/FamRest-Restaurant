import { h, FunctionComponent } from 'preact';
import Cake from '../assets/images/cake.png';

const Greeting: FunctionComponent = () => {
  return (
    <div class="grid place-items-center">
      <div class="flex my-20 h-[240px] w-[1200px]">
        <section class="flex flex-col justify-center">
          <h4 class="font-dancing text-primary">What's new</h4>
          <p class="font-garamond font-medium text-xl mt-2">
            Chocolate Cream donuts with caramel topping
          </p>
        </section>
        <span class="h-full border-[1px] border-primary opacity-70 mx-16"></span>
        <section class="flex">
          <div class="flex flex-col justify-center mr-16">
            <h3 class="italic">
              Hello! My name is Chitsanupong. Your new sweet chef!
            </h3>
            <p class="my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              reiciendis ad officiis doloremque quis veniam ab quo odio animi
              eligendi? Facere rerum sapiente quod odio dolor et! Reiciendis,
              laborum quos?
            </p>
            <a href="#">view more</a>
          </div>
          <img
            class="h-full w-[240px] object-cover"
            src={Cake}
            alt="sweet cake"
          />
        </section>
      </div>
    </div>
  );
};

export default Greeting;
