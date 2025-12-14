import { Ellipsis, ChevronDown } from 'lucide-react';

export type UserReviewProps = {
  id: number;
  userimage: string;
  username: string;
  comment: string;
  time: string;
};
const UserReview = ({ userimage, username, comment, time }: UserReviewProps) => {
  return (
    <div className='shadow-sm hover:shadow-md gap-2'>
      <div className="p-2">
        <div className="flex justify-between">
          <div className="flex flex-col items-center mb-2">
            <div className="flex gap-2 items-center">
              <img src={userimage}
                className="h-10 w-10 rounded-full bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-md cursor-pointer"></img>
              <h2 className="cursor-pointer">@{username}</h2>
            </div>
            <button className="text-sm text-yellow-400 hover:text-yellow-700 cursor-pointer">Reviews Stars here</button>
          </div>
          <div className="cursor-pointer">
            <Ellipsis />
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-700">{comment}</p>
        </div>

        <div>
          <div className="flex flex-col ">
            <div className="text-sm text-gray-700 flex gap-4 items-center mt-2">
              <p>{time} days ago</p>
              <button className="cursor-pointer">Reply</button>
            </div>
            <div>
              <button className="flex gap-1 text-sm text-gray-400 cursor-pointer hover:text-gray-700">
                View Reply <ChevronDown />
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default UserReview
