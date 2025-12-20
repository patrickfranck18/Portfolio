import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  technologies: string[];
  description: string;
  date: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  standalone: true,
  imports: [
    CommonModule, 
    IonicModule
  ],
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Application",
      image: "🛒",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Stripe"],
      description: "Plateforme e-commerce complète avec gestion des produits, panier d'achat, système de paiement sécurisé et dashboard administrateur. Interface responsive et intuitive permettant une expérience utilisateur optimale.",
      date: "2024"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      category: "Data Visualization",
      image: "📊",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      description: "Tableau de bord analytique temps réel avec graphiques interactifs, filtres avancés et export de données. Visualisation de KPIs et métriques business avec mise à jour en temps réel.",
      date: "2024"
    },
    {
      id: 3,
      title: "Task Management App",
      category: "Productivity",
      image: "✅",
      technologies: ["Vue.js", "Firebase", "Vuetify"],
      description: "Application de gestion de tâches collaborative avec système de notifications, attribution de tâches, calendrier intégré et suivi de progression. Interface drag & drop intuitive.",
      date: "2023"
    },
    {
      id: 4,
      title: "Social Network",
      category: "Social Media",
      image: "💬",
      technologies: ["Angular", "NestJS", "Socket.io", "Redis"],
      description: "Réseau social avec messagerie instantanée, fil d'actualités, système de likes et commentaires, partage de médias et notifications en temps réel. Architecture scalable et performante.",
      date: "2023"
    },
    {
      id: 5,
      title: "Booking System",
      category: "Web Application",
      image: "📅",
      technologies: ["React", "Express", "MySQL", "Stripe"],
      description: "Système de réservation en ligne avec calendrier interactif, gestion des disponibilités, paiement intégré et envoi automatique de confirmations par email. Interface administrateur complète.",
      date: "2023"
    },
    {
      id: 6,
      title: "Portfolio CMS",
      category: "Content Management",
      image: "🎨",
      technologies: ["Angular", "Strapi", "PostgreSQL"],
      description: "Système de gestion de contenu pour portfolios créatifs avec éditeur visuel, gestion de médias, SEO optimisé et thèmes personnalisables. Interface d'administration intuitive.",
      date: "2024"
    }
  ];

  openModal(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden'; // Empêche le scroll du body
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto'; // Réactive le scroll
  }
}