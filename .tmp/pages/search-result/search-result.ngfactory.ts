/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './search-result';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/components/loading/loading';
import * as import10 from '../../providers/search';
import * as import11 from '../../providers/lens-provider';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/list/list-header.ngfactory';
import * as import21 from '@angular/core/src/linker/query_list';
import * as import22 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import23 from 'ionic-angular/config/config';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from 'ionic-angular/navigation/view-controller';
import * as import26 from 'ionic-angular/components/app/app';
import * as import27 from 'ionic-angular/components/toolbar/toolbar';
import * as import28 from 'ionic-angular/util/keyboard';
import * as import29 from '@angular/core/src/zone/ng_zone';
import * as import30 from 'ionic-angular/components/tabs/tabs';
import * as import31 from 'ionic-angular/gestures/gesture-controller';
import * as import32 from 'ionic-angular/util/form';
import * as import33 from 'ionic-angular/components/item/item-reorder';
import * as import34 from '@angular/core/src/linker/template_ref';
import * as import35 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import36 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import37 from 'ionic-angular/components/navbar/navbar';
import * as import38 from 'ionic-angular/components/item/item';
import * as import39 from 'ionic-angular/components/list/list-header';
import * as import40 from '@angular/common/src/directives/ng_for';
import * as import41 from 'ionic-angular/components/list/list';
import * as import42 from 'ionic-angular/components/content/content';
import * as import43 from '../../node_modules/ionic-angular/components/avatar/avatar.ngfactory';
import * as import44 from 'ionic-angular/components/avatar/avatar';
import * as import45 from '@angular/core/src/security';
export class Wrapper_SearchResultPage {
  context:import0.SearchResultPage;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this.changed = false;
    this.context = new import0.SearchResultPage(p0,p1,p2,p3);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_SearchResultPage_Host:import2.RenderComponentType = (null as any);
class _View_SearchResultPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _SearchResultPage_0_4:Wrapper_SearchResultPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_SearchResultPage_Host0,renderType_SearchResultPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-search-result',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_SearchResultPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._SearchResultPage_0_4 = new Wrapper_SearchResultPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.LoadingController),this.parentInjector.get(import10.Search),this.parentInjector.get(import11.LensProvider));
    this._appEl_0.initComponent(this._SearchResultPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._SearchResultPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SearchResultPage) && (0 === requestNodeIndex))) { return this._SearchResultPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._SearchResultPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_SearchResultPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_SearchResultPage_Host === (null as any))) { (renderType_SearchResultPage_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_SearchResultPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const SearchResultPageNgFactory:import13.ComponentFactory<import0.SearchResultPage> = new import13.ComponentFactory<import0.SearchResultPage>('page-search-result',viewFactory_SearchResultPage_Host0,import0.SearchResultPage);
const styles_SearchResultPage:any[] = ([] as any[]);
var renderType_SearchResultPage:import2.RenderComponentType = (null as any);
class _View_SearchResultPage0 extends import1.AppView<import0.SearchResultPage> {
  _el_0:any;
  _Header_0_3:import14.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import15.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _ToolbarTitle_4_4:import16.Wrapper_ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import3.AppElement;
  _Content_9_4:import17.Wrapper_Content;
  _text_10:any;
  _el_11:any;
  _List_11_3:import18.Wrapper_List;
  _text_12:any;
  _el_13:any;
  /*private*/ _appEl_13:import3.AppElement;
  _Item_13_4:import19.Wrapper_Item;
  _ListHeader_13_5:import20.Wrapper_ListHeader;
  _query_Label_13_0:import21.QueryList<any>;
  _query_Button_13_1:import21.QueryList<any>;
  _query_Icon_13_2:import21.QueryList<any>;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _anchor_19:any;
  /*private*/ _appEl_19:import3.AppElement;
  _TemplateRef_19_5:any;
  _NgFor_19_6:import22.Wrapper_NgFor;
  _text_20:any;
  _text_21:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_SearchResultPage0,renderType_SearchResultPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import14.Wrapper_Header(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import25.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this.renderer.setElementAttribute(this._el_2,'color','lens-dark');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import15.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import15.Wrapper_Navbar(this.parentInjector.get(import26.App),this.parentInjector.get(import25.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this.renderer.setElementAttribute(this._el_4,'text-center','');
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import16.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import16.Wrapper_ToolbarTitle(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import27.Toolbar,(null as any)),this._Navbar_2_4.context);
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
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_9,'margin-top','');
    this.renderer.setElementAttribute(this._el_9,'padding','');
    this.renderer.setElementAttribute(this._el_9,'text-center','');
    this._appEl_9 = new import3.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import17.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import17.Wrapper_Content(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import26.App),this.parentInjector.get(import28.Keyboard),this.parentInjector.get(import29.NgZone),this.parentInjector.get(import25.ViewController,(null as any)),this.parentInjector.get(import30.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4.context,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_11_3 = new import18.Wrapper_List(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_11),this.renderer,this.parentInjector.get(import31.GestureController));
    this._text_12 = this.renderer.createText(this._el_11,'\n    ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_11,'ion-list-header',(null as any));
    this.renderer.setElementAttribute(this._el_13,'class','item');
    this._appEl_13 = new import3.AppElement(13,11,this,this._el_13);
    var compView_13:any = import19.viewFactory_Item0(this.viewUtils,this.injector(13),this._appEl_13);
    this._Item_13_4 = new import19.Wrapper_Item(this.parentInjector.get(import32.Form),this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_13),this.renderer,this.parentInjector.get(import33.ItemReorder,(null as any)));
    this._ListHeader_13_5 = new import20.Wrapper_ListHeader(this.parentInjector.get(import23.Config),this.renderer,new import24.ElementRef(this._el_13),(null as any));
    this._query_Label_13_0 = new import21.QueryList<any>();
    this._query_Button_13_1 = new import21.QueryList<any>();
    this._query_Icon_13_2 = new import21.QueryList<any>();
    this._appEl_13.initComponent(this._Item_13_4.context,([] as any[]),compView_13);
    this._text_14 = this.renderer.createText((null as any),'\n      Search results for ',(null as any));
    this._el_15 = this.renderer.createElement((null as any),'strong',(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'',(null as any));
    this._text_17 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._query_Label_13_0.reset(([] as any[]));
    this._Item_13_4.context.contentLabel = this._query_Label_13_0.first;
    compView_13.create(this._Item_13_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_14,
        this._el_15,
        this._text_17
      ]
      ),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_18 = this.renderer.createText(this._el_11,'\n    ',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_11,(null as any));
    this._appEl_19 = new import3.AppElement(19,11,this,this._anchor_19);
    this._TemplateRef_19_5 = new import34.TemplateRef_(this._appEl_19,viewFactory_SearchResultPage1);
    this._NgFor_19_6 = new import22.Wrapper_NgFor(this._appEl_19.vcRef,this._TemplateRef_19_5,this.parentInjector.get(import35.IterableDiffers),this.ref);
    this._text_20 = this.renderer.createText(this._el_11,'\n',(null as any));
    this._text_21 = this.renderer.createText((null as any),'\n',(null as any));
    compView_9.create(this._Content_9_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_10,
        this._el_11,
        this._text_21
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
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
      this._text_17,
      this._text_18,
      this._anchor_19,
      this._text_20,
      this._text_21
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import36.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4.context; }
    if (((token === import37.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4.context; }
    if (((token === import27.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3.context; }
    if (((token === import38.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._Item_13_4.context; }
    if (((token === import39.ListHeader) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._ListHeader_13_5.context; }
    if (((token === import34.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import40.NgFor) && (19 === requestNodeIndex))) { return this._NgFor_19_6.context; }
    if (((token === import41.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 20)))) { return this._List_11_3.context; }
    if (((token === import42.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._Content_9_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    const currVal_0:any = 'lens-dark';
    this._Navbar_2_4.check_color(currVal_0,throwOnChange,false);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._ToolbarTitle_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    if (this._Content_9_4.detectChangesInternal(this,this._el_9,throwOnChange)) { this._appEl_9.componentView.markAsCheckOnce(); }
    this._List_11_3.detectChangesInternal(this,this._el_11,throwOnChange);
    if (this._Item_13_4.detectChangesInternal(this,this._el_13,throwOnChange)) { this._appEl_13.componentView.markAsCheckOnce(); }
    this._ListHeader_13_5.detectChangesInternal(this,this._el_13,throwOnChange);
    const currVal_5:any = this.context.lens.tmp;
    this._NgFor_19_6.check_ngForOf(currVal_5,throwOnChange,false);
    this._NgFor_19_6.detectChangesInternal(this,this._anchor_19,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_13_1.dirty) {
        this._query_Button_13_1.reset(([] as any[]));
        this._Item_13_4.context._buttons = this._query_Button_13_1;
        this._query_Button_13_1.notifyOnChanges();
      }
      if (this._query_Icon_13_2.dirty) {
        this._query_Icon_13_2.reset(([] as any[]));
        this._Item_13_4.context._icons = this._query_Icon_13_2;
        this._query_Icon_13_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_13_4.context.ngAfterContentInit(); }
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
    const currVal_4:any = import4.interpolate(2,'',this.context.lens.lensType,', ',this.context.lens.lensModality,'');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_16,currVal_4);
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_9_4.context.ngOnDestroy();
  }
}
export function viewFactory_SearchResultPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.SearchResultPage> {
  if ((renderType_SearchResultPage === (null as any))) { (renderType_SearchResultPage = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,styles_SearchResultPage,{})); }
  return new _View_SearchResultPage0(viewUtils,parentInjector,declarationEl);
}
class _View_SearchResultPage1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Item_0_4:import19.Wrapper_Item;
  _ItemContent_0_5:import19.Wrapper_ItemContent;
  _query_Label_0_0:import21.QueryList<any>;
  _query_Button_0_1:import21.QueryList<any>;
  _query_Icon_0_2:import21.QueryList<any>;
  _text_1:any;
  _el_2:any;
  _Avatar_2_3:import43.Wrapper_Avatar;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_SearchResultPage1,renderType_SearchResultPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','item item-block');
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import19.viewFactory_Item0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Item_0_4 = new import19.Wrapper_Item(this.parent.parentInjector.get(import32.Form),this.parent.parentInjector.get(import23.Config),new import24.ElementRef(this._el_0),this.renderer,this.parent.parentInjector.get(import33.ItemReorder,(null as any)));
    this._ItemContent_0_5 = new import19.Wrapper_ItemContent();
    this._query_Label_0_0 = new import21.QueryList<any>();
    this._query_Button_0_1 = new import21.QueryList<any>();
    this._query_Icon_0_2 = new import21.QueryList<any>();
    this._appEl_0.initComponent(this._Item_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'ion-avatar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'item-left','');
    this._Avatar_2_3 = new import43.Wrapper_Avatar();
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'img',(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_7 = this.renderer.createElement((null as any),'h2',(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'',(null as any));
    this._text_9 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_10 = this.renderer.createElement((null as any),'h3',(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'',(null as any));
    this._text_12 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_13 = this.renderer.createElement((null as any),'p',(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'',(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._query_Label_0_0.reset(([] as any[]));
    this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
    compView_0.create(this._Item_0_4.context,[
      ([] as any[]).concat([this._el_2]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_1,
        this._text_6,
        this._el_7,
        this._text_9,
        this._el_10,
        this._text_12,
        this._el_13,
        this._text_15
      ]
      ),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import44.Avatar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._Avatar_2_3.context; }
    if (((token === import38.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._Item_0_4.context; }
    if (((token === import38.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._ItemContent_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._Item_0_4.detectChangesInternal(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this._ItemContent_0_5.detectChangesInternal(this,this._el_0,throwOnChange);
    this._Avatar_2_3.detectChangesInternal(this,this._el_2,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_0_1.dirty) {
        this._query_Button_0_1.reset(([] as any[]));
        this._Item_0_4.context._buttons = this._query_Button_0_1;
        this._query_Button_0_1.notifyOnChanges();
      }
      if (this._query_Icon_0_2.dirty) {
        this._query_Icon_0_2.reset(([] as any[]));
        this._Item_0_4.context._icons = this._query_Icon_0_2;
        this._query_Icon_0_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_0_4.context.ngAfterContentInit(); }
    }
    const currVal_1:any = import4.interpolate(1,'',this.context.$implicit.img,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_4,'src',this.viewUtils.sanitizer.sanitize(import45.SecurityContext.URL,currVal_1));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'',this.context.$implicit.name,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_8,currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,'',this.context.$implicit.type,'');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_11,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import4.interpolate(1,'Quantity: ',this.context.$implicit.qty,'');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_14,currVal_4);
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.view(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_SearchResultPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_SearchResultPage1(viewUtils,parentInjector,declarationEl);
}