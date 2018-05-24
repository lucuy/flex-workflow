package com.twobowl.component.manualTopo.line
{
	import com.twobowl.component.manualTopo.node.INode;
	import com.twobowl.component.manualTopo.renderer.lineRenderer.ILineRenderer;
	import mx.core.UIComponent;
	/**
	 * 线类接口 
	 * @author twobowl
	 * 
	 */
	public interface ILine
	{
		function get id():String;//唯一id
		function set id(id:String):void;
		function get fromNode():INode;//起始点
		function set fromNode(fromNode:INode):void;
		function get toNode():INode;//终结点
		function set toNode(toNode:INode):void;
		function get viewRenderer():ILineRenderer;//页面显示代理
		function set viewRenderer(viewRenderer:ILineRenderer):void;
		function get data():Object;//业务数据
		function set data(data:Object):void;
	}
}