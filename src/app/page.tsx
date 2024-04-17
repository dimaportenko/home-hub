const links = [
  {
    name: "Movies",
    url: "/videos/movies",
  },
  {
    name: "Astro",
    url: "/videos/astro",
  },
  {
    name: "Yoga",
    url: "/videos/yoga",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10">
      <div className="flex flex-1 flex-row flex-wrap gap-4 ">
        {links.map((link) => (
          <p key={link.url}>
            <a className="underline" href={link.url}>
              {link.name}
            </a>
          </p>
        ))}
      </div>
    </main>
  );
}
