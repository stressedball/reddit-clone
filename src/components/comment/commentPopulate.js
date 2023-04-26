let commentsArr = []
let queue = []
let index = 0

export default function commentsPopulate(postComments, comments) {

    if (index === 0) commentsArr = []

    if (postComments.length > 0 && index <= postComments.length - 1) {
        const comment = postComments[index]
        comment.depth = 0
        queue.push(comment)

        Queue(queue, comments)

        index++
        commentsPopulate(postComments, comments)
    }

    index = 0

    return commentsArr
}

function Queue(arr, comments) {
    
    const childs = comments.filter(comment => comment.data.thread === arr[0].id)
    
    if (childs.length > 0) {
        // arr[0].hasChilds = true
        for (let i = 0; i < childs.length; i++) {
            // childs[i].depth = arr[0].depth + 1
            queue.push(childs[i])
        }
    }
    // else arr[0].hasChilds = false
    
    commentsArr.push(arr[0])

    queue.shift()

    if (queue.length > 0) Queue(queue, comments)
    else return
}