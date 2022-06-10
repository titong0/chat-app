import React from "react";

const Login = ({ username, setUsername }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setUsername(data.get("username"));
  };

  return (
    <div className="h-screen   ">
      <div className="flex h-full items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 p-4 rounded-sm w-96 text-white "
        >
          <h1 className="text-4xl  my-4 ">Log in</h1>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            className="p-2 rounded-sm text-gray-900"
            type="text"
            required
            tabIndex="1"
            minLength={2}
            placeholder="Your username"
          />
          {username}
          <button className="rounded-md p-2 border-2 bg-cyan-600" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
