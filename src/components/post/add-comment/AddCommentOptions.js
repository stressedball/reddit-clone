import { db } from '../../../firebase/getAuthDb'
import { addDoc, collection, serverTimestamp, } from 'firebase/firestore'

export default function AddCommentOptions({ darkMode, postId, text, user }) {

    const handleComment = () => {

        const comments = collection(db, 'posts', postId, 'comments')

        if (text.current.value === '') return

        addDoc(comments,
            {
                poster: `${user.id}`,
                text: `${text.current.value}`,
                timeStamp: serverTimestamp(),
                votes: 0
            }
        )
    }

    return (
        <div
            className='comment-options'
        >
            <svg
                className={`${darkMode} mouse-pointer`}
                width="30px" height="30px"
                version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 32" enableBackground="new 0 0 40 32" xmlSpace="preserve">
                <g>
                    <path
                        fill="currentColor"
                        d="M10.459,15.294c2.757,0,5-2.243,5-5s-2.243-5-5-5s-5,2.243-5,5S7.702,15.294,10.459,15.294z M10.459,6.294
  c2.206,0,4,1.794,4,4s-1.794,4-4,4s-4-1.794-4-4S8.253,6.294,10.459,6.294z"/>
                    <path
                        fill="currentColor"
                        d="M40,30.5v-29C40,0.673,39.327,0,38.5,0h-37C0.673,0,0,0.673,0,1.5v29C0,31.327,0.673,32,1.5,32h37
  C39.327,32,40,31.327,40,30.5z M1,30.5v-29C1,1.224,1.224,1,1.5,1h37C38.776,1,39,1.224,39,1.5v29c0,0.276-0.224,0.5-0.5,0.5h-37
  C1.224,31,1,30.776,1,30.5z"/>
                    <path
                        fill="currentColor"
                        d="M27.73,11.086c-0.536-0.532-1.406-0.53-1.938,0.003L14.646,22.235c-0.143,0.145-0.371,0.147-0.519,0.008
  l-2.583-2.429c-0.544-0.51-1.382-0.498-1.912,0.03l-6.986,6.99c-0.195,0.195-0.195,0.512,0,0.707
  C2.744,27.639,2.872,27.688,3,27.688s0.256-0.049,0.354-0.146l6.986-6.989c0.144-0.143,0.372-0.146,0.52-0.008l2.583,2.428
  c0.544,0.513,1.383,0.499,1.911-0.029l11.145-11.146c0.145-0.146,0.38-0.146,0.526-0.001l9.622,9.566
  c0.196,0.196,0.513,0.194,0.707-0.002c0.195-0.196,0.194-0.512-0.002-0.707L27.73,11.086z"/>
                </g>
            </svg>

            <button
                className={`${darkMode} buttonStyle mouse-pointer`}
                onClick={handleComment}
            >Comment</button>
        </div>
    )
}