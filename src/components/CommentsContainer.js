import { FaUserCircle } from "react-icons/fa";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Abhishek",
      text: "lorem esum jnjkakj nnkkn nna",
      replies: [
        {
          name: "Abhishek",
          text: "lorem esum jnjkakj nnkkn nna",
          replies: [
            {
              name: "Abhishek",
              text: "lorem esum jnjkakj nnkkn nna",
              replies: [],
            },
            {
              name: "Abhishek",
              text: "lorem esum jnjkakj nnkkn nna",
              replies: [],
            },
          ],
        },
        {
          name: "Abhishek",
          text: "lorem esum jnjkakj nnkkn nna",
          replies: [],
        },
        {
          name: "Abhishek",
          text: "lorem esum jnjkakj nnkkn nna",
          replies: [],
        },
      ],
    },
    {
      name: "Abhishek",
      text: "lorem esum jnjkakj nnkkn nna",
      replies: [],
    },
    {
      name: "Abhishek",
      text: "lorem esum jnjkakj nnkkn nna",
      replies: [],
    },
    {
      name: "Abhishek",
      text: "lorem esum jnjkakj nnkkn nna",
      replies: [],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text, replies } = data;

    return (
      <div className="flex shadow-sm bg-gray-100 rounded-lg my-3">
        <div className="">
          <FaUserCircle className="w-9 h-10" />
        </div>
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentsList = ({ comments }) => {
    /* we shoudn't use index as a key */
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 ml-5 mb-3 border border-l-black">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));
  };

  return (
    <div className="m-5 p-2 col-start-1 col-span-9">
      <h1 className="font-bold text-lg">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
