"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ResultsPage() {
  const router = useRouter();
  const { username } = router.query;

  const [followers, setFollowers] = useState([]);
  const [unfollowers, setUnfollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      try {A
        const followersResponse = await fetch(
          `https://api.github.com/users/${username}/followers`
        );
        const followersData = await followersResponse.json();
        const followerLogins = followersData.map((follower: { login: string; }) => follower.login);

        const followingResponse = await fetch(
          `https://api.github.com/users/${username}/following`
        );
        const followingData = await followingResponse.json();
        const followingLogins = followingData.map(
          (followingUser: { login: string; }) => followingUser.login
        );

        const unfollowersData = followingData.filter(
          (followingUser: { login: string; }) => !followerLogins.includes(followingUser.login)
        );

        setFollowers(followersData);
        setUnfollowers(unfollowersData);
        setLoading(false);
      } catch (error:any) {
        alert("Error fetching data: " + error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-4 lg:mt-10">
      <div className="w-full lg:w-2/3">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-2">Followers</h2>
          <button
            onClick={() => router.push("/")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Search Another User
          </button>
        </div>
        <ul id="followers-list" className="mt-4">
          {followers.map((follower) => (
            <li key={follower.login}>
              <a
                href={follower.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                {follower.login}
              </a>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Not Following Back</h2>
        <ul id="unfollowers-list" className="mt-4">
          {unfollowers.map((unfollower) => (
            <li key={unfollower.login}>
              <a
                href={unfollower.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                {unfollower.login}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
