import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../libs/firebase";

function Profile() {
  const [user] = useAuthState(auth);
  return (
    <div className="flex items-center gap-2 p-2 border border-gray-300 rounded-lg">
      <span className="font-bold text-white bg-green-600 size-10 flex items-center justify-center rounded-lg overflow-hidden">
        <img src={user?.photoURL ?? undefined} alt="imagen del usuario" />
      </span>
      <div className="flex flex-col gap-1 justify-center">
        <h3 className="text-md font-semibold leading-none">{user?.displayName}</h3>
        <h1 className="text-xs leading-none">{user?.email}</h1>
      </div>
    </div>
  );
}

export default Profile;
