var windowHeight;
var windowWidth;
var curPage = 1;
var totalPages = 9;
var keyCode;
var minWidth = 920;
var nowSlideBox = 1;
var slideBoxTotal = 11;
var slideBoxTitleArr = new Array();
var slideBoxExplainArr = new Array();
var fullXMargin;
var pageContentArr = [];
var pageArr = ["p_index","p_dlinkescape","p_cathaynamecard","p_cathayvote","p_shidongyang","p_parachutetheband","p_hijack","p_webworks","p_aboutme"];
var pageScrollTop = [];

///////////// 版面配置設定 ///////////
function setSize(){
    
    windowHeight = $(window).height();
    windowWidth = $(window).width();
    
    if (windowWidth < minWidth){
        $("#pageContainer").css({"width":minWidth*totalPages+"px"});
        $(".pages").css({"width":minWidth+"px"});
        $("#mainSection > div > div.p_index > div > img").css({"width":minWidth+"px"});
        $("img.fullWidthImg").css({"width":minWidth+"px"});
        //$(".block").css({"width":minWidth+"px"});
        $("#mainSection > div > div").css({"width":minWidth+"px"});
        //$("#mainSection > div > div > div").css({"width":minWidth+"px"});
    }else {
        $("#pageContainer").css({"width":windowWidth*totalPages+"px"});
        $(".pages").css({"width":windowWidth+"px"});
        $("#mainSection > div > div.p_index > div > img").css({"width":windowWidth+"px"});
        
        if (windowWidth>920){
            fullXMargin = (920 - windowWidth)/2
        }else {
            fullXMargin = 0;
        }
        
        $("img.fullWidthImg").css({"width":windowWidth+"px", "margin-left": fullXMargin+"px"});
        //$(".block").css({"width":windowWidth+"px"});
        $("#mainSection > div > div").css({"width":windowWidth+"px"});
        //$("#mainSection > div > div > div").css({"width":windowWidth+"px"});
    }
    //$("body").css({"width":windowWidth+"px"});
    //$("#mainSection").css({"width":windowWidth+"px"});
    /*
    if (curPage == 1){
        $("#pageContainer").css({"height":windowHeight+"px"});
    }else {
        $("#pageContainer").css({"height":"auto"});
    }
    */
    //$(".pages").css({"width":windowWidth+"px"});
    //$("#p1").css({"height":windowHeight+"px"});
    /*
    $("#mainSection").children('div').css({
        "width":windowWidth+"px",
        "float":'left'
    });
    */
    
    var gap;
    if (windowWidth < minWidth){
        gap = -minWidth;
    }else {
        gap = -windowWidth;
    }
    $("#pageContainer").css({
        "-webkit-transform": "translate3d("+gap+"px, 0px, 0px)",
        "-moz-transform": "translate("+gap+"px, 0px)",
        "-o-transform": "translate("+gap+"px, 0px)",
        "-msTransform-transform": "translate("+gap+"px, 0px)",
        "transition-duration": "0ms",
        "-moz-transition-duration": "0ms",
        "-webkit-transition-duration": "0ms",
        "-o-transition-duration": "0ms"
    });
    
    $("#navCursor").css({
        "width": windowWidth/totalPages + "px",
        "margin-left": windowWidth/totalPages * (curPage -1) + "px"
    })
    $("#tip").css({
        "margin-left": windowWidth/totalPages -70 + "px"
    })
    
}

///////////// 頁面滑動 ///////////
function matrixToArray(matrix) {
    return matrix.substr(7, matrix.length - 8).split(', ');
}

