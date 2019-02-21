function response(room, msg, sender, isGroup, replier) 
{
    if (msg == "$날씨") // if (msg.indexOf("$날씨")==0) if (msg.indexOf("$날씨")!=-1) == if (msg.indexOf("$weather")==0) if (msg.indexOf("$weather")!=-1)
    {
        var data = Utils.getWebText("https://m.search.naver.com/search.naver?query=날씨");
        var data2 = data.split("전국날씨</strong>");
        var data3 = data2[1].split("특보");
        var data4 = data3[0].replace(/(<([^>]+)>)/g, "");
        data4 = data4.trim();
        data4 = data4.replace(/  /g, "");
        data4 = data4.replace(/도씨/g, "℃");
        data4 = data4.replace(/ /g, ", ");
        replier.reply("[현재 날씨]\n" + data4);
    }
}

// 무식하게 박아도 정보제공은 된다. == same mean code
function response(room, msg, sender, isGroup, replier) 
{
    if (msg=="$날씨")
    {
    replier.reply
    (Utils.getWebText("https://m.search.naver.com/search.naver?query=전국날씨","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",false,false).split("전국날씨</strong>")[1].split("<div class=\"wt_notice\">")[0]);
    }
}
/* 퍼상할땐 UserAgent는 표기해주자. 
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",false,false
혹은 http://www.useragentstring.com/pages/useragentstring.php?name=Chrome 에서 최신버전을 사용해보자.

if you use web parsing, you can show web UserAgent in code 
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",false,false"
or use newest version "http://www.useragentstring.com/pages/useragentstring.php?name=Chrome"