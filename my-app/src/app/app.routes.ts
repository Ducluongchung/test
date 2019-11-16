import{Routes,RouterModule} from "@angular/router"
import { from } from 'rxjs';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';



 const  routing :Routes = [
    {path : "",component : HomeComponent},
    {path : "employees",component : EmployeesComponent},
]
export const appRoutes = RouterModule.forRoot(routing);