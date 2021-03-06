      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
          //height: '390',
         // width: '640',
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '480',
          width: '853',
          videoId: 'SAPSApQ1Jbs',
          events: {
            'onReady': onPlayerReady
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
        event.target.mute();
      }


function download_newsletter(e,file) {
     if(left_mouse_click(e))
         document.location = "./img/documents/newsletter/"+file;
}

function download_bulletin(e,file) {
    if(left_mouse_click(e))
        document.location = "./img/documents/bulletin/"+file;
}
function left_mouse_click(e) {

     if (e.type != "mousedown") return false;

     if (e.which) { 
         if (e.which==3 || e.which==2) return false;
     }
     else if (e.button) {
         if (e.button==2 || e.button==4) return false;
     }
          return true;
}

/*var showContextMenu=false;
var sTestEventType='mousedown';

function handleMouseEvent(e) {
 var evt = (e==null ? event:e);
 var clickType = 'LEFT';

 if (evt.type!=sTestEventType) return true;
 if (evt.which) { 
  if (evt.which==3) clickType='RIGHT';
  if (evt.which==2) clickType='MIDDLE';
 }
 else if (evt.button) {
  if (evt.button==2) clickType='RIGHT';
  if (evt.button==4) clickType='MIDDLE';
 }

 // Make sure hyperlinks (A tags) still work!
 if (evt.target     && evt.target.tagName     && evt.target.tagName.toLowerCase()=="a")     return true;
 if (evt.srcElement && evt.srcElement.tagName && evt.srcElement.tagName.toLowerCase()=="a") return true;

 alert(evt.type+': '+clickType+' button!');
 return true;
}
document.onmousedown = handleMouseEvent;*/
