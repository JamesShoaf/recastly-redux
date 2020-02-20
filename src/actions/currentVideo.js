var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
    type: 'NEW_VIDEO',
    video
  }
});

export default changeVideo;
