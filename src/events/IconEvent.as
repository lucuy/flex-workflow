package events
{
	import flash.events.Event;
	
	public class IconEvent extends Event
	{
		public static var ICON_MOUSE_DOWN: String = "icon_mouse_down";
		public static var ICON_MOUSE_UP: String = "icon_mouse_up";
		public static var ICON_MOVE: String = "icon_move";
		public static var ICON_DOUBLE_CLICK:String = "icon_double_click";
		
		public var icon: Object;
		
		public function IconEvent(type: String)
		{
			super(type);
		}

	}
}