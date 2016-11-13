//********************ie8和W3C的浏览器兼容   第一个
//如果 getText参数()只有一个obj对象，不传val的话只执行getText 只会获取获取那个obj元素的内容不包含样式，如果2个值都传就是给obj 赋值。
function getText(obj,val)


{
	if(val==undefined){
   if(obj.innerText){//ie8
   	return obj.innerText;
                    }
   	else{

   		return obj.textContent;
   	    }
                      }
   	else{
  if(obj.innerText||obj.innerText==""){//ie8为空  string
   obj.innerText=val;
        }
   	else {

   		 obj.textContent=val;
       	}



                   	}
}



//**************************************************************************   第二个



function getStyle(obj,attr){//调用时 alert(getStyle(box,"width"))
if(obj.currentStyle){
  return obj.currentStyle[attr]//.attr ;
}
else{
  return  getComputedStyle(obj,null)[attr]//.attr;
}




}




//************************************************************  第三个
 function getClass(classname,obj){//作用域
      var obj=obj||document
      if(obj.getElementsByClassName){//判断是w3c
        return obj.getElementsByClassName(classname);//结果返回
      }else{//IE8
        var all=obj.getElementsByTagName("*")//获取所有元素
        var arr=[];
        for(var i=0;i<all.length;i++){
          if(checkRel(all[i].className,classname)){
            arr.push(all[i]);
          }
        }
        return arr;
      }
    }
    function checkRel(str,val){//检测一个元素里是否有想要的类名 //str多个类名集合  //找的类名
      var newarr=str.split(" ");//转换数组
      for(var j=0;j<newarr.length;j++){//遍历数组
        if(newarr[j]==val){//判断是否相同
          return true;
        }                    
      }
      return false;//没有相同的返回假
    }









//*******************************************万能的获取函数
/*function $(select,obj){
  var obj=obj||document;
  if(typeof select=="string"){
    //去掉字符串前后的空格
    select=select.replace(/^\s*|\s*$/g,"");
    if(select.charAt(0)=="."){
      return getClass(select.slice(1),obj);
    }else if(select.charAt(0)=="#"){
            return obj.getElementById(select.slice(1),obj);
    }else if(/^[a-z|1-6]{1,10}$/g.test(select)){//标签名
              return obj.getElementsByTagName(select);
    }
  }else if(typeof select=="function"){
    window.onload=function(){
      select();
    }
  }
}
*/






//***********************************ie和火狐获取父节点的子节点
//先获取所有的儿子，然后根据节点的类型判断，如果为1表示元素节点，保存到数组里
//var fatherbox=$(".father")[0];
// var a =getchilds(fatherbox,"b");
//查找父节点的所有子节点
function getchilds(parent,type){
  var type=type||"a"
  var arr=[];
   var childs= parent.childNodes;
   for(var i=0;i<childs.length;i++){
       if(type=="a"){
        if(childs[i].nodeType==1){
      arr.push(childs[i]);
       }
      } else if(type=="b"){
        if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,"")))
              {
                arr.push(childs[i]);
              }
       }

    
    
   }
   return arr;


}



//*******************************************父元素的第一个子节点,  最后一个，指定一个节点，，下一个兄弟节点
function getFirst(parent){
  //return getchilds(parent)[0];//不算文字 ，从上到下第一个div 
  return getchilds(parent)[0];
}


function getLast(parent){
  //return getchilds(parent)[0];//
  return getchilds(parent)[getchilds(parent).length-1];
}

//8.指定
function getNum(parent,num){
  return getchilds(parent)[num];
}


function zhiDing(parent,i){
  //return getchilds(parent)[0];//
  return getchilds(parent)[i];
}



function getNext(obj){
var parents=obj.parentNode;
var child=getchilds(parents);
for(var i=0;i<child.length;i++){
   if(child[i].nodeName==obj){
     return(child[i+1]);
   }
}
}



/*function getNext(obj){
var next=obj.nextSibling;
while(next.nodeType==3||next.nodeType==8){
  next=next.nextSibling;
  if(next==null){
    return false;
  }
}
return next;
}
*/

function getUp(obj){
  var up=obj.previousSibling;
  if(up==null){
       return false;
    }
  while(up.nodeType==3||up.nodeType==8){
            up=up.previousSibling;
            if(up==null){
       return false;
    }
  }
  return up;
}



