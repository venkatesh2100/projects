// "use client";

// import { useState } from "react";
// import { useRouter } from "next/router";

// export default function MainPage() {
//   const [username, setUsername] = useState("");
//   const router = useRouter();

//   const onClickHandler = async () => {
//     if (!username) {
//       alert("Please enter a GitHub username");
//       return;
//     }

//     // Navigate to results page with username in query params
//     router.push(`/results?username}`);
//   };

//   return (
//     <div className="flex flex-col items-center p-4 lg:mt-10">
//       <div className="w-full lg:w-2/3">
//         <div className="text-center font-bold text-2xl pb-6 lg:text-6xl">
//           GitHub Follower Analyzer
//         </div>
//         <div className="flex flex-col items-center border-2 border-green-500 rounded-md p-2 lg:flex-row">
//           <input
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full text-base px-3 py-2 mb-2 lg:mb-0 lg:mr-2 lg:flex-grow focus:outline-none rounded-md"
//             id="username"
//             type="text"
//             placeholder="Enter username"
//           />
//           <button
//             onClick={onClickHandler}
//             className="w-full bg-green-200 hover:bg-green-400 text-lg px-4 py-2 rounded-md lg:w-auto"
//             id="search-btn"
//           >
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";


import { useState } from "react";

export default function Mainbody() {
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState([]);
  const [unfollowers, setUnfollowers] = useState([]);
  const [activeSection, setActiveSection] = useState("followers");

  async function onClickHandler() {
    if (!username) {
      alert("Please enter a GitHub username");
      return;
    }

    try {
      // Fetch followers
      const followersResponse = await fetch(
        `https://api.github.com/users/${username}/followers`
      );
      if (!followersResponse.ok) {
        throw new Error("GitHub user not found");
      }
      const followersData = await followersResponse.json();
      const followerLogins = followersData.map((follower: { login: string; }) => follower.login);

      // Fetch following
      const followingResponse = await fetch(
        `https://api.github.com/users/${username}/following`
      );
      if (!followingResponse.ok) {
        throw new Error("GitHub user not found");
      }
      const followingData = await followingResponse.json();
      const followingLogins = followingData.map(
        (followingUser: { login: string; }) => followingUser.login
      );

      // Determine unfollowers
      const unfollowersData = followingData.filter(
        (followingUser: { login: string; }) => !followerLogins.includes(followingUser.login)
      );

      // Update state with followers and unfollowers
      setFollowers(followersData);
      setUnfollowers(unfollowersData);

      // Show followers section by default
      setActiveSection("followers");
    } catch (error:any) {
      alert("Error fetching data: " + error.message);
    }
  }

  return (
    <div className="flex flex-col items-center p-4 lg:mt-10">
      <div className="w-full lg:w-2/3">
        <div className="text-center font-bold text-2xl pb-6 lg:text-6xl">
          GitHub Follower Analyzer
        </div>
        <div className="flex flex-col items-center border-2 border-green-500 rounded-md p-2 lg:flex-row">
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full text-base px-3 py-2 mb-2 lg:mb-0 lg:mr-2 lg:flex-grow focus:outline-none rounded-md"
            id="username"
            type="text"
            placeholder="Enter username"
          />
          <button
            onClick={onClickHandler}
            className="w-full bg-green-200 hover:bg-green-400 text-lg px-4 py-2 rounded-md lg:w-auto"
            id="search-btn"
          >
            Search
          </button>
        </div>

        <div className="flex flex-col items-center mt-4 space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4">
          <button
            className={`w-full border-2 border-green-500 rounded-md px-5 py-2 hover:bg-green-300 lg:w-auto ${
              activeSection === "followers" ? "active" : ""
            }`}
            onClick={() => setActiveSection("followers")}
            id="show-followers-btn"
          >
            Following
          </button>
          <button
            className={`w-full border-2 border-green-500 rounded-md px-5 py-2 hover:bg-green-300 lg:w-auto ${
              activeSection === "unfollowers" ? "active" : ""
            }`}
            onClick={() => setActiveSection("unfollowers")}
            id="show-unfollowers-btn"
          >
            Not Following
          </button>
        </div>

        {/* Followers Section */}
        {activeSection === "followers" && (
          <div id="followers-section" className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Followers</h2>
            <ul id="followers-list">
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
          </div>
        )}

        {/* Unfollowers Section */}
        {activeSection === "unfollowers" && (
          <div id="unfollowers-section" className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Not Following Back</h2>
            <ul id="unfollowers-list">
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
        )}
      </div>
    </div>
  );
}
