$(function(){
 //选项卡
    $(".hidden").hover(function(){
        $(this).children().show();
    },function(){
        $(this).children().hide();
    });
    $(".mobile").hover(function(){
        $(this).children().eq(1).show();
        $(this).children().eq(0).css({backgroundPositionY:-20});
    },function(){
        $(this).children().eq(1).hide();
        $(this).children().eq(0).css({backgroundPositionY:5});
    });
    $(".car").hover(function(){
        $(this).children().filter(".hide").show();
    },function(){
        $(this).children().filter(".hide").hide();
    });
    $(".inner-nav").children().hover(function(){
        $(this).children().eq(1).show();
    },function(){
        $(this).children().eq(1).hide();
    });

//banner图轮播效果
var banner=$(".banner").children().filter("ul").children();
var circle=$(".banner").children().filter("ol").children();
var num=0;
var flag=true;
 var t=setInterval(move,3000);
    function move(){
        if(flag==false){
            return;
        }
        flag=false;
        banner.eq(num).animate({opacity:0},800);
        num++;
        if(num>banner.length-1){
            num=0;
        }
        circle.css({background:"#3E3E3E"}).eq(num).css({background:"#B61B1F"});
        banner.eq(num).animate({opacity:1},800,function(){flag=true});
    }
    $(".banner").hover(function(){
        clearInterval(t);
        $(".banner").children().filter(".turnleft").show();
        $(".banner").children().filter(".turnright").show();
    },function(){
        t=setInterval(move,3000);
        $(".banner").children().filter(".turnleft").hide();
        $(".banner").children().filter(".turnright").hide();
    });
    $(".turnright").click(function(){
        move();
    });
    $(".turnleft").click(function(){
        if(flag==false){
            return;
        }
        flag=false;
        banner.eq(num).animate({opacity:0},800);
        num--;
        if(num<0){
            num=banner.length-1;
        }
        circle.css({background:"#3E3E3E"}).eq(num).css({background:"#B61B1F"});
        banner.eq(num).animate({opacity:1},800,function () {
            flag=true;
        });
    });
    circle.click(function(){
        circle.css({background:"#3E3E3E"}).eq($(this).index()).css({background:"#B61B1F"});
        if(flag==false){
            return;
        }
        flag=false;
        banner.eq(num).animate({opacity:0},800);
        banner.eq($(this).index()).animate({opacity:1},800,function () {
            flag=true;
        });
        num=$(this).index();
    });
//4个小图的轮播
var banbotbox=$(".banbotbox")
    var flag=true;
    $(".banbotnext").click(function(){
        if(flag){
            banbotbox.animate({left:-1000},function(){
            var first=banbotbox.children().first().appendTo(banbotbox)
            $(this).css("left","0")
            flag=true;
        })
        flag=false;
        }
    })
    var flag2=true;
    $(".banbotprev").click(function(){
        if(flag2){
            flag2=false;
            var last=banbotbox.children().last();
            var first=banbotbox.children().first().before(last)
            banbotbox.css("left","-1000px")
            banbotbox.animate({left:0},function(){
                flag2=true;
            })
        }
    })
//楼层选项卡

function changecard(changenum){
var onefloor=getClass('onefloor')[changenum]
var changem=getClass('change-m',onefloor);
var changer=getClass('change-r',onefloor);
var changeli=getClass('changeli',onefloor);
var moreactivea=getClass('moreactivea',onefloor);
for(var b=0;b<changeli.length;b++){
    changeli[b].index=b;
    changeli[b].onmouseover=function(){
        for(var i=0;i<changeli.length;i++){
            changem[i].style.display="none";
            changer[i].style.display="none";
            changeli[i].classList.remove("moreactiveli");
            
        }
        for(var j=0;j<moreactivea.length;j++){
            moreactivea[j].style.borderRight="1px solid #ccc"
        }
        changem[this.index].style.display="block";
        changer[this.index].style.display="block"
        changeli[this.index].classList.add("moreactiveli")
        moreactivea[this.index].style.borderRight="0";
        moreactivea[this.index-1].style.borderRight="0"
    }
}
}
changecard(0);
changecard(1);
changecard(2);
changecard(3);
changecard(4);
changecard(5);
changecard(6);
changecard(7);
changecard(8);
changecard(9);
changecard(10);

var changetwoli=getClass('changetwoli');
var tchangecards=getClass('tchangecards');
var twomoreactivea=getClass('twomoreactivea');
for(var b=0;b<changetwoli.length;b++){
    changetwoli[b].index=b;
    changetwoli[b].onmouseover=function(){
        for(var i=0;i<changetwoli.length;i++){
            tchangecards[i].style.display="none";
            changetwoli[i].classList.remove("moreactiveli");
            
        }
        for(var j=0;j<twomoreactivea.length;j++){
            twomoreactivea[j].style.borderRight="1px solid #ccc"
        }
            tchangecards[this.index].style.display="block";
        changetwoli[this.index].classList.add("moreactiveli")
        twomoreactivea[this.index].style.borderRight="0";
        twomoreactivea[this.index-1].style.borderRight="0"
    }
}

// 楼层效果

//1楼层中的轮播
var onefloorimgbox=document.querySelector(".onefloor-content-bottom-m-m-imgbox");
var numbers=1;
var onefloorimgs=document.querySelectorAll('.onefloor-content-bottom-m-m-img');
var onefloorbtn=document.querySelectorAll(".onefloor-content-bottom-m-m-btn");
function changeGo(){
    numbers++;
    if(numbers==5){
            animate(onefloorimgbox,{left:-439*numbers},1000,Tween.Linear,function(){
                onefloorimgbox.style.left=-439+"px";
            });   
            numbers=1;
        }else
        {
            animate(onefloorimgbox,{left:-439*numbers},1000,Tween.Linear);
        }
        for(var q=0;q<onefloorbtn.length;q++){
        onefloorbtn[q].style.background="#3e3e3e";
            }
    onefloorbtn[numbers-1].style.background="#b61B1F"       
}

var onefloors=setInterval(changeGo,2000);
for(var b=0;b<onefloorbtn.length;b++){
    onefloorbtn[b].index=b;
    onefloorbtn[b].onmouseover=function(){
   clearInterval(onefloors);
    animate(onefloorimgbox,{left:-439*(this.index+1)},1000,Tween.Linear);
        for(var q=0;q<onefloorbtn.length;q++){
        onefloorbtn[q].style.background="#3e3e3e";
            }
     onefloorbtn[this.index].style.background="#b61B1F" ;
      
     
    }
        onefloorbtn[b].onmouseout=function(){

            onefloors=setInterval(changeGo,2000);
            numbers=this.index+1
        }
}
for(var k=0;k<onefloorimgs.length;k++){
    onefloorimgs[k].index=k;
    onefloorimgs[k].onmouseover=function(){
        clearInterval(onefloors);
    }
    onefloorimgs[k].onmouseout=function(){
        onefloors=setInterval(changeGo,2000);
    }
}
// 楼层选项卡
var lc_tab=$(".lc_tab")
var xxkbox=$(".xxkbox")
for (var i = 0; i < xxkbox.length; i++) {
    xxk(lc_tab[i],xxkbox[i])
};
function xxk(lc_tab,xxkbox){
    var lc_tab_item=$(".lc_tab_item",lc_tab)
    var item=$("a",lc_tab_item)
    var xxk=$(".xxkk",xxkbox)
    var obj=item[0];
    var obj2=xxk[0]
    for (var i = 0; i < item.length; i++) {
        item[i].index=i
        item[i].onmouseover=function(){
            obj.style.borderColor="transparent";
            obj2.style.display="none"
            this.style.borderColor="#c81623"
            xxk[this.index].style.display="block"
            this.style.borderBottomColor="#fff"
            obj=this;
            obj2=xxk[this.index];
        }
    };
}
//小楼层banner
var lc3_cen_z=$(".lc3_cen_z")
var lc3_cen_y=$(".lc3_cen_y")
var lc3ban=$(".lc3-ban")
var side_body3=$(".side_body3")
var lc3_cen_zh=$(".lc3_cen_zh")
lc3ban.each(function(i){
    lunbot(side_body3.eq(i),lc3ban.eq(i),lc3_cen_z.eq(i),lc3_cen_y.eq(i),lc3_cen_zh.eq(i))
})
function lunbot(box,inner,prev,next,btnbox){
    var t=setInterval(lunbo,2000)
    var num=1;
    var z=2;
    var nowbtn=$(".bodian:first",btnbox);
    var allbtn=$(".bodian",btnbox);
    function lunbo(){
        num++;
        if(num==allbtn.length+1){
            inner.animate({left:-439*num},500,"linear",function(){
                flag=true;
                $(this).css("left","-439px");
            })
            num=1;
        }else if(num==0){
            inner.animate({left:0},500,"linear",function(){
                flag=true;
                $(this).css("left",allbtn.length*-439+"px");
            })
            num=allbtn.length;
        }
        nowbtn.css("background","#3e3e3e").parent().children().eq(num-1).css("background","#b61b1f");
        inner.animate({left:-439*num},500,"linear",function(){
            flag=true;
        });
        nowbtn=allbtn.eq(num-1);
        
        
    }
    box.hover(function(){
        clearInterval(t)
        next.fadeIn()
        prev.fadeIn()
    },function(){
        t=setInterval(lunbo,3000)
        next.fadeOut()
        prev.fadeOut()
    })
    var flag=true;
    next.click(function(){
        if(flag){
            lunbo()
            flag=false;
        }
    }).mousedown(function(e){
        e.preventDefault();
        e.returnValue=false;
    })
    prev.click(function(){
        if (flag) {
            num-=2;
            lunbo();
            flag=false;
        }
    }).mousedown(function(e){
        e.preventDefault();
        e.returnValue=false;
    })
    allbtn.click(function(){
        nowbtn.css("background","#3e3e3e");
        $(this).css("background","#b61b1f");
        nowbtn=$(this);
        var next=$(this).index()+1;
        inner.animate({left:next*-439},500,"linear")
        num=next;
    })
}

var lc2_cen_z=$(".lc2_cen_z")
var lc2_cen_y=$(".lc2_cen_y")
var lc2cen=$(".lc2_cen")
var lc2_banbox=$(".lc2_banbox")
var lc2_cen_zh=$(".lc2_cen_zh")
lc2cen.each(function(i){
    xlunb(lc2cen.eq(i),lc2_banbox.eq(i),lc2_cen_z.eq(i),lc2_cen_y.eq(i),lc2_cen_zh.eq(i))
})
function xlunb(box,inner,prev,next,btnbox){
    var t=setInterval(jdlunbo,2000)
    var num=1;
    var z=2;
    var nowbtn=$(".bodian:first",btnbox);
    var allbtn=$(".bodian",btnbox);
    function jdlunbo(){
        num++;
        if(num==allbtn.length+1){
            inner.animate({left:-339*num},500,"linear",function(){
                flag=true;
                $(this).css("left","-339px");
            })
            num=1;
        }else if(num==0){
            inner.animate({left:0},500,"linear",function(){
                flag=true;
                $(this).css("left",allbtn.length*-339+"px");
            })
            num=allbtn.length;
        }
        nowbtn.css("background","#3e3e3e").parent().children().eq(num-1).css("background","#b61b1f");
        inner.animate({left:-339*num},500,"linear",function(){
            flag=true;
        });
        nowbtn=allbtn.eq(num-1);
        
        
    }
    box.hover(function(){
        clearInterval(t)
        next.fadeIn()
        prev.fadeIn()
    },function(){
        t=setInterval(jdlunbo,3000)
        next.fadeOut()
        prev.fadeOut()
    })
    var flag=true;
    next.click(function(){
        if(flag){
            jdlunbo()
            flag=false;
        }
    }).mousedown(function(e){
        e.preventDefault();
        e.returnValue=false;
    })
    prev.click(function(){
        if (flag) {
            num-=2;
            jdlunbo();
            flag=false;
        }
    }).mousedown(function(e){
        e.preventDefault();
        e.returnValue=false;
    })
    allbtn.click(function(){
        nowbtn.css("background","#3e3e3e");
        $(this).css("background","#b61b1f");
        nowbtn=$(this);
        var next=$(this).index()+1;
        inner.animate({left:next*-339},500,"linear")
        num=next;
    })
}


var lc12_cen_z=$(".lc12_cen_z")
var lc12_cen_y=$(".lc12_cen_y")
var side_body12=$(".side_body12")
var lc12ban=$(".lc12-ban")
var lc12_cen_zh=$(".lc12_cen_zh")
lc12ban.each(function(i){
    midlun(side_body12.eq(i),lc12ban.eq(i),lc12_cen_z.eq(i),lc12_cen_y.eq(i),lc12_cen_zh.eq(i))
});
function midlun(box,inner,prev,next,btnbox){
    var t=setInterval(jdlunbo,2000)
    var num=1;
    var z=2;
    var nowbtn=$(".bodian:first",btnbox);
    var allbtn=$(".bodian",btnbox);
    function jdlunbo(){
        num++;
        if(num==allbtn.length+1){
            inner.animate({left:-395*num},500,"linear",function(){
                flag=true;
                $(this).css("left","-395px");
            })
            num=1;
        }else if(num==0){
            inner.animate({left:0},500,"linear",function(){
                flag=true;
                $(this).css("left",allbtn.length*-395+"px");
            })
            num=allbtn.length;
        }
        nowbtn.css("background","#3e3e3e").parent().children().eq(num-1).css("background","#b61b1f");
        inner.animate({left:-395*num},500,"linear",function(){
            flag=true;
        });
        nowbtn=allbtn.eq(num-1);
        
        
    }
    box.hover(function(){
        clearInterval(t);
        next.fadeIn()
        prev.fadeIn()
    },function(){
        t=setInterval(jdlunbo,3000)
        next.fadeOut()
        prev.fadeOut()
    })
    var flag=true;
    next.click(function(){
        if(flag){
            jdlunbo()
            flag=false;
        }
    }).mousedown(function(e){
        e.preventDefault();
        e.returnValue=false;
    })
    prev.click(function(){
        if (flag) {
            num-=2;
            jdlunbo();
            flag=false;
        }
    }).mousedown(function(e){
        e.preventDefault();
        e.returnValue=false;
    })
    allbtn.click(function(){
        nowbtn.css("background","#3e3e3e");
        $(this).css("background","#b61b1f");
        nowbtn=$(this);
        var next=$(this).index()+1;
        inner.animate({left:next*-395},500,"linear")
        num=next;
    })
}
// 左侧定位
    var arr=[];
    $(".floor_item").each(function(){
        arr.push($(this).offset().top);
        return arr;
    });
    $(window).scroll(function(){
        var top=$(this).scrollTop();
        if(top>arr[0]-300){
            $(".elevator").show();
        }else{
            $(".elevator").hide();
        }
        for(var i=0;i<arr.length;i++){
            if(top>arr[i]-500){
                index=i;
                $(".elevator").children().filter("ul").children().each(function(){
                    $(this).children().filter("span").css({display:"none"})
                });
                $(".elevator").children().filter("ul").children().eq(i).children().filter("span").css({display:"block"});
            }
        }
    });
    $(".elevator").children().filter("ul").children().hover(function(){
        $(this).children().filter("span").css({display:"block"});
    },function(){
        if(index==$(this).index()){
            return;
        }
        $(this).children().filter("span").css({display:"none"});
    });
    $(".elevator").children().filter("ul").children().click(function(){
        $("html,body").animate({scrollTop:arr[$(this).index()]});
    })
// 右侧定位
  var flbtn=$(".flbtn");
        var des=$(".description");
        var fenlei=$(".fenlei")
        for (var i = 0; i < fenlei.length; i++) {
            fenlei[i].index=i;
            fenlei[i].onmouseover=function(){
                flbtn[this.index].style.backgroundColor="#CA1623";
                des[this.index].style.backgroundColor="#CA1623";
                animate(des[this.index],{left:-62},400);
            }
            fenlei[i].onmouseout=function(){
                flbtn[this.index].style.backgroundColor="#7A6E6E";
                des[this.index].style.backgroundColor="#7A6E6E";
                animate(des[this.index],{left:0},400);
            }
        };
        
         $(".back").click(function(){
            $("html,body").animate({scrollTop:0})
           })
       



})