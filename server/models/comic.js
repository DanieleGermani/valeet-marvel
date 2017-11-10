const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ComicSchema = new Schema({
  digitalId: {
    type: String
  },
  title: {
    type: String
  },
  issueNumber: {
    type: Number
  },
  variantDescription: {
    type: String
  },
  description: {
    type: String
  },
  modified: {
    type: Date,
    default: Date.now
  },
  isbn: {
    type: String
  },
  upc: {
    type: String
  },
  diamondCode: {
    type: String
  },
  ean: {
    type: String
  },
  issn: {
    type: String
  },
  format: {
    type: String
  },
  pageCount: {
    type: Number
  },
  textObjects: {
    language: String,
    text: String
  },
  resourceURI: {
    type: String
  },
  url: {
    type: String
  },
  series:{
    resourceURI:String,
    name: String
  },
  variants: {
    resourceURI: String,
    name: String
  },
  collections:{
    type:Array
  },
  collectedIssues: {
    type: Array
  },

  images:{
    path: String,
    extension: String

  },
  creators:{
    collectionURI: String,
      items:{
        resourceURI: String,
        name: String,
        role: String
      }
  },
  characters:{
    collectionURI: String,
    items:[{
      resourceURI:String,
      name: String
    }]

  },
  stories: {
    collectionURI: String,
    items:{
      resourceURI: String,
      name: String,
      tipo: String
    }
  },
  events:{
    collectionURI: String,
    items:{
      resourceURI: String,
      name: String,
      tipo: String
    }
  },


  editable: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Comic', ComicSchema);