function slide(){
    
    $("#right").off("click", slide);
    $("#left").off("click", slide);
    $(document).unbind();
    
    //pageScrollTop[curPage-1] = $("#pageContainer .current").scrollTop();
    
    if(curPage == 1){$("#tip").stop().fadeOut("slow")}
    
    var gap = windowWidth;
    
    if (gap<minWidth){gap = minWidth}
    
    //$("#code2").append(curPage)
    
    if (this.id == "right" || keyCode == "right"){
        
        if (curPage == totalPages){
            turnOnClick();
            return false;
        }
        gap = -gap;
        curPage ++;
        
    }else if (this.id == "left" || keyCode == "left"){
        
        if (curPage == 1){
            turnOnClick();
            return false;
        }
        curPage --;
    }
    
    //$("#code2").append(curPage)
    
    addEventListener("transitionend", turnOnClick, true);
    addEventListener("webkitTransitionEnd", turnOnClick, true);
    
    var matrix;
    matrix = matrixToArray($("#pageContainer").css("-webkit-transform"));
    if (matrix == "") matrix = matrixToArray($("#pageContainer").css("-moz-transform"));
    if (matrix == "") matrix = matrixToArray($("#pageContainer").css("-o-transform"));
    if (matrix == "") matrix = matrixToArray($("#pageContainer").css("msTransform"));
    gap += parseInt(matrix[4]);
    
    $("#pageContainer").css({
        "-webkit-transform": "translate3d("+gap+"px, 0px, 0px)",
        "-moz-transform": "translate("+gap+"px, 0px)",
        "-o-transform": "translate("+gap+"px, 0px)",
        "-msTransform-transform": "translate("+gap+"px, 0px)",
        "transition-timing-function": "cubic-bezier(0.19, 1, 0.22, 1)",
        "transition-duration": "600ms",
        "-moz-transition-timing-function": "cubic-bezier(0.19, 1, 0.22, 1)",
        "-moz-transition-duration": "600ms",
        "-webkit-transition-timing-function": "cubic-bezier(0.19, 1, 0.22, 1)",
        "-webkit-transition-duration": "600ms",
        "-o-transition-timing-function": "cubic-bezier(0.19, 1, 0.22, 1)",
        "-o-transition-duration": "600ms"
    });
    
    $("#navCursor").css({
        "width": windowWidth/totalPages + "px",
        "margin-left": windowWidth/totalPages * (curPage -1) + "px"
    })
    
    if(curPage == 1){$("#tip").stop().fadeIn("slow")}
    
    return false;
}

function turnOnClick(){
    
    afterSlide();
    
    removeEventListener("transitionend", turnOnClick, true);
    removeEventListener("webkitTransitionEnd", turnOnClick, true);
    
    //$("#code3").append("turnOnClick")
    
    $("#right").on("click", slide);
    $("#left").on("click", slide);
    
    
    $(document).bind("keydown", function(e){
        if (e.keyCode == 37) {
            //$("#code1").append("leftClick")
            keyCode = "left";
            slide();
            return false;
        }else if(e.keyCode == 39){
            //$("#code1").append("rightClick")
            keyCode = "right";
            slide();
            return false;
        }
    });
    
}

function afterSlide()
{
    //getPageContent();
    /*
    if(curPage == 1 || curPage == totalPages){
        $("#pageContainer").css({
            "-webkit-transform": "translate3d(0px, 0px, 0px)",
            "-moz-transform": "translate(0px, 0px)",
            "-o-transform": "translate(0px, 0px)",
            "-msTransform-transform": "translate(0px, 0px)",
            "transition-duration": "0ms",
            "-moz-transition-duration": "0ms",
            "-webkit-transition-duration": "0ms",
            "-o-transition-duration": "0ms"
        });
    }else{
        $("#pageContainer").css({
            "-webkit-transform": "translate3d("+(-windowWidth)+"px, 0px, 0px)",
            "-moz-transform": "translate("+(-windowWidth)+"px, 0px)",
            "-o-transform": "translate("+(-windowWidth)+"px, 0px)",
            "-msTransform-transform": "translate("+(-windowWidth)+"px, 0px)",
            "transition-duration": "0ms",
            "-moz-transition-duration": "0ms",
            "-webkit-transition-duration": "0ms",
            "-o-transition-duration": "0ms"
        });
    }
    */
    setPage();
    setSize();
    
}
////////////// 獲得所有頁面內容 ///////////

