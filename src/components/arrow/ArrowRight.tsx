import { h, FunctionComponent } from 'preact';

interface ArrowRightProps {
  className: string;
  style: any;
  onClick: () => void;
}

const ArrowRight: FunctionComponent<ArrowRightProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <button class={className} style={style} onClick={onClick}>
      <span className="next-arrow">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16"
            cy="16"
            r="16"
            transform="rotate(-180 16 16)"
            fill="#ECECEC"
          />
          <path
            d="M13.2929 23.7071C12.9024 23.3166 12.9024 22.6834 13.2929 22.2929L19.5858 16L13.2929 9.7071C12.9024 9.3166 12.9024 8.6834 13.2929 8.2929C13.6834 7.9024 14.3166 7.9024 14.7071 8.2929L21.7071 15.2929C22.0976 15.6834 22.0976 16.3166 21.7071 16.7071L14.7071 23.7071C14.3166 24.0976 13.6834 24.0976 13.2929 23.7071Z"
            fill="#212121"
          />
        </svg>
      </span>
    </button>
  );
};

export default ArrowRight;
