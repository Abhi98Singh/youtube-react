import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <FaUserCircle className="h-6 w-6" />
      <span className="font-semibold px-2">{name}</span>
      <span className="text-gray-900">{message}</span>
    </div>
  );
};

export default ChatMessage;
