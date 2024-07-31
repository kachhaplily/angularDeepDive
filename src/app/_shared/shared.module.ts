import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonUiModule } from './components/common-ui.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, CommonUiModule, RouterModule],
  exports: [SidebarComponent],
})
export class SharedModule {}
