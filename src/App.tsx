import { UserCard } from "./components/UserCard";
import "./styles.css";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUsers = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUsers}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((userProfile) => (
            <UserCard user={userProfile} key={userProfile.id} />
          ))}
        </>
      )}
    </div>
  );
}
