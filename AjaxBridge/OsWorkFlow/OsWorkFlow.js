/**
 * WARNING! THIS IS A GENERATED FILE, AND WILL BE RE-GENERATED EACH TIME THE
 * AJAXBRIDGE IS RUN.
 *
 * You should keep your javascript code inside this file as light as possible, 
 * and rather keep the body of your Ajax application in separate *.js files. 
 *
 * Do make a backup of your changes, before re-generating this file (AjaxBridge 
 * will display a warning message to you).
 *
 * Please refer to the built-in documentation inside the AjaxBridge application 
 * for help on using this file.
 */
 
 
/**
 * Application "OsWorkFlow.mxml"
 */

/**
 * The "OsWorkFlow" javascript namespace. All the functions/variables you
 * have selected under the "OsWorkFlow.mxml" in the tree will be
 * available as static members of this namespace object.
 */
OsWorkFlow = {};


/**
 * Listen for the instantiation of the Flex application over the bridge
 */
FABridge.addInitializationCallback("b_OsWorkFlow", OsWorkFlowReady);


/**
 * Hook here all the code that must run as soon as the "OsWorkFlow" class
 * finishes its instantiation over the bridge.
 *
 * For basic tasks, such as running a Flex method on the click of a javascript
 * button, chances are that both Ajax and Flex may well have loaded before the 
 * user actually clicks the button.
 *
 * However, using the "OsWorkFlowReady()" is the safest way, as it will 
 * let Ajax know that involved Flex classes are available for use.
 */
