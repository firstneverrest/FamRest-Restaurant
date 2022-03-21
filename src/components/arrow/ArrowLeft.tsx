import { h, FunctionComponent } from 'preact';

const ArrowLeft: FunctionComponent = (props) => {
  return (
    <button {...props}>
      <span class="prev-arrow">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="#ECECEC" />
          <path
            d="M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.4142 16L18.7071 22.2929C19.0976 22.6834 19.0976 23.3166 18.7071 23.7071C18.3166 24.0976 17.6834 24.0976 17.2929 23.7071L10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z"
            fill="#212121"
          />
        </svg>
      </span>
    </button>
  );
};

export default ArrowLeft;
