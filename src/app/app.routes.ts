import { Routes } from '@angular/router';
import { VinylListComponent } from './components/vinyl-list/vinyl-list.component';
import { VinylDetailComponent } from './components/vinyl-detail/vinyl-detail.component';


export const routes: Routes = [
  { path: '', component: VinylListComponent },
  { path: 'vinyl/:id', component: VinylDetailComponent }
];
