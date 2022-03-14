import { h, FunctionComponent } from 'preact';

interface MenuCardProps {
  title: string;
  description: string;
  type: string;
  image: string;
}

const MenuCard: FunctionComponent<MenuCardProps> = ({
  title,
  description,
  type,
  image,
}) => {
  return (
    <div class="flex flex-col">
      <img src={image} class="my-4 h-[500px] object-cover" alt="our foods" />
      <p class="text-primary font-garamond font-medium uppercase tracking-widest">
        {type}
      </p>
      <h4 class="capitalize">{title}</h4>
      <p class="my-4">{description}</p>
      <hr class="w-full h-1" />
    </div>
  );
};

export default MenuCard;
