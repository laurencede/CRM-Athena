import { transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';


export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Home => Connexion', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('2s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('2s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('Home => Inscription', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('2s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('2s ease-in-out', style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('Connexion => DashboardGeneral', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateY(100%)' }),
          animate('2s ease-in-out', style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('2s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('Inscription => DashboardGeneral', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateY(100%)' }),
          animate('2s ease-in-out', style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('2s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('DashboardGeneral => Statistique', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({  opacity: 0 }),
          animate('1s ease-out', style({  opacity: 1 }))
        ], { optional: true }),
        query(':leave', [
          style({  opacity: 1 }),
          animate('1s ease-out', style({  opacity: 0 }))
        ], { optional: true }),
      ])
    ]),
    transition('DashboardGeneral => Agenda', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({  opacity: 0 }),
          animate('1s ease-out', style({  opacity: 1 }))
        ], { optional: true }),
        query(':leave', [
          style({  opacity: 1 }),
          animate('1s ease-out', style({  opacity: 0 }))
        ], { optional: true }),
      ])
    ]),
    transition('DashboardGeneral => ListClient', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({  opacity: 0 }),
          animate('1s ease-out', style({  opacity: 1 }))
        ], { optional: true }),
        query(':leave', [
          style({  opacity: 1 }),
          animate('1s ease-out', style({  opacity: 0 }))
        ], { optional: true }),
      ])
    ]),
    transition('DashboardGeneral => ListProspect', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({  opacity: 0 }),
          animate('1s ease-out', style({  opacity: 1 }))
        ], { optional: true }),
        query(':leave', [
          style({  opacity: 1 }),
          animate('1s ease-out', style({  opacity: 0 }))
        ], { optional: true }),
      ])
    ]),
    transition('DashboardGeneral => Parametre', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({  opacity: 0 }),
          animate('1s ease-out', style({  opacity: 1 }))
        ], { optional: true }),
        query(':leave', [
          style({  opacity: 1 }),
          animate('1s ease-out', style({  opacity: 0 }))
        ], { optional: true }),
      ])
    ])
  ]);
