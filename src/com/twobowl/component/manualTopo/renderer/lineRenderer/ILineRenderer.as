package com.twobowl.component.manualTopo.renderer.lineRenderer
{
	import com.twobowl.component.manualTopo.line.ILine;
	import flash.geom.Point;
	/**
	 * 线类显示代理要实现的接口 
	 * @author twobowl
	 * 
	 */
	public interface ILineRenderer
	{
		/**
		* 画线方法，一般是根据连接的node画线
		*/
		function draw(line:ILine):void;
		/**
		* 根据给定点画线
		*/
		function freeDraw(fP:Point,tP:Point):void ;
	}
	
}