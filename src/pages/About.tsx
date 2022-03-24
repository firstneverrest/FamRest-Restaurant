import { h, FunctionComponent } from 'preact';
import { Link } from 'preact-router/match';

import { Footer } from '../components';

const About: FunctionComponent = () => {
  return (
    <div class="pt-4">
      <div class="container mb-[100px]">
        <div className="mx-14">
          <Link href="/">
            <header class="mb-8">
              <h3 class="font-semibold italic">FamRest</h3>
              <p class="nav-text mb-4">Family Cooking Restaurant</p>
            </header>
          </Link>

          <div className="grid grid-cols-6 gap-x-8">
            <div class="flex flex-col col-span-4">
              <h1 class="mb-4">About Page</h1>
              <img
                src="https://media.istockphoto.com/photos/happy-young-african-american-woman-preparing-food-in-kitchen-picture-id1358265977?b=1&k=20&m=1358265977&s=170667a&w=0&h=js9mm7lizbkkoh1C4fjVeY-KhhWwvmDpeEMO8GVFlSg="
                alt="cooking"
              />
              <p class="mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur assumenda sapiente, nostrum dolores animi quam, nemo
                ad odio sit maiores mollitia rem reprehenderit soluta quae sed
                blanditiis culpa accusantium. Molestiae.
              </p>
              <h1 class="mt-12">Where I find motivation</h1>
              <p class="mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis debitis mollitia fugiat fugit suscipit. Quo
                consequatur, libero odit officiis cum quidem, deleniti dicta
                dolorem nesciunt amet quis molestias consequuntur incidunt!
              </p>
            </div>
            <div className="col-span-2">
              <h4>Latest Recipes</h4>
              <ul>
                <li>Chocolate chip cake</li>
                <li>Chocolate chip cake</li>
                <li>Chocolate chip cake</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
