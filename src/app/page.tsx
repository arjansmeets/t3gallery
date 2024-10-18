import Link from "next/link";
import { mock } from "node:test";

const mockUrls = [
"https://utfs.io/f/qDr0iesgqzQeFKxAl2y5R0Edx7fMIg2OPmbuCzaYjiWHhyGA",
"https://utfs.io/f/qDr0iesgqzQeFB3nVAy5R0Edx7fMIg2OPmbuCzaYjiWHhyGA"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">  
            <img src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))
        }
      </div>
      Hello (gallery in progress)
    </main>
  );
}
