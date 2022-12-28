import { useEffect, useState } from 'react';

export default function Footer() {
  const [lastCommitDate, setLastCommitDate] = useState(null);

  useEffect(() => {
    fetch('/api/github')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to retrieve last commit date');
      })
      .then((data) => {
        setLastCommitDate(data.lastPush);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

    return (
        <footer className="flex flex-col items-center justify-center space-y-2">
            <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} - Built with{' '}
                <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                >
                    Next.js
                </a>{' '}
                and{' '}
                <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                >
                    Tailwind CSS
                </a>
            </p>
            <p className="text-sm text-gray-500">
                Last edited:{' '}
                {lastCommitDate ? new Date(lastCommitDate).toLocaleString() : 'Loading...'}
            </p>
        </footer>
    );
}
