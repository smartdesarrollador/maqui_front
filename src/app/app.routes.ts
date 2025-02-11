import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { VistaComponent } from './pages/vista/vista.component';
import { InicioComponent } from './pages/vista/inicio/inicio.component';

/* import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/login/register/register.component';
import { CursosComponent } from './pages/vista/cursos/cursos.component';
import { AdminGuard } from './guards/admin.guard';
import { EmpleadorGuard } from './guards/empleador.guard';
import { TrabajadorGuard } from './guards/trabajador';
import { AuthGuard } from './guards/auth.guard';
import { LayoutUnoComponent } from './layout/layout-uno/layout-uno.component';
import { LayoutDosComponent } from './layout/layout-dos/layout-dos.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutTresComponent } from './layout/layout-tres/layout-tres.component';
import { DetalleCursoComponent } from './pages/vista/detalle-curso/detalle-curso.component';
import { ContactoComponent } from './pages/vista/contacto/contacto.component';
import { EspecialidadesComponent } from './pages/vista/especialidades/especialidades.component';
import { MisionVisionComponent } from './pages/vista/nosotros/mision-vision/mision-vision.component';
import { EquipoComponent } from './pages/vista/nosotros/equipo/equipo.component';
import { InformacionComponent } from './pages/vista/informacion/informacion.component';
import { BlogComponent } from './pages/vista/blog/blog.component';
import { AnsiedadComponent } from './pages/vista/blog/ansiedad/ansiedad.component';
import { DepresionComponent } from './pages/vista/blog/depresion/depresion.component';
import { EstresComponent } from './pages/vista/blog/estres/estres.component';
import { TranstornosDePersonalidadComponent } from './pages/vista/blog/transtornos-de-personalidad/transtornos-de-personalidad.component';
import { EstadosDeAnimoComponent } from './pages/vista/blog/estados-de-animo/estados-de-animo.component';
import { RelacionesComponent } from './pages/vista/blog/relaciones/relaciones.component';
import { DesarrolloPersonalComponent } from './pages/vista/blog/desarrollo-personal/desarrollo-personal.component';
import { TipsPsicologicosComponent } from './pages/vista/blog/tips-psicologicos/tips-psicologicos.component';
import { PostByCategoryComponent } from './pages/vista/blog/post-by-category/post-by-category.component';
import { PostDetailComponent } from './pages/vista/blog/post-detail/post-detail.component'; */
import { Componente1Component } from './pages/vista/componente1/componente1.component';

