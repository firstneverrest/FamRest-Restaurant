import { h, FunctionComponent } from 'preact';
import { Link } from 'preact-router/match';

import { Footer } from '../components';

const NotFound: FunctionComponent = () => {
  return (
    <div class="relative min-h-[100vh] pt-4">
      <Link href="/">
        <header class="ml-8 mb-8">
          <h3 class="font-semibold italic">FamRest</h3>
          <p class="nav-text mb-4">Family Cooking Restaurant</p>
        </header>
      </Link>
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-primary">Not Found</h1>
        <p class="my-4 w-[500px] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          assumenda sapiente, nostrum dolores animi quam, nemo ad odio sit
          maiores.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
