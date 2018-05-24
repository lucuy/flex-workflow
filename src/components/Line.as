package components
{
import flash.display.Sprite; 
import flash.events.*; 
//----------  加载系统显示类  end  -------------------- 
public class Line{ 
//----------变量定义 start------------------------ 
private var startX:Number=0;//开始点的x坐标 
private var startY:Number=0;//开始点的y坐标 
private var endX:Number=0;//结束点的x坐标 
private var endY:Number=0;//结束点的y坐标 
private var mwith:int=10;//箭头大小 
private var lj:uint=30;//箭头角度 
private var rj:uint=60;//箭头角度 
private var linesize:uint=2;//线条粗度 
private var linecolor:uint=0x990000;//线条颜色 
private var linestyle:Number=1.0// 表示线条颜色的 Alpha 值 
private var _fromIcon: String; //从..开始 名称
private var _toIcon: String; //到..结束 名称
private var triangle:Sprite = new Sprite();//路径对像 
private var mouseisdown:Boolean=false;//鼠标是否处于按状态 
private var coordinate:Array = new Array();//线段坐标 
private var mouseisonline:Boolean=false;//鼠标是否在线上 


//----------变量定义 end ------------------------- 
/******************************************************************* 
*= 根据两个从标点画一个箭头 
*@ PstartX:Number 开始点的X坐标值 
*@ PstartY:Number 开始点的Y坐标值 
*@ PendX:Number  结束点的X坐标值 
*@ PendY:Number  结束点的Y坐标值 
*+ 返回Sprite对像 
********************************************************************/ 
public function markLineNode(PstartX:Number=200,PstartY:Number=200,PendX:Number=500,PendY:Number=500):Sprite{ 
coordinate[0]=[PstartX,PstartY]; 
coordinate[1]=[PendX,PendY]; 
return line(); 
} 
/******************************************************************* 
*= 根据给点的二维数据画折线箭头 
*@ Pcoordinate:Array 一系列坐标点的二维数组 
*+ 返回Sprite对像 
********************************************************************/ 
public function markLineInit(Pcoordinate:Array):Sprite{ 
coordinate=Pcoordinate; 
return line(); 
} 
/******************************************************************* 
*= 根据已有二维数组对像画箭头 
*+ 返回Sprite对像 
*******************************************************************/ 
public function markLineMoues():Sprite{ 
return line(); 
} 
/******************************************************************* 
*= 根据已有二维数组对像画箭头，供类内部使用 
*+ 返回Sprite对像 
*******************************************************************/ 
private function line():Sprite{ 
triangle.graphics.clear(); 
triangle.graphics.lineStyle(linesize, linecolor,linestyle); 
triangle.graphics.moveTo(coordinate[0][0],coordinate[0][1]); 
for(var i:int=0;i <coordinate.length;i++){ 
triangle.graphics.lineTo(coordinate[i][0],coordinate[i][1]);//画线段 
} 
//================确定箭头坐标=========================================== 
//-------结束点----------------------------------- 
var endX:Number=coordinate[coordinate.length-1][0]; 
var endY:Number=coordinate[coordinate.length-1][1]; 
//-------开始点------------------------------------ 
var startX:Number=coordinate[coordinate.length-2][0]; 
var startY:Number=coordinate[coordinate.length-2][1]; 
var xx:Number=endX; 
var yy:Number=endY; 
//-------计算箭头结束点------------------------------------------------------------------- 
var xx1:Number=xx-mwith*Math.cos(Math.atan((yy-startY)/(xx-startX))-(lj * (Math.PI/180))); 
var yy1:Number=yy-mwith*Math.sin(Math.atan((yy-startY)/(xx-startX))-(lj * (Math.PI/180))); 
var xx2:Number=xx-mwith*Math.sin((rj * Math.PI/180)-Math.atan((yy-startY)/(xx-startX))); 
            var yy2:Number=yy-mwith*Math.cos((rj * Math.PI/180)-Math.atan((yy-startY)/(xx-startX))); 
if(startX>endX){ 
xx1=xx+mwith*Math.cos(Math.atan((yy-startY)/(xx-startX))-(lj * (Math.PI/180))); 
yy1=yy+mwith*Math.sin(Math.atan((yy-startY)/(xx-startX))-(lj * (Math.PI/180))); 
xx2=xx+mwith*Math.sin((rj * Math.PI/180)-Math.atan((yy-startY)/(xx-startX))); 
            yy2=yy+mwith*Math.cos((rj * Math.PI/180)-Math.atan((yy-startY)/(xx-startX))); 
} 
//----------------开始画箭头--------------------------------------------------------- 
triangle.graphics.lineTo(xx1,yy1); 
triangle.graphics.moveTo(endX,endY); 
triangle.graphics.lineTo(xx2,yy2); 
//----------------响应鼠标事件-------------------------------------------------- 
triangle.addEventListener(MouseEvent.MOUSE_DOWN,mouser_down);//鼠标按下 
triangle.addEventListener(MouseEvent.MOUSE_MOVE,mouser_move);//鼠标移动 
triangle.addEventListener(MouseEvent.MOUSE_UP,mouser_up);//鼠标弾起 
triangle.addEventListener(MouseEvent.DOUBLE_CLICK,mouser_click);//鼠标双击 
triangle.addEventListener(MouseEvent.CLICK,mouser_double_click);//鼠标单击 
return triangle; 
} 
//-------------------------事件处理------------------------ 
/******************************************************************* 
*= 响应鼠标按下事件 
*+ 无返回对像 
*******************************************************************/ 
public function mouser_down(event:MouseEvent){ 
mouseisdown=true;//鼠标按下 
} 
/******************************************************************* 
*= 响应鼠标移动事件 
*+ 无返回对像 
*******************************************************************/ 
public function mouser_move(event:MouseEvent){ 
if(mouseisdown){ 
var mouseXX:Number=event.stageX; 
var mouseYY:Number=event.stageY; 
if((mouseXX/mouseYY)==(coordinate[0][0]/coordinate[0][1])){//在线上 
trace("在线上"); 
}else{ 
} 
//coordinate[coordinate.length]=[mouseXX,mouseYY]; 

//markLine(); 
} 


} 
/******************************************************************* 
*= 响应鼠标弹起事件 
*+ 无返回对像 
*******************************************************************/ 
public function mouser_up(event:MouseEvent){ 
mouseisdown=false;//鼠标弹起 
} 
/******************************************************************* 
*= 响应鼠标单击事件 
*+ 无返回对像 
*******************************************************************/ 
public function mouser_click(event:MouseEvent){ 

} 
/******************************************************************* 
*= 响应鼠标双击事件 
*+ 无返回对像 
*******************************************************************/ 
public function mouser_double_click(event:MouseEvent){ 

} 
//=================================================================== 
public function setTriangle(Ptriangle:Sprite):void{ 
triangle=Ptriangle; 
} 
public function getTriangle():Sprite{ 
return triangle; 
} 

public function setMouseisdown(Pmouseisdown:Boolean):void{ 
mouseisdown=Pmouseisdown; 
} 
public function getMouseisdown():Boolean{ 
return mouseisdown; 
} 

public function setCoordinate(Pcoordinate:Array):void{ 
coordinate=Pcoordinate; 
} 
public function getCoordinate():Array{ 
return coordinate; 
} 

public function setMouseisonline(Pmouseisonline:Boolean):void{ 
mouseisonline=Pmouseisonline; 
} 
public function getMouseisonline():Boolean{ 
return mouseisonline; 
} 
public function get toIcon(): String{
			return _toIcon;
		}
		
		public function set toIcon(value: String): void{
			this._toIcon = value;
		}
		
		public function get fromIcon(): String{
			return _fromIcon;
		}
		
		public function set fromIcon(value: String): void{
			this._fromIcon = value;
		}
//==== 
} 
}

