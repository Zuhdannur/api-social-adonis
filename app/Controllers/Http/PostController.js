'use strict'
const Post = use('App/Models/Post')

class PostController {
  async store({request,response}){
    const post = new Post();
    post.uuid = request.input('uuid')
    // post.image_url = request.input('')
    post.caption = request.input('caption')
    await post.save()
    return response.json(post)
  }
}

module.exports = PostController
