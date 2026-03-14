import { useRef, useState } from "react";

interface GithubUser {
  username: string;
  followers: string;
  avatar_url: string;
}
function App() {
  const github_id = useRef("");
  const [data, setData] = useState<GithubUser | null>(null);

  const getData = async () => {
    const res = await fetch(`https://be-01.onrender.com/github/${github_id.current}`);
    const data = await res.json();
    setData(data)
    console.log(data);
  };

  return (
    <div>
      <input onChange={(e) => (github_id.current = e.target.value)} type="text" placeholder="Get github user data"></input>
      <button onClick={getData}>Search</button>

      {data && (
        <div style={{ color: "white" }}>
          <h1>Name : {data.username}</h1>
          <p> followers: {data.followers}</p>
          <img src={data.avatar_url} alt="avatar" width={200} />
        </div>
      )}
    </div>
  );
}

export default App;
