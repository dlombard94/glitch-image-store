'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');
const cloudinary = require('cloudinary');
const path = require('path');
const env = require('../.env.json');

console.log(env.cloudinary);

cloudinary.config(env.cloudinary);

const pictureStore = {

  store: new JsonStore('./models/picture-store.json', { pictures: [] }),
  collection: 'pictures',

  getAlbum(userid) {
    return this.store.findOneBy(this.collection, { userid: userid });
  },

  addPicture(userId, title, imageFile, response) {
    let album = this.getAlbum(userId);
    if (!album) {
      album = {
        userid: userId,
        photos: [],
      };
      this.store.add(this.collection, album);
    }

    imageFile.mv('tempimage', err => {
      if (!err) {
        cloudinary.uploader.upload('tempimage', result => {
          console.log(result);
          const picture = {
            img: result.url,
            title: title,
          };
          album.photos.push(picture);
          response();
        });
      }
    });
  },

  deletePicture(userId, image) {
    const id = path.parse(image);
    let album = this.getAlbum(userId);
    _.remove(album.photos, { img: image });
    cloudinary.api.delete_resources([id.name], function (result) {
      console.log(result);
    });
  },

  deleteAllPictures(userId) {
    let album = this.getAlbum(userId);
    album.photos.forEach(photo => {
      const id = path.parse(photo.img);
      cloudinary.api.delete_resources([id.name], result => {
        console.log(result);
      });
    });
    this.store.remove(this.collection, album);
  },
};

module.exports = pictureStore;
