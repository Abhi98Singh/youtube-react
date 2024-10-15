import Button from "./Button";

//mock/fake btnList
const btnList = [
  "All",
  "Music",
  "Cricket",
  "Movies",
  "Games",
  "Cooking",
  "News",
  "Drama",
  "Podcasts",
  "JubeBox",
  "Dramedy",
  "Lectures",
  "Live",
  "Watched",
];

const ButtonList = () => {
  return (
    <div className="flex justify-center">
      {btnList.map((btnName) => (
        <Button key={btnName} name={btnName} />
      ))}
    </div>
  );
};

export default ButtonList;