function getPageContent()
{    
    // $.ajax({
    //     type: "POST",
    //     cache: false,
    //     url: "controller/getPageContent.php",
    //     data: {curPage : curPage, totalPages : totalPages},
    //     dataType: 'jsonp',
    //     error: function(xhr) {
    //         alert('Ajax request 發生錯誤');
    //     },
    //     success: function(jsonp) {
    //        //alert(jsonp.length)
    //        for (var i = 0; i < jsonp.length; i++)
    //         {
    //             pageContentArr.push(jsonp[i]);
    //         }
    //         setPage()
    //         setSize();
    //     }
    // })
    // var pageArr = ["pIndex", "pDlink", "pCathay"];
    var pageArr = ["pIndex", "pDlink", "pCathay", "pVote", "pShiDong", "pParas", "pHijack", "pWebworks", "pAbout"];
    var count = 0;
    var map = {}
    pageArr.forEach(function(page, i){
      cb = function(html, i){
        map[i] = html;
        count++;
      
        // iterate through map attr to push content to array in expect order
        if(count === pageArr.length){
          for (var key in map){
            pageContentArr.push(map[key]);
          }

          setPage();
          setSize();
        }
      }
      $.get("view/"+page+".html", function(html){
        cb(html, i)
      })
    });
}

//////////////設定目前頁面內容 ///////////

function setPage(){
    $("#pageContainer .current").scrollTop(0);
    //$("#pageContainer > div.current").children().hide();
    $("#pageContainer .prev").removeClass().addClass(pageArr[(curPage-2)]).addClass("pages").addClass("prev")
    $("#pageContainer .current").removeClass().addClass(pageArr[(curPage-1)]).addClass("pages").addClass("current")
    $("#pageContainer .next").removeClass().addClass(pageArr[curPage]).addClass("pages").addClass("next")
    $("#pageContainer .prev").html(pageContentArr[(curPage-2)]);
    $("#pageContainer .current").html(pageContentArr[(curPage-1)]);
    $("#pageContainer .next").html(pageContentArr[curPage]);
    //$("#pageContainer .prev").load("view/"+pageArr[(curPage-2)]+".php");
    //$("#pageContainer .current").load("view/"+pageArr[(curPage-1)]+".php");
    //$("#pageContainer .next").load("view/"+pageArr[(curPage)]+".php");
    //$("#pageContainer .next").find('img').hide().load(function(){alert("load")});
    //$("#pageContainer .next").find('img').css("border","1px solid black");
    /*
    if (pageScrollTop[curPage-1]){
        $("#pageContainer .current").scrollTop(pageScrollTop[curPage-1]);
    }else {
        $("#pageContainer .current").scrollTop(0);
    }
    */
}

//////////////slideBox ///////////

