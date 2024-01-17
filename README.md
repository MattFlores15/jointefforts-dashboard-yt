# Joint Efforts Healthcare Professional Dashboard

## Project Overview

### Project Name
Joint Efforts Healthcare Professional Dashboard

### Project Description
The Joint Efforts Healthcare Professional Dashboard is a Proof of Concept (PoC) developed as part of the Joint Efforts initiative, aimed at enhancing the participation of healthcare professionals in surveys focused on improving working conditions and personal well-being. This PoC focuses on the desktop iteration, specifically evaluating the appeal and engagement level of Results and News pages, and the presentation of Survey cards.

### Technology Stack
- **Frontend Framework:** Angular
- **CSS Framework:** Tailwind CSS
- **Deployment:** Netlify
- **Icons:** FontAwesome
- **Charts:** Chart.js
- **Additional Libraries:** Slick Carousel, Syncfusion Calendar
- **Version Control:** GitHub

## Installation and Setup

### Prerequisites
- Node.js and npm installed

### Instructions
1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/joint-efforts-dashboard.git](https://github.com/MattFlores15/jointefforts-dashboard-yt.git)
   cd joint-efforts-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200/` to view the dashboard.

## Project Structure

The application follows a component-based structure for better modularity and maintainability. The main components include:

- **Base Dashboard Pages:**
  1. Onboarding (2 pages)
  2. Login
  3. Homepage
  4. Surveys
  5. Results
  6. Rewards
  7. Support

- **Shared Components:**
  - TopNavbarComponent
  - SidebarComponent

- **Standalone Components:**
  - Every component is set as “standalone: true” to ensure proper functioning.

## Development Process

### Initial Coding Approach
The initial development started with vanilla HTML/CSS/JS but transitioned to Angular/Tailwind framework for compatibility with the main project. This choice was influenced by Angular's ease of use, component-based structure, and alignment with the company's main project stack.

### App Component
The `AppComponent` manages the layout, visibility of the top navbar, sidebar, and main content based on the current route.

### Styling
Tailwind CSS is used for styling, providing a utility-first approach for rapid development. FontAwesome is utilized for icons.

### Data Visualization
Chart.js is employed for dynamic and interactive charts on the Results page, enhancing the presentation of survey results.

### Routing
- **Routing Module:** `AppRoutingModule` configures routes using Angular Router.
- **Routes:** Configured routes for each page/component.

### Version Control & Deployment
- **Version Control:** Efficiently managed through GitHub, ensuring code collaboration and version history.
- **Deployment:** Hosted on Netlify, providing accessibility for testing and evaluation.

## Configuration

### app.config.ts
This file provides Angular application configuration, including router configuration using `provideRouter`.

### App Module

### app.module.ts
The main module of the Angular application, including declarations, imports, and providers.

## Angular Configuration

### angular.json
Angular configuration file specifying build configurations, paths, styles, scripts, and other settings for the application.

## Conclusion

The Joint Efforts Dashboard Proof of Concept Desktop iteration successfully leverages Angular and Tailwind CSS to create an engaging and responsive user interface. The application is structured with modular components and follows best practices for Angular development. External libraries such as Chart.js and Font Awesome enhance visualization, and deployment on Netlify ensures accessibility for testing. The PoC serves as a foundation for further development and refinement of the Joint Efforts Dashboard.

**Note:** Ensure that all dependencies are installed before running the application using the `npm install` command.
