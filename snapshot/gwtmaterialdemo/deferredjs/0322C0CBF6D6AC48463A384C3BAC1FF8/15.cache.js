$wnd.gwtmaterialdemo.runAsyncCallback15('function DropdownPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(631, 56, $intern_50, DropdownPresenter);\n_.onReveal = function onReveal_25(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent(\'Dropdown\', "You can add dropdown easily by specifying it\'s item content and add a UiHandler on it to implement any event."));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_dropdown_DropdownPresenter_2_classLit = createForClass(\'gwt.material.design.demo.client.application.components.dropdown\', \'DropdownPresenter\', 631);\nfunction DropdownView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_7(new DropdownView_BinderImpl$Widgets));\n}\n\ndefineClass(827, 59, $intern_51, DropdownView);\nvar Lgwt_material_design_demo_client_application_components_dropdown_DropdownView_2_classLit = createForClass(\'gwt.material.design.demo.client.application.components.dropdown\', \'DropdownView\', 827);\nfunction DropdownView_BinderImpl(){\n}\n\ndefineClass(1100, 1, {}, DropdownView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_dropdown_DropdownView_1BinderImpl_2_classLit = createForClass(\'gwt.material.design.demo.client.application.components.dropdown\', \'DropdownView_BinderImpl\', 1100);\nfunction $build_f_HTMLPanel2_0(this$static){\n  var __attachRecord__, f_HTMLPanel2, f_MaterialTitle3, f_MaterialTitle4, f_MaterialButton5, f_MaterialDropDown6, f_PrettyPre10, f_MaterialTitle11, f_MaterialButton12, f_MaterialDropDown13, f_PrettyPre17, f_MaterialTitle18, f_MaterialIcon19, f_MaterialDropDown20, f_PrettyPre21, f_MaterialTitle22, f_MaterialNavBar23, f_MaterialDropDown27, f_PrettyPre31, f_MaterialLink7, f_MaterialLink8, f_MaterialLink9, sb, f_MaterialLink14, f_MaterialLink15, f_MaterialLink16, sb_0, linkDialPad, linkVoicemail, linkNotification, sb_1, f_MaterialNavBrand24, f_MaterialNavSection25, f_MaterialLink26, f_MaterialLink28, f_MaterialLink29, f_MaterialLink30, sb_2;\n  f_HTMLPanel2 = new HTMLPanel($html5_1(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10, this$static.domId11, this$static.domId12, this$static.domId13, this$static.domId14, this$static.domId15, this$static.domId16).html);\n  __attachRecord__ = attachToDom(f_HTMLPanel2.element);\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  $get_0(this$static.domId11Element);\n  $get_0(this$static.domId12Element);\n  $get_0(this$static.domId13Element);\n  $get_0(this$static.domId14Element);\n  $get_0(this$static.domId15Element);\n  $get_0(this$static.domId16Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML(f_MaterialTitle3.header.element, \'Dropdown Properties\') , f_MaterialTitle3), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_MaterialTitle4 = new MaterialTitle , $setInnerHTML(f_MaterialTitle4.header.element, \'Introduction\') , $setText_9(f_MaterialTitle4.paragraph, \'Add a dropdown list to any button. Make sure to add the property activates to be able to initialize the dropdown plugin, it will use that as your id on your dropdown menu.\') , f_MaterialTitle4), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_MaterialButton5 = new MaterialButton , $setIconPosition(f_MaterialButton5, ($clinit_IconPosition() , RIGHT_5)) , f_MaterialButton5.span_1.setText(\'Dropdown\') , $add_12(f_MaterialButton5, f_MaterialButton5.span_1) , $setTextColor_0((!f_MaterialButton5.colorsMixin_0 && (f_MaterialButton5.colorsMixin_0 = new ColorsMixin(f_MaterialButton5)) , f_MaterialButton5.colorsMixin_0), \'white\') , $setActivates(f_MaterialButton5, \'dp-2\') , $setBackgroundColor_0((!f_MaterialButton5.colorsMixin_0 && (f_MaterialButton5.colorsMixin_0 = new ColorsMixin(f_MaterialButton5)) , f_MaterialButton5.colorsMixin_0), \'blue\') , $setIconType(f_MaterialButton5, ($clinit_IconType() , ARROW_DROP_DOWN)) , f_MaterialButton5), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_MaterialDropDown6 = new MaterialDropDown(\'dp-2\') , $add_24(f_MaterialDropDown6, (f_MaterialLink7 = new MaterialLink , f_MaterialLink7.span_1.setText(\'First\') , $add_12(f_MaterialLink7, f_MaterialLink7.span_1) , f_MaterialLink7)) , $add_24(f_MaterialDropDown6, (f_MaterialLink8 = new MaterialLink , f_MaterialLink8.span_1.setText(\'Second\') , $add_12(f_MaterialLink8, f_MaterialLink8.span_1) , f_MaterialLink8)) , $add_24(f_MaterialDropDown6, (f_MaterialLink9 = new MaterialLink , f_MaterialLink9.span_1.setText(\'Third\') , $add_12(f_MaterialLink9, f_MaterialLink9.span_1) , f_MaterialLink9)) , f_MaterialDropDown6.constrainWidth = true , f_MaterialDropDown6), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_PrettyPre10 = new PrettyPre , $setHTML(f_PrettyPre10, (sb = new StringBuilder , sb.string += \'\\u2003&lt;m:MaterialTitle title="Introduction" description="Add a dropdown list to any button. Make sure to add the property activates to be able to initialize the dropdown plugin, it will use that as your id on your dropdown menu."/&gt;<br> &lt;!-- Activator --&gt;<br> &lt;m:MaterialButton text="Dropdown" iconType="ARROW_DROP_DOWN" iconPosition="RIGHT" textColor="white" backgroundColor="blue" activates="dp-2"/&gt;<br> &lt;!-- My Drop Down --&gt;<br> &lt;m:MaterialDropDown activator="dp-2" constrainWidth="true"&gt;<br> \\u2003&lt;m:MaterialLink text="First" /&gt;<br> \\u2003&lt;m:MaterialLink text="Second" /&gt;<br> \\u2003&lt;m:MaterialLink text="Third" /&gt;<br> &lt;/m:MaterialDropDown&gt;<br>\' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(f_PrettyPre10.element, \'lang-xml\', true) , setStyleName(f_PrettyPre10.element, \'z-depth-1\', true) , f_PrettyPre10), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_MaterialTitle11 = new MaterialTitle , $setInnerHTML(f_MaterialTitle11.header.element, \'Designing\') , $setText_9(f_MaterialTitle11.paragraph, \'You can add divider, waves and color attributes to your dropdown. On items you can use any Material Widgets like MaterialLink, MaterialButton etc. to add it inside the dropdown.\') , f_MaterialTitle11), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_MaterialButton12 = new MaterialButton , $setIconPosition(f_MaterialButton12, RIGHT_5) , f_MaterialButton12.span_1.setText(\'Dropdown\') , $add_12(f_MaterialButton12, f_MaterialButton12.span_1) , $setTextColor_0((!f_MaterialButton12.colorsMixin_0 && (f_MaterialButton12.colorsMixin_0 = new ColorsMixin(f_MaterialButton12)) , f_MaterialButton12.colorsMixin_0), \'white\') , $setActivates(f_MaterialButton12, \'dp-3\') , $setBackgroundColor_0((!f_MaterialButton12.colorsMixin_0 && (f_MaterialButton12.colorsMixin_0 = new ColorsMixin(f_MaterialButton12)) , f_MaterialButton12.colorsMixin_0), \'blue\') , $setIconType(f_MaterialButton12, ARROW_DROP_DOWN) , f_MaterialButton12), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_MaterialDropDown13 = new MaterialDropDown(\'dp-3\') , $add_24(f_MaterialDropDown13, (f_MaterialLink14 = new MaterialLink , $setIconPosition(f_MaterialLink14, RIGHT_5) , f_MaterialLink14.span_1.setText(\'First\') , $add_12(f_MaterialLink14, f_MaterialLink14.span_1) , (!f_MaterialLink14.separatorMixin && (f_MaterialLink14.separatorMixin = new SeparatorMixin(f_MaterialLink14)) , f_MaterialLink14.separatorMixin).uiObject.element.style[\'borderBottom\'] = \'1px solid #e9e9e9\' , $setIconType(f_MaterialLink14, POLYMER) , f_MaterialLink14)) , $add_24(f_MaterialDropDown13, (f_MaterialLink15 = new MaterialLink , $setIconPosition(f_MaterialLink15, RIGHT_5) , f_MaterialLink15.span_1.setText(\'Second\') , $add_12(f_MaterialLink15, f_MaterialLink15.span_1) , (!f_MaterialLink15.separatorMixin && (f_MaterialLink15.separatorMixin = new SeparatorMixin(f_MaterialLink15)) , f_MaterialLink15.separatorMixin).uiObject.element.style[\'borderBottom\'] = \'1px solid #e9e9e9\' , $setIconType(f_MaterialLink15, POLYMER) , f_MaterialLink15)) , $add_24(f_MaterialDropDown13, (f_MaterialLink16 = new MaterialLink , $setIconPosition(f_MaterialLink16, RIGHT_5) , f_MaterialLink16.span_1.setText(\'Third\') , $add_12(f_MaterialLink16, f_MaterialLink16.span_1) , (!f_MaterialLink16.separatorMixin && (f_MaterialLink16.separatorMixin = new SeparatorMixin(f_MaterialLink16)) , f_MaterialLink16.separatorMixin).uiObject.element.style[\'borderBottom\'] = \'1px solid #e9e9e9\' , $setIconType(f_MaterialLink16, POLYMER) , f_MaterialLink16)) , f_MaterialDropDown13.constrainWidth = true , f_MaterialDropDown13), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_PrettyPre17 = new PrettyPre , $setHTML(f_PrettyPre17, (sb_0 = new StringBuilder , sb_0.string += \'\\u2003&lt;m:MaterialTitle title="Designing" description="You can add divider, waves and color attributes to your dropdown. On items you can use any Material Widgets like MaterialLink, MaterialButton etc. to add it inside the dropdown."/&gt;<br> &lt;!-- Activator --&gt;<br> &lt;m:MaterialButton text="Dropdown" iconType="ARROW_DROP_DOWN" iconPosition="RIGHT" textColor="white" backgroundColor="blue" activates="dp-3"/&gt;<br> &lt;!-- My Drop Down --&gt;<br> &lt;m:MaterialDropDown activator="dp-3" constrainWidth="true"&gt;<br> \\u2003&lt;m:MaterialLink text="First" iconType="POLYMER" iconPosition="RIGHT" separator="true"/&gt;<br> \\u2003&lt;m:MaterialLink text="Second" iconType="POLYMER" iconPosition="RIGHT" separator="true"/&gt;<br> \\u2003&lt;m:MaterialLink text="Third" iconType="POLYMER" iconPosition="RIGHT" separator="true"/&gt;<br> &lt;/m:MaterialDropDown&gt;<br>\' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre17.element, \'lang-xml\', true) , setStyleName(f_PrettyPre17.element, \'z-depth-1\', true) , f_PrettyPre17), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_MaterialTitle18 = new MaterialTitle , $setInnerHTML(f_MaterialTitle18.header.element, \'Icon Dropdown\') , f_MaterialTitle18), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_MaterialIcon19 = new MaterialIcon , $setActivates(f_MaterialIcon19, \'dp-4\') , $setWaves(f_MaterialIcon19, ($clinit_WavesType() , DEFAULT_7)) , $setGrid((!f_MaterialIcon19.gridMixin_0 && (f_MaterialIcon19.gridMixin_0 = new GridMixin(f_MaterialIcon19)) , f_MaterialIcon19.gridMixin_0), \'l2\') , $setTextColor_0(f_MaterialIcon19.colorsMixin, \'black\') , $setIconType_3(f_MaterialIcon19, PHONE) , f_MaterialIcon19), $get_0(this$static.domId10Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_MaterialDropDown20 = new MaterialDropDown(\'dp-4\') , $add_24(f_MaterialDropDown20, (linkDialPad = new MaterialLink , $setIconPosition(linkDialPad, LEFT_4) , linkDialPad.span_1.setText(\'Redial\') , $add_12(linkDialPad, linkDialPad.span_1) , $setTextColor_0((!linkDialPad.colorsMixin_0 && (linkDialPad.colorsMixin_0 = new ColorsMixin(linkDialPad)) , linkDialPad.colorsMixin_0), \'black\') , $setWaves(linkDialPad, DEFAULT_7) , $setFontSize_0((!linkDialPad.fontSizeMixin_0 && (linkDialPad.fontSizeMixin_0 = new FontSizeMixin(linkDialPad)) , linkDialPad.fontSizeMixin_0), \'0.9em\') , $setIconType(linkDialPad, DIALPAD) , linkDialPad)) , $add_24(f_MaterialDropDown20, (linkVoicemail = new MaterialLink , $setEnabled_1((!linkVoicemail.enabledMixin && (linkVoicemail.enabledMixin = new EnabledMixin(linkVoicemail)) , linkVoicemail.enabledMixin)) , $setIconPosition(linkVoicemail, LEFT_4) , linkVoicemail.span_1.setText(\'Check voicemail\') , $add_12(linkVoicemail, linkVoicemail.span_1) , $setTextColor_0((!linkVoicemail.colorsMixin_0 && (linkVoicemail.colorsMixin_0 = new ColorsMixin(linkVoicemail)) , linkVoicemail.colorsMixin_0), \'black\') , $setWaves(linkVoicemail, DEFAULT_7) , $setFontSize_0((!linkVoicemail.fontSizeMixin_0 && (linkVoicemail.fontSizeMixin_0 = new FontSizeMixin(linkVoicemail)) , linkVoicemail.fontSizeMixin_0), \'0.9em\') , (!linkVoicemail.separatorMixin && (linkVoicemail.separatorMixin = new SeparatorMixin(linkVoicemail)) , linkVoicemail.separatorMixin).uiObject.element.style[\'borderBottom\'] = \'1px solid #e9e9e9\' , $setIconType(linkVoicemail, VOICEMAIL) , linkVoicemail)) , $add_24(f_MaterialDropDown20, (linkNotification = new MaterialLink , $setIconPosition(linkNotification, LEFT_4) , linkNotification.span_1.setText(\'Disable Notification\') , $add_12(linkNotification, linkNotification.span_1) , $setTextColor_0((!linkNotification.colorsMixin_0 && (linkNotification.colorsMixin_0 = new ColorsMixin(linkNotification)) , linkNotification.colorsMixin_0), \'black\') , $setWaves(linkNotification, DEFAULT_7) , $setFontSize_0((!linkNotification.fontSizeMixin_0 && (linkNotification.fontSizeMixin_0 = new FontSizeMixin(linkNotification)) , linkNotification.fontSizeMixin_0), \'0.9em\') , $setIconType(linkNotification, NOTIFICATIONS_OFF) , linkNotification)) , f_MaterialDropDown20.constrainWidth = false , f_MaterialDropDown20), $get_0(this$static.domId11Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_PrettyPre21 = new PrettyPre , $setHTML(f_PrettyPre21, (sb_1 = new StringBuilder , sb_1.string += \'\\u2003&lt;!-- Activator --&gt;<br> &lt;m:MaterialIcon iconType="PHONE" iconColor="black" activates="dp-4" waves="DEFAULT" grid="l2"/&gt;<br> &lt;!-- My Drop Down --&gt;<br> &lt;m:MaterialDropDown activator="dp-4" constrainWidth="false"&gt;<br> \\u2003&lt;m:MaterialLink ui:field="linkDialPad" fontSize="0.9em" waves="DEFAULT" textColor="black" iconType="DIALPAD" iconPosition="LEFT" text="Redial" /&gt;<br> \\u2003&lt;m:MaterialLink ui:field="linkVoicemail" fontSize="0.9em" waves="DEFAULT" enabled="false" textColor="black" iconType="VOICEMAIL" iconPosition="LEFT" text="Check voicemail" separator="true"/&gt;<br> \\u2003&lt;m:MaterialLink ui:field="linkNotification" fontSize="0.9em" waves="DEFAULT" textColor="black" iconType="NOTIFICATIONS_OFF" iconPosition="LEFT" text="Disable Notification" /&gt;<br> &lt;/m:MaterialDropDown&gt;<br>\' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(f_PrettyPre21.element, \'lang-xml\', true) , setStyleName(f_PrettyPre21.element, \'z-depth-1\', true) , f_PrettyPre21), $get_0(this$static.domId12Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_MaterialTitle22 = new MaterialTitle , $setInnerHTML(f_MaterialTitle22.header.element, \'Dropdown inside NavBar\') , $setText_9(f_MaterialTitle22.paragraph, \'You can now easily integrate an icon or link type dropdown inside navbar.\') , f_MaterialTitle22), $get_0(this$static.domId13Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_MaterialNavBar23 = new MaterialNavBar , $add_28(f_MaterialNavBar23, (f_MaterialNavBrand24 = new MaterialNavBrand , $add_12(f_MaterialNavBrand24, f_MaterialNavBrand24.div) , $setInnerText(f_MaterialNavBrand24.div.element, \'App Name\') , f_MaterialNavBrand24)) , $add_28(f_MaterialNavBar23, (f_MaterialNavSection25 = new MaterialNavSection , $add_13(f_MaterialNavSection25, new ListItem_0((f_MaterialLink26 = new MaterialLink , $setIconPosition(f_MaterialLink26, RIGHT_5) , f_MaterialLink26.span_1.setText(\'Dropdown\') , $add_12(f_MaterialLink26, f_MaterialLink26.span_1) , $setTextColor_0((!f_MaterialLink26.colorsMixin_0 && (f_MaterialLink26.colorsMixin_0 = new ColorsMixin(f_MaterialLink26)) , f_MaterialLink26.colorsMixin_0), \'white\') , $setActivates(f_MaterialLink26, \'dp-5\') , $setIconType(f_MaterialLink26, ARROW_DROP_DOWN) , f_MaterialLink26))) , $setPosition_3(f_MaterialNavSection25, ($clinit_Position() , RIGHT_6)) , f_MaterialNavSection25)) , $setBackgroundColor_0((!f_MaterialNavBar23.colorsMixin_0 && (f_MaterialNavBar23.colorsMixin_0 = new ColorsMixin(f_MaterialNavBar23)) , f_MaterialNavBar23.colorsMixin_0), \'blue\') , $setPropertyImpl(f_MaterialNavBar23.element.style, \'width\', \'100%\') , f_MaterialNavBar23), $get_0(this$static.domId14Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_MaterialDropDown27 = new MaterialDropDown(\'dp-5\') , $add_24(f_MaterialDropDown27, (f_MaterialLink28 = new MaterialLink , f_MaterialLink28.span_1.setText(\'Drop 1\') , $add_12(f_MaterialLink28, f_MaterialLink28.span_1) , $setTextColor_0((!f_MaterialLink28.colorsMixin_0 && (f_MaterialLink28.colorsMixin_0 = new ColorsMixin(f_MaterialLink28)) , f_MaterialLink28.colorsMixin_0), \'black\') , $setWaves(f_MaterialLink28, DEFAULT_7) , f_MaterialLink28)) , $add_24(f_MaterialDropDown27, (f_MaterialLink29 = new MaterialLink , $setEnabled_1((!f_MaterialLink29.enabledMixin && (f_MaterialLink29.enabledMixin = new EnabledMixin(f_MaterialLink29)) , f_MaterialLink29.enabledMixin)) , f_MaterialLink29.span_1.setText(\'Drop 2\') , $add_12(f_MaterialLink29, f_MaterialLink29.span_1) , $setTextColor_0((!f_MaterialLink29.colorsMixin_0 && (f_MaterialLink29.colorsMixin_0 = new ColorsMixin(f_MaterialLink29)) , f_MaterialLink29.colorsMixin_0), \'black\') , $setWaves(f_MaterialLink29, DEFAULT_7) , (!f_MaterialLink29.separatorMixin && (f_MaterialLink29.separatorMixin = new SeparatorMixin(f_MaterialLink29)) , f_MaterialLink29.separatorMixin).uiObject.element.style[\'borderBottom\'] = \'1px solid #e9e9e9\' , f_MaterialLink29)) , $add_24(f_MaterialDropDown27, (f_MaterialLink30 = new MaterialLink , f_MaterialLink30.span_1.setText(\'Drop 3\') , $add_12(f_MaterialLink30, f_MaterialLink30.span_1) , $setTextColor_0((!f_MaterialLink30.colorsMixin_0 && (f_MaterialLink30.colorsMixin_0 = new ColorsMixin(f_MaterialLink30)) , f_MaterialLink30.colorsMixin_0), \'black\') , $setWaves(f_MaterialLink30, DEFAULT_7) , f_MaterialLink30)) , f_MaterialDropDown27.constrainWidth = true , f_MaterialDropDown27), $get_0(this$static.domId15Element));\n  $addAndReplaceElement_0(f_HTMLPanel2, (f_PrettyPre31 = new PrettyPre , $setHTML(f_PrettyPre31, (sb_2 = new StringBuilder , sb_2.string += \'\\u2003&lt;m:MaterialNavBar backgroundColor="blue" width="100%"&gt;<br> \\u2003&lt;m:MaterialNavBrand&gt;<br>App Name&lt;/m:MaterialNavBrand&gt;<br> \\u2003&lt;m:MaterialNavSection position="RIGHT"&gt;<br> \\u2003\\u2003&lt;!--Activator --&gt;<br> \\u2003\\u2003&lt;m:MaterialLink text="Dropdown" activates="dp-5" textColor="white" iconType="ARROW_DROP_DOWN" iconPosition="RIGHT"/&gt;<br> \\u2003&lt;/m:MaterialNavSection&gt;<br> &lt;/m:MaterialNavBar&gt;<br><br> &lt;!-- My Dropdown --&gt;<br> &lt;m:MaterialDropDown activator="dp-5" constrainWidth="true"&gt;<br> \\u2003&lt;m:MaterialLink waves="DEFAULT" textColor="black" text="Drop 1" /&gt;<br> \\u2003&lt;m:MaterialLink waves="DEFAULT" enabled="false" textColor="black" text="Drop 2" separator="true"/&gt;<br> \\u2003&lt;m:MaterialLink waves="DEFAULT" textColor="black" text="Drop 3" /&gt;<br> &lt;/m:MaterialDropDown&gt;<br>\' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , setStyleName(f_PrettyPre31.element, \'lang-xml\', true) , setStyleName(f_PrettyPre31.element, \'z-depth-1\', true) , f_PrettyPre31), $get_0(this$static.domId16Element));\n  return f_HTMLPanel2;\n}\n\nfunction $build_f_MaterialPanel1_7(this$static){\n  var f_MaterialPanel1;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_12(f_MaterialPanel1, $build_f_HTMLPanel2_0(this$static));\n  return f_MaterialPanel1;\n}\n\nfunction DropdownView_BinderImpl$Widgets(){\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId12 = $createUniqueId($doc);\n  this.domId13 = $createUniqueId($doc);\n  this.domId14 = $createUniqueId($doc);\n  this.domId15 = $createUniqueId($doc);\n  this.domId16 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n  this.domId11Element = new LazyDomElement(this.domId11);\n  this.domId12Element = new LazyDomElement(this.domId12);\n  this.domId13Element = new LazyDomElement(this.domId13);\n  this.domId14Element = new LazyDomElement(this.domId14);\n  this.domId15Element = new LazyDomElement(this.domId15);\n  this.domId16Element = new LazyDomElement(this.domId16);\n}\n\ndefineClass(1101, 1, {}, DropdownView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_dropdown_DropdownView_1BinderImpl$Widgets_2_classLit = createForClass(\'gwt.material.design.demo.client.application.components.dropdown\', \'DropdownView_BinderImpl/Widgets\', 1101);\nfunction $html5_1(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += "<span id=\'";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += "\'><\\/span> <blockquote> <p>name - name of your dropdown, a unique name needs for the activator to set it e.g activates=\'dropdown_name\'<\\/p> <p>constraintWidth - Does not change width of dropdown to that of the activator<\\/p> <p>belowOrigin - displays dropdown below the button<\\/p> <\\/blockquote> <span id=\'";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += "\'><\\/span>  <span id=\'";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += "\'><\\/span>  <span id=\'";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += "\'><\\/span> <span id=\'";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += "\'><\\/span> <span id=\'";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += "\'><\\/span>  <span id=\'";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += "\'><\\/span>  <span id=\'";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += "\'><\\/span> <span id=\'";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += "\'><\\/span> <span id=\'";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += "\'><\\/span> <span id=\'";\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += "\'><\\/span> <span id=\'";\n  $append_3(sb, htmlEscape(arg11));\n  sb.string += "\'><\\/span>  <span id=\'";\n  $append_3(sb, htmlEscape(arg12));\n  sb.string += "\'><\\/span> <span id=\'";\n  $append_3(sb, htmlEscape(arg13));\n  sb.string += "\'><\\/span> <span id=\'";\n  $append_3(sb, htmlEscape(arg14));\n  sb.string += "\'><\\/span>  <span id=\'";\n  $append_3(sb, htmlEscape(arg15));\n  sb.string += "\'><\\/span>  <span id=\'";\n  $append_3(sb, htmlEscape(arg16));\n  sb.string += "\'><\\/span>";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownPresenter$_annotation$$none$$) {\n    result = new DropdownPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownView$_annotation$$none$$) {\n    result = new DropdownView(new DropdownView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownView$_annotation$$none$$;\n}\n\ndefineClass(554, 1, $intern_75);\n_.onSuccess_0 = function onSuccess_14(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(15);\n\n//# sourceURL=gwtmaterialdemo-15.js\n')