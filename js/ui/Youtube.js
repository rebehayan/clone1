// export function Youtube() {
// var tag = document.createElement("script");

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// function onYouTubeIframeAPIReady() {
//   new YT.Player("player", {
//     videoId: "YLo6g58vUm0",
//     playerVars: {
//       autoplay: true,
//       controls: false,
//       loop: true,
//       playlist: "YLo6g58vUm0",
//     },
//     events: {
//       onReady: function (event) {
//         event.target.mute();
//       },
//     },
//   });
// }
// }
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "YLo6g58vUm0",
    host: "https://www.youtube-nocookie.com",
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      playlist: "YLo6g58vUm0",
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
