$(document).ready(function() {
	
	var cur;
	var curTop;
	var curLeft;
	
	var curPage = "p1_vote";
	var backgroundPos;
	
	var uidStatus="false";
	var mailStatus="false";
	var passwordStatus="false";
	
	$(document).keydown(function(objEvent) {
		if (objEvent.keyCode == 9) {  //tab pressed
			objEvent.preventDefault(); // stops its action
		}
	})
	
	$(".worksforFloat").each(function(index){
		if (index<5)
		{
			$(this).css("top","40px");
			$(this).css({
				left: 11+index*142
			});
		}else {
			$(this).css("top","237px");
			$(this).css({
				left: 11+(index-5)*142
			});
		}
		$(this).animate({
			opacity:1
		});
		$(this).find(".workHover").hide();
	});
	
	/****滑入效果******/	
	var onHoverFunc = 
		function () {
			$(this).css('cursor','pointer');
			
			var nowNum = parseInt($(this).children().children("img").attr("src").split("s")[2].split(".")[0]);
			
			if( nowNum>5 && curPage == 'p1_vote'){
				$("#workPreviewBG").css('top', '225px');
				$("#workPreviewBG").css('z-index', '1001');
			}else{
				$("#workPreviewBG").css('top', '25px');
				$("#workPreviewBG").css('z-index', '1000');		
			}	
			
			$(this).find(".workHover").stop(true, true).fadeIn();
			$("#workPreviewBG").stop(true, true).fadeIn("fast");
			
			$(".worksThumb").off("mouseenter", onHoverFunc);
		}
	var offHoverFunc = 
		function () {
			$(this).css('cursor','auto');
			
			$(this).find(".workHover").stop(true, true).hide();
			$("#workPreviewBG").hide();
			$(".worksThumb").on("mouseenter", onHoverFunc);
		}
	
	$(".worksThumb").on("mouseenter", onHoverFunc);
	$(".worksThumb").on("mouseleave", offHoverFunc);
	
	/****點擊作品後******/
	var clickWork = 
		function() {
		if (uidStatus == "false")
		{
			$(".vote").css({
				"background-position-x":"0"
			})
		}else {
			$(".vote").css({
				"background-position-x":"-590px"
			})
			$(".checkPostSec").hide();
		}
		
		$(this).css({
			"z-index":"1000"
		})
		$(".workHover").hide();
		$("#workPreviewBG").hide();
		$(".worksThumb").off("mouseenter", onHoverFunc);
		$(".worksThumb").off("click", clickWork);
		$("#votePageBG").animate({
			backgroundPosition:"-745px 6px"
		});
		
		cur = $(this).parents(".worksforFloat").attr("class");
		curTop = $(this).parent().css("top");
		curLeft = $(this).parent().css("left");
		curPage = "workExplain";
		 
		$(".worksforFloat").each(function(){
		
			if ($(this).attr("class") != cur){
				$(this).fadeOut();
			}else {
				$(this).stop(true, true).animate({
					left:"75",
					top:"95"
				}, 500 )
				//$(this).find(".nowVoteNum").show();
				$(this).find(".worksTitle").stop(true, true).animate({
					"margin-top":"155",
				})
			}
		})
		$("#workExplain").animate({
			left:"0",	
		});
		$("#nowTitle p").html("作品說明");
		curPage = "workExplain"
		
	}
	$(".worksThumb").on("click", clickWork);
	/*
	$(".close").hover(
		function(){
			backgroundPos = $(this).css('background-position').split(" ");
			$(this).css({
				"background-position":backgroundPos[0] + " -51px"
			})
		},function(){
			$(this).css({
				"background-position":backgroundPos[0] + " 0px"
			})
		}
	);
	*/
	$(".btnType1").hover(
		function(){
			
			var nowClass = $(this).attr("class").split(" ")
			
			switch (nowClass[0]){
			
				case "vote":
					$(this).css({
						"background-position-x": "0",
						"background-position-y": "-115px",
					})
					break;
					
				case "suggest":
					$(this).css({
						"background-position-x": "-118px",
						"background-position-y": "-115px",
					})
					break;	
				
				case "infoSend":
					$(this).css({
						"background-position-x": "-236px",
						"background-position-y": "-115px",
					})
					break;	
			
				case "joinBonus":
					$(this).css({
						"background-position-x": "-354px",
						"background-position-y": "-115px",
					})
					break;	
			
				case "signup":
					$(this).css({
						"background-position-x": "-472px",
						"background-position-y": "-115px",
					})
					break;	
			
				case "refill":
					$(this).css({
						"background-position-x": "-590px",
						"background-position-y": "-115px",
					})
					break;	
			
				case "close":
					$(this).css({
						"background-position-x": "-708px",
						"background-position-y": "-51px",
					})
					break;	
			
			}
		},function(){
			$(this).css({
				"background-position-y":"0px"
			})
		}
	);
	
	var backToOri;
	/****所有作品回定位*****/
	backToOri = function(){
		
		if ($(this).attr("class") != cur){
			$(this).fadeIn();
		}else {
			$(this).stop(true, true).animate({
				left:curLeft,
				top:curTop,
			}, 500 )
			
			$(this).find(".nowVoteNum").hide();
			
			$(this).find(".worksTitle").stop(true, true).animate({
				width:"400",
				"margin-top":"147",
				"margin-left":"10",
			})
		}
	}
	/****關閉鈕******/
	var closeClick = 
		function(){
		//$(this).off("click", closeClick);
		$(".worksThumb").on("click", clickWork);
		$(".worksforFloat").each(backToOri)
		
		$("#votePageBG").animate({
			backgroundPosition:"0px 0px"
		});
		$("#workSection").children("div").each(function(){
			$(this).css({
				"left":"750px",
			})
		});
		$("#p1_vote").css({
			"left":"0",
		})
		
		$("#nowTitle p").html("大頭貼票選作品");
		curPage = "p1_vote";
		
	}
	
	$(".close").on("click", closeClick);
	
	/****點擊回首頁******/
	var clickHome = function(){
		if (curPage == "p1_vote") {
			//do nothing
		}else {
			$(".worksThumb").on("click", clickWork);
			$(".worksforFloat").each(backToOri)
			$("#workSection").children("div").each(function(){
				$(this).css({
					"left":"750px",
				})
			});
			
			$("#votePageBG").animate({
				backgroundPosition:"0px 0px"
			});
			$("#nowTitle p").html("大頭貼票選作品");
			curPage = "p1_vote";
			$("#"+curPage).stop(true, true).animate({
				left:"0",	
			});
		}	
	};
	
	$("#goIndex").on("click", clickHome);
	
	/****點擊活動說明******/
	var clickRule = function(){
		if (curPage == "campaignExplain") {
			//do nothing
		}else {
			$("#votePageBG").animate({
				backgroundPosition:"0px 430px"
			});
			$(".worksforFloat").each(backToOri)
			$("#workSection").children("div").each(function(){
				$(this).css({
					"left":"750px",
				})
			});
			$("#nowTitle p").html("活動說明");
			curPage = "campaignExplain";
			$("#"+curPage).stop(true, true).animate({
				left:"0",	
			});
		}	
	};
	
	$("#rule").on("click", clickRule);
	
	/******點擊決定投他******/
	
	$(".vote").click(function(){
		//alert("投票成功！")
		
		$("#votePageBG").animate({
			backgroundPosition:"0px -430px"
			//"background-image":"url(images/infoFillBG.png)",
			//"background-position":"16px 10px"
		});
		
		//$(".worksforFloat").each(backToOri)
		$("#workExplain").css({
				"left":"750px",
		});
		$("#infoFill").animate({
			left:"0",
		});
		curPage = "infoFill";
		$("#nowTitle p").html("抽獎資料");
	})
	
	
	/*********前往獎品加碼***********/
	var goBonus = function(){
		if (curPage == "bonusPage") {
			//do nothing
		}else {
			$("#votePageBG").animate({
				backgroundPosition:"-745px -483px"
			});
			$(".worksforFloat").each(backToOri)
			$("#workSection").children("div").each(function(){
				$(this).css({
					"left":"750px",
				})
			});
			$("#nowTitle p").html("獎品加碼");
			curPage = "bonusPage";
			$("#"+curPage).stop(true, true).animate({
				left:"0",	
			});
		}
	};
	
	$("#getBonus").on("click", goBonus);
	$(".infoSend").on("click", goBonus);
	
	/*********送出資料***********/
	var infoSend = function(){
		$("#votePageBG").css({
			"background-image":"url(images/bonusPageBG.png)",
			"background-position":"80px 7px"
		});
		$("#"+curPage).css({
			"left":"750px",
		})
		$("#nowTitle p").html("獎品加碼");
		curPage = "bonusPage";
		$("#"+curPage).stop(true, true).animate({
			left:"0",
		});
	};
});