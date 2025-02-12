import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tab {
  id: string;
  title: string;
  icon: string;
}

@Component({
  selector: 'app-post-venta-recomendaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-venta-recomendaciones.component.html',
  styleUrls: ['./post-venta-recomendaciones.component.css'],
})
export class PostVentaRecomendacionesComponent {
  activeTab: string = 'cuidado-motor';

  tabs: Tab[] = [
    {
      id: 'cuidado-motor',
      title: 'CUIDADO DE MOTOR',
      icon: 'fas fa-engine',
    },
    {
      id: 'limpieza',
      title: 'LIMPIEZA',
      icon: 'fas fa-spray-can',
    },
    {
      id: 'neumaticos-frenos',
      title: 'NEUMÁTICOS Y FRENOS',
      icon: 'fas fa-tire',
    },
  ];

  motorCareItems: string[] = [
    'Antes de arrancarla, debe calentarse 5 minutos aproximadamente y no se debe acelerar bruscamente.',
    'Mantener el motor bien afinado para que el consumo de gasolina sea menor.',
    'Al hacer cambios, evite acelerar innecesariamente el motor para que las piezas no se desgasten rápidamente.',
    'Antes de arrancarla, debe calentarse 5 minutos aproximadamente y no se debe acelerar bruscamente.',
  ];

  cleaningItems: string[] = [
    'Lavar la moto regularmente para mantener su apariencia y proteger las superficies.',
    'Usar productos específicos para cada parte de la moto.',
    'Secar completamente después del lavado para evitar manchas de agua.',
    'Mantener la cadena limpia y lubricada.',
  ];

  tiresAndBrakesItems: string[] = [
    'Revisar la presión de los neumáticos semanalmente.',
    'Verificar el desgaste de las pastillas de freno regularmente.',
    'Mantener los discos de freno limpios de grasa y aceite.',
    'Comprobar la alineación de las ruedas periódicamente.',
  ];

  getCurrentTab(): Tab | undefined {
    return this.tabs.find((tab) => tab.id === this.activeTab);
  }
}
