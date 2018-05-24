package com.twobowl.component.manualTopo.node
{
	import mx.core.UIComponent;
	import com.twobowl.component.manualTopo.line.ILine;
	/**
	 * 节点类接口 
	 * @author twobowl
	 * 
	 */
	public interface INode
	{
		function get id():String;//唯一id
		function set id(id:String):void;
		function get x():int;
		function set x(x:int):void;
		
		function get y():int;
		function set y(y:int):void;
		
		function get viewRenderer():UIComponent;
		function set viewRenderer(viewRenderer:UIComponent):void;
		
		function get data():Object;
		function set data(data:Object):void;
		
		function get inLines():Array ;
		function get outLines():Array;
		
		function addInLine(line:ILine):void;
		function addOutLine(line:ILine):void;
		
		function removeInLine(line:ILine):void;
		function removeOutLine(line:ILine):void;
	}
	
}