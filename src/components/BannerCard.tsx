import { h, FunctionComponent } from 'preact';

const BannerCard: FunctionComponent = () => {
  return (
    <nav class="flex flex-col absolute bottom-6 left-6 w-[480px] h-[260px] bg-white p-[40px]">
      <p class="text-primary uppercase tracking-widest">Breakfast</p>
      <h3 class="">Egg Toast & Waffle</h3>
      <p class="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At amet elit
        augue at felis blandit in.
      </p>
      <span class="h-px w-full bg-gray-200 mt-[32px]"></span>
    </nav>
  );
};

export default BannerCard;
