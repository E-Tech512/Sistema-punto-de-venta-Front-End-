import { Routes } from '@angular/router';
import { CategoriesComponent } from './modules/categories/categories.component';
import { ProductsComponent } from './modules/products/products.component';
import { ClienteComponent } from './modules/cliente/cliente.component';
import { DetallecompraComponent } from './modules/detallecompra/detallecompra.component';
import { DetalleventaComponent } from './modules/detalleventa/detalleventa.component';
import { NegocioComponent } from './modules/negocio/negocio.component';
import { ProveedorComponent } from './modules/proveedor/proveedor.component';
import { RegistrarcompraComponent } from './modules/registrarcompra/registrarcompra.component';
import { RegistrarventaComponent } from './modules/registrarventa/registrarventa.component';
import { ReportecompraComponent } from './modules/reportecompra/reportecompra.component';
import { ReporteventaComponent } from './modules/reporteventa/reporteventa.component';
import { UserComponent } from './modules/user/user.component';

export const routes: Routes = [
    {
        path:'categoria',
        component:CategoriesComponent
    },
    {
        path:'cliente',
        component:ClienteComponent
    },
    {
        path:'detalle-compra',
        component:DetallecompraComponent
    },
    {
        path:'detalle-venta',
        component:DetalleventaComponent
    },
    {
        path:'negocio',
        component:NegocioComponent
    },
    {
        path:'producto',
        component:ProductsComponent
    },
    {
        path:'proveedor',
        component:ProveedorComponent
    },
    {
        path:'registrar-compra',
        component:RegistrarcompraComponent
    },
    {
        path:'registrar-venta',
        component:RegistrarventaComponent
    },
    {
        path:'reporte-compra',
        component:ReportecompraComponent
    },
    {
        path:'reporte-venta',
        component:ReporteventaComponent
    },
    {
        path:'user',
        component:UserComponent
    }
    
    
];
