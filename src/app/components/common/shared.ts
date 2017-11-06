import {
  AfterContentInit, Component, ContentChildren, Directive, EmbeddedViewRef, Input, NgModule, OnChanges, OnDestroy,
  OnInit,
  QueryList, SimpleChanges,
  TemplateRef, ViewContainerRef
} from '@angular/core';
import {CommonModule} from '@angular/common';

@Directive({
  selector: '[mTemplate]'
})
export class MomentumTemplate{
  @Input('mTemplate') type: string;

  constructor(public template: TemplateRef<any>) {}

  getType(): string {
    return this.type;
  }
}

@Component({
  selector: 'm-column',
  template: ``
})
export class ColumnComponent implements AfterContentInit{
  @Input() field;
  @Input() header: string;
  @Input() footer: string;
  @Input() sortable: boolean;
  @Input() editable: boolean;
  @Input() hidden: boolean;
  @Input() frozen: boolean;

  @ContentChildren(MomentumTemplate) templates: QueryList<any>;

  public headerTemplate: TemplateRef<any>;
  public bodyTemplate: TemplateRef<any>;
  public footerTemplate: TemplateRef<any>;

  constructor() {
  }

  ngAfterContentInit(){
    this.templates.forEach((item) => {
      switch(item.getType()){
        case 'header':
          this.headerTemplate = item.template;
          break;

        case 'body':
          this.bodyTemplate = item.template;
          break;

        case 'footer':
          this.footerTemplate = item.template;
          break;

        default:
          this.bodyTemplate = item.template;
          break;
      }
    })
  }
}


@Component({
  selector: 'm-columnBodyTemplateLoader',
  template: ``
})
export class ColumnBodyTemplateLoader implements OnInit, OnChanges, OnDestroy {

  @Input() column: any;

  @Input() row: any;

  @Input() rowIndex: number;

  view: EmbeddedViewRef<any>;

  constructor(public viewContainer: ViewContainerRef) {}

  ngOnInit() {
    this.view = this.viewContainer.createEmbeddedView(this.column.bodyTemplate, {
      '\$implicit': this.column,
      'row': this.row,
      'rowIndex': this.rowIndex
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!this.view) {
      return;
    }

    if('rowIndex' in changes) {
      this.view.context.rowIndex = changes['rowIndex'].currentValue;
    }
  }

  ngOnDestroy() {
    this.view.destroy();
  }
}

@Component({
  selector: 'm-columnHeaderTemplateLoader',
  template: ``
})
export class ColumnHeaderTemplateLoader implements OnInit, OnDestroy {

  @Input() column: any;

  view: EmbeddedViewRef<any>;

  constructor(public viewContainer: ViewContainerRef) {}

  ngOnInit() {
    this.view = this.viewContainer.createEmbeddedView(this.column.headerTemplate, {
      '\$implicit': this.column
    });
  }

  ngOnDestroy() {
    this.view.destroy();
  }
}

@Component({
  selector: 'm-columnFooterTemplateLoader',
  template: ``
})
export class ColumnFooterTemplateLoader implements OnInit, OnDestroy {

  @Input() column: any;

  view: EmbeddedViewRef<any>;

  constructor(public viewContainer: ViewContainerRef) {}

  ngOnInit() {
    this.view = this.viewContainer.createEmbeddedView(this.column.footerTemplate, {
      '\$implicit': this.column
    });
  }

  ngOnDestroy() {
    this.view.destroy();
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [ColumnComponent, MomentumTemplate, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader],
  declarations: [ColumnComponent, MomentumTemplate, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader]
})
export class SharedModule { }