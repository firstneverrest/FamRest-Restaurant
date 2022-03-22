import { h, FunctionComponent } from 'preact';
import { Link } from 'preact-router/match';

import { Footer } from '../components';

const About: FunctionComponent = () => {
  return (
    <div class="relative min-h-[100vh] pt-4">
      <div className="mx-14">
        <Link href="/">
          <header class="mb-8">
            <h3 class="font-semibold italic">FamRest</h3>
            <p class="nav-text mb-4">Family Cooking Restaurant</p>
          </header>
        </Link>

        <div class="flex flex-col">
          <h1>About Page</h1>
          <p class="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            assumenda sapiente, nostrum dolores animi quam, nemo ad odio sit
            maiores mollitia rem reprehenderit soluta quae sed blanditiis culpa
            accusantium. Molestiae.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
