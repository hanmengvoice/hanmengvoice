$(function(){
  var splashDOM = $('.splash');
  var playerDOM = $('.player');
  var nameDOM = $('.songname');
  var playImageDOM = $('.player-image');
  var playIcon = $('.play-icon');

  setTimeout(function(){
    splashDOM.addClass('hide');
  }, 2000);

  var audio = new Audio;
  audio.autoplay = false;

  audio.onended = playNext;

  audio.onplay = function(){
    playImageDOM.addClass('animating');
  };

  audio.onpause = function(){
    playImageDOM.removeClass('animating');
  };

  var i = 0;
  function playNext(){
    i ++;
    if(i >= playList.length){
      i = 0;
    }
    play(playList[i]);
  }
  function play(obj){
    console.log(obj);
    nameDOM.html(obj.title);
    playImageDOM.css('background-image', 'url(' + (obj.imgURL || 'images/300.jpg') + ')');
    audio.pause();
    audio.src = obj.audioSrc;
    audio.play();
  }

  playIcon.on('click', function(){
    if(playIcon.hasClass('pause')){
      playIcon.removeClass('pause');
      audio.play();
    } else {
      playIcon.addClass('pause');
      audio.pause();
    }
  });

  setTimeout(function(){
    play(playList[0]);
  }, 5000);
});