export const routes: Routes = [
  /* {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  }, */
  {
    path: '',
    component: VistaComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'que-es-kalma',
        //component: MisionVisionComponent,
        loadComponent: () =>
          import(
            './pages/vista/nosotros/mision-vision/mision-vision.component'
          ).then((m) => m.MisionVisionComponent),
      },

      {
        path: 'equipo-kalma',
        //component: EquipoComponent,
        loadComponent: () =>
          import('./pages/vista/nosotros/equipo/equipo.component').then(
            (m) => m.EquipoComponent
          ),
      },

      {
        path: 'informacion',
        //component: InformacionComponent,
        loadComponent: () =>
          import('./pages/vista/informacion/informacion.component').then(
            (m) => m.InformacionComponent
          ),
      },

      {
        path: 'contactanos',
        //component: ContactoComponent,
        loadComponent: () =>
          import('./pages/vista/contacto/contacto.component').then(
            (m) => m.ContactoComponent
          ),
      },

      {
        path: 'blog',
        //component: BlogComponent,
        loadComponent: () =>
          import('./pages/vista/blog/blog.component').then(
            (m) => m.BlogComponent
          ),
      },

      {
        path: 'blog/ansiedad',
        //component: AnsiedadComponent,
        loadComponent: () =>
          import('./pages/vista/blog/ansiedad/ansiedad.component').then(
            (m) => m.AnsiedadComponent
          ),
      },

      {
        path: 'blog/depresion',
        //component: DepresionComponent,
        loadComponent: () =>
          import('./pages/vista/blog/depresion/depresion.component').then(
            (m) => m.DepresionComponent
          ),
      },

      {
        path: 'blog/estres',
        //component: EstresComponent,
        loadComponent: () =>
          import('./pages/vista/blog/estres/estres.component').then(
            (m) => m.EstresComponent
          ),
      },

      {
        path: 'blog/transtornos-de-personalidad',
        //component: TranstornosDePersonalidadComponent,
        loadComponent: () =>
          import(
            './pages/vista/blog/transtornos-de-personalidad/transtornos-de-personalidad.component'
          ).then((m) => m.TranstornosDePersonalidadComponent),
      },

      {
        path: 'blog/estados-de-animo',
        //component: EstadosDeAnimoComponent,
        loadComponent: () =>
          import(
            './pages/vista/blog/estados-de-animo/estados-de-animo.component'
          ).then((m) => m.EstadosDeAnimoComponent),
      },

      {
        path: 'blog/relaciones',
        //component: RelacionesComponent,
        loadComponent: () =>
          import('./pages/vista/blog/relaciones/relaciones.component').then(
            (m) => m.RelacionesComponent
          ),
      },

      {
        path: 'blog/desarrollo-personal',
        //component: DesarrolloPersonalComponent,
        loadComponent: () =>
          import(
            './pages/vista/blog/desarrollo-personal/desarrollo-personal.component'
          ).then((m) => m.DesarrolloPersonalComponent),
      },

      {
        path: 'blog/tips-psicologicos',
        //component: TipsPsicologicosComponent,
        loadComponent: () =>
          import(
            './pages/vista/blog/tips-psicologicos/tips-psicologicos.component'
          ).then((m) => m.TipsPsicologicosComponent),
      },

      {
        path: 'blog/post/categorie/:id',
        //component: PostByCategoryComponent,
        loadComponent: () =>
          import(
            './pages/vista/blog/post-by-category/post-by-category.component'
          ).then((m) => m.PostByCategoryComponent),
      },

      {
        path: 'blog/posts/detail/:id',
        //component: PostDetailComponent,
        loadComponent: () =>
          import('./pages/vista/blog/post-detail/post-detail.component').then(
            (m) => m.PostDetailComponent
          ),
      },
      { path: 'nuestro-equipo', component: Componente1Component },

      {
        path: 'servicio1',
        //component: CursosComponent,
        loadComponent: () =>
          import('./pages/vista/cursos/cursos.component').then(
            (m) => m.CursosComponent
          ),
      },

      {
        path: 'servicio2',
        //component: EspecialidadesComponent,
        loadComponent: () =>
          import('./pages/vista/especialidades/especialidades.component').then(
            (m) => m.EspecialidadesComponent
          ),
      },

      {
        path: 'detalle',
        //component: DetalleCursoComponent,
        loadComponent: () =>
          import('./pages/vista/detalle-curso/detalle-curso.component').then(
            (m) => m.DetalleCursoComponent
          ),
      },
      {
        path: 'motos-por-tipo',
        //component: MotosPorTipoComponent,
        loadComponent: () =>
          import('./pages/vista/motos-por-tipo/motos-por-tipo.component').then(
            (m) => m.MotosPorTipoComponent
          ),
      },
      {
        path: 'detalle-moto/:id',
        //component: DetalleMotoComponent,
        loadComponent: () =>
          import('./pages/vista/detalle-moto/detalle-moto.component').then(
            (m) => m.DetalleMotoComponent
          ),
      },
      {
        path: 'formulario-cotizacion',
        //component: FormularioCotizacionComponent,
        loadComponent: () =>
          import(
            './pages/vista/formulario-cotizacion/formulario-cotizacion.component'
          ).then((m) => m.FormularioCotizacionComponent),
      },
    ],
  },
  /* {
    path: '',
    component: VistaComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'cursos',
        component: CursosComponent,
      },
      {
        path: 'especialidades',
        component: EspecialidadesComponent,
      },
      {
        path: 'detalle',
        component: DetalleCursoComponent,
      },
      {
        path: 'contacto',
        component: ContactoComponent,
      },
    ],
  }, */
  /* {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'layout-uno',
        component: LayoutUnoComponent,
      },
      {
        path: 'layout-dos',
        component: LayoutDosComponent,
      },
      {
        path: 'layout-tres',
        component: LayoutTresComponent,
      },
    ],
  }, */
  {
    path: '**',
    /* canActivate: [AuthGuard], */ component: PageNotFoundComponent,
  },
];
