import { h, FunctionComponent } from 'preact';

interface MenuCardProps {
  title: string;
  description: string;
  type: string;
  size: 'small' | 'large';
  rate: 1 | 2 | 3 | 4 | 5;
  price: number;
  image: string;
}

const MenuCard: FunctionComponent<MenuCardProps> = ({
  title,
  description,
  type,
  size = 'small',
  rate = 5,
  price,
  image,
}) => {
  const cardWidth = size === 'small' ? 'h-[350px]' : 'h-[600px]';
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

  for (let i = 0; i < rate; i++) {
    stars.push(star);
  }

  return (
    <div class="flex flex-col">
      <img
        src={image}
        class={`${cardWidth} my-4 object-cover`}
        alt="our foods"
      />
      <p class="text-primary font-garamond font-medium uppercase tracking-widest">
        {type}
      </p>
      <h4>{title}</h4>
      {description ? (
        <p class="my-4">{description}</p>
      ) : (
        <div class="mb-1"></div>
      )}
      <hr class="w-full h-1 mb-1" />
      <div class="flex justify-between">
        <div class="flex">
          {stars.map((star, index) => (
            <span class="opacity-80" key={index}>
              {star}
            </span>
          ))}
        </div>
        <div class="flex text-primary font-medium text-base">
          <p class="ml-4 mr-1">$</p>
          <p>{price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
