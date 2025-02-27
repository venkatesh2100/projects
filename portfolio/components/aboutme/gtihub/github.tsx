import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubChart = ({ username = "" }) => {
  const today = new Date();
  const lastYear = new Date(today.getFullYear() - 1, 0, 1);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const checkTheme = () => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 shadow-md rounded-2xl border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        GitHub Contribution Chart ({lastYear.getFullYear()} - {today.getFullYear()})
      </h2>
      <GitHubCalendar
        username={username}
        blockSize={12}
        blockMargin={5}
        colorScheme={theme ==='dark'?'dark':'light'}
        fontSize={16}
        transformData={(contributions) =>
          contributions.filter((day) => new Date(day.date) >= lastYear)
        }
      />
    </div>
  );
};

export default GitHubChart;