function slideBoxLoop(){
    if (curPage == 8)
    {
        addEventListener("transitionend", slideBoxAfter, true);
        addEventListener("webkitTransitionEnd", slideBoxAfter, true);

        nowSlideBox ++;
        if (nowSlideBox > slideBoxTotal){
            nowSlideBox = 1;
        }

        $("#slide_title p").hide();
        $("#slide_explain p").hide();

        $("#slide_pic_section").css({
            "-webkit-transform": "translate3d(-720px, 0px, 0px)",
            "-moz-transform": "translate(-720px, 0px)",
            "-o-transform": "translate(-720px, 0px)",
            "-msTransform-transform": "translate(-720px, 0px)",
            "transition-timing-function": "cubic-bezier(0.19, 1, 0.22, 1)",
            "transition-duration": "600ms",
            "-moz-transition-timing-function": "cubic-bezier(0.19, 1, 0.22, 1)",
            "-moz-transition-duration": "600ms",
            "-webkit-transition-timing-function": "cubic-bezier(0.19, 1, 0.22, 1)",
            "-webkit-transition-duration": "600ms",
            "-o-transition-timing-function": "cubic-bezier(0.19, 1, 0.22, 1)",
            "-o-transition-duration": "600ms"
        });
        $("#slide_title p").text(slideBoxTitleArr[nowSlideBox]).fadeIn(2500);
        $("#slide_explain p").text(slideBoxExplainArr[nowSlideBox]).fadeIn(2500);
    }
}
function slideBoxAfter(){
    removeEventListener("transitionend", slideBoxAfter, true);
    removeEventListener("webkitTransitionEnd", slideBoxAfter, true);
    
    var prepareNum = nowSlideBox +1;
    if (prepareNum > slideBoxTotal){
        prepareNum = 1;
    }
    $("#slide_pic_section .slide_onStage").html('<img src="images/slideBox/pic_'+ nowSlideBox +'.jpg" />');
    $("#slide_pic_section .slide_ready").html('<img src="images/slideBox/pic_'+ prepareNum +'.jpg" />');
    
    $("#slide_pic_section").css({
        "-webkit-transform": "translate3d(0px, 0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        "-o-transform": "translate(0px, 0px)",
        "-msTransform-transform": "translate(0px, 0px)",
        "transition-duration": "0ms",
        "-moz-transition-duration": "0ms",
        "-webkit-transition-duration": "0ms",
        "-o-transition-duration": "0ms"
    });
    
}

///////////// 動態載入頁面 ///////////
function testAjax(){
    
    $.ajax({
    url:'testAjax.php',
    type: 'POST',
    //dataType: 'xml',//資料型態可以不設定，且此型態不可是text或html
    timeout: 1000,
    error: function(){
        alert('讀取php錯誤'); //當php讀取失敗
    },
    success: function(xml){
        $(xml).find("pic").each(function(i){  //取得xml父節點   
            var total=$(xml).find("pic").length;//xml的總筆數
            var title=$(this).children("title").text(); //取得子節點中的src資料
            var explain=$(this).children("explain").text(); //取得子節點中的url資料
            //alert(total+"|"+photosrc+"|"+photourl); //秀出總筆數與xml檔與抓到的欄位
            slideBoxTitleArr.push(title);
            slideBoxExplainArr.push(explain);
        })
    }
    })
}

///////////// 頁面預設動作 ///////////
$(document).ready(function() {
    getPageContent();
    
    $("#tip").delay(500).fadeIn("slow");
    
    $(window).resize(function(){
      setSize();
    });
    
    //turnOnClick();
    
    $(document).bind("keydown", function(e){
        if (e.keyCode == 37) {
            //$("#code1").append("leftClick")
            keyCode = "left";
            slide();
            return false;
        }else if(e.keyCode == 39){
            //$("#code1").append("rightClick")
            keyCode = "right";
            slide();
            return false;
        }
    });   
    
    ////// 取得slideBox資料內容 ///////
    $.ajax({
    url:'slideBoxXML.xml',
    type: 'GET',
    dataType: 'xml',//資料型態可以不設定，且此型態不可是text或html
    timeout: 1000,
    error: function(xml){
        alert('讀取xml錯誤'+xml); //當xml讀取失敗
    },
    success: function(xml){
        $(xml).find("pic").each(function(i){  //取得xml父節點   
            var total=$(xml).find("pic").length;//xml的總筆數
            var title=$(this).children("title").text(); //取得子節點中的src資料
            var explain=$(this).children("explain").text(); //取得子節點中的url資料
            //alert(total+"|"+photosrc+"|"+photourl); //秀出總筆數與xml檔與抓到的欄位
            slideBoxTitleArr.push(title);
            slideBoxExplainArr.push(explain);
        })
    }
    })
    
    ////// 設定slideBox ///////
    slideBoxCounter = setInterval(function(){
        slideBoxLoop();
    }, 5000);
    /*
    var mouseX = 0;
    var mouseY = 0;
    $("#pageContainer").mousedown( function(e) {
    alert(e.pageX); 
    //mouseY = e.pageY;
    });
    */
    setInterval(function(){
       //alert($("#pageContainer .current").scrollTop());
    }, 5000);
});
