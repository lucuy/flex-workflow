package components
{
	import mx.core.UIComponent;
    import flash.display.Sprite;
    import mx.controls.Alert; 
    import flash.events.*; 
	public class ArrowLine extends UIComponent
	{
		private var _startX: int; //起点X坐标
		private var _startY: int;//起点Y坐标
		private var _endX: int; //终点X坐标
		private var _endY: int; //终点Y坐标
		private var _radio: int; //小圆的半径
		private var _thickness: Number; //线条粗细
		private var _selected: Boolean; //线条是否被选中
		private var _fromIcon: String; //从..开始 名称
		private var _toIcon: String; //到..结束 名称
		
		private var _lineColor: uint;//线条颜色
		private var _circleColor: uint; //尾部小圆的颜色
		private var mouseisdown:Boolean=false;//鼠标是否处于按状态 

        private var mouseisonline:Boolean=false;//鼠标是否在线上 
        
		public function get circleColor(): uint{
			return _circleColor;
		}
		
		public function set circleColor(value: uint): void{
			this._circleColor = value;
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
		
		public function get thickness(): Number{
			return _thickness;
		}
		
		public function set thickness(value: Number): void{
			this._thickness = value;
			draw();
		}
		
		public function get radio(): int{
			return _radio;
		}
		
		public function set radio(value: int): void{
			this._radio = value;
			draw();
		}
		
		public function get lineColor(): uint{
			return _lineColor;
		}
		
		public function set lineColor(value: uint): void{
			this._lineColor = value;
			draw();
		}
		
		public function get startX(): int{
			return _startX;
		}
		
		public function set startX(value: int): void{
			this._startX = value;
			draw();
		}
		
		public function get startY(): int{
			return _startY;
		}
		
		public function set startY(value: int): void{
			this._startY = value;
			draw();
		}
		
		public function get endX(): int{
			return _endX;
		}
		
		public function set endX(value: int): void{
			this._endX = value;
			draw();
		}
		
		public function get endY(): int{
			return _endY;
		}
		
		public function set endY(value: int): void{
			this._endY = value;
			draw();
		}
		
		public function ArrowLine(startX: int = 0,
			startY: int = 0,
			endX: int = 0,
			endY: int = 0,
			lineColor: uint = 0x000000,
			thickness: Number = 3,
			radio: int = 0,
			circleColor: uint = 0xFF0000)
		{
			super();
			this._endX = endX;
			this._endY = endY;
			this._startX = startX;
			this._startY = startY;
			this._lineColor = lineColor;
			this._radio = radio;
			this._thickness = thickness;
			this._circleColor = circleColor;
			
			this.draw();
		}
		
		//画直线,并在尾端画一个小圆
		public function draw(): void{
			this.graphics.clear();//清除前面画的东东
			
			//画线
			this.graphics.lineStyle(thickness, lineColor);
			this.graphics.moveTo(startX, startY);
			this.graphics.lineTo(endX, endY);
			
			/*//在线条尾部画小圆
			
			this.graphics.lineStyle(2, circleColor);
			this.graphics.drawCircle(endX, endY, radio);*/
			//在线条尾部画小三角形
			 var slopy : Number;
             var cosy : Number;
             var siny : Number;
                        
             var Par : Number = 10.0;
             slopy = Math.atan2((startY-endY),(startX-endX));
             cosy = Math.cos(slopy);
             siny = Math.sin(slopy);
             this.graphics.moveTo(endX,endY);
             this.graphics.beginFill(0x000000);
             this.graphics.lineTo(endX + ( Par * cosy - ( Par / 2.0 * siny ) ),
                            endY + ( Par * siny + ( Par / 2.0 * cosy ) ) );
             this.graphics.lineTo(endX + ( Par * cosy + Par / 2.0 * siny ),
                            endY - ( Par / 2.0 * cosy - Par * siny ) );
             this.graphics.lineTo(endX,endY);
             this.graphics.endFill();
             events();
		}
//事件绑定
private function events(): void{
			this.addEventListener(MouseEvent.MOUSE_DOWN, onLineMouseDown);
			this.addEventListener(MouseEvent.MOUSE_UP, onLineMouseUp);
			this.addEventListener(MouseEvent.MOUSE_MOVE, onLineMouseMove);
			this.addEventListener(MouseEvent.DOUBLE_CLICK,onLineMouseDoubleClick);//鼠标双击 
            this.addEventListener(MouseEvent.CLICK,onLineMouseClick);//鼠标单击 
}
		//-------------------------事件处理------------------------ 
/******************************************************************* 
*= 响应鼠标按下事件 
*+ 无返回对像 
*******************************************************************/ 
public function onLineMouseDown(event:MouseEvent):void{ 
//mouseisdown=true;//鼠标按下 
//Alert.show("鼠标按下 "); 
} 
/******************************************************************* 
*= 响应鼠标移动事件 
*+ 无返回对像 
*******************************************************************/ 
public function onLineMouseMove(event:MouseEvent):void{ 
if(mouseisdown){ 
	//Alert.show("在线上1"); 
var mouseXX:Number=event.stageX; 
var mouseYY:Number=event.stageY; 
if((mouseXX/mouseYY)==(this.startX/this.startY)){//在线上 
//Alert.show("鼠标移动在线上3"); 
}else{ 
} 
} 


} 
/******************************************************************* 
*= 响应鼠标弹起事件 
*+ 无返回对像 
*******************************************************************/ 
public function onLineMouseUp(event:MouseEvent):void{ 
mouseisdown=false;//鼠标弹起 
//Alert.show("鼠标弹起事件 "); 
} 
/******************************************************************* 
*= 响应鼠标单击事件 
*+ 无返回对像 
*******************************************************************/ 
public function onLineMouseClick(event:MouseEvent):void{ 
	_selected=true;
	//Alert.show("鼠标单击事件  "); 

} 
/******************************************************************* 
*= 响应鼠标双击事件 
*+ 无返回对像 
*******************************************************************/ 
public function onLineMouseDoubleClick(event:MouseEvent):void{ 
	//Alert.show("鼠标双击事件 "); 

} 

public function setMouseisdown(Pmouseisdown:Boolean):void{ 
mouseisdown=Pmouseisdown; 
} 
public function getMouseisdown():Boolean{ 
return mouseisdown; 
} 

public function setMouseisonline(Pmouseisonline:Boolean):void{ 
mouseisonline=Pmouseisonline; 
} 
public function getMouseisonline():Boolean{ 
return mouseisonline; 
} 
public function get selected(): Boolean{
			return _selected;
		}
		
public function set selected(value: Boolean): void{
			this._selected = value;
			draw();
		}
	}
}

