import Link from "next/link";

export const Header = () => {
  return (
    <div className="px-10 py-5">
      <Link href="/" title="Home">
        <div className="flex items-end gap-2">
          <HomeIcon />
          <span className="">Home</span>
        </div>
      </Link>
    </div>
  );
};

export const HomeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path
        d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
