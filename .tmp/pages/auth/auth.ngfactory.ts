/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './auth';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/components/alert/alert';
import * as import10 from '../../providers/auth-provider';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/grid/grid.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import20 from '@angular/core/src/linker/query_list';
import * as import21 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import22 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import23 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/input/input.ngfactory';
import * as import25 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import26 from 'ionic-angular/config/config';
import * as import27 from '@angular/core/src/linker/element_ref';
import * as import28 from 'ionic-angular/navigation/view-controller';
import * as import29 from 'ionic-angular/components/app/app';
import * as import30 from 'ionic-angular/components/toolbar/toolbar';
import * as import31 from 'ionic-angular/util/keyboard';
import * as import32 from '@angular/core/src/zone/ng_zone';
import * as import33 from 'ionic-angular/components/tabs/tabs';
import * as import34 from 'ionic-angular/gestures/gesture-controller';
import * as import35 from 'ionic-angular/util/form';
import * as import36 from 'ionic-angular/components/item/item-reorder';
import * as import37 from 'ionic-angular/platform/platform';
import * as import38 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import39 from 'ionic-angular/components/navbar/navbar';
import * as import40 from 'ionic-angular/components/label/label';
import * as import41 from '@angular/forms/src/directives/ng_model';
import * as import42 from '@angular/forms/src/directives/ng_control';
import * as import43 from '@angular/forms/src/directives/ng_control_status';
import * as import44 from 'ionic-angular/components/input/input';
import * as import45 from 'ionic-angular/components/item/item';
import * as import46 from 'ionic-angular/components/list/list';
import * as import47 from 'ionic-angular/components/button/button';
import * as import48 from 'ionic-angular/components/grid/grid';
import * as import49 from 'ionic-angular/components/content/content';
export class Wrapper_AuthPage {
  context:import0.AuthPage;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this.changed = false;
    this.context = new import0.AuthPage(p0,p1,p2);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_AuthPage_Host:import2.RenderComponentType = (null as any);
class _View_AuthPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _AuthPage_0_4:Wrapper_AuthPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AuthPage_Host0,renderType_AuthPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-auth',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AuthPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AuthPage_0_4 = new Wrapper_AuthPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.AlertController),this.parentInjector.get(import10.AuthProvider));
    this._appEl_0.initComponent(this._AuthPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._AuthPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AuthPage) && (0 === requestNodeIndex))) { return this._AuthPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AuthPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AuthPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_AuthPage_Host === (null as any))) { (renderType_AuthPage_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AuthPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const AuthPageNgFactory:import12.ComponentFactory<import0.AuthPage> = new import12.ComponentFactory<import0.AuthPage>('page-auth',viewFactory_AuthPage_Host0,import0.AuthPage);
const styles_AuthPage:any[] = ([] as any[]);
var renderType_AuthPage:import2.RenderComponentType = (null as any);
class _View_AuthPage0 extends import1.AppView<import0.AuthPage> {
  _el_0:any;
  _Header_0_3:import13.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import14.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _ToolbarTitle_4_4:import15.Wrapper_ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import3.AppElement;
  _Content_9_4:import16.Wrapper_Content;
  _text_10:any;
  _el_11:any;
  _Grid_11_3:import17.Wrapper_Grid;
  _text_12:any;
  _el_13:any;
  _Row_13_3:import17.Wrapper_Row;
  _text_14:any;
  _el_15:any;
  _Col_15_3:import17.Wrapper_Col;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _List_22_3:import18.Wrapper_List;
  _text_23:any;
  _el_24:any;
  /*private*/ _appEl_24:import3.AppElement;
  _Item_24_4:import19.Wrapper_Item;
  _ItemContent_24_5:import19.Wrapper_ItemContent;
  _query_Label_24_0:import20.QueryList<any>;
  _query_Button_24_1:import20.QueryList<any>;
  _query_Icon_24_2:import20.QueryList<any>;
  _text_25:any;
  _el_26:any;
  _Label_26_3:import21.Wrapper_Label;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  /*private*/ _appEl_29:import3.AppElement;
  _NgModel_29_4:import22.Wrapper_NgModel;
  _NgControl_29_5:any;
  _NgControlStatus_29_6:import23.Wrapper_NgControlStatus;
  _TextInput_29_7:import24.Wrapper_TextInput;
  _text_30:any;
  _text_31:any;
  _el_32:any;
  /*private*/ _appEl_32:import3.AppElement;
  _Item_32_4:import19.Wrapper_Item;
  _ItemContent_32_5:import19.Wrapper_ItemContent;
  _query_Label_32_0:import20.QueryList<any>;
  _query_Button_32_1:import20.QueryList<any>;
  _query_Icon_32_2:import20.QueryList<any>;
  _text_33:any;
  _el_34:any;
  _Label_34_3:import21.Wrapper_Label;
  _text_35:any;
  _text_36:any;
  _el_37:any;
  /*private*/ _appEl_37:import3.AppElement;
  _NgModel_37_4:import22.Wrapper_NgModel;
  _NgControl_37_5:any;
  _NgControlStatus_37_6:import23.Wrapper_NgControlStatus;
  _TextInput_37_7:import24.Wrapper_TextInput;
  _text_38:any;
  _text_39:any;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _el_43:any;
  /*private*/ _appEl_43:import3.AppElement;
  _Button_43_4:import25.Wrapper_Button;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  _text_47:any;
  _text_48:any;
  _text_49:any;
  _text_50:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AuthPage0,renderType_AuthPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import13.Wrapper_Header(this.parentInjector.get(import26.Config),new import27.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import28.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this.renderer.setElementAttribute(this._el_2,'color','lens-dark');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import14.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import14.Wrapper_Navbar(this.parentInjector.get(import29.App),this.parentInjector.get(import28.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import26.Config),new import27.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this.renderer.setElementAttribute(this._el_4,'text-center','');
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import15.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import15.Wrapper_ToolbarTitle(this.parentInjector.get(import26.Config),new import27.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import30.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n      iOptom\n    ',(null as any));
    compView_4.create(this._ToolbarTitle_4_4.context,[([] as any[]).concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._el_4,
        this._text_6
      ]
      )
    ]
    ,(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_9,'margin-top','');
    this.renderer.setElementAttribute(this._el_9,'padding','');
    this.renderer.setElementAttribute(this._el_9,'text-center','');
    this._appEl_9 = new import3.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import16.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import16.Wrapper_Content(this.parentInjector.get(import26.Config),new import27.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import29.App),this.parentInjector.get(import31.Keyboard),this.parentInjector.get(import32.NgZone),this.parentInjector.get(import28.ViewController,(null as any)),this.parentInjector.get(import33.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4.context,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'ion-grid',(null as any));
    this.renderer.setElementAttribute(this._el_11,'style','height: 100%');
    this._Grid_11_3 = new import17.Wrapper_Grid();
    this._text_12 = this.renderer.createText(this._el_11,'\n    ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_11,'ion-row',(null as any));
    this._Row_13_3 = new import17.Wrapper_Row();
    this._text_14 = this.renderer.createText(this._el_13,'\n      ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_13,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_15,'offset-10','');
    this.renderer.setElementAttribute(this._el_15,'width-80','');
    this._Col_15_3 = new import17.Wrapper_Col();
    this._text_16 = this.renderer.createText(this._el_15,'\n        ',(null as any));
    this._el_17 = this.renderer.createElement(this._el_15,'img',(null as any));
    this.renderer.setElementAttribute(this._el_17,'id','logo');
    this.renderer.setElementAttribute(this._el_17,'src','assets/images/logo.png');
    this._text_18 = this.renderer.createText(this._el_15,'\n        ',(null as any));
    this._el_19 = this.renderer.createElement(this._el_15,'h4',(null as any));
    this._text_20 = this.renderer.createText(this._el_19,' Sign in ',(null as any));
    this._text_21 = this.renderer.createText(this._el_15,'\n        ',(null as any));
    this._el_22 = this.renderer.createElement(this._el_15,'ion-list',(null as any));
    this._List_22_3 = new import18.Wrapper_List(this.parentInjector.get(import26.Config),new import27.ElementRef(this._el_22),this.renderer,this.parentInjector.get(import34.GestureController));
    this._text_23 = this.renderer.createText(this._el_22,'\n          ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_22,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_24,'class','item item-block');
    this._appEl_24 = new import3.AppElement(24,22,this,this._el_24);
    var compView_24:any = import19.viewFactory_Item0(this.viewUtils,this.injector(24),this._appEl_24);
    this._Item_24_4 = new import19.Wrapper_Item(this.parentInjector.get(import35.Form),this.parentInjector.get(import26.Config),new import27.ElementRef(this._el_24),this.renderer,this.parentInjector.get(import36.ItemReorder,(null as any)));
    this._ItemContent_24_5 = new import19.Wrapper_ItemContent();
    this._query_Label_24_0 = new import20.QueryList<any>();
    this._query_Button_24_1 = new import20.QueryList<any>();
    this._query_Icon_24_2 = new import20.QueryList<any>();
    this._appEl_24.initComponent(this._Item_24_4.context,([] as any[]),compView_24);
    this._text_25 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._el_26 = this.renderer.createElement((null as any),'ion-label',(null as any));
    this.renderer.setElementAttribute(this._el_26,'floating','');
    this._Label_26_3 = new import21.Wrapper_Label(this.parentInjector.get(import26.Config),new import27.ElementRef(this._el_26),this.renderer,'',(null as any),(null as any),(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'Username',(null as any));
    this._text_28 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._el_29 = this.renderer.createElement((null as any),'ion-input',(null as any));
    this.renderer.setElementAttribute(this._el_29,'type','text');
    this.renderer.setElementAttribute(this._el_29,'value','');
    this._appEl_29 = new import3.AppElement(29,24,this,this._el_29);
    var compView_29:any = import24.viewFactory_TextInput0(this.viewUtils,this.injector(29),this._appEl_29);
    this._NgModel_29_4 = new import22.Wrapper_NgModel((null as any),(null as any),(null as any),(null as any));
    this._NgControl_29_5 = this._NgModel_29_4.context;
    this._NgControlStatus_29_6 = new import23.Wrapper_NgControlStatus(this._NgControl_29_5);
    this._TextInput_29_7 = new import24.Wrapper_TextInput(this.parentInjector.get(import26.Config),this.parentInjector.get(import35.Form),this._Item_24_4.context,this.parentInjector.get(import29.App),this.parentInjector.get(import37.Platform),new import27.ElementRef(this._el_29),this.renderer,this._Content_9_4.context,this.parentInjector.get(import8.NavController,(null as any)),this._NgControl_29_5);
    this._appEl_29.initComponent(this._TextInput_29_7.context,([] as any[]),compView_29);
    compView_29.create(this._TextInput_29_7.context,([] as any[]),(null as any));
    this._text_30 = this.renderer.createText((null as any),'\n          ',(null as any));
    this._query_Label_24_0.reset([this._Label_26_3.context]);
    this._Item_24_4.context.contentLabel = this._query_Label_24_0.first;
    compView_24.create(this._Item_24_4.context,[
      ([] as any[]),
      ([] as any[]).concat([this._el_26]),
      ([] as any[]).concat([
        this._text_25,
        this._text_28,
        this._text_30
      ]
      ),
      ([] as any[]).concat([this._el_29]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_31 = this.renderer.createText(this._el_22,'\n          ',(null as any));
    this._el_32 = this.renderer.createElement(this._el_22,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_32,'class','item item-block');
    this._appEl_32 = new import3.AppElement(32,22,this,this._el_32);
    var compView_32:any = import19.viewFactory_Item0(this.viewUtils,this.injector(32),this._appEl_32);
    this._Item_32_4 = new import19.Wrapper_Item(this.parentInjector.get(import35.Form),this.parentInjector.get(import26.Config),new import27.ElementRef(this._el_32),this.renderer,this.parentInjector.get(import36.ItemReorder,(null as any)));
    this._ItemContent_32_5 = new import19.Wrapper_ItemContent();
    this._query_Label_32_0 = new import20.QueryList<any>();
    this._query_Button_32_1 = new import20.QueryList<any>();
    this._query_Icon_32_2 = new import20.QueryList<any>();
    this._appEl_32.initComponent(this._Item_32_4.context,([] as any[]),compView_32);
    this._text_33 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._el_34 = this.renderer.createElement((null as any),'ion-label',(null as any));
    this.renderer.setElementAttribute(this._el_34,'floating','');
    this._Label_34_3 = new import21.Wrapper_Label(this.parentInjector.get(import26.Config),new import27.ElementRef(this._el_34),this.renderer,'',(null as any),(null as any),(null as any));
    this._text_35 = this.renderer.createText(this._el_34,'Password',(null as any));
    this._text_36 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._el_37 = this.renderer.createElement((null as any),'ion-input',(null as any));
    this.renderer.setElementAttribute(this._el_37,'type','password');
    this.renderer.setElementAttribute(this._el_37,'value','');
    this._appEl_37 = new import3.AppElement(37,32,this,this._el_37);
    var compView_37:any = import24.viewFactory_TextInput0(this.viewUtils,this.injector(37),this._appEl_37);
    this._NgModel_37_4 = new import22.Wrapper_NgModel((null as any),(null as any),(null as any),(null as any));
    this._NgControl_37_5 = this._NgModel_37_4.context;
    this._NgControlStatus_37_6 = new import23.Wrapper_NgControlStatus(this._NgControl_37_5);
    this._TextInput_37_7 = new import24.Wrapper_TextInput(this.parentInjector.get(import26.Config),this.parentInjector.get(import35.Form),this._Item_32_4.context,this.parentInjector.get(import29.App),this.parentInjector.get(import37.Platform),new import27.ElementRef(this._el_37),this.renderer,this._Content_9_4.context,this.parentInjector.get(import8.NavController,(null as any)),this._NgControl_37_5);
    this._appEl_37.initComponent(this._TextInput_37_7.context,([] as any[]),compView_37);
    compView_37.create(this._TextInput_37_7.context,([] as any[]),(null as any));
    this._text_38 = this.renderer.createText((null as any),'\n          ',(null as any));
    this._query_Label_32_0.reset([this._Label_34_3.context]);
    this._Item_32_4.context.contentLabel = this._query_Label_32_0.first;
    compView_32.create(this._Item_32_4.context,[
      ([] as any[]),
      ([] as any[]).concat([this._el_34]),
      ([] as any[]).concat([
        this._text_33,
        this._text_36,
        this._text_38
      ]
      ),
      ([] as any[]).concat([this._el_37]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_39 = this.renderer.createText(this._el_22,'\n        ',(null as any));
    this._text_40 = this.renderer.createText(this._el_15,'\n        ',(null as any));
    this._el_41 = this.renderer.createElement(this._el_15,'div',(null as any));
    this.renderer.setElementAttribute(this._el_41,'padding','');
    this._text_42 = this.renderer.createText(this._el_41,'\n          ',(null as any));
    this._el_43 = this.renderer.createElement(this._el_41,'button',(null as any));
    this.renderer.setElementAttribute(this._el_43,'block','');
    this.renderer.setElementAttribute(this._el_43,'ion-button','');
    this.renderer.setElementAttribute(this._el_43,'primary','');
    this._appEl_43 = new import3.AppElement(43,41,this,this._el_43);
    var compView_43:any = import25.viewFactory_Button0(this.viewUtils,this.injector(43),this._appEl_43);
    this._Button_43_4 = new import25.Wrapper_Button((null as any),'',this.parentInjector.get(import26.Config),new import27.ElementRef(this._el_43),this.renderer);
    this._appEl_43.initComponent(this._Button_43_4.context,([] as any[]),compView_43);
    this._text_44 = this.renderer.createText((null as any),'Sign In',(null as any));
    compView_43.create(this._Button_43_4.context,[([] as any[]).concat([this._text_44])],(null as any));
    this._text_45 = this.renderer.createText(this._el_41,'\n        ',(null as any));
    this._text_46 = this.renderer.createText(this._el_15,'\n      ',(null as any));
    this._text_47 = this.renderer.createText(this._el_13,'\n    ',(null as any));
    this._text_48 = this.renderer.createText(this._el_11,'\n  ',(null as any));
    this._text_49 = this.renderer.createText((null as any),'\n',(null as any));
    compView_9.create(this._Content_9_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_10,
        this._el_11,
        this._text_49
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_50 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_29,'ngModelChange',this.eventHandler(this._handle_ngModelChange_29_0.bind(this)));
    const subscription_0:any = this._NgModel_29_4.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_29_0.bind(this)));
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this._expr_11 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_37,'ngModelChange',this.eventHandler(this._handle_ngModelChange_37_0.bind(this)));
    const subscription_1:any = this._NgModel_37_4.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_37_0.bind(this)));
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_18 = import7.UNINITIALIZED;
    this._expr_19 = import7.UNINITIALIZED;
    this._expr_20 = import7.UNINITIALIZED;
    this._expr_21 = import7.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_43,'click',this.eventHandler(this._handle_click_43_0.bind(this)));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._el_34,
      this._text_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._text_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._el_43,
      this._text_44,
      this._text_45,
      this._text_46,
      this._text_47,
      this._text_48,
      this._text_49,
      this._text_50
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    ,[
      subscription_0,
      subscription_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import38.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4.context; }
    if (((token === import39.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4.context; }
    if (((token === import30.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3.context; }
    if (((token === import40.Label) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._Label_26_3.context; }
    if (((token === import41.NgModel) && (29 === requestNodeIndex))) { return this._NgModel_29_4.context; }
    if (((token === import42.NgControl) && (29 === requestNodeIndex))) { return this._NgControl_29_5; }
    if (((token === import43.NgControlStatus) && (29 === requestNodeIndex))) { return this._NgControlStatus_29_6.context; }
    if (((token === import44.TextInput) && (29 === requestNodeIndex))) { return this._TextInput_29_7.context; }
    if (((token === import45.Item) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 30)))) { return this._Item_24_4.context; }
    if (((token === import45.ItemContent) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 30)))) { return this._ItemContent_24_5.context; }
    if (((token === import40.Label) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 35)))) { return this._Label_34_3.context; }
    if (((token === import41.NgModel) && (37 === requestNodeIndex))) { return this._NgModel_37_4.context; }
    if (((token === import42.NgControl) && (37 === requestNodeIndex))) { return this._NgControl_37_5; }
    if (((token === import43.NgControlStatus) && (37 === requestNodeIndex))) { return this._NgControlStatus_37_6.context; }
    if (((token === import44.TextInput) && (37 === requestNodeIndex))) { return this._TextInput_37_7.context; }
    if (((token === import45.Item) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 38)))) { return this._Item_32_4.context; }
    if (((token === import45.ItemContent) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 38)))) { return this._ItemContent_32_5.context; }
    if (((token === import46.List) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 39)))) { return this._List_22_3.context; }
    if (((token === import47.Button) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 44)))) { return this._Button_43_4.context; }
    if (((token === import48.Col) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 46)))) { return this._Col_15_3.context; }
    if (((token === import48.Row) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 47)))) { return this._Row_13_3.context; }
    if (((token === import48.Grid) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 48)))) { return this._Grid_11_3.context; }
    if (((token === import49.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 49)))) { return this._Content_9_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    const currVal_0:any = 'lens-dark';
    this._Navbar_2_4.check_color(currVal_0,throwOnChange,false);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._ToolbarTitle_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    if (this._Content_9_4.detectChangesInternal(this,this._el_9,throwOnChange)) { this._appEl_9.componentView.markAsCheckOnce(); }
    this._Grid_11_3.detectChangesInternal(this,this._el_11,throwOnChange);
    this._Row_13_3.detectChangesInternal(this,this._el_13,throwOnChange);
    this._Col_15_3.detectChangesInternal(this,this._el_15,throwOnChange);
    this._List_22_3.detectChangesInternal(this,this._el_22,throwOnChange);
    if (this._Item_24_4.detectChangesInternal(this,this._el_24,throwOnChange)) { this._appEl_24.componentView.markAsCheckOnce(); }
    this._ItemContent_24_5.detectChangesInternal(this,this._el_24,throwOnChange);
    this._Label_26_3.detectChangesInternal(this,this._el_26,throwOnChange);
    const currVal_5:any = this.context.username;
    this._NgModel_29_4.check_model(currVal_5,throwOnChange,false);
    this._NgModel_29_4.detectChangesInternal(this,this._el_29,throwOnChange);
    this._NgControlStatus_29_6.detectChangesInternal(this,this._el_29,throwOnChange);
    const currVal_12:any = '';
    this._TextInput_29_7.check_value(currVal_12,throwOnChange,false);
    const currVal_13:any = 'text';
    this._TextInput_29_7.check_type(currVal_13,throwOnChange,false);
    this._TextInput_29_7.detectChangesInternal(this,this._el_29,throwOnChange);
    if (this._Item_32_4.detectChangesInternal(this,this._el_32,throwOnChange)) { this._appEl_32.componentView.markAsCheckOnce(); }
    this._ItemContent_32_5.detectChangesInternal(this,this._el_32,throwOnChange);
    this._Label_34_3.detectChangesInternal(this,this._el_34,throwOnChange);
    const currVal_15:any = this.context.password;
    this._NgModel_37_4.check_model(currVal_15,throwOnChange,false);
    this._NgModel_37_4.detectChangesInternal(this,this._el_37,throwOnChange);
    this._NgControlStatus_37_6.detectChangesInternal(this,this._el_37,throwOnChange);
    const currVal_22:any = '';
    this._TextInput_37_7.check_value(currVal_22,throwOnChange,false);
    const currVal_23:any = 'password';
    this._TextInput_37_7.check_type(currVal_23,throwOnChange,false);
    this._TextInput_37_7.detectChangesInternal(this,this._el_37,throwOnChange);
    const currVal_25:any = '';
    this._Button_43_4.check_block(currVal_25,throwOnChange,false);
    if (this._Button_43_4.detectChangesInternal(this,this._el_43,throwOnChange)) { this._appEl_43.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_24_1.dirty) {
        this._query_Button_24_1.reset(([] as any[]));
        this._Item_24_4.context._buttons = this._query_Button_24_1;
        this._query_Button_24_1.notifyOnChanges();
      }
      if (this._query_Icon_24_2.dirty) {
        this._query_Icon_24_2.reset(([] as any[]));
        this._Item_24_4.context._icons = this._query_Icon_24_2;
        this._query_Icon_24_2.notifyOnChanges();
      }
      if (this._query_Button_32_1.dirty) {
        this._query_Button_32_1.reset(([] as any[]));
        this._Item_32_4.context._buttons = this._query_Button_32_1;
        this._query_Button_32_1.notifyOnChanges();
      }
      if (this._query_Icon_32_2.dirty) {
        this._query_Icon_32_2.reset(([] as any[]));
        this._Item_32_4.context._icons = this._query_Icon_32_2;
        this._query_Icon_32_2.notifyOnChanges();
      }
      this._TextInput_29_7.context.ngAfterContentChecked();
      if ((this.numberOfChecks === 0)) { this._Item_24_4.context.ngAfterContentInit(); }
      this._TextInput_37_7.context.ngAfterContentChecked();
      if ((this.numberOfChecks === 0)) { this._Item_32_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_43_4.context.ngAfterContentInit(); }
    }
    const currVal_1:any = this._Navbar_2_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Navbar_2_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this._Content_9_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_9,'statusbar-padding',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_6:any = this._NgControlStatus_29_6.context.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_29,'ng-untouched',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatus_29_6.context.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_29,'ng-touched',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatus_29_6.context.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_29,'ng-pristine',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._NgControlStatus_29_6.context.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_29,'ng-dirty',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this._NgControlStatus_29_6.context.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementClass(this._el_29,'ng-valid',currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = this._NgControlStatus_29_6.context.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementClass(this._el_29,'ng-invalid',currVal_11);
      this._expr_11 = currVal_11;
    }
    const currVal_16:any = this._NgControlStatus_37_6.context.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementClass(this._el_37,'ng-untouched',currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = this._NgControlStatus_37_6.context.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementClass(this._el_37,'ng-touched',currVal_17);
      this._expr_17 = currVal_17;
    }
    const currVal_18:any = this._NgControlStatus_37_6.context.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementClass(this._el_37,'ng-pristine',currVal_18);
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = this._NgControlStatus_37_6.context.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementClass(this._el_37,'ng-dirty',currVal_19);
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = this._NgControlStatus_37_6.context.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementClass(this._el_37,'ng-valid',currVal_20);
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = this._NgControlStatus_37_6.context.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setElementClass(this._el_37,'ng-invalid',currVal_21);
      this._expr_21 = currVal_21;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._NgModel_29_4.context.ngOnDestroy();
    this._TextInput_29_7.context.ngOnDestroy();
    this._NgModel_37_4.context.ngOnDestroy();
    this._TextInput_37_7.context.ngOnDestroy();
    this._Content_9_4.context.ngOnDestroy();
  }
  private _handle_ngModelChange_29_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.username = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_ngModelChange_37_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.password = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_click_43_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.login()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_AuthPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.AuthPage> {
  if ((renderType_AuthPage === (null as any))) { (renderType_AuthPage = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,styles_AuthPage,{})); }
  return new _View_AuthPage0(viewUtils,parentInjector,declarationEl);
}