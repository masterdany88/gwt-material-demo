$wnd.gwtmaterialdemo.runAsyncCallback1("function Image_2(url_0){\n  $changeState(this, new Image$UnclippedState_0(this, url_0));\n  $setClassName(($clinit_DOM() , this.element), 'gwt-Image');\n}\n\nfunction Image_3(url_0){\n  $clinit_Image();\n  Image_2.call(this, ($clinit_UriUtils() , new SafeUriString(url_0)));\n}\n\ndefineClass(135, 17, $intern_23, Image_3);\nfunction $add_14(this$static, text_0, image){\n  this$static.imageElem = toStringSimple(($clinit_DOM() , image.element));\n  $add_10(this$static, text_0 + image);\n}\n\nfunction $getItemValues(this$static){\n  var keySet, suggestion, suggestion$iterator, values;\n  keySet = new AbstractMap$1(this$static.suggestionMap);\n  values = new ArrayList_0(keySet.this$01.size_1());\n  for (suggestion$iterator = $iterator(keySet); suggestion$iterator.val$outerIter2.hasNext();) {\n    suggestion = dynamicCast($next_5(suggestion$iterator), 306);\n    $add_31(values, suggestion.getReplacementString());\n  }\n  return values;\n}\n\nfunction AutoCompletePresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(533, 51, $intern_41, AutoCompletePresenter);\n_.onReveal = function onReveal_3(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Autocomplete', 'Autocompletes are best way for selecting item easily and grouped them into chips for later search based on item values.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_autocomplete_AutoCompletePresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.autocomplete', 'AutoCompletePresenter', 533);\nfunction $getSimpleSuggestions(){\n  var suggestions;\n  suggestions = new MaterialSuggestionOracle;\n  $add_10(suggestions, 'Alabama');\n  $add_10(suggestions, 'Alaska');\n  $add_10(suggestions, 'Arizona');\n  $add_10(suggestions, 'Arkansas');\n  $add_10(suggestions, 'California');\n  $add_10(suggestions, 'Colorado');\n  $add_10(suggestions, 'Connecticut');\n  $add_10(suggestions, 'Delaware');\n  $add_10(suggestions, 'Florida');\n  $add_10(suggestions, 'Georgia');\n  $add_10(suggestions, 'Hawaii');\n  $add_10(suggestions, 'Idaho');\n  $add_10(suggestions, 'Illinois');\n  $add_10(suggestions, 'Indiana');\n  $add_10(suggestions, 'Iowa');\n  $add_10(suggestions, 'Kansas');\n  $add_10(suggestions, 'Kentucky');\n  $add_10(suggestions, 'Louisiana');\n  $add_10(suggestions, 'Maine');\n  $add_10(suggestions, 'Maryland');\n  $add_10(suggestions, 'Massachusetts');\n  $add_10(suggestions, 'Michigan');\n  $add_10(suggestions, 'Minnesota');\n  $add_10(suggestions, 'Mississippi');\n  $add_10(suggestions, 'Missouri');\n  $add_10(suggestions, 'Montana');\n  $add_10(suggestions, 'Louisiana');\n  return suggestions;\n}\n\nfunction $onGetAll(this$static){\n  var item_0, item$iterator, listItems;\n  listItems = $getItemValues(this$static.acList);\n  for (item$iterator = new AbstractList$IteratorImpl(listItems); item$iterator.i < item$iterator.this$01_0.size_1();) {\n    item_0 = (checkCriticalElement(item$iterator.i < item$iterator.this$01_0.size_1()) , dynamicCastToString(item$iterator.this$01_0.get_1(item$iterator.last = item$iterator.i++)));\n    $toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_4, 17, 0, [])), item_0, $intern_57, null);\n  }\n}\n\nfunction $onGetAllContacts(this$static){\n  var item_0, item$iterator, listItems;\n  listItems = $getItemValues(this$static.acWithImage);\n  for (item$iterator = new AbstractList$IteratorImpl(listItems); item$iterator.i < item$iterator.this$01_0.size_1();) {\n    item_0 = (checkCriticalElement(item$iterator.i < item$iterator.this$01_0.size_1()) , dynamicCastToString(item$iterator.this$01_0.get_1(item$iterator.last = item$iterator.i++)));\n    $toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_4, 17, 0, [])), item_0, $intern_57, null);\n  }\n}\n\nfunction AutoCompleteView(){\n  var suggestions;\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_2(new AutoCompleteView_BinderImpl$Widgets(this)));\n  $generateAutoComplete(this.acList, $getSimpleSuggestions());\n  $generateAutoComplete(this.acListLimit, $getSimpleSuggestions());\n  $generateAutoComplete(this.acWithImage, (suggestions = new MaterialSuggestionOracle , $add_14(suggestions, \"Yunalis Mat Zara'ai\", new Image_3('http://b.vimeocdn.com/ps/339/488/3394886_300.jpg')) , $add_14(suggestions, 'Marjorie Matias', new Image_3('http://lorempixel.com/50/50/people?1')) , $add_14(suggestions, 'Zenaida Ringor', new Image_3('http://lorempixel.com/50/50/people?8')) , $add_14(suggestions, 'Hanna Matias', new Image_3('http://lorempixel.com/50/50/people?2')) , suggestions));\n}\n\ndefineClass(660, 54, $intern_42, AutoCompleteView);\nvar Lgwt_material_design_demo_client_application_components_autocomplete_AutoCompleteView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.autocomplete', 'AutoCompleteView', 660);\nfunction AutoCompleteView_BinderImpl(){\n}\n\ndefineClass(822, 1, {}, AutoCompleteView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_autocomplete_AutoCompleteView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.autocomplete', 'AutoCompleteView_BinderImpl', 822);\nfunction $build_f_HTMLPanel1_2(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialRow3, btnGetAll, btnClear, f_PrettyPre5, f_PrettyPre6, f_MaterialTitle7, f_MaterialRow8, f_PrettyPre23, f_PrettyPre24, btnGetAllContacts, btnClearWithImage, f_MaterialTitle25, f_MaterialRow26, f_PrettyPre28, f_MaterialColumn4, acList, sb, sb_0, f_MaterialColumn9, acWithImage, f_MaterialCollection10, f_MaterialCollectionItem11, f_MaterialCollectionItem15, f_MaterialCollectionItem19, sb_1, sb_2, f_MaterialColumn27, acListLimit, sb_3, f_MaterialImage12, f_Paragraph13, f_Paragraph14, f_MaterialImage16, f_Paragraph17, f_Paragraph18, f_MaterialImage20, f_Paragraph21, f_Paragraph22;\n  f_HTMLPanel1 = new HTMLPanel($html6(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10, this$static.domId11, this$static.domId12, this$static.domId13, this$static.domId14).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  $get_0(this$static.domId11Element);\n  $get_0(this$static.domId12Element);\n  $get_0(this$static.domId13Element);\n  $get_0(this$static.domId14Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Autocomplete') , $setText_4(f_MaterialTitle2.paragraph, 'Use GWT Autocomplete to search for matches from local or remote data sources. We used MultiWordSuggestOracle to populate the list to be added on the autocomplete values') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow3 = new MaterialRow , $add_13(f_MaterialRow3, (f_MaterialColumn4 = new MaterialColumn , $add_13(f_MaterialColumn4, (acList = new MaterialAutoComplete , $setAttribute($getElement(acList.itemBox), 'placeholder', 'States') , this$static.owner.acList = acList , acList)) , $setGrid(f_MaterialColumn4.gridMixin, 's12 m12 l6') , f_MaterialColumn4)) , f_MaterialRow3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnGetAll = new MaterialButton , btnGetAll.span_0.setText('Get All States') , $add_13(btnGetAll, btnGetAll.span_0) , $setBackgroundColor(btnGetAll.colorsMixin, 'blue') , $setWaves(btnGetAll, ($clinit_WavesType() , LIGHT)) , $addDomHandler(btnGetAll, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , btnGetAll), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnClear = new MaterialButton , btnClear.span_0.setText('Clear') , $add_13(btnClear, btnClear.span_0) , $setTextColor(btnClear.colorsMixin, 'black') , $setBackgroundColor(btnClear.colorsMixin, 'white') , $setWaves(btnClear, DEFAULT_6) , $addDomHandler(btnClear, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_1)) , btnClear), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre5 = new PrettyPre , $setHTML(f_PrettyPre5, (sb = new StringBuilder , sb.string += '&lt;m:MaterialAutoComplete ui:field=\"acList\" placeholder=\"Contacts\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(f_PrettyPre5.element, 'lang-xml', true) , setStyleName(f_PrettyPre5.element, 'z-depth-1', true) , f_PrettyPre5), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre6 = new PrettyPre , $setHTML(f_PrettyPre6, (sb_0 = new StringBuilder , sb_0.string += '\\u2003@UiField MaterialAutoComplete acList;<br><br> \\u2003MaterialSuggestionOracle suggestions = new MaterialSuggestionOracle();<br> \\u2003suggestions.add(\"Alabama\");<br> \\u2003suggestions.add(\"Alaska\");<br> \\u2003suggestions.add(\"Arizona\");<br> \\u2003suggestions.add(\"Arkansas\");<br> \\u2003suggestions.add(\"California\");<br> \\u2003suggestions.add(\"Colorado\");<br> \\u2003suggestions.add(\"Connecticut\");<br> \\u2003suggestions.add(\"Delaware\");<br> \\u2003suggestions.add(\"Florida\");<br> \\u2003suggestions.add(\"Georgia\");<br><br> \\u2003acList.setSuggestions(suggestions);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre6.element, 'lang-java', true) , setStyleName(f_PrettyPre6.element, 'z-depth-1', true) , f_PrettyPre6), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle7 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle7.header), 'With Image') , $setText_4(f_MaterialTitle7.paragraph, 'Use GWT Autocomplete to search for matches from local or remote data sources. We used MultiWordSuggestOracle to populate the list to be added on the autocomplete values') , f_MaterialTitle7), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow8 = new MaterialRow , $add_13(f_MaterialRow8, (f_MaterialColumn9 = new MaterialColumn , $add_13(f_MaterialColumn9, (acWithImage = new MaterialAutoComplete , $setAttribute($getElement(acWithImage.itemBox), 'placeholder', 'Contacts') , this$static.owner.acWithImage = acWithImage , acWithImage)) , $add_13(f_MaterialColumn9, (f_MaterialCollection10 = new MaterialCollection , $add_13(f_MaterialCollection10, (f_MaterialCollectionItem11 = new MaterialCollectionItem , $add_13(f_MaterialCollectionItem11, (f_MaterialImage12 = new MaterialImage , $setType_5(f_MaterialImage12, ($clinit_ImageType() , CIRCLE)) , $setUrl_2(f_MaterialImage12, ($clinit_UriUtils() , new SafeUriString('http://b.vimeocdn.com/ps/339/488/3394886_300.jpg'))) , f_MaterialImage12)) , $add_13(f_MaterialCollectionItem11, (f_Paragraph13 = new Paragraph , $setInnerText(f_Paragraph13.element, \"Yunalis Mat Zara'ai\") , $cssSetOpacity(f_Paragraph13.element.style, 0.71) , $setFontSize_0(f_Paragraph13.fontSizeMixin, '1.3em') , f_Paragraph13)) , $add_13(f_MaterialCollectionItem11, (f_Paragraph14 = new Paragraph , $setInnerText(f_Paragraph14.element, 'yunna@mail.com') , $cssSetOpacity(f_Paragraph14.element.style, 0.71) , f_Paragraph14)) , $setOn(f_MaterialCollectionItem11.avatarMixin, true) , f_MaterialCollectionItem11)) , $add_13(f_MaterialCollection10, (f_MaterialCollectionItem15 = new MaterialCollectionItem , $add_13(f_MaterialCollectionItem15, (f_MaterialImage16 = new MaterialImage , $setType_5(f_MaterialImage16, CIRCLE) , $setUrl_2(f_MaterialImage16, new SafeUriString('http://lorempixel.com/50/50/people?1')) , f_MaterialImage16)) , $add_13(f_MaterialCollectionItem15, (f_Paragraph17 = new Paragraph , $setInnerText(f_Paragraph17.element, 'Marjorie Matias') , $cssSetOpacity(f_Paragraph17.element.style, 0.71) , $setFontSize_0(f_Paragraph17.fontSizeMixin, '1.3em') , f_Paragraph17)) , $add_13(f_MaterialCollectionItem15, (f_Paragraph18 = new Paragraph , $setInnerText(f_Paragraph18.element, 'marjorie@mail.com') , $cssSetOpacity(f_Paragraph18.element.style, 0.71) , f_Paragraph18)) , $setOn(f_MaterialCollectionItem15.avatarMixin, true) , f_MaterialCollectionItem15)) , $add_13(f_MaterialCollection10, (f_MaterialCollectionItem19 = new MaterialCollectionItem , $add_13(f_MaterialCollectionItem19, (f_MaterialImage20 = new MaterialImage , $setType_5(f_MaterialImage20, CIRCLE) , $setUrl_2(f_MaterialImage20, new SafeUriString('http://lorempixel.com/50/50/people?8')) , f_MaterialImage20)) , $add_13(f_MaterialCollectionItem19, (f_Paragraph21 = new Paragraph , $setInnerText(f_Paragraph21.element, 'Zenaida Ringor') , $cssSetOpacity(f_Paragraph21.element.style, 0.71) , $setFontSize_0(f_Paragraph21.fontSizeMixin, '1.3em') , f_Paragraph21)) , $add_13(f_MaterialCollectionItem19, (f_Paragraph22 = new Paragraph , $setInnerText(f_Paragraph22.element, 'zenaida@mail.com') , $cssSetOpacity(f_Paragraph22.element.style, 0.71) , f_Paragraph22)) , $setOn(f_MaterialCollectionItem19.avatarMixin, true) , f_MaterialCollectionItem19)) , f_MaterialCollection10)) , $setGrid(f_MaterialColumn9.gridMixin, 's12 m12 l6') , f_MaterialColumn9)) , f_MaterialRow8), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre23 = new PrettyPre , $setHTML(f_PrettyPre23, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialAutoComplete ui:field=\"acWithImage\" placeholder=\"Contacts\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(f_PrettyPre23.element, 'lang-xml', true) , setStyleName(f_PrettyPre23.element, 'z-depth-1', true) , f_PrettyPre23), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre24 = new PrettyPre , $setHTML(f_PrettyPre24, (sb_2 = new StringBuilder , sb_2.string += '\\u2003@UiField MaterialAutoComplete acWithImage;<br><br> \\u2003MaterialSuggestionOracle suggestions = new MaterialSuggestionOracle();<br> \\u2003suggestions.add(\"Yunalis Mat Zara\\'ai\", new Image(\"http://b.vimeocdn.com/ps/339/488/3394886_300.jpg\"));<br> \\u2003suggestions.add(\"Marjorie Matias\", new Image(\"http://lorempixel.com/50/50/people?1\"));<br> \\u2003suggestions.add(\"Zenaida Ringor\", new Image(\"http://lorempixel.com/50/50/people?8\"));<br> \\u2003suggestions.add(\"Hanna Matias\", new Image(\"http://lorempixel.com/50/50/people?2\"));<br><br> \\u2003acWithImage.setSuggestions(suggestions);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , setStyleName(f_PrettyPre24.element, 'lang-java', true) , setStyleName(f_PrettyPre24.element, 'z-depth-1', true) , f_PrettyPre24), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnGetAllContacts = new MaterialButton , btnGetAllContacts.span_0.setText('Get All Contacts') , $add_13(btnGetAllContacts, btnGetAllContacts.span_0) , $setBackgroundColor(btnGetAllContacts.colorsMixin, 'blue') , $setWaves(btnGetAllContacts, LIGHT) , $addDomHandler(btnGetAllContacts, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnGetAllContacts), $get_0(this$static.domId10Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnClearWithImage = new MaterialButton , btnClearWithImage.span_0.setText('Clear') , $add_13(btnClearWithImage, btnClearWithImage.span_0) , $setTextColor(btnClearWithImage.colorsMixin, 'black') , $setBackgroundColor(btnClearWithImage.colorsMixin, 'white') , $setWaves(btnClearWithImage, DEFAULT_6) , $addDomHandler(btnClearWithImage, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (null , TYPE_1)) , btnClearWithImage), $get_0(this$static.domId11Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle25 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle25.header), 'Limit items') , $setText_4(f_MaterialTitle25.paragraph, \"You can specify the number of items on the autocomplete by adding an attribute limit='1'\") , f_MaterialTitle25), $get_0(this$static.domId12Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow26 = new MaterialRow , $add_13(f_MaterialRow26, (f_MaterialColumn27 = new MaterialColumn , $add_13(f_MaterialColumn27, (acListLimit = new MaterialAutoComplete , acListLimit.limit = 1 , $setAttribute($getElement(acListLimit.itemBox), 'placeholder', 'States') , this$static.owner.acListLimit = acListLimit , acListLimit)) , $setGrid(f_MaterialColumn27.gridMixin, 's12 m12 l6') , f_MaterialColumn27)) , f_MaterialRow26), $get_0(this$static.domId13Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre28 = new PrettyPre , $setHTML(f_PrettyPre28, (sb_3 = new StringBuilder , sb_3.string += '&lt;m:MaterialAutoComplete ui:field=\"acListLimit\" placeholder=\"States\" limit=\"1\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html) , setStyleName(f_PrettyPre28.element, 'lang-xml', true) , setStyleName(f_PrettyPre28.element, 'z-depth-1', true) , f_PrettyPre28), $get_0(this$static.domId14Element));\n  return f_HTMLPanel1;\n}\n\nfunction AutoCompleteView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new AutoCompleteView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new AutoCompleteView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new AutoCompleteView_BinderImpl$Widgets$3(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new AutoCompleteView_BinderImpl$Widgets$4(this);\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId12 = $createUniqueId($doc);\n  this.domId13 = $createUniqueId($doc);\n  this.domId14 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n  this.domId11Element = new LazyDomElement(this.domId11);\n  this.domId12Element = new LazyDomElement(this.domId12);\n  this.domId13Element = new LazyDomElement(this.domId13);\n  this.domId14Element = new LazyDomElement(this.domId14);\n}\n\ndefineClass(823, 1, {}, AutoCompleteView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_autocomplete_AutoCompleteView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.autocomplete', 'AutoCompleteView_BinderImpl/Widgets', 823);\nfunction AutoCompleteView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(824, 1, $intern_51, AutoCompleteView_BinderImpl$Widgets$1);\n_.onClick = function onClick_11(event_0){\n  $onGetAll(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_autocomplete_AutoCompleteView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.autocomplete', 'AutoCompleteView_BinderImpl/Widgets/1', 824);\nfunction AutoCompleteView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(825, 1, $intern_51, AutoCompleteView_BinderImpl$Widgets$2);\n_.onClick = function onClick_12(event_0){\n  $onGetAllContacts(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_autocomplete_AutoCompleteView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.autocomplete', 'AutoCompleteView_BinderImpl/Widgets/2', 825);\nfunction AutoCompleteView_BinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(826, 1, $intern_51, AutoCompleteView_BinderImpl$Widgets$3);\n_.onClick = function onClick_13(event_0){\n  $clear_3(this.this$11.owner.acList);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_autocomplete_AutoCompleteView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.autocomplete', 'AutoCompleteView_BinderImpl/Widgets/3', 826);\nfunction AutoCompleteView_BinderImpl$Widgets$4(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(827, 1, $intern_51, AutoCompleteView_BinderImpl$Widgets$4);\n_.onClick = function onClick_14(event_0){\n  $clear_3(this.this$11.owner.acWithImage);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_autocomplete_AutoCompleteView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.components.autocomplete', 'AutoCompleteView_BinderImpl/Widgets/4', 827);\nfunction $html6(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += '\\'><\\/span> <blockquote> <p>You can click the chips to select it.<\\/p> <p>Perform any keyboard actions like pressing KEY DELETE and KEY BACKSPACE to remove it from the autocomplete values<\\/p> <p>By calling automcomplte.getItemValues() you will retrieve all the items that is currently on the Autocomplete Field<\\/p> <p>If the value is already exist, we automatically remove it when adding<\\/p> <p>You can add an unknown value by typing new one then PRESS ENTER<\\/p> <p>To disable , add enabled=\"false\" parameter on the autocomplete widget<\\/p> <\\/blockquote> <span id=\\'';\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg11));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg12));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg13));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg14));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$autocomplete$AutoCompletePresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$autocomplete$AutoCompletePresenter$_annotation$$none$$) {\n    result = new AutoCompletePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$autocomplete$AutoCompleteView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$autocomplete$AutoCompletePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$autocomplete$AutoCompletePresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$autocomplete$AutoCompletePresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$autocomplete$AutoCompleteView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$autocomplete$AutoCompleteView$_annotation$$none$$) {\n    result = new AutoCompleteView(new AutoCompleteView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$autocomplete$AutoCompleteView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$autocomplete$AutoCompleteView$_annotation$$none$$;\n}\n\ndefineClass(465, 1, $intern_56);\n_.onSuccess_0 = function onSuccess_0(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$autocomplete$AutoCompletePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nfunction ArrayList_0(initialCapacity){\n  $$init_2(this);\n  checkCriticalArgument(initialCapacity >= 0, 'Initial capacity must not be negative');\n}\n\ndefineClass(49, $intern_61, $intern_64, ArrayList_0);\n$entry(onLoad_0)(1);\n\n//# sourceURL=gwtmaterialdemo-1.js\n")
