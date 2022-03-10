import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

const SearchBar: FunctionComponent = () => {
  const [search, setSearch] = useState('');

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };
  return (
    <div class="flex">
      <input
        type="text"
        class="w-[200px] border-b-[1px] border-black outline-none"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <span class="ml-3 bg-primary rounded-full p-2 cursor-pointer">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.0487 12.4629C10.0051 13.2202 8.72134 13.6667 7.33333 13.6667C3.83553 13.6667 1 10.8311 1 7.33333C1 3.83553 3.83553 1 7.33333 1C10.8311 1 13.6667 3.83553 13.6667 7.33333C13.6667 8.72136 13.2201 10.0051 12.4629 11.0487L14.7071 13.2929C15.0976 13.6835 15.0976 14.3166 14.7071 14.7071C14.3166 15.0977 13.6834 15.0977 13.2929 14.7071L11.0487 12.4629ZM3 7.33333C3 4.9401 4.9401 3 7.33333 3C9.72657 3 11.6667 4.9401 11.6667 7.33333C11.6667 8.49298 11.2111 9.54624 10.4693 10.3239C10.4429 10.3454 10.4174 10.3684 10.3929 10.3929C10.3684 10.4175 10.3454 10.443 10.3239 10.4693C9.54621 11.2112 8.49297 11.6667 7.33333 11.6667C4.9401 11.6667 3 9.72657 3 7.33333Z"
            fill="#fff"
          />
        </svg>
      </span>
    </div>
  );
};

export default SearchBar;
