import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SignupInput } from "@venkatesh2100/medium-common";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/";

const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  function validateInputs() {
    if (!postInputs.username || !postInputs.password) {
      alert("Username and password are required.");
      return false;
    }
    if (type === "signup" && !postInputs.name) {
      alert("Name is required for signup.");
      return false;
    }
    return true;
  }

  async function sendRequest() {
    if (!validateInputs()) return;

    setIsLoading(true);
    try {
      const response = await api.post(
        `api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt.jwt);
      localStorage.setItem("name", postInputs.name || "User");
      navigate("/blogs");
    } catch (error: any) {
      if (error.response) {
        alert(`Error: ${error.response.data.message || "Request failed"}`);
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        alert("No response from server. Please try again later.");
        console.error("Request error:", error.request);
      } else {
        alert("An unexpected error occurred.");
        console.error("Error:", error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center">
          <div className="text-4xl font-bold text-center">
            {type === "signup" ? "Create an Account" : "Welcome Back Buddy"}
          </div>
          <div className="flex text-gray-400 items-center justify-center">
            <div>
              {type === "signup"
                ? "Already have an account 🤨?"
                : "Don't you have an Account?"}
            </div>
            <Link
              className="underline pl-2"
              to={type === "signup" ? "/signin" : "/signup"}
            >
              {type === "signup" ? "Login" : "Signup"}
            </Link>
          </div>
        </div>
        <div className="pt-5">
          {type === "signup" && (
            <LabelInputs
              title="Name"
              placeholder="Enter your name"
              onChange={(e) =>
                setPostInputs({ ...postInputs, name: e.target.value })
              }
            />
          )}
          <LabelInputs
            title="Email"
            placeholder="Enter your email"
            type="email"
            onChange={(e) =>
              setPostInputs({ ...postInputs, username: e.target.value })
            }
          />
          <LabelInputs
            title="Password"
            placeholder="Enter your password"
            type="password"
            onChange={(e) =>
              setPostInputs({ ...postInputs, password: e.target.value })
            }
          />
          <button
            onClick={sendRequest}
            disabled={isLoading}
            className={`bg-gray-50 border border-gray-300 mt-4 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:text-white dark:focus:ring-black dark:focus:border-black ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Processing..." : type === "signup" ? "Signup" : "Signin"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabelInterface {
  title: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelInputs({
  title,
  placeholder,
  type = "text",
  onChange,
}: LabelInterface) {
  return (
    <div>
      <label
        htmlFor={title.toLowerCase()}
        className="block mb-2 text-md font-semibold text-gray-900"
      >
        {title}
      </label>
      <input
        onChange={onChange}
        type={type}
        id={title.toLowerCase()}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
