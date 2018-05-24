package com.twobowl.component.manualTopo.renderer.lineRenderer
{
	import com.twobowl.component.manualTopo.line.ILine;
	import com.twobowl.component.manualTopo.node.INode;
	
	import flash.display.Graphics;
	import flash.geom.Point;
	
	import mx.core.UIComponent;
	
	public class SimpleLineRenderer extends UIComponent implements ILineRenderer
	{
		public function SimpleLineRenderer()
		{
			super();
		}
		public function clearDraw():void {
			var g:Graphics=this.graphics;
			g.clear();
		}
		public function freeDraw(fP:Point,tP:Point):void {
			var g:Graphics=this.graphics;
			g.clear();
			if(!fP){
				fP=new Point(0,0);
			}
			if(!tP){
				tP=new Point(0,0);
			}
			//applyLineStyle(vedge);
			
			/* 开始画线 */
			g.lineStyle(1);
			g.beginFill(0xff0000);

			g.moveTo(fP.x, fP.y);
			g.lineTo(tP.x, tP.y);			
			g.endFill();
			
			
		}
		/**
		 * @inheritDoc
		 * */
		public function draw(line:ILine):void {
			var g:Graphics=this.graphics;
			g.clear();
			
			
			var fromNode:INode = line.fromNode;
			var toNode:INode = line.toNode;
			
			var fP:Point = new Point(fromNode.viewRenderer.x + (fromNode.viewRenderer.width / 2.0), 
									 fromNode.viewRenderer.y + (fromNode.viewRenderer.height / 2.0));
			var tP:Point = new Point(toNode.viewRenderer.x + (toNode.viewRenderer.width / 2.0), 
									 toNode.viewRenderer.y + (toNode.viewRenderer.height / 2.0));
			
			
			//applyLineStyle(vedge);
			
			/* 开始画线 */
			g.lineStyle(1);
			g.beginFill(0xff0000);
			g.moveTo(fP.x, fP.y);
			g.lineTo(tP.x, tP.y);			
			g.endFill();
			
			
		}
	}
}