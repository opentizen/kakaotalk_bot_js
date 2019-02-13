<h3>KakaotalkBot</h3><hr>
** @param {String} room - 방 이름
** @param {String} msg - 메세지 내용<br>
** @param {Boolean} isGroupChat - 단체채팅 여부<br>
** @param {Object} replier - 세션 캐싱 답장 메소드 객체<br>
** @param {Object} imageDB - 프로필 이미지와 수신된 이미지 캐싱 객체<br>
** @method imageDB.getImage() - 수신된 이미지가 있을 경우 Base64 인코딩 되어있는 JPEG 이미지 반환, 기본 값 null<br>
** @method imageDB.getProfileImage() - Base64 인코딩 되어있는 JPEG 프로필 이미지 반환, 기본 값 null<br>
** @method replier.reply("문자열") - 메시지가 도착한 방에 답장을 보내는 메소드
<h3>What is mean it?</h3><hr>
** @param {String} room - Chat room
** @param {String} msg - Message<br>
** @param {Boolean} isGroupChat - Group Chat Yes or No<br>
** @param {Object} replier - Session caching reply method object<br>
** @param {Object} imageDB - Profile images and receive images caching object <br>
** @method imageDB.getImage() - If receive images, convert incoding JPEG base 64bit, default value : null<br>
** @method imageDB.getProfileImage() - incodinged base64 JPEG profile images return, default value : null<br> 
** @method replier.reply("문자열") - Message arrived to reply method
<h3>Method</h3><hr> 
// 이 아래 6가지 메소드는 스크립트 액티비티에서 사용하는 메소드들
// function onCreate(savedInstanceState, activity) {}<br>
// function onStart(activity) {}<br>
// function onResume(activity) {}<br>
// function onPause(activity) {}<br>
// function onStop(activity) {}<br>
// function onDestroy(activity) {}
<h3>How to use it?</h3><hr>
01. You can download KakatoalkBot for JS "https://play.google.com/store/apps/details?id=be.zvz.newskbot"<br>
02. You can download AndroidWear "https://play.google.com/store/apps/details?id=com.google.android.wearable.app"<br>
03. If you downloaded apps, You can setting all Allow Android Permissions.<br>
04. Reference readme.md after coding or modify kakaotalk bot<br>
<img src="https://github.com/opentizen/kakaotalk_bot_js/blob/master/images/kakao1.png">