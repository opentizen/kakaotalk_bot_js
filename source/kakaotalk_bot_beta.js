function response(room, msg, sender, isGroupChat, replier, imageDB) 
{
    if (msg.indexOf("안녕")!=-1)
    {
        replier.reply("네 안녕하세요. 공지사항을 확인해주세요! from KISSD3V_BOT");
    }
    if (msg.indexOf("공지")!=-1)
    {
        replier.reply("아래 링크를 참고하세요! https://docs.google.com/spreadsheets/d/1e958kKzYGjvOtu-2r-GkLwDF_nfaRMjbMjfg9o6z6M8/edit#gid=0from KISSD3V_BOT");
    }
    if (msg.indexOf("뽐뿌")!=-1)
    {
        replier.reply("오늘의 뽐뿌목록입니다. <표시내용없음> from KISSD3V_BOT");
    }
    if (msg.indexOf("핫딜")!=-1)
    {
        replier.reply("오늘의 핫딜목록입니다. <표시내용없음> from KISSD3V_BOT");
    }
    if (msg.indexOf("도움말")!=-1)
    {
        replier.reply("도움이 필요하신가요? 그럼 XX로 문의부탁드립니다~! from KISSD3V_BOT");
    }
    if (msg.indexOf("날씨")!=-1)
    {
        replier.reply("너에게 표시해줄 날씨따위는 없습니다. from KISSD3V_BOT");
    }
    if (msg.indexOf("테스트")!=-1)
    {
        replier.reply("테스트메세지입니다. 아주 잘되네요^^! from KISSD3V_BOT");
    }
    if (msg.indexOf("얼른")!=-1)
    {
        replier.reply("나가주세요! from KISSD3V_BOT");
    }
    if (msg.indexOf("명령어")!=-1)
    {
        replier.reply("지원명령어는 안녕.뽐뿌.핫딜.날씨.얼른.테스트.도움말입니다. from KISSD3V_BOT");
    }
    if (msg.indexOf("99")!=-1)
    {
        replier.reply("쎆쑤!!!!!!");
    }
}

//    /** @param {String} room - 방 이름
//      * @param {String} msg - 메세지 내용
//    * @param {String} sender - 발신자 이름
//      * @param {Boolean} isGroupChat - 단체채팅 여부
//      * @param {Object} replier - 세션 캐싱 답장 메소드 객체
//      * @param {Object} imageDB - 프로필 이미지와 수신된 이미지 캐싱 객체
//      * @method imageDB.getImage() - 수신된 이미지가 있을 경우 Base64 인코딩 되어있는 JPEG 이미지 반환, 기본 값 null
//      * @method imageDB.getProfileImage() - Base64 인코딩 되어있는 JPEG 프로필 이미지 반환, 기본 값 null
//      * @method replier.reply("문자열") - 메시지가 도착한 방에 답장을 보내는 메소드 */
//이 아래 6가지 메소드는 스크립트 액티비티에서 사용하는 메소드들
// function onCreate(savedInstanceState, activity) {}
// function onStart(activity) {}
// function onResume(activity) {}
// function onPause(activity) {}
//function onStop(activity) {}
// function onDestroy(activity) {}