const ProfileCard = ({ user, onConnect, onSkip }) => {
  const { avatar, username, age, bio } = user;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
      <img
        src={avatar}
        alt="Avatar"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{username}</h2>
      <p className="text-gray-600 mb-2">Age: {age}</p>
      <p className="text-gray-600 mb-4">Bio: {bio}</p>
      <div className="flex justify-center">
        <button
          onClick={() => onConnect(user)}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 mr-2">
          Connect
        </button>
        <button
          onClick={() => onSkip(user)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg px-4 py-2">
          Skip
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
