package com.twobowl.component.manualTopo.main
{
	import com.twobowl.component.manualTopo.line.ILine;
	import com.twobowl.component.manualTopo.line.Line;
	import com.twobowl.component.manualTopo.node.INode;
	import com.twobowl.component.manualTopo.node.Node;
	import com.twobowl.component.manualTopo.renderer.lineRenderer.ILineRenderer;
	import com.twobowl.component.manualTopo.renderer.lineRenderer.SimpleLineRenderer;
	import com.twobowl.component.manualTopo.renderer.nodeRenderer.SimpleNodeRenderer;
	
	
	import flash.utils.Dictionary;
	
	import mx.core.Container;
	import mx.core.UIComponent;
	
	/**
	 * 管理类 
	 * @author twobowl
	 * 
	 */
	public class TopoManager
	{
		public function TopoManager()
		{
		}
		protected var _nodeIdMap:Dictionary=new Dictionary();//保存节点的集合,key为id
		protected var _nodeUIMap:Dictionary=new Dictionary();//保存节点的集合,key为页面显示代理
		protected var _lineMap:Dictionary=new Dictionary();//保存线的集合
		public var status:String;
		public static const S_NORMAL:String="s_normal";//初始状态
		public static const S_DRAWLINE:String="s_drawing";//开始拖动,添加一个控件
		
		public var drawSpace:Container;
		/**
		 * 创建一个节点 
		 * @param type
		 * @return 
		 * 
		 */
		public function createNode(data:Object,viewRenderer:UIComponent=null):INode{
			var node:INode=new Node();
			node.data=data;
			if(viewRenderer==null){
				node.viewRenderer=new SimpleNodeRenderer();
			}else{
				node.viewRenderer=viewRenderer;
			}			
			
			(node.viewRenderer as Container).data=node;	
			
			_nodeIdMap[node.id]=node;
			_nodeUIMap[node.viewRenderer]=node;		
			drawSpace.addChild(node.viewRenderer);
			node.viewRenderer.x=int(data.@x);
			node.viewRenderer.y=int(data.@y);
			return node;
		}
		/**
		 * 创建一条线 
		 * @param type
		 * @return 
		 * 
		 */
		public function createLine(data:Object,viewRenderer:ILineRenderer=null):ILine{
			var line:ILine=new Line();
			line.data=data;
//			
			line.fromNode=_nodeIdMap[data.@fromNode+""];
			if(line.fromNode){
				line.fromNode.addOutLine(line);
			}
			line.toNode=_nodeIdMap[data.@toNode+""];
			if(line.toNode){
				line.toNode.addInLine(line);
			}
			if(viewRenderer){
				line.viewRenderer=viewRenderer;
			}else{
				line.viewRenderer=new SimpleLineRenderer();
			}
			
			(line.viewRenderer as ILineRenderer).draw(line);
			_lineMap[line.id]=line;
			if((line.viewRenderer as UIComponent).parent){
				(line.viewRenderer as UIComponent).parent.removeChild(line.viewRenderer as UIComponent);
			}
			drawSpace.addChildAt(line.viewRenderer as UIComponent,0);
			return line;
		}
		
		/**
		 *删除一个节点 
		 * @param node
		 * @return 
		 * 
		 */
		public function removeNode(node:INode):INode{		
			drawSpace.removeChild(node.viewRenderer);	
			delete _nodeIdMap[node.id];
			delete _nodeUIMap[node.viewRenderer];	
			return node;
		}
		/**
		 *删除一条线 
		 * @param node
		 * @return 
		 * 
		 */
		public function removeLine(line:Line):Line{		
			drawSpace.removeChild(line.viewRenderer as UIComponent);		
			delete _lineMap[line.id];
			return line;
		}
		/**
		 * 刷新页面 
		 * 
		 */
		public function refresh():void {
			drawSpace.invalidateDisplayList();
		}
		
		/**
		 * 从xml创建整个拓扑图 
		 * @param xml
		 * 
		 */
		public function createFromXML(xml:XML):void {
			for each(var nodeXML:XML in xml.node){
				createNode(nodeXML);
			}
			for each(var lineXML:XML in xml.line){
				createLine(lineXML);
			}
		}
		
		/**
		 * 当节点对象移动时，更新相关线的显示 
		 * @param nodeUI
		 * 
		 */
		public function updateLineRendererForNodeUI(nodeUI:UIComponent):void{
			var node:INode=_nodeUIMap[nodeUI];	
			
			if(node){
				var inLines:Array=node.inLines;
				for each(var line:Object in inLines){
					(line as ILine).viewRenderer.draw(line as ILine);
				}
				var outLines:Array=node.outLines;
				for each(line in outLines){
					
					(line as ILine).viewRenderer.draw(line as ILine);
				}
			}
		}
		public function getNodeByUI(nodeUI:UIComponent):INode{
			var node:INode=_nodeUIMap[nodeUI];	
			
			return node;
		}
		public function getXML():XML{
			var root:XML=new XML("<root></root>");
			for each(var node:Object in _nodeIdMap){
				root.appendChild((node as INode).data);
			}
			for each(var line:Object in _lineMap){
				root.appendChild((line as ILine).data);
			}
			
			return root;
		}
	}
}