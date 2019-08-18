'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblPostSchema extends Schema {
  up () {
    this.create('tbl_posts', (table) => {
      table.increments()
      table.string('uuid').unique()
      table.string('image_url').nullable()
      table.string('caption').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_posts')
  }
}

module.exports = TblPostSchema
