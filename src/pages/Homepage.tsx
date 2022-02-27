import { h, FunctionComponent } from 'preact';

const Homepage: FunctionComponent = () => {
  return (
    <div class="flex flex-col items-center justify-center">
      <h1 class="font-semibold italic">FamRest</h1>
      <p class="nav-text">Family Cooking Restaurant</p>
    </div>
  );
};

export default Homepage;
