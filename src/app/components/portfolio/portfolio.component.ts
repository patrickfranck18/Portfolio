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
      id: 2,
      title: "WhyNotSite",
      category: "Application web",
      image:"assets/images/whynot.PNG",
      technologies: ["Angular", "laravel", "Mysql", "Git", "Figma", "Node.js"],
      description: "Conception et réalisation de site web pour la vente en ligne et les annonces d'une start-up dans le domaine sportif: J'ai travaillé avec la start-up Whynot, une entreprise dynamique opérant dans le domaine de l'événementiel et de l'équipement sportif. Mon rôle principal a été de développer un site e-commerce captivant, offrant une expérience d'achat exceptionnelle aux passionnés de sport.",
      date: "2020"
    },
    {
      id: 6,
      title: "sms4entreprise",
      category: "Dashboard entreprise",
      image: "assets/images/sms4entreprise.jpg",
      technologies: ["Angular", "Node.js", "SpringBoot", "Mysql", "Git"],
      description: "Conception d'une application d'envoie d'sms en masse: Pendant mon stage de fin d'études (PFE), j'ai eu l'opportunité passionnante de travailler avec SFM-Technologie, une entreprise spécialisée dans les domaines de l'intelligence artificielle, des télécommunications et des technologies de l'information. Mon projet principal a été de développer une application d'envoi d'SMS en masse, offrant à SFM-Technologie un outil puissant pour communiquer efficacement avec ses utilisateurs et clients.",
      date: "2021"
    },
    {
      id: 3,
      title: "Rentacar",
      category: "Développement web",
      image: "assets/images/rentacar.png",
      technologies: ["Angular", "MongoDB", "Node.js", "Express"],
      description: "Site d'annonce de vente et de location: J'ai eu à développer un site d'annonces et de vente similaire à \"Le Bon Coin\" dans le cadre d'un projet personnel. Ce projet a été réalisé de manière autonome, me permettre de mettre en pratique mes compétences en développement web et de créer une plateforme complète et fonctionnelle pour les utilisateurs souhaitant acheter ou vendre des produits.",
      date: "2023"
    },
    {
      id: 4,
      title: "AppStage",
      category: "Application web",
      image: "assets/images/appstage.PNG",
      technologies: ["SpringBoot", "java", "MySQL"],
      description: "Développement Backend : Conception de modules de gestion robustes en utilisant l'architecture MVC. Optimisation de requêtes SQL et modélisation de schémas relationnels. ",
      date: "2022"
    },

    {
      id: 5,
      title: "Portfolio",
      category: "Site de prise de contact",
      image: "assets/images/portfolio.PNG",
      technologies: ["Angular", "Node.js", "TypeScript", "JavaScript"],
      description: "Identité Numérique : Création et déploiement d’une vitrine interactive pour exposer mes projets et mon code source. Design responsive et hébergement automatisé via GitHub.",
      date: "2025"
    },

    {
      id: 1,
      title: "MKM R'",
      category: "Web Application",
      image: "assets/images/archi.png",
      technologies: ["Angular", "Express.js", "Supabase", "Node.js", "PostgreSQL"],
      description: "Actuellement entrain de développer un cabinet d'architecture en ligne pour le compte d'une PME française, qui permettra aux différents collaborateurs de consulter les projets, demander un devis, suivre l'avancement du projet et plus",
      date: "2023"
    }
  ];

  openModal(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}