//插入到某一个 元素的 下面  
// 原理：找到第二个参数的下一个兄弟节点，将第一个参数插入到此兄弟之前


/*Object.prototype.insertAfter=function(obj1,obj2){
var next=getNext(obj2);
if(next){
  this.insertBefore(obj1,next);
}else{
  this.appendChild(obj1);
}
}*/




//获取滚动条的上边距
function getScrollT(){
  
var scrollT=document.documentElement.scrollTop||
document.body.scrollTop;
return scrollT;
}



//同一元素添加多个时间的兼容函数
//one.addEventListener("click",bb,false);
//one.attachEvent("onclick",bb)
/*function addEvent(obj,ev,fun){
if(obj.addEventListener)
{
  return obj.addEventListener(ev,fun,false);
}
else{
  return obj.attachEvent("on"+ev,function(){
    fun.call(obj);
  });
}
}
*/

//同一元素删除多个时间的兼容函数

//拖拽的练习
/*function drag(obj){

var cw=document.documentElement.clientWidth;
var ch=document.documentElement.clientHeight;
var ow=obj.offsetWidth;
var oh=obj.offsetHeight;
obj.onmousedown=function(e){
          var ev=e||window.event;
          var ox=ev.offsetX;
          var oy=ev.offsetY;
          //阻止浏览器默认行为 选中文字
         if (ev.preventDefault ){
           ev.preventDefault();} //阻止默认浏览器动作(W3C)
              else{
             ev.returnValue = false;//IE中阻止函数器默认动作的
                }//方式
        document.onmousemove=function(e){
              var ev=e||window.event;
               var cx=ev.clientX;
              var cy=ev.clientY;
               var newx=cx-ox;
              var newy=cy-oy;
              if(newx<=0){
                newx=0;
              }
              if(newx>=cw-ow)
              {
                newx=cw-ow;
              }
                if(newy<=0){
                newy=0;
              }
              if(newy>=ch-oh)
              {
                newy=ch-oh;
              }

               obj.style.left=newx+"px";
               obj.style.top=newy+"px";

        }



}
obj.onmouseup=function(){
          document.onmousemove=null;
}
}
*/




//兼容函数 滚轮
/*//obj给哪个对象添加滚轮事件，upfun处理滚轮向上的函数 down滚轮向下的函数
function mouseWheel(obj,upfun,downfun){
    if(obj.attachEvent){
    obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
    }else if(obj.addEventListener){
    obj.addEventListener("mousewheel",scrollFn,false);
    //chrome,safari -webkit-
    obj.addEventListener("DOMMouseScroll",scrollFn,false);
    //firefox -moz-
    }
    function scrollFn(e){
      var ev=e||window.event;
        if (ev.preventDefault ){
          ev.preventDefault(); //阻止默认浏览器动作(W3C)
        }
        
        else{
          ev.returnValue = false;//IE中阻止函数器默认动作的方式
        }
        
      var num=ev.detail||wheelDelta;
      if(num==-3||num==120){//向上
        if(upfun){
          upfun();
        }
      }
      if(num==3||num==-120){//向下
        if(downfun){
          downfun();
        }
      }
    }
}*/////15.hover
//判断某个元素是否包含有另外一个元素
/* function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }
*/
//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
/*  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }*/
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
/*function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}*/
 // function getEvent (e) {
 //      return e||window.event;
 // }
/********************************/

/*
function getText(obj,val){
  if(val==undefined){
      if(obj.innerText){
        return innerText
      }else{
        return innerContent
      }
  }else{
    if(obj.innerText){
         obj.innerText=val;
    }else{
          obj.innerContent=val;
    }


  }
}*/



/*function getclass(classname){

 if(document.getElementsByClassName){
  return document.getElementsByClassName(classname);

 }
 else{
  var newarr=[];
  var b = document.getElementsByTagName("*");
  for(var i =0;i<b.length;i++){
       if(b[i].className==classname){
         newarr.push(b[i]);
       }
  }return newarr

 }

}*/


/*
var a =getclass(word);
var b = getclass(content);

for(var i=0;i<a.length;i++){
    a[i].index=i;
    a[i].onclick=function(){
            for(var j=0;j<b.length;j++){

              b[j].style.display="none";
            }

         b[this.index].style.display="block"
    }
}*/

/*function getStyle(obj,attr){
if(...){
  return
}
}*/



