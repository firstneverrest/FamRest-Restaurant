import { h, FunctionComponent } from 'preact';

const BannerCard: FunctionComponent = () => {
  const stars = [];
  const star = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7878 3.10215C11.283 2.09877 12.7138 2.09876 13.209 3.10215L15.567 7.87987L20.8395 8.64601C21.9468 8.80691 22.3889 10.1677 21.5877 10.9487L17.7724 14.6676L18.6731 19.9189C18.8622 21.0217 17.7047 21.8627 16.7143 21.342L11.9984 18.8627L7.28252 21.342C6.29213 21.8627 5.13459 21.0217 5.32374 19.9189L6.2244 14.6676L2.40916 10.9487C1.60791 10.1677 2.05005 8.80691 3.15735 8.64601L8.42988 7.87987L10.7878 3.10215Z"
        fill="#E35640"
      />
    </svg>
  );

  for (let i = 0; i < 5; i++) {
    stars.push(star);
  }

  return (
    <nav class="flex flex-col absolute bottom-6 left-6 w-[480px] h-[270px] lg:h-[250px] bg-white p-[36px]">
      <p class="text-primary text-sm uppercase tracking-widest">Breakfast</p>
      <h3 class="">Egg Toast & Waffle</h3>
      <p class="mt-3 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At amet elit
        augue at felis blandit in.
      </p>
      <span class="h-px w-full bg-gray-200 mt-[24px] mb-2"></span>
      <div class="flex">
        {stars.map((star, index) => (
          <span class="opacity-80" key={index}>
            {star}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default BannerCard;
