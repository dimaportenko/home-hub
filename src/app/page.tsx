export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10">
      <h1 className="text-xl">Home</h1>
      <div className="flex flex-1 flex-row flex-wrap gap-4 ">
        <p>
          <a className="underline" href="/videos/movies">
            Movies
          </a>
        </p>
      </div>
    </main>
  );
}
