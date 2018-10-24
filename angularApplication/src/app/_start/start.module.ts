import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ChartsModule } from 'ng2-charts';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MAT_DATE_LOCALE,
    MatNativeDateModule,
    MatSnackBarModule,
    MatSnackBar,
    MatTableModule,
    MatPaginatorModule,
  } from '@angular/material';

import { NavComponent } from './nav/nav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NavComponent,
    ],
    imports: [
        FlexLayoutModule,
        RouterModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatDividerModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule,
        ChartsModule
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    ],
    exports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatDividerModule,
        MatFormFieldModule,
        FlexLayoutModule,
        NavComponent
    ],
    entryComponents: [
    ]

})
export class StartModule { }
