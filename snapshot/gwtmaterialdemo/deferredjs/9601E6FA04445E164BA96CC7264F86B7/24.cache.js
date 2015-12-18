$wnd.gwtmaterialdemo.runAsyncCallback24("defineClass(185, 28, $intern_52);\n_.getHref = function getHref(){\n  return $getAttribute(($clinit_DOM() , this.element), 'href');\n}\n;\ndefineClass(103, 28, $intern_77);\n_.getHref = function getHref_0(){\n  return $getAttribute(($clinit_DOM() , this.element), 'href');\n}\n;\ndefineClass(230, 28, $intern_52);\n_.getHref = function getHref_1(){\n  return $getAttribute(($clinit_DOM() , this.element), 'href');\n}\n;\nfunction $getIndicatorElement(e){\n  return $wnd.jQuery(e).find('.indicator')[0];\n}\n\nfunction $initialize_5(e){\n  $wnd.jQuery(document).ready(function(){\n    $wnd.jQuery(e).tabs();\n  }\n  );\n}\n\nfunction $selectTab(e, tabId){\n  $wnd.jQuery(e).tabs('select_tab', tabId);\n}\n\nfunction $selectTab_0(this$static, tabId){\n  $selectTab(($clinit_DOM() , this$static.element), tabId);\n}\n\nfunction $setIndicatorColor(this$static, indicatorColor){\n  this$static.indicatorColor = indicatorColor;\n  !!this$static.indicatorColorMixin && indicatorColor != null && $setBackgroundColor_0(this$static.indicatorColorMixin, indicatorColor);\n}\n\nfunction $setTabIndex_0(this$static){\n  var i, w, w$iterator;\n  i = 0;\n  for (w$iterator = new WidgetCollection$WidgetIterator(this$static.children); w$iterator.index_0 < w$iterator.this$01.size_0;) {\n    w = $next_3(w$iterator);\n    if (i == 1) {\n      if (instanceOf(w, 120)) {\n        $selectTab_1(dynamicCast(w, 120));\n        break;\n      }\n    }\n    ++i;\n  }\n}\n\nfunction MaterialTab(){\n  UnorderedList.call(this);\n  $setClassName(($clinit_DOM() , this.element), 'tabs');\n}\n\ndefineClass(204, 85, {25:1, 10:1, 24:1, 34:1, 23:1, 32:1, 14:1, 22:1, 18:1, 28:1, 41:1, 36:1, 204:1, 85:1}, MaterialTab);\n_.onLoad = function onLoad_22(){\n  $initialize_5(($clinit_DOM() , this.element));\n  this.indicator = new ComplexWidget_0($getIndicatorElement(this.element));\n  this.indicatorColorMixin = new ColorsMixin(this.indicator);\n  $setIndicatorColor(this, this.indicatorColor);\n}\n;\nvar Lgwt_material_design_client_ui_MaterialTab_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialTab', 204);\nfunction $selectTab_1(this$static){\n  var child, child$iterator, href_0;\n  for (child$iterator = new WidgetCollection$WidgetIterator(this$static.children); child$iterator.index_0 < child$iterator.this$01.size_0;) {\n    child = $next_3(child$iterator);\n    if (instanceOf(child, 162)) {\n      href_0 = dynamicCast(child, 162).getHref();\n      if (href_0.length) {\n        $selectTab_0(this$static.parent_0, $replaceAll(href_0, '[^a-zA-Z\\\\d\\\\s:]', ''));\n        break;\n      }\n    }\n  }\n}\n\nfunction MaterialTabItem(){\n  ListItem.call(this);\n  $setClassName(($clinit_DOM() , this.element), 'tab');\n}\n\ndefineClass(120, 44, {25:1, 10:1, 24:1, 34:1, 23:1, 32:1, 14:1, 22:1, 18:1, 28:1, 41:1, 36:1, 120:1, 44:1}, MaterialTabItem);\n_.onLoad = function onLoad_23(){\n  try {\n    this.parent_0 = dynamicCast(this.parent_1, 204);\n  }\n   catch ($e0) {\n    $e0 = wrap($e0);\n    if (instanceOf($e0, 139)) {\n      throw new ClassCastException_0;\n    }\n     else \n      throw unwrap($e0);\n  }\n}\n;\nvar Lgwt_material_design_client_ui_MaterialTabItem_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialTabItem', 120);\nfunction TabsPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(602, 55, $intern_44, TabsPresenter);\n_.onReveal = function onReveal_33(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Tabs', 'The tabs structure consists of an unordered list of tabs that have hashes corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_tabs_TabsPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.tabs', 'TabsPresenter', 602);\nfunction TabsView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_19(new TabsView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(781, 58, $intern_45, TabsView);\n_.onAttach = function onAttach_11(){\n  $setTabIndex_0(this.tab2);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_tabs_TabsView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.tabs', 'TabsView', 781);\nfunction TabsView_BinderImpl(){\n}\n\ndefineClass(1064, 1, {}, TabsView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_tabs_TabsView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.tabs', 'TabsView_BinderImpl', 1064);\nfunction $build_f_HTMLPanel1_19(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialRow3, f_PrettyPre17, f_MaterialTitle18, f_MaterialRow19, f_PrettyPre33, f_MaterialTitle34, f_PrettyPre50, f_MaterialTitle51, f_MaterialRow52, f_PrettyPre67, f_MaterialColumn4, tab, f_MaterialColumn11, f_MaterialLabel12, f_MaterialColumn13, f_MaterialLabel14, f_MaterialColumn15, f_MaterialLabel16, sb, f_MaterialColumn20, tab2, f_MaterialColumn27, f_MaterialLabel28, f_MaterialColumn29, f_MaterialLabel30, f_MaterialColumn31, f_MaterialLabel32, sb_0, f_MaterialRow35, f_MaterialColumn36, f_MaterialTab37, f_MaterialColumn44, f_MaterialLabel45, f_MaterialColumn46, f_MaterialLabel47, f_MaterialColumn48, f_MaterialLabel49, sb_1, f_MaterialColumn53, f_MaterialTab54, f_MaterialColumn61, f_MaterialLabel62, f_MaterialColumn63, f_MaterialLabel64, f_MaterialColumn65, f_MaterialLabel66, sb_2, f_MaterialTabItem5, f_MaterialLink6, f_MaterialTabItem7, f_MaterialLink8, f_MaterialTabItem9, f_MaterialLink10, f_MaterialTabItem21, f_MaterialLink22, f_MaterialTabItem23, f_MaterialLink24, f_MaterialTabItem25, f_MaterialLink26, f_MaterialTabItem38, f_MaterialLink39, f_MaterialTabItem40, f_MaterialLink41, f_MaterialTabItem42, f_MaterialLink43, f_MaterialTabItem55, f_MaterialLink56, f_MaterialTabItem57, f_MaterialLink58, f_MaterialTabItem59, f_MaterialLink60;\n  f_HTMLPanel1 = new HTMLPanel($html5_2(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Introduction') , $setText_5(f_MaterialTitle2.paragraph, 'You can add a Label as a Tab Item and for contents any Material Widget can be added as a Tab Content (e.g MaterialTopNav)') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow3 = new MaterialRow , $add_12(f_MaterialRow3, (f_MaterialColumn4 = new MaterialColumn , $add_12(f_MaterialColumn4, (tab = new MaterialTab , $add_20(tab, (f_MaterialTabItem5 = new MaterialTabItem , $add_12(f_MaterialTabItem5, (f_MaterialLink6 = new MaterialLink , f_MaterialLink6.span_0.setText('Tab 1') , $add_12(f_MaterialLink6, f_MaterialLink6.span_0) , $setTextColor_0((!f_MaterialLink6.colorsMixin_0 && (f_MaterialLink6.colorsMixin_0 = new ColorsMixin(f_MaterialLink6)) , f_MaterialLink6.colorsMixin_0), 'white') , $setAttribute(f_MaterialLink6.element, 'href', '#tab1') , f_MaterialLink6)) , $setWaves(f_MaterialTabItem5, ($clinit_WavesType() , YELLOW)) , $setGrid((!f_MaterialTabItem5.gridMixin_0 && (f_MaterialTabItem5.gridMixin_0 = new GridMixin(f_MaterialTabItem5)) , f_MaterialTabItem5.gridMixin_0), 's4') , f_MaterialTabItem5)) , $add_20(tab, (f_MaterialTabItem7 = new MaterialTabItem , $add_12(f_MaterialTabItem7, (f_MaterialLink8 = new MaterialLink , f_MaterialLink8.span_0.setText('Tab 2') , $add_12(f_MaterialLink8, f_MaterialLink8.span_0) , $setTextColor_0((!f_MaterialLink8.colorsMixin_0 && (f_MaterialLink8.colorsMixin_0 = new ColorsMixin(f_MaterialLink8)) , f_MaterialLink8.colorsMixin_0), 'white') , $setAttribute(f_MaterialLink8.element, 'href', '#tab2') , f_MaterialLink8)) , $setWaves(f_MaterialTabItem7, YELLOW) , $setGrid((!f_MaterialTabItem7.gridMixin_0 && (f_MaterialTabItem7.gridMixin_0 = new GridMixin(f_MaterialTabItem7)) , f_MaterialTabItem7.gridMixin_0), 's4') , f_MaterialTabItem7)) , $add_20(tab, (f_MaterialTabItem9 = new MaterialTabItem , $add_12(f_MaterialTabItem9, (f_MaterialLink10 = new MaterialLink , f_MaterialLink10.span_0.setText('Tab 3') , $add_12(f_MaterialLink10, f_MaterialLink10.span_0) , $setTextColor_0((!f_MaterialLink10.colorsMixin_0 && (f_MaterialLink10.colorsMixin_0 = new ColorsMixin(f_MaterialLink10)) , f_MaterialLink10.colorsMixin_0), 'white') , $setAttribute(f_MaterialLink10.element, 'href', '#tab3') , f_MaterialLink10)) , $setWaves(f_MaterialTabItem9, YELLOW) , $setGrid((!f_MaterialTabItem9.gridMixin_0 && (f_MaterialTabItem9.gridMixin_0 = new GridMixin(f_MaterialTabItem9)) , f_MaterialTabItem9.gridMixin_0), 's4') , f_MaterialTabItem9)) , tab.indicatorColor = 'yellow' , !!tab.indicatorColorMixin && $setBackgroundColor_0(tab.indicatorColorMixin, 'yellow') , $setBackgroundColor_0((!tab.colorsMixin_0 && (tab.colorsMixin_0 = new ColorsMixin(tab)) , tab.colorsMixin_0), 'blue') , $setWaves(tab, YELLOW) , tab)) , $setGrid((!f_MaterialColumn4.gridMixin_0 && (f_MaterialColumn4.gridMixin_0 = new GridMixin(f_MaterialColumn4)) , f_MaterialColumn4.gridMixin_0), 's12') , f_MaterialColumn4)) , $add_12(f_MaterialRow3, (f_MaterialColumn11 = new MaterialColumn , $add_12(f_MaterialColumn11, (f_MaterialLabel12 = new MaterialLabel , $setInnerHTML(f_MaterialLabel12.element, 'Tab 1 Content') , f_MaterialLabel12)) , $setId_0((!f_MaterialColumn11.idMixin && (f_MaterialColumn11.idMixin = new IdMixin(f_MaterialColumn11)) , f_MaterialColumn11.idMixin), 'tab1') , $setGrid((!f_MaterialColumn11.gridMixin_0 && (f_MaterialColumn11.gridMixin_0 = new GridMixin(f_MaterialColumn11)) , f_MaterialColumn11.gridMixin_0), 's12') , f_MaterialColumn11)) , $add_12(f_MaterialRow3, (f_MaterialColumn13 = new MaterialColumn , $add_12(f_MaterialColumn13, (f_MaterialLabel14 = new MaterialLabel , $setInnerHTML(f_MaterialLabel14.element, 'Tab 2 Content') , f_MaterialLabel14)) , $setId_0((!f_MaterialColumn13.idMixin && (f_MaterialColumn13.idMixin = new IdMixin(f_MaterialColumn13)) , f_MaterialColumn13.idMixin), 'tab2') , $setGrid((!f_MaterialColumn13.gridMixin_0 && (f_MaterialColumn13.gridMixin_0 = new GridMixin(f_MaterialColumn13)) , f_MaterialColumn13.gridMixin_0), 's12') , f_MaterialColumn13)) , $add_12(f_MaterialRow3, (f_MaterialColumn15 = new MaterialColumn , $add_12(f_MaterialColumn15, (f_MaterialLabel16 = new MaterialLabel , $setInnerHTML(f_MaterialLabel16.element, 'Tab 3 Content') , f_MaterialLabel16)) , $setId_0((!f_MaterialColumn15.idMixin && (f_MaterialColumn15.idMixin = new IdMixin(f_MaterialColumn15)) , f_MaterialColumn15.idMixin), 'tab3') , $setGrid((!f_MaterialColumn15.gridMixin_0 && (f_MaterialColumn15.gridMixin_0 = new GridMixin(f_MaterialColumn15)) , f_MaterialColumn15.gridMixin_0), 's12') , f_MaterialColumn15)) , f_MaterialRow3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre17 = new PrettyPre , $setHTML(f_PrettyPre17, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialRow&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s12\"&gt;<br> \\u2003\\u2003&lt;m:MaterialTab ui:field=\"tab\" backgroundColor=\"blue\" indicatorColor=\"yellow\" waves=\"YELLOW\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialTabItem waves=\"YELLOW\" grid=\"s4\"&gt;<br> \\u2003\\u2003\\u2003\\u2003&lt;m:MaterialLink text=\"Tab 1\" href=\"#tab1\" textColor=\"white\"/&gt;<br> \\u2003\\u2003\\u2003&lt;/m:MaterialTabItem&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialTabItem waves=\"YELLOW\" grid=\"s4\"&gt;<br> \\u2003\\u2003\\u2003\\u2003&lt;m:MaterialLink text=\"Tab 2\" href=\"#tab2\" textColor=\"white\"/&gt;<br> \\u2003\\u2003\\u2003&lt;/m:MaterialTabItem&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialTabItem waves=\"YELLOW\" grid=\"s4\"&gt;<br> \\u2003\\u2003\\u2003\\u2003&lt;m:MaterialLink text=\"Tab 3\" href=\"#tab3\" textColor=\"white\"/&gt;<br> \\u2003\\u2003\\u2003&lt;/m:MaterialTabItem&gt;<br> \\u2003\\u2003&lt;/m:MaterialTab&gt;<br> \\u2003&lt;/m:MaterialColumn&gt;<br><br> \\u2003&lt;m:MaterialColumn m:id=\"tab1\" grid=\"s12\"&gt;<br> \\u2003\\u2003&lt;m:MaterialLabel text=\"Tab 1 Content\"/&gt;<br> \\u2003&lt;/m:MaterialColumn&gt;<br> \\u2003&lt;m:MaterialColumn m:id=\"tab2\" grid=\"s12\"&gt;<br> \\u2003\\u2003&lt;m:MaterialLabel text=\"Tab 2 Content\"/&gt;<br> \\u2003&lt;/m:MaterialColumn&gt;<br> \\u2003&lt;m:MaterialColumn m:id=\"tab3\" grid=\"s12\"&gt;<br> \\u2003\\u2003&lt;m:MaterialLabel text=\"Tab 3 Content\"/&gt;<br> \\u2003&lt;/m:MaterialColumn&gt;<br> &lt;/m:MaterialRow&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(f_PrettyPre17.element, 'lang-xml', true) , setStyleName(f_PrettyPre17.element, 'z-depth-1', true) , f_PrettyPre17), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle18 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle18.header), 'Set Tab Index Method') , $setText_5(f_MaterialTitle18.paragraph, 'By calling this method, you can easily preselect a tab index. Note the index will start at 1.') , f_MaterialTitle18), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow19 = new MaterialRow , $add_12(f_MaterialRow19, (f_MaterialColumn20 = new MaterialColumn , $add_12(f_MaterialColumn20, (tab2 = new MaterialTab , $add_20(tab2, (f_MaterialTabItem21 = new MaterialTabItem , $add_12(f_MaterialTabItem21, (f_MaterialLink22 = new MaterialLink , f_MaterialLink22.span_0.setText('Tab 1') , $add_12(f_MaterialLink22, f_MaterialLink22.span_0) , $setTextColor_0((!f_MaterialLink22.colorsMixin_0 && (f_MaterialLink22.colorsMixin_0 = new ColorsMixin(f_MaterialLink22)) , f_MaterialLink22.colorsMixin_0), 'white') , $setAttribute(f_MaterialLink22.element, 'href', '#tab21') , f_MaterialLink22)) , $setWaves(f_MaterialTabItem21, YELLOW) , $setGrid((!f_MaterialTabItem21.gridMixin_0 && (f_MaterialTabItem21.gridMixin_0 = new GridMixin(f_MaterialTabItem21)) , f_MaterialTabItem21.gridMixin_0), 's4') , f_MaterialTabItem21)) , $add_20(tab2, (f_MaterialTabItem23 = new MaterialTabItem , $add_12(f_MaterialTabItem23, (f_MaterialLink24 = new MaterialLink , f_MaterialLink24.span_0.setText('Tab 2') , $add_12(f_MaterialLink24, f_MaterialLink24.span_0) , $setTextColor_0((!f_MaterialLink24.colorsMixin_0 && (f_MaterialLink24.colorsMixin_0 = new ColorsMixin(f_MaterialLink24)) , f_MaterialLink24.colorsMixin_0), 'white') , $setAttribute(f_MaterialLink24.element, 'href', '#tab22') , f_MaterialLink24)) , $setWaves(f_MaterialTabItem23, YELLOW) , $setGrid((!f_MaterialTabItem23.gridMixin_0 && (f_MaterialTabItem23.gridMixin_0 = new GridMixin(f_MaterialTabItem23)) , f_MaterialTabItem23.gridMixin_0), 's4') , f_MaterialTabItem23)) , $add_20(tab2, (f_MaterialTabItem25 = new MaterialTabItem , $add_12(f_MaterialTabItem25, (f_MaterialLink26 = new MaterialLink , f_MaterialLink26.span_0.setText('Tab 3') , $add_12(f_MaterialLink26, f_MaterialLink26.span_0) , $setTextColor_0((!f_MaterialLink26.colorsMixin_0 && (f_MaterialLink26.colorsMixin_0 = new ColorsMixin(f_MaterialLink26)) , f_MaterialLink26.colorsMixin_0), 'white') , $setAttribute(f_MaterialLink26.element, 'href', '#tab23') , f_MaterialLink26)) , $setWaves(f_MaterialTabItem25, YELLOW) , $setGrid((!f_MaterialTabItem25.gridMixin_0 && (f_MaterialTabItem25.gridMixin_0 = new GridMixin(f_MaterialTabItem25)) , f_MaterialTabItem25.gridMixin_0), 's4') , f_MaterialTabItem25)) , tab2.indicatorColor = 'yellow' , !!tab2.indicatorColorMixin && $setBackgroundColor_0(tab2.indicatorColorMixin, 'yellow') , $setBackgroundColor_0((!tab2.colorsMixin_0 && (tab2.colorsMixin_0 = new ColorsMixin(tab2)) , tab2.colorsMixin_0), 'blue') , $setWaves(tab2, YELLOW) , this$static.owner.tab2 = tab2 , tab2)) , $setGrid((!f_MaterialColumn20.gridMixin_0 && (f_MaterialColumn20.gridMixin_0 = new GridMixin(f_MaterialColumn20)) , f_MaterialColumn20.gridMixin_0), 's12') , f_MaterialColumn20)) , $add_12(f_MaterialRow19, (f_MaterialColumn27 = new MaterialColumn , $add_12(f_MaterialColumn27, (f_MaterialLabel28 = new MaterialLabel , $setInnerHTML(f_MaterialLabel28.element, 'Tab 1 Content') , f_MaterialLabel28)) , $setId_0((!f_MaterialColumn27.idMixin && (f_MaterialColumn27.idMixin = new IdMixin(f_MaterialColumn27)) , f_MaterialColumn27.idMixin), 'tab21') , $setGrid((!f_MaterialColumn27.gridMixin_0 && (f_MaterialColumn27.gridMixin_0 = new GridMixin(f_MaterialColumn27)) , f_MaterialColumn27.gridMixin_0), 's12') , f_MaterialColumn27)) , $add_12(f_MaterialRow19, (f_MaterialColumn29 = new MaterialColumn , $add_12(f_MaterialColumn29, (f_MaterialLabel30 = new MaterialLabel , $setInnerHTML(f_MaterialLabel30.element, 'Tab 2 Content') , f_MaterialLabel30)) , $setId_0((!f_MaterialColumn29.idMixin && (f_MaterialColumn29.idMixin = new IdMixin(f_MaterialColumn29)) , f_MaterialColumn29.idMixin), 'tab22') , $setGrid((!f_MaterialColumn29.gridMixin_0 && (f_MaterialColumn29.gridMixin_0 = new GridMixin(f_MaterialColumn29)) , f_MaterialColumn29.gridMixin_0), 's12') , f_MaterialColumn29)) , $add_12(f_MaterialRow19, (f_MaterialColumn31 = new MaterialColumn , $add_12(f_MaterialColumn31, (f_MaterialLabel32 = new MaterialLabel , $setInnerHTML(f_MaterialLabel32.element, 'Tab 3 Content') , f_MaterialLabel32)) , $setId_0((!f_MaterialColumn31.idMixin && (f_MaterialColumn31.idMixin = new IdMixin(f_MaterialColumn31)) , f_MaterialColumn31.idMixin), 'tab23') , $setGrid((!f_MaterialColumn31.gridMixin_0 && (f_MaterialColumn31.gridMixin_0 = new GridMixin(f_MaterialColumn31)) , f_MaterialColumn31.gridMixin_0), 's12') , f_MaterialColumn31)) , f_MaterialRow19), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre33 = new PrettyPre , $setHTML(f_PrettyPre33, (sb_0 = new StringBuilder , sb_0.string += '\\u2003@UiField MaterialTabs tab;<br><br> public MaterialTabsPanel() {<br> \\u2003initWidget(uiBinder.createAndBindUi(this));<br> \\u2003tab.setTabIndex(1);<br> }<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre33.element, 'lang-java', true) , setStyleName(f_PrettyPre33.element, 'z-depth-1', true) , f_PrettyPre33), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle34 = new MaterialTitle , $add_12(f_MaterialTitle34, (f_MaterialRow35 = new MaterialRow , $add_12(f_MaterialRow35, (f_MaterialColumn36 = new MaterialColumn , $add_12(f_MaterialColumn36, (f_MaterialTab37 = new MaterialTab , $add_20(f_MaterialTab37, (f_MaterialTabItem38 = new MaterialTabItem , $add_12(f_MaterialTabItem38, (f_MaterialLink39 = new MaterialLink , f_MaterialLink39.span_0.setText('Recents') , $add_12(f_MaterialLink39, f_MaterialLink39.span_0) , $setTextColor_0((!f_MaterialLink39.colorsMixin_0 && (f_MaterialLink39.colorsMixin_0 = new ColorsMixin(f_MaterialLink39)) , f_MaterialLink39.colorsMixin_0), 'white') , $setAttribute(f_MaterialLink39.element, 'href', '#tab31') , $setIconType(f_MaterialLink39, ($clinit_IconType() , PHONE)) , f_MaterialLink39)) , $setWaves(f_MaterialTabItem38, YELLOW) , $setGrid((!f_MaterialTabItem38.gridMixin_0 && (f_MaterialTabItem38.gridMixin_0 = new GridMixin(f_MaterialTabItem38)) , f_MaterialTabItem38.gridMixin_0), 's4') , f_MaterialTabItem38)) , $add_20(f_MaterialTab37, (f_MaterialTabItem40 = new MaterialTabItem , $add_12(f_MaterialTabItem40, (f_MaterialLink41 = new MaterialLink , f_MaterialLink41.span_0.setText('Favorites') , $add_12(f_MaterialLink41, f_MaterialLink41.span_0) , $setTextColor_0((!f_MaterialLink41.colorsMixin_0 && (f_MaterialLink41.colorsMixin_0 = new ColorsMixin(f_MaterialLink41)) , f_MaterialLink41.colorsMixin_0), 'white') , $setAttribute(f_MaterialLink41.element, 'href', '#tab32') , $setIconType(f_MaterialLink41, FAVORITE) , f_MaterialLink41)) , $setWaves(f_MaterialTabItem40, YELLOW) , $setGrid((!f_MaterialTabItem40.gridMixin_0 && (f_MaterialTabItem40.gridMixin_0 = new GridMixin(f_MaterialTabItem40)) , f_MaterialTabItem40.gridMixin_0), 's4') , f_MaterialTabItem40)) , $add_20(f_MaterialTab37, (f_MaterialTabItem42 = new MaterialTabItem , $add_12(f_MaterialTabItem42, (f_MaterialLink43 = new MaterialLink , f_MaterialLink43.span_0.setText('NearBy') , $add_12(f_MaterialLink43, f_MaterialLink43.span_0) , $setTextColor_0((!f_MaterialLink43.colorsMixin_0 && (f_MaterialLink43.colorsMixin_0 = new ColorsMixin(f_MaterialLink43)) , f_MaterialLink43.colorsMixin_0), 'white') , $setAttribute(f_MaterialLink43.element, 'href', '#tab33') , $setIconType(f_MaterialLink43, NEAR_ME) , f_MaterialLink43)) , $setWaves(f_MaterialTabItem42, YELLOW) , $setGrid((!f_MaterialTabItem42.gridMixin_0 && (f_MaterialTabItem42.gridMixin_0 = new GridMixin(f_MaterialTabItem42)) , f_MaterialTabItem42.gridMixin_0), 's4') , f_MaterialTabItem42)) , f_MaterialTab37.indicatorColor = 'yellow' , !!f_MaterialTab37.indicatorColorMixin && $setBackgroundColor_0(f_MaterialTab37.indicatorColorMixin, 'yellow') , $setBackgroundColor_0((!f_MaterialTab37.colorsMixin_0 && (f_MaterialTab37.colorsMixin_0 = new ColorsMixin(f_MaterialTab37)) , f_MaterialTab37.colorsMixin_0), 'blue') , $setShadow((!f_MaterialTab37.shadowMixin && (f_MaterialTab37.shadowMixin = new ShadowMixin(f_MaterialTab37)) , f_MaterialTab37.shadowMixin), 1) , $setWaves(f_MaterialTab37, YELLOW) , f_MaterialTab37)) , $setGrid((!f_MaterialColumn36.gridMixin_0 && (f_MaterialColumn36.gridMixin_0 = new GridMixin(f_MaterialColumn36)) , f_MaterialColumn36.gridMixin_0), 's12') , f_MaterialColumn36)) , $add_12(f_MaterialRow35, (f_MaterialColumn44 = new MaterialColumn , $add_12(f_MaterialColumn44, (f_MaterialLabel45 = new MaterialLabel , $setInnerHTML(f_MaterialLabel45.element, 'Tab 1 Content') , f_MaterialLabel45)) , $setId_0((!f_MaterialColumn44.idMixin && (f_MaterialColumn44.idMixin = new IdMixin(f_MaterialColumn44)) , f_MaterialColumn44.idMixin), 'tab31') , $setGrid((!f_MaterialColumn44.gridMixin_0 && (f_MaterialColumn44.gridMixin_0 = new GridMixin(f_MaterialColumn44)) , f_MaterialColumn44.gridMixin_0), 's12') , f_MaterialColumn44)) , $add_12(f_MaterialRow35, (f_MaterialColumn46 = new MaterialColumn , $add_12(f_MaterialColumn46, (f_MaterialLabel47 = new MaterialLabel , $setInnerHTML(f_MaterialLabel47.element, 'Tab 2 Content') , f_MaterialLabel47)) , $setId_0((!f_MaterialColumn46.idMixin && (f_MaterialColumn46.idMixin = new IdMixin(f_MaterialColumn46)) , f_MaterialColumn46.idMixin), 'tab32') , $setGrid((!f_MaterialColumn46.gridMixin_0 && (f_MaterialColumn46.gridMixin_0 = new GridMixin(f_MaterialColumn46)) , f_MaterialColumn46.gridMixin_0), 's12') , f_MaterialColumn46)) , $add_12(f_MaterialRow35, (f_MaterialColumn48 = new MaterialColumn , $add_12(f_MaterialColumn48, (f_MaterialLabel49 = new MaterialLabel , $setInnerHTML(f_MaterialLabel49.element, 'Tab 3 Content') , f_MaterialLabel49)) , $setId_0((!f_MaterialColumn48.idMixin && (f_MaterialColumn48.idMixin = new IdMixin(f_MaterialColumn48)) , f_MaterialColumn48.idMixin), 'tab33') , $setGrid((!f_MaterialColumn48.gridMixin_0 && (f_MaterialColumn48.gridMixin_0 = new GridMixin(f_MaterialColumn48)) , f_MaterialColumn48.gridMixin_0), 's12') , f_MaterialColumn48)) , f_MaterialRow35)) , $setInnerHTML($getElement(f_MaterialTitle34.header), 'Tabs with Icons') , f_MaterialTitle34), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre50 = new PrettyPre , $setHTML(f_PrettyPre50, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialTab shadow=\"1\" backgroundColor=\"blue\" indicatorColor=\"yellow\" waves=\"YELLOW\"&gt;<br> \\u2003&lt;m:MaterialTabItem waves=\"YELLOW\" grid=\"s4\"&gt;<br> \\u2003\\u2003&lt;m:MaterialLink iconType=\"PHONE\" text=\"Recents\" href=\"#tab31\" textColor=\"white\"/&gt;<br> \\u2003&lt;/m:MaterialTabItem&gt;<br> \\u2003&lt;m:MaterialTabItem waves=\"YELLOW\" grid=\"s4\"&gt;<br> \\u2003\\u2003&lt;m:MaterialLink iconType=\"FAVORITE\" text=\"Favorites\" href=\"#tab32\" textColor=\"white\"/&gt;<br> \\u2003&lt;/m:MaterialTabItem&gt;<br> \\u2003&lt;m:MaterialTabItem waves=\"YELLOW\" grid=\"s4\"&gt;<br> \\u2003\\u2003&lt;m:MaterialLink iconType=\"NEAR_ME\" text=\"NearBy\" href=\"#tab33\" textColor=\"white\"/&gt;<br> \\u2003&lt;/m:MaterialTabItem&gt;<br> &lt;/m:MaterialTab&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(f_PrettyPre50.element, 'lang-xml', true) , setStyleName(f_PrettyPre50.element, 'z-depth-1', true) , f_PrettyPre50), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle51 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle51.header), 'Changing Indicator Color') , f_MaterialTitle51), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow52 = new MaterialRow , $add_12(f_MaterialRow52, (f_MaterialColumn53 = new MaterialColumn , $add_12(f_MaterialColumn53, (f_MaterialTab54 = new MaterialTab , $add_20(f_MaterialTab54, (f_MaterialTabItem55 = new MaterialTabItem , $add_12(f_MaterialTabItem55, (f_MaterialLink56 = new MaterialLink , f_MaterialLink56.span_0.setText('Recents') , $add_12(f_MaterialLink56, f_MaterialLink56.span_0) , $setTextColor_0((!f_MaterialLink56.colorsMixin_0 && (f_MaterialLink56.colorsMixin_0 = new ColorsMixin(f_MaterialLink56)) , f_MaterialLink56.colorsMixin_0), 'white') , $setAttribute(f_MaterialLink56.element, 'href', '#tab41') , $setIconType(f_MaterialLink56, PHONE) , f_MaterialLink56)) , $setWaves(f_MaterialTabItem55, YELLOW) , $setGrid((!f_MaterialTabItem55.gridMixin_0 && (f_MaterialTabItem55.gridMixin_0 = new GridMixin(f_MaterialTabItem55)) , f_MaterialTabItem55.gridMixin_0), 's4') , f_MaterialTabItem55)) , $add_20(f_MaterialTab54, (f_MaterialTabItem57 = new MaterialTabItem , $add_12(f_MaterialTabItem57, (f_MaterialLink58 = new MaterialLink , f_MaterialLink58.span_0.setText('Favorites') , $add_12(f_MaterialLink58, f_MaterialLink58.span_0) , $setTextColor_0((!f_MaterialLink58.colorsMixin_0 && (f_MaterialLink58.colorsMixin_0 = new ColorsMixin(f_MaterialLink58)) , f_MaterialLink58.colorsMixin_0), 'white') , $setAttribute(f_MaterialLink58.element, 'href', '#tab42') , $setIconType(f_MaterialLink58, FAVORITE) , f_MaterialLink58)) , $setWaves(f_MaterialTabItem57, YELLOW) , $setGrid((!f_MaterialTabItem57.gridMixin_0 && (f_MaterialTabItem57.gridMixin_0 = new GridMixin(f_MaterialTabItem57)) , f_MaterialTabItem57.gridMixin_0), 's4') , f_MaterialTabItem57)) , $add_20(f_MaterialTab54, (f_MaterialTabItem59 = new MaterialTabItem , $add_12(f_MaterialTabItem59, (f_MaterialLink60 = new MaterialLink , f_MaterialLink60.span_0.setText('NearBy') , $add_12(f_MaterialLink60, f_MaterialLink60.span_0) , $setTextColor_0((!f_MaterialLink60.colorsMixin_0 && (f_MaterialLink60.colorsMixin_0 = new ColorsMixin(f_MaterialLink60)) , f_MaterialLink60.colorsMixin_0), 'white') , $setAttribute(f_MaterialLink60.element, 'href', '#tab43') , $setIconType(f_MaterialLink60, NEAR_ME) , f_MaterialLink60)) , $setWaves(f_MaterialTabItem59, YELLOW) , $setGrid((!f_MaterialTabItem59.gridMixin_0 && (f_MaterialTabItem59.gridMixin_0 = new GridMixin(f_MaterialTabItem59)) , f_MaterialTabItem59.gridMixin_0), 's4') , f_MaterialTabItem59)) , f_MaterialTab54.indicatorColor = 'green lighten-3' , !!f_MaterialTab54.indicatorColorMixin && $setBackgroundColor_0(f_MaterialTab54.indicatorColorMixin, 'green lighten-3') , $setBackgroundColor_0((!f_MaterialTab54.colorsMixin_0 && (f_MaterialTab54.colorsMixin_0 = new ColorsMixin(f_MaterialTab54)) , f_MaterialTab54.colorsMixin_0), 'green') , $setShadow((!f_MaterialTab54.shadowMixin && (f_MaterialTab54.shadowMixin = new ShadowMixin(f_MaterialTab54)) , f_MaterialTab54.shadowMixin), 1) , $setWaves(f_MaterialTab54, YELLOW) , f_MaterialTab54)) , $setGrid((!f_MaterialColumn53.gridMixin_0 && (f_MaterialColumn53.gridMixin_0 = new GridMixin(f_MaterialColumn53)) , f_MaterialColumn53.gridMixin_0), 's12') , f_MaterialColumn53)) , $add_12(f_MaterialRow52, (f_MaterialColumn61 = new MaterialColumn , $add_12(f_MaterialColumn61, (f_MaterialLabel62 = new MaterialLabel , $setInnerHTML(f_MaterialLabel62.element, 'Tab 1 Content') , f_MaterialLabel62)) , $setId_0((!f_MaterialColumn61.idMixin && (f_MaterialColumn61.idMixin = new IdMixin(f_MaterialColumn61)) , f_MaterialColumn61.idMixin), 'tab41') , $setGrid((!f_MaterialColumn61.gridMixin_0 && (f_MaterialColumn61.gridMixin_0 = new GridMixin(f_MaterialColumn61)) , f_MaterialColumn61.gridMixin_0), 's12') , f_MaterialColumn61)) , $add_12(f_MaterialRow52, (f_MaterialColumn63 = new MaterialColumn , $add_12(f_MaterialColumn63, (f_MaterialLabel64 = new MaterialLabel , $setInnerHTML(f_MaterialLabel64.element, 'Tab 2 Content') , f_MaterialLabel64)) , $setId_0((!f_MaterialColumn63.idMixin && (f_MaterialColumn63.idMixin = new IdMixin(f_MaterialColumn63)) , f_MaterialColumn63.idMixin), 'tab42') , $setGrid((!f_MaterialColumn63.gridMixin_0 && (f_MaterialColumn63.gridMixin_0 = new GridMixin(f_MaterialColumn63)) , f_MaterialColumn63.gridMixin_0), 's12') , f_MaterialColumn63)) , $add_12(f_MaterialRow52, (f_MaterialColumn65 = new MaterialColumn , $add_12(f_MaterialColumn65, (f_MaterialLabel66 = new MaterialLabel , $setInnerHTML(f_MaterialLabel66.element, 'Tab 3 Content') , f_MaterialLabel66)) , $setId_0((!f_MaterialColumn65.idMixin && (f_MaterialColumn65.idMixin = new IdMixin(f_MaterialColumn65)) , f_MaterialColumn65.idMixin), 'tab43') , $setGrid((!f_MaterialColumn65.gridMixin_0 && (f_MaterialColumn65.gridMixin_0 = new GridMixin(f_MaterialColumn65)) , f_MaterialColumn65.gridMixin_0), 's12') , f_MaterialColumn65)) , f_MaterialRow52), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre67 = new PrettyPre , $setHTML(f_PrettyPre67, (sb_2 = new StringBuilder , sb_2.string += '&lt;m:MaterialTab shadow=\"1\" backgroundColor=\"green\" indicatorColor=\"green lighten-3\" waves=\"YELLOW\"&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , setStyleName(f_PrettyPre67.element, 'lang-xml', true) , setStyleName(f_PrettyPre67.element, 'z-depth-1', true) , f_PrettyPre67), $get_0(this$static.domId10Element));\n  return f_HTMLPanel1;\n}\n\nfunction TabsView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n}\n\ndefineClass(1065, 1, {}, TabsView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_tabs_TabsView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.tabs', 'TabsView_BinderImpl/Widgets', 1065);\nfunction $html5_2(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsPresenter$_annotation$$none$$) {\n    result = new TabsPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsView$_annotation$$none$$) {\n    result = new TabsView(new TabsView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsView$_annotation$$none$$;\n}\n\ndefineClass(542, 1, $intern_64);\n_.onSuccess_0 = function onSuccess_23(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$tabs$TabsPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nfunction ClassCastException_0(){\n  RuntimeException_0.call(this, 'MaterialTabItem must be within a MaterialTab widget.');\n}\n\ndefineClass(139, 47, $intern_68, ClassCastException_0);\n$entry(onLoad_0)(24);\n\n//# sourceURL=gwtmaterialdemo-24.js\n")
