import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSidenavModule],
  exports: [MatSidenavModule, MatListModule],
})
export class CommonUiModule {}
