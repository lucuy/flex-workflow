package com.twobowl.component.manualTopo.node
{
	import mx.core.UIComponent;
	import com.twobowl.component.manualTopo.line.ILine;
	/**
	 * 节点类 
	 * @author twobowl
	 * 
	 */
	public class Node implements INode
	{
		public function Node()
		{
			
		}
		private var _id:String;//唯一id
		private var _x:int=0;//x位置
		private var _y:int=0;//y位置
		private var _viewRenderer:UIComponent;//页面显示对象
		private var _data:Object;//业务数据,目前只支持xml类型的data
		protected var _inLines:Array=[];
		protected var _outLines:Array=[];
		public function get id():String{
			return _id;			
		}
		public function set id(id:String):void{
			_id=id;
		}
		public function get x():int{
			return _x;			
		}
		public function set x(x:int):void{
			_x=x;
		}
		
		public function get y():int{
			return _y;			
		}
		public function set y(y:int):void{
			_y=y;
		}
		public function get viewRenderer():UIComponent{
			return _viewRenderer;			
		}
		public function set viewRenderer(viewRenderer:UIComponent):void{
			_viewRenderer=viewRenderer;
		}
		public function get data():Object{
			return _data;			
		}
		public function set data(data:Object):void{
			_id=data.@id;
			_data=data;
		}
		/**
		 * @inheritDoc
		 * */
		public function get inLines():Array {
			return _inLines;
		}
		/**
		 * @inheritDoc
		 * */
		public function get outLines():Array {
			return _outLines;
		}
		/**
		 * @inheritDoc
		 * */
		public function addInLine(line:ILine):void {
			//_inLines.unshift(line);
			_inLines[_inLines.length]=line;
		}
		
		/**
		 * @inheritDoc
		 * */
		public function addOutLine(line:ILine):void {
			//_outLines.unshift(line);
			_outLines[_outLines.length]=line;
		}
		/**
		 * @inheritDoc
		 * */
		public function removeInLine(line:ILine):void {
			
		}
		
		/**
		 * @inheritDoc
		 * */
		public function removeOutLine(line:ILine):void {
			
		}
	}
}