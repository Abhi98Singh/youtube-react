const Button = ({ name }) => {
  return (
    <div>
      <button className="mx-2 my-2 py-1 px-4 bg-gray-200 rounded-lg font-medium hover:bg-gray-300">
        {name}
      </button>
    </div>
  );
};

export default Button;
