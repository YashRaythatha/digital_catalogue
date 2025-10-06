# FY26 GPS Course Catalog - Digital Catalogue

A modern, interactive digital catalogue for Microsoft's FY26 GPS (Global Partner Solutions) course offerings. This web application provides an intuitive interface for browsing, filtering, and exploring professional development courses in Microsoft technologies, AI solutions, and cutting-edge development practices.

## 🚀 Features

- **Interactive Course Browser**: Browse through 97 expert courses with detailed information
- **Advanced Filtering**: Filter courses by category, skilling level, lab type, solution area, and solution play
- **Smart Search**: Real-time search functionality across course titles and descriptions
- **Course Details**: Comprehensive course information including duration, prerequisites, learning objectives, and target audience
- **Export Capabilities**: Export course catalog to PDF
- **Responsive Design**: Modern, mobile-friendly interface
- **Course Enrollment**: Direct enrollment functionality for selected courses

## 📁 Project Structure

```
digital_catalogue/
├── index.html              # Main application page
├── script.js               # Core JavaScript functionality
├── styles.css              # Main stylesheet
├── enrollment.html          # Course enrollment page
├── enrollment.js           # Enrollment page functionality
├── converted_file.jsonl    # Course data (JSONL format)
└── README.md              # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and data management
- **Font Awesome**: Icon library
- **jsPDF**: PDF generation capabilities
- **html2canvas**: HTML to canvas conversion for PDF export

## 🎯 Course Categories

The catalogue includes courses across multiple categories:

- **Azure Migration**: Cloud migration and modernization strategies
- **Microsoft Fabric**: Data platform and analytics solutions
- **Agentic AI**: AI agents and automation technologies
- **Security**: Cybersecurity and threat protection
- **AI Business Solutions**: AI-powered business applications
- **Cross-Solution**: Multi-platform integration solutions

## 📊 Skilling Levels

Courses are categorized by skilling level:

- **Sales Ready**: Foundational knowledge for sales professionals
- **Tech Deal Ready**: Technical expertise for deal support
- **Project Ready**: Advanced skills for project implementation

## 🧪 Lab Types

Various hands-on learning experiences:

- **Skillable**: Interactive online labs
- **Simulated**: Virtual environment simulations
- **Spektra**: Advanced interactive learning platform
- **Custom**: Tailored lab experiences
- **Hands-on Labs**: Physical or virtual hands-on practice

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for development)

### Installation

1. Clone or download the project files
2. Ensure all files are in the same directory
3. Open `index.html` in a web browser or serve via a local web server

### Local Development Server

For development, you can use any local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## 📖 Usage

### Browsing Courses

1. Open `index.html` in your web browser
2. Use the search bar to find specific courses
3. Apply filters using the filter sidebar to narrow down results
4. Click on course cards to view detailed information

### Filtering Courses

- **Category Filter**: Filter by course categories (Azure Migration, Fabric, etc.)
- **Skilling Level**: Filter by expertise level (Sales Ready, Tech Deal Ready, Project Ready)
- **Lab Type**: Filter by available lab types
- **Solution Area**: Filter by Microsoft solution areas
- **Solution Play**: Filter by specific solution plays

### Exporting to PDF

1. Click the "Export PDF" button in the header
2. The application will generate a PDF of the current course view
3. The PDF will be automatically downloaded

### Course Enrollment

1. Click on any course card to view details
2. Click "Enroll Now" to proceed to enrollment
3. Fill out the enrollment form on the enrollment page

## 🔧 Customization

### Adding New Courses

1. Edit the `courses` array in `script.js`
2. Add course objects with the following structure:

```javascript
{
    id: 98,
    title: "Course Title",
    description: "Course description",
    category: "category-name",
    duration: "X days",
    price: "Free/Premium",
    deliveryType: "On-Demand/In-Person",
    location: "Online/In-Person",
    language: "English",
    rating: 4.5,
    reviews: 25,
    difficulty: "Beginner/Intermediate/Expert",
    level: "Beginner/Intermediate/Expert",
    instructor: "Instructor Name",
    targetAudience: "Target audience description",
    labType: "Lab Type",
    labDetails: "Lab details",
    handsOnLabs: "Yes/No",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    prerequisites: "Prerequisites",
    audience: "Audience",
    solutionArea: "Solution Area",
    solutionPlay: "Solution Play"
}
```

### Styling Customization

Edit `styles.css` to customize:
- Color scheme
- Typography
- Layout spacing
- Component styling
- Responsive breakpoints

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of Microsoft's FY26 GPS program. Please refer to Microsoft's licensing terms for usage guidelines.

## 📞 Support

For technical support or questions about the course catalog.

## 🔄 Version History

- **v1.0**: Initial release with 97 courses
- **v1.1**: Added PDF export functionality
- **v1.2**: Enhanced filtering and search capabilities
- **v1.3**: Added course enrollment system

---

**Note**: This digital catalogue is designed for Microsoft's Global Partner Solutions program and contains proprietary course information. Please ensure compliance with Microsoft's usage policies when deploying or modifying this application.
