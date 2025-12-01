import Dropdown from "@/Components/Dropdown";
import { useEffect, useState } from "react"
type FeedBack ={
    likes: number;
    dislikes : number;
};
const ProductDetailPage = () => {
    const [like, setLike] = useState(0);


    const [dislike, setDisLike ] = useState (() => {
        const savedDisLike = localStorage.getItem('like')
        return savedDisLike ? JSON.parse(savedDisLike) : 0;
    });

    useEffect (() => {
    localStorage.setItem('dislike', JSON.stringify(dislike));
    }, [dislike ]);

    const [feedback, setFeedBack ] = useState<FeedBack>(() =>{
        const Saved = localStorage.getItem('feedback')
        return Saved ? JSON.parse(Saved) : {likes: 0, dislikes: 0};

    });

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    const [namaste, setNamaste ] = useState(() => {
        const saveNamaste = localStorage.getItem('namaste')
        return saveNamaste ? JSON.parse(saveNamaste) : 0;

    });

    
   

  return (
    <div>
        <Dropdown />
       
        <div>
            <p>{namaste} Namaste</p>
            <button onClick={() => setNamaste(namaste+1)} className="p-2 rounded-full bg-blue-200">Greet</button>
        </div>
        <p>{like} Likes</p>
      <button onClick={() => setLike(like+1)} className="p-4 bg-red-300">Clk to Like</button>

      <div>
        <button onClick={() => setDisLike(dislike+1)}>DisLike clicked</button>
      </div>

      <div>
        <p>{feedback.likes} UP VOTES</p>
        <button onClick={() => setFeedBack(prev => ({...prev, likes: prev.likes+1}))}>Vote UP</button>
      </div>
      <div>
        <p>{feedback.dislikes} DOWN VOTES</p>
        <button onClick={() => setFeedBack(prev => ({...prev, dislikes: prev.dislikes+1}))}>Vote DOEN</button>
      </div>
    </div>

  )
}

export default ProductDetailPage
