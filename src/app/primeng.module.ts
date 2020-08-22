import { ProgressBarModule } from 'primeng/progressbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    TableModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    ScrollPanelModule,
    CardModule,
    PanelModule,
    PasswordModule,
    ToolbarModule,
    MenubarModule,
  ]
})
export class PrimengModule { }
