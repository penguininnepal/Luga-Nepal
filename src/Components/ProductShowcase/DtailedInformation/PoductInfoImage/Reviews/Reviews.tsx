import UserReview, { type UserReviewProps } from "./UserReview";

const Reviews = () => {
  const UserReviews: UserReviewProps[] =[
    {
      id: 1,
      userimage: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
      username: "user012475",
      comment: 'The Product is Really Very Good. Best Product for me to use in daily life. Thanks For Delivery',
      time: '5',
    },
    {
      id: 2,
      userimage: 'https://cdn-icons-png.flaticon.com/512/12461/12461563.png',
      username: "user57849",
      comment: 'Thanks for the Package, Really loved the Packaging. Overall Product look sleak, I have been using it already',
      time: '7',
    } 
  ];

  return (
    <div className="h-auto bg-[#fafafa] mt-4">
      <div className="p-4">
        <div className="mb-2">
          <h1 className="font-semibold text-xl">Product Review</h1>
        </div>
        <div>
          {
            UserReviews.map((usererview) =>(
              <UserReview
              key = {usererview.id}
              id = {usererview.id}
              userimage = {usererview.userimage}
              username ={usererview.username}
              comment ={usererview.comment}
              time = {usererview.time}
              />
            ))
          }
          
            
        </div>
      
      </div>
      
    </div>
  )
}

export default Reviews
