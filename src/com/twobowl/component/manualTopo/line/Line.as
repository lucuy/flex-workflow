package com.twobowl.component.manualTopo.line
{
	import com.twobowl.component.manualTopo.node.INode;
	import com.twobowl.component.manualTopo.renderer.lineRenderer.ILineRenderer;
	
	import mx.core.UIComponent;
	/**
	 *线对象 
	 * @author twobowl
	 * 
	 */
	public class Line implements ILine
	{
		public function Line() 
		{
		}
		private var _id:String;
		private var _fromNode:INode;//起始点
		private var _toNode:INode;//终结点
		private var _viewRenderer:ILineRenderer;//页面显示代理
		private var _data:Object;//业务数据
		public function get id():String{
			return _id;			
		}
		public function set id(id:String):void{
			_id=id;
		}
		public function get fromNode():INode{
			return _fromNode;			
		}
		public function set fromNode(fromNode:INode):void{
			_fromNode=fromNode;
		}
		public function get toNode():INode{
			return _toNode;			
		}
		public function set toNode(toNode:INode):void{
			_toNode=toNode;
		}
		public function get viewRenderer():ILineRenderer{
			return _viewRenderer;			
		}
		public function set viewRenderer(viewRenderer:ILineRenderer):void{
			_viewRenderer=viewRenderer;
		}
		public function get data():Object{
			return _data;			
		}
		public function set data(data:Object):void{
			_id=data.@id;
			_data=data;
		}
		
	}
}