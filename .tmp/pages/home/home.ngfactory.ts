/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './home';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../providers/lens-provider';
import * as import10 from '../../providers/auth-provider';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/grid/grid.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import19 from 'ionic-angular/config/config';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from 'ionic-angular/navigation/view-controller';
import * as import22 from 'ionic-angular/components/app/app';
import * as import23 from 'ionic-angular/components/toolbar/toolbar';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from 'ionic-angular/components/tabs/tabs';
import * as import27 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import28 from 'ionic-angular/components/navbar/navbar';
import * as import29 from 'ionic-angular/components/grid/grid';
import * as import30 from 'ionic-angular/components/button/button';
import * as import31 from 'ionic-angular/components/content/content';
export class Wrapper_HomePage {
  context:import0.HomePage;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this.changed = false;
    this.context = new import0.HomePage(p0,p1,p2);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_HomePage_Host:import2.RenderComponentType = (null as any);
class _View_HomePage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _HomePage_0_4:Wrapper_HomePage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HomePage_Host0,renderType_HomePage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-home',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HomePage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HomePage_0_4 = new Wrapper_HomePage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.LensProvider),this.parentInjector.get(import10.AuthProvider));
    this._appEl_0.initComponent(this._HomePage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._HomePage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HomePage) && (0 === requestNodeIndex))) { return this._HomePage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HomePage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HomePage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_HomePage_Host === (null as any))) { (renderType_HomePage_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_HomePage_Host0(viewUtils,parentInjector,declarationEl);
}
export const HomePageNgFactory:import12.ComponentFactory<import0.HomePage> = new import12.ComponentFactory<import0.HomePage>('page-home',viewFactory_HomePage_Host0,import0.HomePage);
const styles_HomePage:any[] = ([] as any[]);
var renderType_HomePage:import2.RenderComponentType = (null as any);
class _View_HomePage0 extends import1.AppView<import0.HomePage> {
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
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _Row_24_3:import17.Wrapper_Row;
  _text_25:any;
  _el_26:any;
  _Col_26_3:import17.Wrapper_Col;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _el_30:any;
  /*private*/ _appEl_30:import3.AppElement;
  _Button_30_4:import18.Wrapper_Button;
  _text_31:any;
  _text_32:any;
  _el_33:any;
  /*private*/ _appEl_33:import3.AppElement;
  _Button_33_4:import18.Wrapper_Button;
  _text_34:any;
  _text_35:any;
  _el_36:any;
  /*private*/ _appEl_36:import3.AppElement;
  _Button_36_4:import18.Wrapper_Button;
  _text_37:any;
  _text_38:any;
  _el_39:any;
  /*private*/ _appEl_39:import3.AppElement;
  _Button_39_4:import18.Wrapper_Button;
  _text_40:any;
  _text_41:any;
  _el_42:any;
  /*private*/ _appEl_42:import3.AppElement;
  _Button_42_4:import18.Wrapper_Button;
  _text_43:any;
  _text_44:any;
  _el_45:any;
  _text_46:any;
  _text_47:any;
  _text_48:any;
  _text_49:any;
  _text_50:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HomePage0,renderType_HomePage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import13.Wrapper_Header(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import21.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this.renderer.setElementAttribute(this._el_2,'color','lens-dark');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import14.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import14.Wrapper_Navbar(this.parentInjector.get(import22.App),this.parentInjector.get(import21.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this.renderer.setElementAttribute(this._el_4,'text-center','');
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import15.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import15.Wrapper_ToolbarTitle(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import23.Toolbar,(null as any)),this._Navbar_2_4.context);
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
    this._Content_9_4 = new import16.Wrapper_Content(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import22.App),this.parentInjector.get(import24.Keyboard),this.parentInjector.get(import25.NgZone),this.parentInjector.get(import21.ViewController,(null as any)),this.parentInjector.get(import26.Tabs,(null as any)));
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
    this._text_20 = this.renderer.createText(this._el_19,' Select lens type ',(null as any));
    this._text_21 = this.renderer.createText(this._el_15,'\n      ',(null as any));
    this._text_22 = this.renderer.createText(this._el_13,'\n    ',(null as any));
    this._text_23 = this.renderer.createText(this._el_11,'\n    ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_11,'ion-row',(null as any));
    this.renderer.setElementAttribute(this._el_24,'center','');
    this.renderer.setElementAttribute(this._el_24,'class','buttons-vertical');
    this._Row_24_3 = new import17.Wrapper_Row();
    this._text_25 = this.renderer.createText(this._el_24,'\n      ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_24,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_26,'offset-10','');
    this.renderer.setElementAttribute(this._el_26,'width-80','');
    this._Col_26_3 = new import17.Wrapper_Col();
    this._text_27 = this.renderer.createText(this._el_26,'\n        ',(null as any));
    this._el_28 = this.renderer.createElement(this._el_26,'hr',(null as any));
    this._text_29 = this.renderer.createText(this._el_26,'\n        ',(null as any));
    this._el_30 = this.renderer.createElement(this._el_26,'button',(null as any));
    this.renderer.setElementAttribute(this._el_30,'block','');
    this.renderer.setElementAttribute(this._el_30,'color','lens-dark');
    this.renderer.setElementAttribute(this._el_30,'ion-button','');
    this._appEl_30 = new import3.AppElement(30,26,this,this._el_30);
    var compView_30:any = import18.viewFactory_Button0(this.viewUtils,this.injector(30),this._appEl_30);
    this._Button_30_4 = new import18.Wrapper_Button((null as any),'',this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_30),this.renderer);
    this._appEl_30.initComponent(this._Button_30_4.context,([] as any[]),compView_30);
    this._text_31 = this.renderer.createText((null as any),'Sphere',(null as any));
    compView_30.create(this._Button_30_4.context,[([] as any[]).concat([this._text_31])],(null as any));
    this._text_32 = this.renderer.createText(this._el_26,'\n        ',(null as any));
    this._el_33 = this.renderer.createElement(this._el_26,'button',(null as any));
    this.renderer.setElementAttribute(this._el_33,'block','');
    this.renderer.setElementAttribute(this._el_33,'color','lens-dark');
    this.renderer.setElementAttribute(this._el_33,'ion-button','');
    this._appEl_33 = new import3.AppElement(33,26,this,this._el_33);
    var compView_33:any = import18.viewFactory_Button0(this.viewUtils,this.injector(33),this._appEl_33);
    this._Button_33_4 = new import18.Wrapper_Button((null as any),'',this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_33),this.renderer);
    this._appEl_33.initComponent(this._Button_33_4.context,([] as any[]),compView_33);
    this._text_34 = this.renderer.createText((null as any),'Toric',(null as any));
    compView_33.create(this._Button_33_4.context,[([] as any[]).concat([this._text_34])],(null as any));
    this._text_35 = this.renderer.createText(this._el_26,'\n        ',(null as any));
    this._el_36 = this.renderer.createElement(this._el_26,'button',(null as any));
    this.renderer.setElementAttribute(this._el_36,'block','');
    this.renderer.setElementAttribute(this._el_36,'color','lens-dark');
    this.renderer.setElementAttribute(this._el_36,'ion-button','');
    this._appEl_36 = new import3.AppElement(36,26,this,this._el_36);
    var compView_36:any = import18.viewFactory_Button0(this.viewUtils,this.injector(36),this._appEl_36);
    this._Button_36_4 = new import18.Wrapper_Button((null as any),'',this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_36),this.renderer);
    this._appEl_36.initComponent(this._Button_36_4.context,([] as any[]),compView_36);
    this._text_37 = this.renderer.createText((null as any),'Multifocal',(null as any));
    compView_36.create(this._Button_36_4.context,[([] as any[]).concat([this._text_37])],(null as any));
    this._text_38 = this.renderer.createText(this._el_26,'\n        ',(null as any));
    this._el_39 = this.renderer.createElement(this._el_26,'button',(null as any));
    this.renderer.setElementAttribute(this._el_39,'block','');
    this.renderer.setElementAttribute(this._el_39,'color','lens-dark');
    this.renderer.setElementAttribute(this._el_39,'ion-button','');
    this._appEl_39 = new import3.AppElement(39,26,this,this._el_39);
    var compView_39:any = import18.viewFactory_Button0(this.viewUtils,this.injector(39),this._appEl_39);
    this._Button_39_4 = new import18.Wrapper_Button((null as any),'',this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_39),this.renderer);
    this._appEl_39.initComponent(this._Button_39_4.context,([] as any[]),compView_39);
    this._text_40 = this.renderer.createText((null as any),'Multifocal toric',(null as any));
    compView_39.create(this._Button_39_4.context,[([] as any[]).concat([this._text_40])],(null as any));
    this._text_41 = this.renderer.createText(this._el_26,'\n        ',(null as any));
    this._el_42 = this.renderer.createElement(this._el_26,'button',(null as any));
    this.renderer.setElementAttribute(this._el_42,'block','');
    this.renderer.setElementAttribute(this._el_42,'color','lens-dark');
    this.renderer.setElementAttribute(this._el_42,'ion-button','');
    this._appEl_42 = new import3.AppElement(42,26,this,this._el_42);
    var compView_42:any = import18.viewFactory_Button0(this.viewUtils,this.injector(42),this._appEl_42);
    this._Button_42_4 = new import18.Wrapper_Button((null as any),'',this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_42),this.renderer);
    this._appEl_42.initComponent(this._Button_42_4.context,([] as any[]),compView_42);
    this._text_43 = this.renderer.createText((null as any),'Logout',(null as any));
    compView_42.create(this._Button_42_4.context,[([] as any[]).concat([this._text_43])],(null as any));
    this._text_44 = this.renderer.createText(this._el_26,'\n        ',(null as any));
    this._el_45 = this.renderer.createElement(this._el_26,'hr',(null as any));
    this._text_46 = this.renderer.createText(this._el_26,'\n      ',(null as any));
    this._text_47 = this.renderer.createText(this._el_24,'\n    ',(null as any));
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
    var disposable_0:Function = this.renderer.listen(this._el_30,'click',this.eventHandler(this._handle_click_30_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_42,'click',this.eventHandler(this._handle_click_42_0.bind(this)));
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
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._text_41,
      this._el_42,
      this._text_43,
      this._text_44,
      this._el_45,
      this._text_46,
      this._text_47,
      this._text_48,
      this._text_49,
      this._text_50
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import27.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4.context; }
    if (((token === import28.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4.context; }
    if (((token === import23.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3.context; }
    if (((token === import29.Col) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._Col_15_3.context; }
    if (((token === import29.Row) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._Row_13_3.context; }
    if (((token === import30.Button) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) { return this._Button_30_4.context; }
    if (((token === import30.Button) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) { return this._Button_33_4.context; }
    if (((token === import30.Button) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 37)))) { return this._Button_36_4.context; }
    if (((token === import30.Button) && ((39 <= requestNodeIndex) && (requestNodeIndex <= 40)))) { return this._Button_39_4.context; }
    if (((token === import30.Button) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 43)))) { return this._Button_42_4.context; }
    if (((token === import29.Col) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 46)))) { return this._Col_26_3.context; }
    if (((token === import29.Row) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 47)))) { return this._Row_24_3.context; }
    if (((token === import29.Grid) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 48)))) { return this._Grid_11_3.context; }
    if (((token === import31.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 49)))) { return this._Content_9_4.context; }
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
    this._Row_24_3.detectChangesInternal(this,this._el_24,throwOnChange);
    this._Col_26_3.detectChangesInternal(this,this._el_26,throwOnChange);
    const currVal_5:any = '';
    this._Button_30_4.check_block(currVal_5,throwOnChange,false);
    const currVal_6:any = 'lens-dark';
    this._Button_30_4.check_color(currVal_6,throwOnChange,false);
    if (this._Button_30_4.detectChangesInternal(this,this._el_30,throwOnChange)) { this._appEl_30.componentView.markAsCheckOnce(); }
    const currVal_7:any = '';
    this._Button_33_4.check_block(currVal_7,throwOnChange,false);
    const currVal_8:any = 'lens-dark';
    this._Button_33_4.check_color(currVal_8,throwOnChange,false);
    if (this._Button_33_4.detectChangesInternal(this,this._el_33,throwOnChange)) { this._appEl_33.componentView.markAsCheckOnce(); }
    const currVal_9:any = '';
    this._Button_36_4.check_block(currVal_9,throwOnChange,false);
    const currVal_10:any = 'lens-dark';
    this._Button_36_4.check_color(currVal_10,throwOnChange,false);
    if (this._Button_36_4.detectChangesInternal(this,this._el_36,throwOnChange)) { this._appEl_36.componentView.markAsCheckOnce(); }
    const currVal_11:any = '';
    this._Button_39_4.check_block(currVal_11,throwOnChange,false);
    const currVal_12:any = 'lens-dark';
    this._Button_39_4.check_color(currVal_12,throwOnChange,false);
    if (this._Button_39_4.detectChangesInternal(this,this._el_39,throwOnChange)) { this._appEl_39.componentView.markAsCheckOnce(); }
    const currVal_14:any = '';
    this._Button_42_4.check_block(currVal_14,throwOnChange,false);
    const currVal_15:any = 'lens-dark';
    this._Button_42_4.check_color(currVal_15,throwOnChange,false);
    if (this._Button_42_4.detectChangesInternal(this,this._el_42,throwOnChange)) { this._appEl_42.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._Button_30_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_33_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_36_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_39_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_42_4.context.ngAfterContentInit(); }
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
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_9_4.context.ngOnDestroy();
  }
  private _handle_click_30_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.toSphere()) !== false);
    return (true && pd_0);
  }
  private _handle_click_42_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.logout()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_HomePage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.HomePage> {
  if ((renderType_HomePage === (null as any))) { (renderType_HomePage = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,styles_HomePage,{})); }
  return new _View_HomePage0(viewUtils,parentInjector,declarationEl);
}