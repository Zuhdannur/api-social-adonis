'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
  static get table(){
    return "tbl_posts"
  }
}

module.exports = Post
