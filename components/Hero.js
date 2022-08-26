import Image from 'next/image';
import { hero } from '@/data/config';
import { useTheme } from 'next-themes';

export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mb-20">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-20 h-20 rounded-full relative overflow-hidden">
          <Image
            src="/static/profile.png"
            layout="fill"
            objectFit="contain"
            alt="LeBron"
          />
        </div>
        <div className="flex flex-row">
          <div className="mx-4">
            <Image
              src="/static/icons/sun.svg"
              width={30}
              height={30}
              alt="Toggle theme"
              className="cursor-pointer toggleTheme"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
          </div>
          <div className="mx-4">
            <Image
              src="/static/icons/download.svg"
              width={30}
              height={30}
              alt="Toggle theme"
              className="cursor-pointer"
              onClick={() => console.log('Download resume')}
            />
          </div>
        </div>
      </div>
      <h1 className="mt-5 mb-4">{hero.title}</h1>
      <p className="text-lg">{hero.desc}</p>
    </div>
  );
}