function OsWorkFlowReady() {

	// Initialize the "root" object. This represents the actual 
	// "OsWorkFlow.mxml" flex application.
	b_OsWorkFlow_root = FABridge["b_OsWorkFlow"].root();
	

	// Global variables in the "OsWorkFlow.mxml" application (converted 
	// to getters and setters)

	OsWorkFlow.getTransitions = function () {
		return b_OsWorkFlow_root.getTransitions();
	};


	OsWorkFlow.getStates = function () {
		return b_OsWorkFlow_root.getStates();
	};


	OsWorkFlow.getControlBar = function () {
		return b_OsWorkFlow_root.getControlBar();
	};


	OsWorkFlow.getPageTitle = function () {
		return b_OsWorkFlow_root.getPageTitle();
	};


	OsWorkFlow.getPreloader = function () {
		return b_OsWorkFlow_root.getPreloader();
	};


	OsWorkFlow.getScriptTimeLimit = function () {
		return b_OsWorkFlow_root.getScriptTimeLimit();
	};


	OsWorkFlow.getResetHistory = function () {
		return b_OsWorkFlow_root.getResetHistory();
	};


	OsWorkFlow.getFrameRate = function () {
		return b_OsWorkFlow_root.getFrameRate();
	};


	OsWorkFlow.getScriptRecursionLimit = function () {
		return b_OsWorkFlow_root.getScriptRecursionLimit();
	};


	OsWorkFlow.getHistoryManagementEnabled = function () {
		return b_OsWorkFlow_root.getHistoryManagementEnabled();
	};


	OsWorkFlow.getUsePreloader = function () {
		return b_OsWorkFlow_root.getUsePreloader();
	};


	OsWorkFlow.getConstructor = function () {
		return b_OsWorkFlow_root.getConstructor();
	};


	OsWorkFlow.getSuper = function () {
		return b_OsWorkFlow_root.getSuper();
	};


	OsWorkFlow.getThis = function () {
		return b_OsWorkFlow_root.getThis();
	};


	OsWorkFlow.getBtnBar = function () {
		return b_OsWorkFlow_root.getBtnBar();
	};


	OsWorkFlow.getDgProp = function () {
		return b_OsWorkFlow_root.getDgProp();
	};


	OsWorkFlow.getFlow = function () {
		return b_OsWorkFlow_root.getFlow();
	};


	OsWorkFlow.getGlow1 = function () {
		return b_OsWorkFlow_root.getGlow1();
	};


	OsWorkFlow.getGlow2 = function () {
		return b_OsWorkFlow_root.getGlow2();
	};


	OsWorkFlow.getHdbox = function () {
		return b_OsWorkFlow_root.getHdbox();
	};


	OsWorkFlow.getIcons = function () {
		return b_OsWorkFlow_root.getIcons();
	};


	OsWorkFlow.getTabBar = function () {
		return b_OsWorkFlow_root.getTabBar();
	};


	OsWorkFlow.getVbox = function () {
		return b_OsWorkFlow_root.getVbox();
	};


	OsWorkFlow.getViewstack1 = function () {
		return b_OsWorkFlow_root.getViewstack1();
	};


	OsWorkFlow.getXmlCanvas = function () {
		return b_OsWorkFlow_root.getXmlCanvas();
	};


	OsWorkFlow.getXmlHTML = function () {
		return b_OsWorkFlow_root.getXmlHTML();
	};


	// Global functions in the "OsWorkFlow.mxml" application

	OsWorkFlow.LayoutContainer = function() {
		return b_OsWorkFlow_root.LayoutContainer();
	};

	OsWorkFlow.getConstraintColumns = function() {
		return b_OsWorkFlow_root.getConstraintColumns();
	};

	OsWorkFlow.setConstraintColumns = function(argArray) {
		b_OsWorkFlow_root.setConstraintColumns(argArray);
	};

	OsWorkFlow.getLayout = function() {
		return b_OsWorkFlow_root.getLayout();
	};

	OsWorkFlow.setLayout = function(argString) {
		b_OsWorkFlow_root.setLayout(argString);
	};

	OsWorkFlow.getConstraintRows = function() {
		return b_OsWorkFlow_root.getConstraintRows();
	};

	OsWorkFlow.setConstraintRows = function(argArray) {
		b_OsWorkFlow_root.setConstraintRows(argArray);
	};

	OsWorkFlow.getChildIndex = function(argDisplayObject) {
		return b_OsWorkFlow_root.getChildIndex(argDisplayObject);
	};

	OsWorkFlow.getChildByName = function(argString) {
		return b_OsWorkFlow_root.getChildByName(argString);
	};

	OsWorkFlow.getNumChildren = function() {
		return b_OsWorkFlow_root.getNumChildren();
	};

	OsWorkFlow.setChildIndex = function(argDisplayObject, argInt) {
		b_OsWorkFlow_root.setChildIndex(argDisplayObject, argInt);
	};

	OsWorkFlow.getTabChildren = function() {
		return b_OsWorkFlow_root.getTabChildren();
	};

	OsWorkFlow.setTabChildren = function(argBoolean) {
		b_OsWorkFlow_root.setTabChildren(argBoolean);
	};

	OsWorkFlow.addChild = function(argDisplayObject) {
		return b_OsWorkFlow_root.addChild(argDisplayObject);
	};

	OsWorkFlow.swapChildren = function(argDisplayObject1, argDisplayObject2) {
		b_OsWorkFlow_root.swapChildren(argDisplayObject1, argDisplayObject2);
	};

	OsWorkFlow.removeChild = function(argDisplayObject) {
		return b_OsWorkFlow_root.removeChild(argDisplayObject);
	};

	OsWorkFlow.contains = function(argDisplayObject) {
		return b_OsWorkFlow_root.contains(argDisplayObject);
	};

	OsWorkFlow.removeChildAt = function(argInt) {
		return b_OsWorkFlow_root.removeChildAt(argInt);
	};

	OsWorkFlow.getTextSnapshot = function() {
		return b_OsWorkFlow_root.getTextSnapshot();
	};

	OsWorkFlow.swapChildrenAt = function(argInt1, argInt2) {
		b_OsWorkFlow_root.swapChildrenAt(argInt1, argInt2);
	};

	OsWorkFlow.getMouseChildren = function() {
		return b_OsWorkFlow_root.getMouseChildren();
	};

	OsWorkFlow.setMouseChildren = function(argBoolean) {
		b_OsWorkFlow_root.setMouseChildren(argBoolean);
	};

	OsWorkFlow.areInaccessibleObjectsUnderPoint = function(argPoint) {
		return b_OsWorkFlow_root.areInaccessibleObjectsUnderPoint(argPoint);
	};

	OsWorkFlow.DisplayObjectContainer = function() {
		return b_OsWorkFlow_root.DisplayObjectContainer();
	};

	OsWorkFlow.getChildAt = function(argInt) {
		return b_OsWorkFlow_root.getChildAt(argInt);
	};

	OsWorkFlow.getObjectsUnderPoint = function(argPoint) {
		return b_OsWorkFlow_root.getObjectsUnderPoint(argPoint);
	};

	OsWorkFlow.addChildAt = function(argDisplayObject, argInt) {
		return b_OsWorkFlow_root.addChildAt(argDisplayObject, argInt);
	};

	OsWorkFlow.regenerateStyleCache = function(argBoolean) {
		b_OsWorkFlow_root.regenerateStyleCache(argBoolean);
	};

	OsWorkFlow.initialize = function() {
		b_OsWorkFlow_root.initialize();
	};

	OsWorkFlow.getAutomationTabularData = function() {
		return b_OsWorkFlow_root.getAutomationTabularData();
	};

	OsWorkFlow.getUid = function() {
		return b_OsWorkFlow_root.getUid();
	};

	OsWorkFlow.setUid = function(argString) {
		b_OsWorkFlow_root.setUid(argString);
	};

	OsWorkFlow.getScaleY = function() {
		return b_OsWorkFlow_root.getScaleY();
	};

	OsWorkFlow.setScaleY = function(argNumber) {
		b_OsWorkFlow_root.setScaleY(argNumber);
	};

	OsWorkFlow.getScaleX = function() {
		return b_OsWorkFlow_root.getScaleX();
	};

	OsWorkFlow.setScaleX = function(argNumber) {
		b_OsWorkFlow_root.setScaleX(argNumber);
	};

	OsWorkFlow.getRepeaterItem = function(argInt) {
		return b_OsWorkFlow_root.getRepeaterItem(argInt);
	};

	OsWorkFlow.getStyleDeclaration = function() {
		return b_OsWorkFlow_root.getStyleDeclaration();
	};

	OsWorkFlow.setStyleDeclaration = function(argCSSStyleDeclaration) {
		b_OsWorkFlow_root.setStyleDeclaration(argCSSStyleDeclaration);
	};

	OsWorkFlow.getMaxWidth = function() {
		return b_OsWorkFlow_root.getMaxWidth();
	};

	OsWorkFlow.setMaxWidth = function(argNumber) {
		b_OsWorkFlow_root.setMaxWidth(argNumber);
	};

	OsWorkFlow.measureHTMLText = function(argString) {
		return b_OsWorkFlow_root.measureHTMLText(argString);
	};

	OsWorkFlow.getSystemManager = function() {
		return b_OsWorkFlow_root.getSystemManager();
	};

	OsWorkFlow.setSystemManager = function(argISystemManager) {
		b_OsWorkFlow_root.setSystemManager(argISystemManager);
	};

	OsWorkFlow.validateDisplayList = function() {
		b_OsWorkFlow_root.validateDisplayList();
	};

	OsWorkFlow.getMinWidth = function() {
		return b_OsWorkFlow_root.getMinWidth();
	};

	OsWorkFlow.setMinWidth = function(argNumber) {
		b_OsWorkFlow_root.setMinWidth(argNumber);
	};

	OsWorkFlow.getExplicitOrMeasuredWidth = function() {
		return b_OsWorkFlow_root.getExplicitOrMeasuredWidth();
	};

	OsWorkFlow.getInitialized = function() {
		return b_OsWorkFlow_root.getInitialized();
	};

	OsWorkFlow.setInitialized = function(argBoolean) {
		b_OsWorkFlow_root.setInitialized(argBoolean);
	};

	OsWorkFlow.contentToGlobal = function(argPoint) {
		return b_OsWorkFlow_root.contentToGlobal(argPoint);
	};

	OsWorkFlow.getAutomationValue = function() {
		return b_OsWorkFlow_root.getAutomationValue();
	};

	OsWorkFlow.getExplicitHeight = function() {
		return b_OsWorkFlow_root.getExplicitHeight();
	};

	OsWorkFlow.setExplicitHeight = function(argNumber) {
		b_OsWorkFlow_root.setExplicitHeight(argNumber);
	};

	OsWorkFlow.executeBindings = function(argBoolean) {
		b_OsWorkFlow_root.executeBindings(argBoolean);
	};

	OsWorkFlow.getPercentWidth = function() {
		return b_OsWorkFlow_root.getPercentWidth();
	};

	OsWorkFlow.setPercentWidth = function(argNumber) {
		b_OsWorkFlow_root.setPercentWidth(argNumber);
	};

	OsWorkFlow.getModuleFactory = function() {
		return b_OsWorkFlow_root.getModuleFactory();
	};

	OsWorkFlow.setModuleFactory = function(argIFlexModuleFactory) {
		b_OsWorkFlow_root.setModuleFactory(argIFlexModuleFactory);
	};

	OsWorkFlow.getParentApplication = function() {
		return b_OsWorkFlow_root.getParentApplication();
	};

	OsWorkFlow.drawRoundRect = function(argNumber1, argNumber2, argNumber3, argNumber4, argObject5, argObject6, argObject7, argObject8, argString, argArray, argObject9) {
		b_OsWorkFlow_root.drawRoundRect(argNumber1, argNumber2, argNumber3, argNumber4, argObject5, argObject6, argObject7, argObject8, argString, argArray, argObject9);
	};

	OsWorkFlow.resolveAutomationIDPart = function(argObject) {
		return b_OsWorkFlow_root.resolveAutomationIDPart(argObject);
	};

	OsWorkFlow.setChildIndex = function(argDisplayObject, argInt) {
		b_OsWorkFlow_root.setChildIndex(argDisplayObject, argInt);
	};

	OsWorkFlow.getUpdateCompletePendingFlag = function() {
		return b_OsWorkFlow_root.getUpdateCompletePendingFlag();
	};

	OsWorkFlow.setUpdateCompletePendingFlag = function(argBoolean) {
		b_OsWorkFlow_root.setUpdateCompletePendingFlag(argBoolean);
	};

	OsWorkFlow.getProcessedDescriptors = function() {
		return b_OsWorkFlow_root.getProcessedDescriptors();
	};

	OsWorkFlow.setProcessedDescriptors = function(argBoolean) {
		b_OsWorkFlow_root.setProcessedDescriptors(argBoolean);
	};

	OsWorkFlow.getDoubleClickEnabled = function() {
		return b_OsWorkFlow_root.getDoubleClickEnabled();
	};

	OsWorkFlow.setDoubleClickEnabled = function(argBoolean) {
		b_OsWorkFlow_root.setDoubleClickEnabled(argBoolean);
	};

	OsWorkFlow.setActualSize = function(argNumber1, argNumber2) {
		b_OsWorkFlow_root.setActualSize(argNumber1, argNumber2);
	};

	OsWorkFlow.getOwner = function() {
		return b_OsWorkFlow_root.getOwner();
	};

	OsWorkFlow.setOwner = function(argDisplayObjectContainer) {
		b_OsWorkFlow_root.setOwner(argDisplayObjectContainer);
	};

	OsWorkFlow.measureText = function(argString) {
		return b_OsWorkFlow_root.measureText(argString);
	};

	OsWorkFlow.getRepeaters = function() {
		return b_OsWorkFlow_root.getRepeaters();
	};

	OsWorkFlow.setRepeaters = function(argArray) {
		b_OsWorkFlow_root.setRepeaters(argArray);
	};

	OsWorkFlow.notifyStyleChangeInChildren = function(argString, argBoolean) {
		b_OsWorkFlow_root.notifyStyleChangeInChildren(argString, argBoolean);
	};

	OsWorkFlow.setStyle = function(argString, argObject) {
		b_OsWorkFlow_root.setStyle(argString, argObject);
	};

	OsWorkFlow.getFlexContextMenu = function() {
		return b_OsWorkFlow_root.getFlexContextMenu();
	};

	OsWorkFlow.setFlexContextMenu = function(argIFlexContextMenu) {
		b_OsWorkFlow_root.setFlexContextMenu(argIFlexContextMenu);
	};

	OsWorkFlow.createReferenceOnParentDocument = function(argIFlexDisplayObject) {
		b_OsWorkFlow_root.createReferenceOnParentDocument(argIFlexDisplayObject);
	};

	OsWorkFlow.getMouseFocusEnabled = function() {
		return b_OsWorkFlow_root.getMouseFocusEnabled();
	};

	OsWorkFlow.setMouseFocusEnabled = function(argBoolean) {
		b_OsWorkFlow_root.setMouseFocusEnabled(argBoolean);
	};

	OsWorkFlow.stopDrag = function() {
		b_OsWorkFlow_root.stopDrag();
	};

	OsWorkFlow.localToContent = function(argPoint) {
		return b_OsWorkFlow_root.localToContent(argPoint);
	};

	OsWorkFlow.prepareToPrint = function(argIFlexDisplayObject) {
		return b_OsWorkFlow_root.prepareToPrint(argIFlexDisplayObject);
	};

	OsWorkFlow.endEffectsStarted = function() {
		b_OsWorkFlow_root.endEffectsStarted();
	};

	OsWorkFlow.registerEffects = function(argArray) {
		b_OsWorkFlow_root.registerEffects(argArray);
	};

	OsWorkFlow.getActiveEffects = function() {
		return b_OsWorkFlow_root.getActiveEffects();
	};

	OsWorkFlow.getFocusPane = function() {
		return b_OsWorkFlow_root.getFocusPane();
	};

	OsWorkFlow.setFocusPane = function(argSprite) {
		b_OsWorkFlow_root.setFocusPane(argSprite);
	};

	OsWorkFlow.getInheritingStyles = function() {
		return b_OsWorkFlow_root.getInheritingStyles();
	};

	OsWorkFlow.setInheritingStyles = function(argObject) {
		b_OsWorkFlow_root.setInheritingStyles(argObject);
	};

	OsWorkFlow.verticalGradientMatrix = function(argNumber1, argNumber2, argNumber3, argNumber4) {
		return b_OsWorkFlow_root.verticalGradientMatrix(argNumber1, argNumber2, argNumber3, argNumber4);
	};

	OsWorkFlow.determineTextFormatFromStyles = function() {
		return b_OsWorkFlow_root.determineTextFormatFromStyles();
	};

	OsWorkFlow.getMaxHeight = function() {
		return b_OsWorkFlow_root.getMaxHeight();
	};

	OsWorkFlow.setMaxHeight = function(argNumber) {
		b_OsWorkFlow_root.setMaxHeight(argNumber);
	};

	OsWorkFlow.getBaselinePosition = function() {
		return b_OsWorkFlow_root.getBaselinePosition();
	};

	OsWorkFlow.callLater = function(argFunction, argArray) {
		b_OsWorkFlow_root.callLater(argFunction, argArray);
	};

	OsWorkFlow.hasFontContextChanged = function() {
		return b_OsWorkFlow_root.hasFontContextChanged();
	};

	OsWorkFlow.getDescriptor = function() {
		return b_OsWorkFlow_root.getDescriptor();
	};

	OsWorkFlow.setDescriptor = function(argUIComponentDescriptor) {
		b_OsWorkFlow_root.setDescriptor(argUIComponentDescriptor);
	};

	OsWorkFlow.deleteReferenceOnParentDocument = function(argIFlexDisplayObject) {
		b_OsWorkFlow_root.deleteReferenceOnParentDocument(argIFlexDisplayObject);
	};

	OsWorkFlow.getErrorString = function() {
		return b_OsWorkFlow_root.getErrorString();
	};

	OsWorkFlow.setErrorString = function(argString) {
		b_OsWorkFlow_root.setErrorString(argString);
	};

	OsWorkFlow.getWidth = function() {
		return b_OsWorkFlow_root.getWidth();
	};

	OsWorkFlow.setWidth = function(argNumber) {
		b_OsWorkFlow_root.setWidth(argNumber);
	};

	OsWorkFlow.getInstanceIndex = function() {
		return b_OsWorkFlow_root.getInstanceIndex();
	};

	OsWorkFlow.move = function(argNumber1, argNumber2) {
		b_OsWorkFlow_root.move(argNumber1, argNumber2);
	};

	OsWorkFlow.getClassStyleDeclarations = function() {
		return b_OsWorkFlow_root.getClassStyleDeclarations();
	};

	OsWorkFlow.initializeRepeaterArrays = function(argIRepeaterClient) {
		b_OsWorkFlow_root.initializeRepeaterArrays(argIRepeaterClient);
	};

	OsWorkFlow.getExplicitMaxWidth = function() {
		return b_OsWorkFlow_root.getExplicitMaxWidth();
	};

	OsWorkFlow.setExplicitMaxWidth = function(argNumber) {
		b_OsWorkFlow_root.setExplicitMaxWidth(argNumber);
	};

	OsWorkFlow.getExplicitMinHeight = function() {
		return b_OsWorkFlow_root.getExplicitMinHeight();
	};

	OsWorkFlow.setExplicitMinHeight = function(argNumber) {
		b_OsWorkFlow_root.setExplicitMinHeight(argNumber);
	};

	OsWorkFlow.clearStyle = function(argString) {
		b_OsWorkFlow_root.clearStyle(argString);
	};

	OsWorkFlow.invalidateProperties = function() {
		b_OsWorkFlow_root.invalidateProperties();
	};

	OsWorkFlow.setCacheHeuristic = function(argBoolean) {
		b_OsWorkFlow_root.setCacheHeuristic(argBoolean);
	};

	OsWorkFlow.getFilters = function() {
		return b_OsWorkFlow_root.getFilters();
	};

	OsWorkFlow.setFilters = function(argArray) {
		b_OsWorkFlow_root.setFilters(argArray);
	};

	OsWorkFlow.validateProperties = function() {
		b_OsWorkFlow_root.validateProperties();
	};

	OsWorkFlow.getIncludeInLayout = function() {
		return b_OsWorkFlow_root.getIncludeInLayout();
	};

	OsWorkFlow.setIncludeInLayout = function(argBoolean) {
		b_OsWorkFlow_root.setIncludeInLayout(argBoolean);
	};

	OsWorkFlow.addChildAt = function(argDisplayObject, argInt) {
		return b_OsWorkFlow_root.addChildAt(argDisplayObject, argInt);
	};

	OsWorkFlow.getAutomationName = function() {
		return b_OsWorkFlow_root.getAutomationName();
	};

	OsWorkFlow.setAutomationName = function(argString) {
		b_OsWorkFlow_root.setAutomationName(argString);
	};

	OsWorkFlow.getClassName = function() {
		return b_OsWorkFlow_root.getClassName();
	};

	OsWorkFlow.getNonInheritingStyles = function() {
		return b_OsWorkFlow_root.getNonInheritingStyles();
	};

	OsWorkFlow.setNonInheritingStyles = function(argObject) {
		b_OsWorkFlow_root.setNonInheritingStyles(argObject);
	};

	OsWorkFlow.getExplicitWidth = function() {
		return b_OsWorkFlow_root.getExplicitWidth();
	};

	OsWorkFlow.setExplicitWidth = function(argNumber) {
		b_OsWorkFlow_root.setExplicitWidth(argNumber);
	};

	OsWorkFlow.getMinHeight = function() {
		return b_OsWorkFlow_root.getMinHeight();
	};

	OsWorkFlow.setMinHeight = function(argNumber) {
		b_OsWorkFlow_root.setMinHeight(argNumber);
	};

	OsWorkFlow.dispatchEvent = function(argEvent) {
		return b_OsWorkFlow_root.dispatchEvent(argEvent);
	};

	OsWorkFlow.getExplicitMinWidth = function() {
		return b_OsWorkFlow_root.getExplicitMinWidth();
	};

	OsWorkFlow.setExplicitMinWidth = function(argNumber) {
		b_OsWorkFlow_root.setExplicitMinWidth(argNumber);
	};

	OsWorkFlow.getStyle = function(argString) {
		return b_OsWorkFlow_root.getStyle(argString);
	};

	OsWorkFlow.getMouseY = function() {
		return b_OsWorkFlow_root.getMouseY();
	};

	OsWorkFlow.getMouseX = function() {
		return b_OsWorkFlow_root.getMouseX();
	};

	OsWorkFlow.getScreen = function() {
		return b_OsWorkFlow_root.getScreen();
	};

	OsWorkFlow.getExplicitOrMeasuredHeight = function() {
		return b_OsWorkFlow_root.getExplicitOrMeasuredHeight();
	};

	OsWorkFlow.setFocus = function() {
		b_OsWorkFlow_root.setFocus();
	};

	OsWorkFlow.horizontalGradientMatrix = function(argNumber1, argNumber2, argNumber3, argNumber4) {
		return b_OsWorkFlow_root.horizontalGradientMatrix(argNumber1, argNumber2, argNumber3, argNumber4);
	};

	OsWorkFlow.setConstraintValue = function(argString, argObject) {
		b_OsWorkFlow_root.setConstraintValue(argString, argObject);
	};

	OsWorkFlow.getInstanceIndices = function() {
		return b_OsWorkFlow_root.getInstanceIndices();
	};

	OsWorkFlow.setInstanceIndices = function(argArray) {
		b_OsWorkFlow_root.setInstanceIndices(argArray);
	};

	OsWorkFlow.getRepeaterIndices = function() {
		return b_OsWorkFlow_root.getRepeaterIndices();
	};

	OsWorkFlow.setRepeaterIndices = function(argArray) {
		b_OsWorkFlow_root.setRepeaterIndices(argArray);
	};

	OsWorkFlow.getTweeningProperties = function() {
		return b_OsWorkFlow_root.getTweeningProperties();
	};

	OsWorkFlow.setTweeningProperties = function(argArray) {
		b_OsWorkFlow_root.setTweeningProperties(argArray);
	};

	OsWorkFlow.getCachePolicy = function() {
		return b_OsWorkFlow_root.getCachePolicy();
	};

	OsWorkFlow.setCachePolicy = function(argString) {
		b_OsWorkFlow_root.setCachePolicy(argString);
	};

	OsWorkFlow.addChild = function(argDisplayObject) {
		return b_OsWorkFlow_root.addChild(argDisplayObject);
	};

	OsWorkFlow.invalidateSize = function() {
		b_OsWorkFlow_root.invalidateSize();
	};

	OsWorkFlow.setVisible = function(argBoolean1, argBoolean2) {
		b_OsWorkFlow_root.setVisible(argBoolean1, argBoolean2);
	};

	OsWorkFlow.parentChanged = function(argDisplayObjectContainer) {
		b_OsWorkFlow_root.parentChanged(argDisplayObjectContainer);
	};

	OsWorkFlow.getMeasuredHeight = function() {
		return b_OsWorkFlow_root.getMeasuredHeight();
	};

	OsWorkFlow.setMeasuredHeight = function(argNumber) {
		b_OsWorkFlow_root.setMeasuredHeight(argNumber);
	};

	OsWorkFlow.removeChild = function(argDisplayObject) {
		return b_OsWorkFlow_root.removeChild(argDisplayObject);
	};

	OsWorkFlow.validateNow = function() {
		b_OsWorkFlow_root.validateNow();
	};

	OsWorkFlow.invalidateDisplayList = function() {
		b_OsWorkFlow_root.invalidateDisplayList();
	};

	OsWorkFlow.getMeasuredWidth = function() {
		return b_OsWorkFlow_root.getMeasuredWidth();
	};

	OsWorkFlow.setMeasuredWidth = function(argNumber) {
		b_OsWorkFlow_root.setMeasuredWidth(argNumber);
	};

	OsWorkFlow.getAutomationChildAt = function(argInt) {
		return b_OsWorkFlow_root.getAutomationChildAt(argInt);
	};

	OsWorkFlow.getPercentHeight = function() {
		return b_OsWorkFlow_root.getPercentHeight();
	};

	OsWorkFlow.setPercentHeight = function(argNumber) {
		b_OsWorkFlow_root.setPercentHeight(argNumber);
	};

	OsWorkFlow.getIsPopUp = function() {
		return b_OsWorkFlow_root.getIsPopUp();
	};

	OsWorkFlow.setIsPopUp = function(argBoolean) {
		b_OsWorkFlow_root.setIsPopUp(argBoolean);
	};

	OsWorkFlow.getId = function() {
		return b_OsWorkFlow_root.getId();
	};

	OsWorkFlow.setId = function(argString) {
		b_OsWorkFlow_root.setId(argString);
	};

	OsWorkFlow.getStyleName = function() {
		return b_OsWorkFlow_root.getStyleName();
	};

	OsWorkFlow.setStyleName = function(argObject) {
		b_OsWorkFlow_root.setStyleName(argObject);
	};

	OsWorkFlow.globalToContent = function(argPoint) {
		return b_OsWorkFlow_root.globalToContent(argPoint);
	};

	OsWorkFlow.getIsDocument = function() {
		return b_OsWorkFlow_root.getIsDocument();
	};

	OsWorkFlow.setCacheAsBitmap = function(argBoolean) {
		b_OsWorkFlow_root.setCacheAsBitmap(argBoolean);
	};

	OsWorkFlow.getRepeaterIndex = function() {
		return b_OsWorkFlow_root.getRepeaterIndex();
	};

	OsWorkFlow.getParent = function() {
		return b_OsWorkFlow_root.getParent();
	};

	OsWorkFlow.getRepeater = function() {
		return b_OsWorkFlow_root.getRepeater();
	};

	OsWorkFlow.getMeasuredMinHeight = function() {
		return b_OsWorkFlow_root.getMeasuredMinHeight();
	};

	OsWorkFlow.setMeasuredMinHeight = function(argNumber) {
		b_OsWorkFlow_root.setMeasuredMinHeight(argNumber);
	};

	OsWorkFlow.getVisibleRect = function(argDisplayObject) {
		return b_OsWorkFlow_root.getVisibleRect(argDisplayObject);
	};

	OsWorkFlow.getFocusManager = function() {
		return b_OsWorkFlow_root.getFocusManager();
	};

	OsWorkFlow.setFocusManager = function(argIFocusManager) {
		b_OsWorkFlow_root.setFocusManager(argIFocusManager);
	};

	OsWorkFlow.effectStarted = function(argIEffectInstance) {
		b_OsWorkFlow_root.effectStarted(argIEffectInstance);
	};

	OsWorkFlow.UIComponent = function() {
		return b_OsWorkFlow_root.UIComponent();
	};

	OsWorkFlow.getDocument = function() {
		return b_OsWorkFlow_root.getDocument();
	};

	OsWorkFlow.setDocument = function(argObject) {
		b_OsWorkFlow_root.setDocument(argObject);
	};

	OsWorkFlow.getFocus = function() {
		return b_OsWorkFlow_root.getFocus();
	};

	OsWorkFlow.validationResultHandler = function(argValidationResultEvent) {
		b_OsWorkFlow_root.validationResultHandler(argValidationResultEvent);
	};

	OsWorkFlow.setCurrentState = function(argString, argBoolean) {
		b_OsWorkFlow_root.setCurrentState(argString, argBoolean);
	};

	OsWorkFlow.finishPrint = function(argObject, argIFlexDisplayObject) {
		b_OsWorkFlow_root.finishPrint(argObject, argIFlexDisplayObject);
	};

	OsWorkFlow.contentToLocal = function(argPoint) {
		return b_OsWorkFlow_root.contentToLocal(argPoint);
	};

	OsWorkFlow.validateSize = function(argBoolean) {
		b_OsWorkFlow_root.validateSize(argBoolean);
	};

	OsWorkFlow.getEnabled = function() {
		return b_OsWorkFlow_root.getEnabled();
	};

	OsWorkFlow.setEnabled = function(argBoolean) {
		b_OsWorkFlow_root.setEnabled(argBoolean);
	};

	OsWorkFlow.getNestLevel = function() {
		return b_OsWorkFlow_root.getNestLevel();
	};

	OsWorkFlow.setNestLevel = function(argInt) {
		b_OsWorkFlow_root.setNestLevel(argInt);
	};

	OsWorkFlow.getCursorManager = function() {
		return b_OsWorkFlow_root.getCursorManager();
	};

	OsWorkFlow.getValidationSubField = function() {
		return b_OsWorkFlow_root.getValidationSubField();
	};

	OsWorkFlow.setValidationSubField = function(argString) {
		b_OsWorkFlow_root.setValidationSubField(argString);
	};

	OsWorkFlow.setAlpha = function(argNumber) {
		b_OsWorkFlow_root.setAlpha(argNumber);
	};

	OsWorkFlow.styleChanged = function(argString) {
		b_OsWorkFlow_root.styleChanged(argString);
	};

	OsWorkFlow.getVisible = function() {
		return b_OsWorkFlow_root.getVisible();
	};

	OsWorkFlow.setVisible = function(argBoolean) {
		b_OsWorkFlow_root.setVisible(argBoolean);
	};

	OsWorkFlow.getHeight = function() {
		return b_OsWorkFlow_root.getHeight();
	};

	OsWorkFlow.setHeight = function(argNumber) {
		b_OsWorkFlow_root.setHeight(argNumber);
	};

	OsWorkFlow.removeChildAt = function(argInt) {
		return b_OsWorkFlow_root.removeChildAt(argInt);
	};

	OsWorkFlow.getY = function() {
		return b_OsWorkFlow_root.getY();
	};

	OsWorkFlow.setY = function(argNumber) {
		b_OsWorkFlow_root.setY(argNumber);
	};

	OsWorkFlow.getX = function() {
		return b_OsWorkFlow_root.getX();
	};

	OsWorkFlow.setX = function(argNumber) {
		b_OsWorkFlow_root.setX(argNumber);
	};

	OsWorkFlow.getAutomationDelegate = function() {
		return b_OsWorkFlow_root.getAutomationDelegate();
	};

	OsWorkFlow.setAutomationDelegate = function(argObject) {
		b_OsWorkFlow_root.setAutomationDelegate(argObject);
	};

	OsWorkFlow.replayAutomatableEvent = function(argEvent) {
		return b_OsWorkFlow_root.replayAutomatableEvent(argEvent);
	};

	OsWorkFlow.getConstraintValue = function(argString) {
		return b_OsWorkFlow_root.getConstraintValue(argString);
	};

	OsWorkFlow.getMeasuredMinWidth = function() {
		return b_OsWorkFlow_root.getMeasuredMinWidth();
	};

	OsWorkFlow.setMeasuredMinWidth = function(argNumber) {
		b_OsWorkFlow_root.setMeasuredMinWidth(argNumber);
	};

	OsWorkFlow.getToolTip = function() {
		return b_OsWorkFlow_root.getToolTip();
	};

	OsWorkFlow.setToolTip = function(argString) {
		b_OsWorkFlow_root.setToolTip(argString);
	};

	OsWorkFlow.getNumAutomationChildren = function() {
		return b_OsWorkFlow_root.getNumAutomationChildren();
	};

	OsWorkFlow.getParentDocument = function() {
		return b_OsWorkFlow_root.getParentDocument();
	};

	OsWorkFlow.stylesInitialized = function() {
		b_OsWorkFlow_root.stylesInitialized();
	};

	OsWorkFlow.effectFinished = function(argIEffectInstance) {
		b_OsWorkFlow_root.effectFinished(argIEffectInstance);
	};

	OsWorkFlow.getContentMouseY = function() {
		return b_OsWorkFlow_root.getContentMouseY();
	};

	OsWorkFlow.getContentMouseX = function() {
		return b_OsWorkFlow_root.getContentMouseX();
	};

	OsWorkFlow.getExplicitMaxHeight = function() {
		return b_OsWorkFlow_root.getExplicitMaxHeight();
	};

	OsWorkFlow.setExplicitMaxHeight = function(argNumber) {
		b_OsWorkFlow_root.setExplicitMaxHeight(argNumber);
	};

	OsWorkFlow.createAutomationIDPart = function(argIAutomationObject) {
		return b_OsWorkFlow_root.createAutomationIDPart(argIAutomationObject);
	};

	OsWorkFlow.getCurrentState = function() {
		return b_OsWorkFlow_root.getCurrentState();
	};

	OsWorkFlow.setCurrentState = function(argString) {
		b_OsWorkFlow_root.setCurrentState(argString);
	};

	OsWorkFlow.owns = function(argDisplayObject) {
		return b_OsWorkFlow_root.owns(argDisplayObject);
	};

	OsWorkFlow.getShowInAutomationHierarchy = function() {
		return b_OsWorkFlow_root.getShowInAutomationHierarchy();
	};

	OsWorkFlow.setShowInAutomationHierarchy = function(argBoolean) {
		b_OsWorkFlow_root.setShowInAutomationHierarchy(argBoolean);
	};

	OsWorkFlow.drawFocus = function(argBoolean) {
		b_OsWorkFlow_root.drawFocus(argBoolean);
	};

	OsWorkFlow.getFocusEnabled = function() {
		return b_OsWorkFlow_root.getFocusEnabled();
	};

	OsWorkFlow.setFocusEnabled = function(argBoolean) {
		b_OsWorkFlow_root.setFocusEnabled(argBoolean);
	};

	OsWorkFlow.removeEventListener = function(argString, argFunction, argBoolean) {
		b_OsWorkFlow_root.removeEventListener(argString, argFunction, argBoolean);
	};

	OsWorkFlow.createComponentsFromDescriptors = function(argBoolean) {
		b_OsWorkFlow_root.createComponentsFromDescriptors(argBoolean);
	};

	OsWorkFlow.getViewMetricsAndPadding = function() {
		return b_OsWorkFlow_root.getViewMetricsAndPadding();
	};

	OsWorkFlow.getMaxVerticalScrollPosition = function() {
		return b_OsWorkFlow_root.getMaxVerticalScrollPosition();
	};

	OsWorkFlow.getVerticalLineScrollSize = function() {
		return b_OsWorkFlow_root.getVerticalLineScrollSize();
	};

	OsWorkFlow.setVerticalLineScrollSize = function(argNumber) {
		b_OsWorkFlow_root.setVerticalLineScrollSize(argNumber);
	};

	OsWorkFlow.getIcon = function() {
		return b_OsWorkFlow_root.getIcon();
	};

	OsWorkFlow.setIcon = function(argClass) {
		b_OsWorkFlow_root.setIcon(argClass);
	};

	OsWorkFlow.regenerateStyleCache = function(argBoolean) {
		b_OsWorkFlow_root.regenerateStyleCache(argBoolean);
	};

	OsWorkFlow.localToContent = function(argPoint) {
		return b_OsWorkFlow_root.localToContent(argPoint);
	};

	OsWorkFlow.styleChanged = function(argString) {
		b_OsWorkFlow_root.styleChanged(argString);
	};

	OsWorkFlow.notifyStyleChangeInChildren = function(argString, argBoolean) {
		b_OsWorkFlow_root.notifyStyleChangeInChildren(argString, argBoolean);
	};

	OsWorkFlow.getHorizontalScrollPosition = function() {
		return b_OsWorkFlow_root.getHorizontalScrollPosition();
	};

	OsWorkFlow.setHorizontalScrollPosition = function(argNumber) {
		b_OsWorkFlow_root.setHorizontalScrollPosition(argNumber);
	};

	OsWorkFlow.getNumChildren = function() {
		return b_OsWorkFlow_root.getNumChildren();
	};

	OsWorkFlow.getLabel = function() {
		return b_OsWorkFlow_root.getLabel();
	};

	OsWorkFlow.setLabel = function(argString) {
		b_OsWorkFlow_root.setLabel(argString);
	};

	OsWorkFlow.getCreatingContentPane = function() {
		return b_OsWorkFlow_root.getCreatingContentPane();
	};

	OsWorkFlow.setCreatingContentPane = function(argBoolean) {
		b_OsWorkFlow_root.setCreatingContentPane(argBoolean);
	};

	OsWorkFlow.getHorizontalScrollPolicy = function() {
		return b_OsWorkFlow_root.getHorizontalScrollPolicy();
	};

	OsWorkFlow.setHorizontalScrollPolicy = function(argString) {
		b_OsWorkFlow_root.setHorizontalScrollPolicy(argString);
	};

	OsWorkFlow.contains = function(argDisplayObject) {
		return b_OsWorkFlow_root.contains(argDisplayObject);
	};

	OsWorkFlow.getHorizontalPageScrollSize = function() {
		return b_OsWorkFlow_root.getHorizontalPageScrollSize();
	};

	OsWorkFlow.setHorizontalPageScrollSize = function(argNumber) {
		b_OsWorkFlow_root.setHorizontalPageScrollSize(argNumber);
	};

	OsWorkFlow.globalToContent = function(argPoint) {
		return b_OsWorkFlow_root.globalToContent(argPoint);
	};

	OsWorkFlow.getBorderMetrics = function() {
		return b_OsWorkFlow_root.getBorderMetrics();
	};

	OsWorkFlow.removeChild = function(argDisplayObject) {
		return b_OsWorkFlow_root.removeChild(argDisplayObject);
	};

	OsWorkFlow.getAutoLayout = function() {
		return b_OsWorkFlow_root.getAutoLayout();
	};

	OsWorkFlow.setAutoLayout = function(argBoolean) {
		b_OsWorkFlow_root.setAutoLayout(argBoolean);
	};

	OsWorkFlow.addEventListener = function(argString, argFunction, argBoolean1, argInt, argBoolean2) {
		b_OsWorkFlow_root.addEventListener(argString, argFunction, argBoolean1, argInt, argBoolean2);
	};

	OsWorkFlow.setChildIndex = function(argDisplayObject, argInt) {
		b_OsWorkFlow_root.setChildIndex(argDisplayObject, argInt);
	};

	OsWorkFlow.getChildren = function() {
		return b_OsWorkFlow_root.getChildren();
	};

	OsWorkFlow.setDoubleClickEnabled = function(argBoolean) {
		b_OsWorkFlow_root.setDoubleClickEnabled(argBoolean);
	};

	OsWorkFlow.getChildByName = function(argString) {
		return b_OsWorkFlow_root.getChildByName(argString);
	};

	OsWorkFlow.getVerticalScrollPolicy = function() {
		return b_OsWorkFlow_root.getVerticalScrollPolicy();
	};

	OsWorkFlow.setVerticalScrollPolicy = function(argString) {
		b_OsWorkFlow_root.setVerticalScrollPolicy(argString);
	};

	OsWorkFlow.finishPrint = function(argObject, argIFlexDisplayObject) {
		b_OsWorkFlow_root.finishPrint(argObject, argIFlexDisplayObject);
	};

	OsWorkFlow.getVerticalScrollPosition = function() {
		return b_OsWorkFlow_root.getVerticalScrollPosition();
	};

	OsWorkFlow.setVerticalScrollPosition = function(argNumber) {
		b_OsWorkFlow_root.setVerticalScrollPosition(argNumber);
	};

	OsWorkFlow.getCreationPolicy = function() {
		return b_OsWorkFlow_root.getCreationPolicy();
	};

	OsWorkFlow.setCreationPolicy = function(argString) {
		b_OsWorkFlow_root.setCreationPolicy(argString);
	};

	OsWorkFlow.setEnabled = function(argBoolean) {
		b_OsWorkFlow_root.setEnabled(argBoolean);
	};

	OsWorkFlow.getContentMouseY = function() {
		return b_OsWorkFlow_root.getContentMouseY();
	};

	OsWorkFlow.getContentMouseX = function() {
		return b_OsWorkFlow_root.getContentMouseX();
	};

	OsWorkFlow.contentToLocal = function(argPoint) {
		return b_OsWorkFlow_root.contentToLocal(argPoint);
	};

	OsWorkFlow.validateDisplayList = function() {
		b_OsWorkFlow_root.validateDisplayList();
	};

	OsWorkFlow.getVerticalPageScrollSize = function() {
		return b_OsWorkFlow_root.getVerticalPageScrollSize();
	};

	OsWorkFlow.setVerticalPageScrollSize = function(argNumber) {
		b_OsWorkFlow_root.setVerticalPageScrollSize(argNumber);
	};

	OsWorkFlow.Container = function() {
		return b_OsWorkFlow_root.Container();
	};

	OsWorkFlow.getBaselinePosition = function() {
		return b_OsWorkFlow_root.getBaselinePosition();
	};

	OsWorkFlow.getChildDescriptors = function() {
		return b_OsWorkFlow_root.getChildDescriptors();
	};

	OsWorkFlow.getData = function() {
		return b_OsWorkFlow_root.getData();
	};

	OsWorkFlow.setData = function(argObject) {
		b_OsWorkFlow_root.setData(argObject);
	};

	OsWorkFlow.getChildAt = function(argInt) {
		return b_OsWorkFlow_root.getChildAt(argInt);
	};

	OsWorkFlow.removeChildAt = function(argInt) {
		return b_OsWorkFlow_root.removeChildAt(argInt);
	};

	OsWorkFlow.contentToGlobal = function(argPoint) {
		return b_OsWorkFlow_root.contentToGlobal(argPoint);
	};

	OsWorkFlow.getChildIndex = function(argDisplayObject) {
		return b_OsWorkFlow_root.getChildIndex(argDisplayObject);
	};

	OsWorkFlow.initialize = function() {
		b_OsWorkFlow_root.initialize();
	};

	OsWorkFlow.getMaxHorizontalScrollPosition = function() {
		return b_OsWorkFlow_root.getMaxHorizontalScrollPosition();
	};

	OsWorkFlow.getViewMetrics = function() {
		return b_OsWorkFlow_root.getViewMetrics();
	};

	OsWorkFlow.getRawChildren = function() {
		return b_OsWorkFlow_root.getRawChildren();
	};

	OsWorkFlow.executeChildBindings = function(argBoolean) {
		b_OsWorkFlow_root.executeChildBindings(argBoolean);
	};

	OsWorkFlow.getHorizontalLineScrollSize = function() {
		return b_OsWorkFlow_root.getHorizontalLineScrollSize();
	};

	OsWorkFlow.setHorizontalLineScrollSize = function(argNumber) {
		b_OsWorkFlow_root.setHorizontalLineScrollSize(argNumber);
	};

	OsWorkFlow.getClipContent = function() {
		return b_OsWorkFlow_root.getClipContent();
	};

	OsWorkFlow.setClipContent = function(argBoolean) {
		b_OsWorkFlow_root.setClipContent(argBoolean);
	};

	OsWorkFlow.createComponentFromDescriptor = function(argComponentDescriptor, argBoolean) {
		return b_OsWorkFlow_root.createComponentFromDescriptor(argComponentDescriptor, argBoolean);
	};

	OsWorkFlow.getDefaultButton = function() {
		return b_OsWorkFlow_root.getDefaultButton();
	};

	OsWorkFlow.setDefaultButton = function(argIFlexDisplayObject) {
		b_OsWorkFlow_root.setDefaultButton(argIFlexDisplayObject);
	};

	OsWorkFlow.executeBindings = function(argBoolean) {
		b_OsWorkFlow_root.executeBindings(argBoolean);
	};

	OsWorkFlow.getVerticalScrollBar = function() {
		return b_OsWorkFlow_root.getVerticalScrollBar();
	};

	OsWorkFlow.setVerticalScrollBar = function(argScrollBar) {
		b_OsWorkFlow_root.setVerticalScrollBar(argScrollBar);
	};

	OsWorkFlow.addChild = function(argDisplayObject) {
		return b_OsWorkFlow_root.addChild(argDisplayObject);
	};

	OsWorkFlow.getHorizontalScrollBar = function() {
		return b_OsWorkFlow_root.getHorizontalScrollBar();
	};

	OsWorkFlow.setHorizontalScrollBar = function(argScrollBar) {
		b_OsWorkFlow_root.setHorizontalScrollBar(argScrollBar);
	};

	OsWorkFlow.addChildAt = function(argDisplayObject, argInt) {
		return b_OsWorkFlow_root.addChildAt(argDisplayObject, argInt);
	};

	OsWorkFlow.getCreationIndex = function() {
		return b_OsWorkFlow_root.getCreationIndex();
	};

	OsWorkFlow.setCreationIndex = function(argInt) {
		b_OsWorkFlow_root.setCreationIndex(argInt);
	};

	OsWorkFlow.getFocusPane = function() {
		return b_OsWorkFlow_root.getFocusPane();
	};

	OsWorkFlow.setFocusPane = function(argSprite) {
		b_OsWorkFlow_root.setFocusPane(argSprite);
	};

	OsWorkFlow.validateSize = function(argBoolean) {
		b_OsWorkFlow_root.validateSize(argBoolean);
	};

	OsWorkFlow.removeAllChildren = function() {
		b_OsWorkFlow_root.removeAllChildren();
	};

	OsWorkFlow.prepareToPrint = function(argIFlexDisplayObject) {
		return b_OsWorkFlow_root.prepareToPrint(argIFlexDisplayObject);
	};

	OsWorkFlow.getTabIndex = function() {
		return b_OsWorkFlow_root.getTabIndex();
	};

	OsWorkFlow.setTabIndex = function(argInt) {
		b_OsWorkFlow_root.setTabIndex(argInt);
	};

	OsWorkFlow.InteractiveObject = function() {
		return b_OsWorkFlow_root.InteractiveObject();
	};

	OsWorkFlow.getTabEnabled = function() {
		return b_OsWorkFlow_root.getTabEnabled();
	};

	OsWorkFlow.setTabEnabled = function(argBoolean) {
		b_OsWorkFlow_root.setTabEnabled(argBoolean);
	};

	OsWorkFlow.getAccessibilityImplementation = function() {
		return b_OsWorkFlow_root.getAccessibilityImplementation();
	};

	OsWorkFlow.setAccessibilityImplementation = function(argAccessibilityImplementation) {
		b_OsWorkFlow_root.setAccessibilityImplementation(argAccessibilityImplementation);
	};

	OsWorkFlow.getMouseEnabled = function() {
		return b_OsWorkFlow_root.getMouseEnabled();
	};

	OsWorkFlow.setMouseEnabled = function(argBoolean) {
		b_OsWorkFlow_root.setMouseEnabled(argBoolean);
	};

	OsWorkFlow.getContextMenu = function() {
		return b_OsWorkFlow_root.getContextMenu();
	};

	OsWorkFlow.setContextMenu = function(argContextMenu) {
		b_OsWorkFlow_root.setContextMenu(argContextMenu);
	};

	OsWorkFlow.getDoubleClickEnabled = function() {
		return b_OsWorkFlow_root.getDoubleClickEnabled();
	};

	OsWorkFlow.setDoubleClickEnabled = function(argBoolean) {
		b_OsWorkFlow_root.setDoubleClickEnabled(argBoolean);
	};

	OsWorkFlow.getFocusRect = function() {
		return b_OsWorkFlow_root.getFocusRect();
	};

	OsWorkFlow.setFocusRect = function(argObject) {
		b_OsWorkFlow_root.setFocusRect(argObject);
	};

	OsWorkFlow.finishPrint = function(argObject, argIFlexDisplayObject) {
		b_OsWorkFlow_root.finishPrint(argObject, argIFlexDisplayObject);
	};

	OsWorkFlow.setPercentWidth = function(argNumber) {
		b_OsWorkFlow_root.setPercentWidth(argNumber);
	};

	OsWorkFlow.getUrl = function() {
		return b_OsWorkFlow_root.getUrl();
	};

	OsWorkFlow.initialize = function() {
		b_OsWorkFlow_root.initialize();
	};

	OsWorkFlow.styleChanged = function(argString) {
		b_OsWorkFlow_root.styleChanged(argString);
	};

	OsWorkFlow.getViewSourceURL = function() {
		return b_OsWorkFlow_root.getViewSourceURL();
	};

	OsWorkFlow.setViewSourceURL = function(argString) {
		b_OsWorkFlow_root.setViewSourceURL(argString);
	};

	OsWorkFlow.setIcon = function(argClass) {
		b_OsWorkFlow_root.setIcon(argClass);
	};

	OsWorkFlow.setTabIndex = function(argInt) {
		b_OsWorkFlow_root.setTabIndex(argInt);
	};

	OsWorkFlow.setToolTip = function(argString) {
		b_OsWorkFlow_root.setToolTip(argString);
	};

	OsWorkFlow.getViewMetrics = function() {
		return b_OsWorkFlow_root.getViewMetrics();
	};

	OsWorkFlow.prepareToPrint = function(argIFlexDisplayObject) {
		return b_OsWorkFlow_root.prepareToPrint(argIFlexDisplayObject);
	};

	OsWorkFlow.getId = function() {
		return b_OsWorkFlow_root.getId();
	};

	OsWorkFlow.Application = function() {
		return b_OsWorkFlow_root.Application();
	};

	OsWorkFlow.setPercentHeight = function(argNumber) {
		b_OsWorkFlow_root.setPercentHeight(argNumber);
	};

	OsWorkFlow.setLabel = function(argString) {
		b_OsWorkFlow_root.setLabel(argString);
	};

	OsWorkFlow.getParameters = function() {
		return b_OsWorkFlow_root.getParameters();
	};

	OsWorkFlow.getChildIndex = function(argDisplayObject) {
		return b_OsWorkFlow_root.getChildIndex(argDisplayObject);
	};

	OsWorkFlow.addToCreationQueue = function(argObject, argInt, argFunction, argIFlexDisplayObject) {
		b_OsWorkFlow_root.addToCreationQueue(argObject, argInt, argFunction, argIFlexDisplayObject);
	};

	OsWorkFlow.willTrigger = function(argString) {
		return b_OsWorkFlow_root.willTrigger(argString);
	};

	OsWorkFlow.toString = function() {
		return b_OsWorkFlow_root.toString();
	};

	OsWorkFlow.removeEventListener = function(argString, argFunction, argBoolean) {
		b_OsWorkFlow_root.removeEventListener(argString, argFunction, argBoolean);
	};

	OsWorkFlow.EventDispatcher = function(argIEventDispatcher) {
		return b_OsWorkFlow_root.EventDispatcher(argIEventDispatcher);
	};

	OsWorkFlow.addEventListener = function(argString, argFunction, argBoolean1, argInt, argBoolean2) {
		b_OsWorkFlow_root.addEventListener(argString, argFunction, argBoolean1, argInt, argBoolean2);
	};

	OsWorkFlow.hasEventListener = function(argString) {
		return b_OsWorkFlow_root.hasEventListener(argString);
	};

	OsWorkFlow.dispatchEvent = function(argEvent) {
		return b_OsWorkFlow_root.dispatchEvent(argEvent);
	};

	OsWorkFlow.getHitArea = function() {
		return b_OsWorkFlow_root.getHitArea();
	};

	OsWorkFlow.setHitArea = function(argSprite) {
		b_OsWorkFlow_root.setHitArea(argSprite);
	};

	OsWorkFlow.getDropTarget = function() {
		return b_OsWorkFlow_root.getDropTarget();
	};

	OsWorkFlow.Sprite = function() {
		return b_OsWorkFlow_root.Sprite();
	};

	OsWorkFlow.getUseHandCursor = function() {
		return b_OsWorkFlow_root.getUseHandCursor();
	};

	OsWorkFlow.setUseHandCursor = function(argBoolean) {
		b_OsWorkFlow_root.setUseHandCursor(argBoolean);
	};

	OsWorkFlow.stopDrag = function() {
		b_OsWorkFlow_root.stopDrag();
	};

	OsWorkFlow.startDrag = function(argBoolean, argRectangle) {
		b_OsWorkFlow_root.startDrag(argBoolean, argRectangle);
	};

	OsWorkFlow.getButtonMode = function() {
		return b_OsWorkFlow_root.getButtonMode();
	};

	OsWorkFlow.setButtonMode = function(argBoolean) {
		b_OsWorkFlow_root.setButtonMode(argBoolean);
	};

	OsWorkFlow.getSoundTransform = function() {
		return b_OsWorkFlow_root.getSoundTransform();
	};

	OsWorkFlow.setSoundTransform = function(argSoundTransform) {
		b_OsWorkFlow_root.setSoundTransform(argSoundTransform);
	};

	OsWorkFlow.getGraphics = function() {
		return b_OsWorkFlow_root.getGraphics();
	};

	OsWorkFlow.hitTestPoint = function(argNumber1, argNumber2, argBoolean) {
		return b_OsWorkFlow_root.hitTestPoint(argNumber1, argNumber2, argBoolean);
	};

	OsWorkFlow.getVisible = function() {
		return b_OsWorkFlow_root.getVisible();
	};

	OsWorkFlow.setVisible = function(argBoolean) {
		b_OsWorkFlow_root.setVisible(argBoolean);
	};

	OsWorkFlow.getAccessibilityProperties = function() {
		return b_OsWorkFlow_root.getAccessibilityProperties();
	};

	OsWorkFlow.setAccessibilityProperties = function(argAccessibilityProperties) {
		b_OsWorkFlow_root.setAccessibilityProperties(argAccessibilityProperties);
	};

	OsWorkFlow.getAlpha = function() {
		return b_OsWorkFlow_root.getAlpha();
	};

	OsWorkFlow.setAlpha = function(argNumber) {
		b_OsWorkFlow_root.setAlpha(argNumber);
	};

	OsWorkFlow.getBounds = function(argDisplayObject) {
		return b_OsWorkFlow_root.getBounds(argDisplayObject);
	};

	OsWorkFlow.getMouseY = function() {
		return b_OsWorkFlow_root.getMouseY();
	};

	OsWorkFlow.getMouseX = function() {
		return b_OsWorkFlow_root.getMouseX();
	};

	OsWorkFlow.getFilters = function() {
		return b_OsWorkFlow_root.getFilters();
	};

	OsWorkFlow.setFilters = function(argArray) {
		b_OsWorkFlow_root.setFilters(argArray);
	};

	OsWorkFlow.getParent = function() {
		return b_OsWorkFlow_root.getParent();
	};

	OsWorkFlow.getY = function() {
		return b_OsWorkFlow_root.getY();
	};

	OsWorkFlow.setY = function(argNumber) {
		b_OsWorkFlow_root.setY(argNumber);
	};

	OsWorkFlow.getScale9Grid = function() {
		return b_OsWorkFlow_root.getScale9Grid();
	};

	OsWorkFlow.setScale9Grid = function(argRectangle) {
		b_OsWorkFlow_root.setScale9Grid(argRectangle);
	};

	OsWorkFlow.getX = function() {
		return b_OsWorkFlow_root.getX();
	};

	OsWorkFlow.setX = function(argNumber) {
		b_OsWorkFlow_root.setX(argNumber);
	};

	OsWorkFlow.getOpaqueBackground = function() {
		return b_OsWorkFlow_root.getOpaqueBackground();
	};

	OsWorkFlow.setOpaqueBackground = function(argObject) {
		b_OsWorkFlow_root.setOpaqueBackground(argObject);
	};

	OsWorkFlow.getTransform = function() {
		return b_OsWorkFlow_root.getTransform();
	};

	OsWorkFlow.setTransform = function(argTransform) {
		b_OsWorkFlow_root.setTransform(argTransform);
	};

	OsWorkFlow.hitTestObject = function(argDisplayObject) {
		return b_OsWorkFlow_root.hitTestObject(argDisplayObject);
	};

	OsWorkFlow.getScrollRect = function() {
		return b_OsWorkFlow_root.getScrollRect();
	};

	OsWorkFlow.setScrollRect = function(argRectangle) {
		b_OsWorkFlow_root.setScrollRect(argRectangle);
	};

	OsWorkFlow.getHeight = function() {
		return b_OsWorkFlow_root.getHeight();
	};

	OsWorkFlow.setHeight = function(argNumber) {
		b_OsWorkFlow_root.setHeight(argNumber);
	};

	OsWorkFlow.getRect = function(argDisplayObject) {
		return b_OsWorkFlow_root.getRect(argDisplayObject);
	};

	OsWorkFlow.getWidth = function() {
		return b_OsWorkFlow_root.getWidth();
	};

	OsWorkFlow.setWidth = function(argNumber) {
		b_OsWorkFlow_root.setWidth(argNumber);
	};

	OsWorkFlow.getRotation = function() {
		return b_OsWorkFlow_root.getRotation();
	};

	OsWorkFlow.setRotation = function(argNumber) {
		b_OsWorkFlow_root.setRotation(argNumber);
	};

	OsWorkFlow.getRoot = function() {
		return b_OsWorkFlow_root.getRoot();
	};

	OsWorkFlow.getMask = function() {
		return b_OsWorkFlow_root.getMask();
	};

	OsWorkFlow.setMask = function(argDisplayObject) {
		b_OsWorkFlow_root.setMask(argDisplayObject);
	};

	OsWorkFlow.getLoaderInfo = function() {
		return b_OsWorkFlow_root.getLoaderInfo();
	};

	OsWorkFlow.getStage = function() {
		return b_OsWorkFlow_root.getStage();
	};

	OsWorkFlow.localToGlobal = function(argPoint) {
		return b_OsWorkFlow_root.localToGlobal(argPoint);
	};

	OsWorkFlow.getScaleY = function() {
		return b_OsWorkFlow_root.getScaleY();
	};

	OsWorkFlow.setScaleY = function(argNumber) {
		b_OsWorkFlow_root.setScaleY(argNumber);
	};

	OsWorkFlow.getScaleX = function() {
		return b_OsWorkFlow_root.getScaleX();
	};

	OsWorkFlow.setScaleX = function(argNumber) {
		b_OsWorkFlow_root.setScaleX(argNumber);
	};

	OsWorkFlow.getCacheAsBitmap = function() {
		return b_OsWorkFlow_root.getCacheAsBitmap();
	};

	OsWorkFlow.setCacheAsBitmap = function(argBoolean) {
		b_OsWorkFlow_root.setCacheAsBitmap(argBoolean);
	};

	OsWorkFlow.globalToLocal = function(argPoint) {
		return b_OsWorkFlow_root.globalToLocal(argPoint);
	};

	OsWorkFlow.DisplayObject = function() {
		return b_OsWorkFlow_root.DisplayObject();
	};

	OsWorkFlow.getBlendMode = function() {
		return b_OsWorkFlow_root.getBlendMode();
	};

	OsWorkFlow.setBlendMode = function(argString) {
		b_OsWorkFlow_root.setBlendMode(argString);
	};

	OsWorkFlow.getName = function() {
		return b_OsWorkFlow_root.getName();
	};

	OsWorkFlow.setName = function(argString) {
		b_OsWorkFlow_root.setName(argString);
	};

	OsWorkFlow.toString = function() {
		return b_OsWorkFlow_root.toString();
	};

	OsWorkFlow.hasOwnProperty = function(argString) {
		return b_OsWorkFlow_root.hasOwnProperty(argString);
	};

	OsWorkFlow.isPrototypeOf = function(argObject) {
		return b_OsWorkFlow_root.isPrototypeOf(argObject);
	};

	OsWorkFlow.propertyIsEnumerable = function(argString) {
		return b_OsWorkFlow_root.propertyIsEnumerable(argString);
	};

	OsWorkFlow.Object = function() {
		return b_OsWorkFlow_root.Object();
	};

	OsWorkFlow.toLocaleString = function() {
		return b_OsWorkFlow_root.toLocaleString();
	};

	OsWorkFlow.setPropertyIsEnumerable = function(argString, argBoolean) {
		b_OsWorkFlow_root.setPropertyIsEnumerable(argString, argBoolean);
	};

	OsWorkFlow.valueOf = function() {
		return b_OsWorkFlow_root.valueOf();
	};

	OsWorkFlow.FlexSprite = function() {
		return b_OsWorkFlow_root.FlexSprite();
	};

	OsWorkFlow.toString = function() {
		return b_OsWorkFlow_root.toString();
	};

	OsWorkFlow.onApplicationReSize = function(argEvent) {
		b_OsWorkFlow_root.onApplicationReSize(argEvent);
	};

	OsWorkFlow.onCanvasContextMenu = function(argEvent) {
		b_OsWorkFlow_root.onCanvasContextMenu(argEvent);
	};

	OsWorkFlow.onContextMenu = function(argEvent) {
		b_OsWorkFlow_root.onContextMenu(argEvent);
	};

	OsWorkFlow.onFlowCanvasMouseDown = function(argMouseEvent) {
		b_OsWorkFlow_root.onFlowCanvasMouseDown(argMouseEvent);
	};

	OsWorkFlow.onGridEditEnd = function(argDataGridEvent) {
		b_OsWorkFlow_root.onGridEditEnd(argDataGridEvent);
	};

	OsWorkFlow.onIconMouseDown = function(argIconEvent) {
		b_OsWorkFlow_root.onIconMouseDown(argIconEvent);
	};

	OsWorkFlow.onIconMouseUp = function(argIconEvent) {
		b_OsWorkFlow_root.onIconMouseUp(argIconEvent);
	};

	OsWorkFlow.onIconMove = function(argIconEvent) {
		b_OsWorkFlow_root.onIconMove(argIconEvent);
	};

	OsWorkFlow.onTabIndexChanged = function(argItemClickEvent) {
		b_OsWorkFlow_root.onTabIndexChanged(argItemClickEvent);
	};

	OsWorkFlow.onXmlHTMLComplete = function(argEvent) {
		b_OsWorkFlow_root.onXmlHTMLComplete(argEvent);
	};

}
