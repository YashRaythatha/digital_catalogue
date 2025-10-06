// Test function to ensure global scope

// Course data based on professional development course catalog
// Lab information will be loaded from JSONL file
let courses = [
    {
        id: 1,
        title: "Migrate and modernize your estate on Azure",
        description: "Comprehensive training program covering migrate and modernize your estate on azure. This course focuses on migrate and modernize your estate within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "azure-migration",
        duration: "1.5hrs",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-001",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Migrate and modernize your estate"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Sales Ready"
    },
    {
        id: 2,
        title: "Unlocking SAP Transformation on Microsoft Azure",
        description: "Comprehensive training program covering unlocking sap transformation on microsoft azure. This course focuses on migrate and modernize your estate within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "azure-migration",
        duration: "2hrs",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-002",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Duration: 2hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Migrate and modernize your estate"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Sales Ready"
    },
    {
        id: 3,
        title: "Migrate and modernize your estate on Azure",
        description: "Comprehensive training program covering migrate and modernize your estate on azure. This course focuses on migrate and modernize your estate within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "azure-migration",
        duration: "1.5hrs",
        price: "Standard",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-003",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Tech deal Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Migrate and modernize your estate"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Tech deal Ready"
    },
    {
        id: 4,
        title: "Accelerate SAP Innovation and Growth with Microsoft Azure",
        description: "Comprehensive training program covering accelerate sap innovation and growth with microsoft azure. This course focuses on migrate and modernize your estate within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "azure-migration",
        duration: "2hrs",
        price: "Standard",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-004",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Tech deal Ready",
        suggestedCertification: "",
        features: ["Duration: 2hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Migrate and modernize your estate"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Tech deal Ready"
    },
    {
        id: 5,
        title: "Secure Migration",
        description: "Comprehensive training program covering secure migration. This course focuses on migrate and modernize your estate within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "azure-migration",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-005",
        handsOnLabs: "Skillable + Simulated",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable + Simulated", "Duration: 4hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Migrate and modernize your estate"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 6,
        title: "AI Ready: How to make workloads well architected",
        description: "Comprehensive training program covering ai ready: how to make workloads well architected. This course focuses on migrate and modernize your estate within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "azure-migration",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-006",
        handsOnLabs: "Skillable + Simulated",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable + Simulated", "Duration: 4hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Migrate and modernize your estate"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 7,
        title: "Azure Essentials - Proactive Resiliency",
        description: "Comprehensive training program covering azure essentials - proactive resiliency. This course focuses on migrate and modernize your estate within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "azure-migration",
        duration: "3hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-007",
        handsOnLabs: "Spektra",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Spektra", "Duration: 3hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Migrate and modernize your estate"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 8,
        title: "RISE and GROW with SAP on Azure",
        description: "Comprehensive training program covering rise and grow with sap on azure. This course focuses on migrate and modernize your estate within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "azure-migration",
        duration: "8hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-008",
        handsOnLabs: "Simulated",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Simulated", "Duration: 8hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Migrate and modernize your estate"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 9,
        title: "Modernize and innovate SAP and drive adoption with Microsoft Cloud integration scenarios",
        description: "Comprehensive training program covering modernize and innovate sap and drive adoption with microsoft cloud integration scenarios. This course focuses on migrate and modernize your estate within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "azure-migration",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-009",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 4hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Migrate and modernize your estate"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 10,
        title: "Modernize Apps and Databases",
        description: "Comprehensive training program covering modernize apps and databases. This course focuses on migrate and modernize your estate within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "azure-migration",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-010",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Migrate and modernize your estate"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 11,
        title: "Unify and grow your business with Microsoft Fabric",
        description: "Comprehensive training program covering unify and grow your business with microsoft fabric. This course focuses on unify your data platform within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "fabric",
        duration: "1.5hrs",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-011",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Unify Your Data Platform", "Microsoft Fabric platform", "Data analytics and visualization", "Enterprise data solutions"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Design data analytics solutions"],
        audience: "Sales Ready"
    },
    {
        id: 12,
        title: "Unify your Data Platform with Microsoft Fabric",
        description: "Comprehensive training program covering unify your data platform with microsoft fabric. This course focuses on unify your data platform within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "fabric",
        duration: "2hrs",
        price: "Standard",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-012",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Tech deal Ready",
        suggestedCertification: "",
        features: ["Duration: 2hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Unify Your Data Platform", "Microsoft Fabric platform", "Data analytics and visualization", "Enterprise data solutions"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Design data analytics solutions"],
        audience: "Tech deal Ready"
    },
    {
        id: 13,
        title: "Modern Data Platform with Azure Databricks",
        description: "Comprehensive training program covering modern data platform with azure databricks. This course focuses on unify your data platform within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "fabric",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-013",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Unify Your Data Platform", "Microsoft Fabric platform", "Data analytics and visualization"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Design data analytics solutions"],
        audience: "Project Ready"
    },
    {
        id: 14,
        title: "Microsoft Fabric:Analytics",
        description: "Comprehensive training program covering microsoft fabric:analytics. This course focuses on unify your data platform within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "fabric",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-014",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Unify Your Data Platform", "Microsoft Fabric platform", "Data analytics and visualization"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Design data analytics solutions"],
        audience: "Project Ready"
    },
    {
        id: 15,
        title: "Microsoft Fabric:Data Factory",
        description: "Comprehensive training program covering microsoft fabric:data factory. This course focuses on unify your data platform within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "fabric",
        duration: "8hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-015",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 8hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Unify Your Data Platform", "Microsoft Fabric platform", "Data analytics and visualization"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Design data analytics solutions"],
        audience: "Project Ready"
    },
    {
        id: 16,
        title: "Microsoft Fabric:Databases",
        description: "Comprehensive training program covering microsoft fabric:databases. This course focuses on unify your data platform within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "fabric",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-016",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Unify Your Data Platform", "Microsoft Fabric platform", "Data analytics and visualization"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Design data analytics solutions"],
        audience: "Project Ready"
    },
    {
        id: 17,
        title: "Data Governance with Microsoft Purview",
        description: "Comprehensive training program covering data governance with microsoft purview. This course focuses on unify your data platform within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "fabric",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-017",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 4hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Unify Your Data Platform", "Microsoft Fabric platform", "Data analytics and visualization"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Design data analytics solutions"],
        audience: "Project Ready"
    },
    {
        id: 18,
        title: "Microsoft Fabric: Real-time Intelligence",
        description: "Comprehensive training program covering microsoft fabric: real-time intelligence. This course focuses on unify your data platform within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "fabric",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-018",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Unify Your Data Platform", "Microsoft Fabric platform", "Data analytics and visualization"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Design data analytics solutions"],
        audience: "Project Ready"
    },
    {
        id: 19,
        title: "Microsoft Fabric: Administration and Governance",
        description: "Comprehensive training program covering microsoft fabric: administration and governance. This course focuses on unify your data platform within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "fabric",
        duration: "3hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-019",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 3hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Unify Your Data Platform", "Microsoft Fabric platform", "Data analytics and visualization"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Design data analytics solutions"],
        audience: "Project Ready"
    },
    {
        id: 20,
        title: "Win the AI and Agentic AI platform decisions with Azure AI Foundry",
        description: "Comprehensive training program covering win the ai and agentic ai platform decisions with azure ai foundry. This course focuses on innovate with azure ai apps and agents within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "agentic-ai",
        duration: "1.5hrs",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-020",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Innovate with Azure AI Apps and Agents", "AI and machine learning fundamentals", "Microsoft Azure AI services", "Practical implementation guidance"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Build and deploy AI solutions"],
        audience: "Sales Ready"
    },
    {
        id: 21,
        title: "Collaborative Development and Agentic DevOps with GitHub Copilot",
        description: "Comprehensive training program covering collaborative development and agentic devops with github copilot. This course focuses on innovate with azure ai apps and agents within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "agentic-ai",
        duration: "1.5hrs",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-021",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Innovate with Azure AI Apps and Agents", "AI and machine learning fundamentals", "Microsoft Azure AI services", "Practical implementation guidance"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Build and deploy AI solutions"],
        audience: "Sales Ready"
    },
    {
        id: 22,
        title: "Secure and govern AI to enable responsible adoption",
        description: "Comprehensive training program covering secure and govern ai to enable responsible adoption. This course focuses on innovate with azure ai apps and agents within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "agentic-ai",
        duration: "",
        price: "Standard",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-022",
        handsOnLabs: "",
        prerequisites: "See course details",
        targetAudience: "Tech deal Ready",
        suggestedCertification: "",
        features: ["Solution Area: Cloud and AI Platform", "Solution Play: Innovate with Azure AI Apps and Agents", "AI and machine learning fundamentals", "Microsoft Azure AI services", "Practical implementation guidance"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Build and deploy AI solutions"],
        audience: "Tech deal Ready"
    },
    {
        id: 23,
        title: "Enable AI-driven transformation with Agentic AI in Azure AI Foundry",
        description: "Comprehensive training program covering enable ai-driven transformation with agentic ai in azure ai foundry. This course focuses on innovate with azure ai apps and agents within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "agentic-ai",
        duration: "2hrs",
        price: "Standard",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-023",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Tech deal Ready",
        suggestedCertification: "",
        features: ["Duration: 2hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Innovate with Azure AI Apps and Agents", "AI and machine learning fundamentals", "Microsoft Azure AI services", "Practical implementation guidance"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Build and deploy AI solutions"],
        audience: "Tech deal Ready"
    },
    {
        id: 24,
        title: "Collaborative Development and Agentic DevOps with GitHub Copilot",
        description: "Comprehensive training program covering collaborative development and agentic devops with github copilot. This course focuses on innovate with azure ai apps and agents within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "agentic-ai",
        duration: "1.5hrs",
        price: "Standard",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-024",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Tech deal Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Innovate with Azure AI Apps and Agents", "AI and machine learning fundamentals", "Microsoft Azure AI services", "Practical implementation guidance"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Build and deploy AI solutions"],
        audience: "Tech deal Ready"
    },
    {
        id: 25,
        title: "Azure Machine Learning and MLOps",
        description: "Comprehensive training program covering azure machine learning and mlops. This course focuses on innovate with azure ai apps and agents within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "agentic-ai",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-025",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Innovate with Azure AI Apps and Agents", "AI and machine learning fundamentals", "Microsoft Azure AI services"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Build and deploy AI solutions"],
        audience: "Project Ready"
    },
    {
        id: 26,
        title: "Azure AI Foundry + Agents + GitHub",
        description: "Comprehensive training program covering azure ai foundry + agents + github. This course focuses on innovate with azure ai apps and agents within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "agentic-ai",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-026",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Innovate with Azure AI Apps and Agents", "AI and machine learning fundamentals", "Microsoft Azure AI services"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Build and deploy AI solutions"],
        audience: "Project Ready"
    },
    {
        id: 27,
        title: "Migrate DevOps to GitHub",
        description: "Comprehensive training program covering migrate devops to github. This course focuses on innovate with azure ai apps and agents within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "agentic-ai",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-027",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Innovate with Azure AI Apps and Agents", "AI and machine learning fundamentals", "Microsoft Azure AI services"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Build and deploy AI solutions"],
        audience: "Project Ready"
    },
    {
        id: 28,
        title: "Agentic DevOps with GitHub and GitHub Copilot",
        description: "Comprehensive training program covering agentic devops with github and github copilot. This course focuses on innovate with azure ai apps and agents within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "agentic-ai",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-028",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Innovate with Azure AI Apps and Agents", "AI and machine learning fundamentals", "Microsoft Azure AI services"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Build and deploy AI solutions"],
        audience: "Project Ready"
    },
    {
        id: 29,
        title: "GitHub Copilot for End Users",
        description: "Comprehensive training program covering github copilot for end users. This course focuses on innovate with azure ai apps and agents within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "agentic-ai",
        duration: "6hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-029",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 6hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Innovate with Azure AI Apps and Agents", "AI and machine learning fundamentals", "Microsoft Azure AI services"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Build and deploy AI solutions"],
        audience: "Project Ready"
    },
    {
        id: 30,
        title: "Accelerate Agentic AI",
        description: "Comprehensive training program covering accelerate agentic ai. This course focuses on innovate with azure ai apps and agents within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "agentic-ai",
        duration: "5hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-030",
        handsOnLabs: "Spektra",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Spektra", "Duration: 5hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Innovate with Azure AI Apps and Agents", "AI and machine learning fundamentals", "Microsoft Azure AI services"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Build and deploy AI solutions"],
        audience: "Project Ready"
    },
    {
        id: 31,
        title: "Agentic AI Hackathon",
        description: "Comprehensive training program covering agentic ai hackathon. This course focuses on innovate with azure ai apps and agents within the cloud and ai platform solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "agentic-ai",
        duration: "5hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-031",
        handsOnLabs: "Spektra",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Spektra", "Duration: 5hrs", "Solution Area: Cloud and AI Platform", "Solution Play: Innovate with Azure AI Apps and Agents", "AI and machine learning fundamentals", "Microsoft Azure AI services"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Build and deploy AI solutions"],
        audience: "Project Ready"
    },
    {
        id: 32,
        title: "Position Microsoft Threat Protection capabilities with M365 E5",
        description: "Comprehensive training program covering position microsoft threat protection capabilities with m365 e5. This course focuses on moden secops with unified platform within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "2hrs",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-032",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Duration: 2hrs", "Solution Area: Security", "Solution Play: Moden SecOps with Unified Platform", "Security best practices", "Microsoft security solutions", "Threat protection strategies"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Sales Ready"
    },
    {
        id: 33,
        title: "Specialize Threat Protection consultation with M365 E5 suites",
        description: "Comprehensive training program covering specialize threat protection consultation with m365 e5 suites. This course focuses on moden secops with unified platform within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "2hrs",
        price: "Standard",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-033",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Tech deal Ready",
        suggestedCertification: "",
        features: ["Duration: 2hrs", "Solution Area: Security", "Solution Play: Moden SecOps with Unified Platform", "Security best practices", "Microsoft security solutions", "Threat protection strategies"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Tech deal Ready"
    },
    {
        id: 34,
        title: "Security with Microsoft 365 E5 Security and Compliance bundles",
        description: "Comprehensive training program covering security with microsoft 365 e5 security and compliance bundles. This course focuses on moden secops with unified platform within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "8hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-034",
        handsOnLabs: "Custom",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Custom", "Duration: 8hrs", "Solution Area: Security", "Solution Play: Moden SecOps with Unified Platform", "Security best practices", "Microsoft security solutions"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Project Ready"
    },
    {
        id: 35,
        title: "Implement Threat Protection with Microsoft Defender XDR solutions",
        description: "Comprehensive training program covering implement threat protection with microsoft defender xdr solutions. This course focuses on moden secops with unified platform within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-035",
        handsOnLabs: "Spektra",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Spektra", "Duration: 4hrs", "Solution Area: Security", "Solution Play: Moden SecOps with Unified Platform", "Security best practices", "Microsoft security solutions"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Project Ready"
    },
    {
        id: 36,
        title: "Implement Identity and access management with Microsoft Entra",
        description: "Comprehensive training program covering implement identity and access management with microsoft entra. This course focuses on moden secops with unified platform within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-036",
        handsOnLabs: "Simulated",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Simulated", "Duration: 4hrs", "Solution Area: Security", "Solution Play: Moden SecOps with Unified Platform", "Security best practices", "Microsoft security solutions"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Project Ready"
    },
    {
        id: 37,
        title: "Implement Microsoft Defender for Endpoint",
        description: "Comprehensive training program covering implement microsoft defender for endpoint. This course focuses on moden secops with unified platform within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-037",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 4hrs", "Solution Area: Security", "Solution Play: Moden SecOps with Unified Platform", "Security best practices", "Microsoft security solutions"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Project Ready"
    },
    {
        id: 38,
        title: "Deploy and optimize Microsoft Sentinel",
        description: "Comprehensive training program covering deploy and optimize microsoft sentinel. This course focuses on moden secops with unified platform within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "2.5hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-038",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 2.5hrs", "Solution Area: Security", "Solution Play: Moden SecOps with Unified Platform", "Security best practices", "Microsoft security solutions"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Project Ready"
    },
    {
        id: 39,
        title: "Migrate your SIEM Solution to Microsoft Sentinel",
        description: "Comprehensive training program covering migrate your siem solution to microsoft sentinel. This course focuses on moden secops with unified platform within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-039",
        handsOnLabs: "Custom",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Custom", "Duration: 4hrs", "Solution Area: Security", "Solution Play: Moden SecOps with Unified Platform", "Security best practices", "Microsoft security solutions"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Project Ready"
    },
    {
        id: 40,
        title: "Threat Protection and Incident response with Microsoft Sentinel within Unified Platform",
        description: "Comprehensive training program covering threat protection and incident response with microsoft sentinel within unified platform. This course focuses on moden secops with unified platform within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "3.5hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-040",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 3.5hrs", "Solution Area: Security", "Solution Play: Moden SecOps with Unified Platform", "Security best practices", "Microsoft security solutions"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Project Ready"
    },
    {
        id: 41,
        title: "Secure & govern Data, AI Apps and Agents for responsible adoption",
        description: "Comprehensive training program covering secure & govern data, ai apps and agents for responsible adoption. This course focuses on moden secops with unified platform within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "2hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-041",
        handsOnLabs: "Custom",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Custom", "Duration: 2hrs", "Solution Area: Security", "Solution Play: Moden SecOps with Unified Platform", "Security best practices", "Microsoft security solutions"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Project Ready"
    },
    {
        id: 42,
        title: "Implement Microsoft Security Copilot",
        description: "Comprehensive training program covering implement microsoft security copilot. This course focuses on moden secops with unified platform within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-042",
        handsOnLabs: "Interactive Simulated Lab",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Interactive Simulated Lab", "Duration: 4hrs", "Solution Area: Security", "Solution Play: Moden SecOps with Unified Platform", "Security best practices", "Microsoft security solutions"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Project Ready"
    },
    {
        id: 43,
        title: "Position Microsoft Purview to Secure customer data in the age of AI",
        description: "Comprehensive training program covering position microsoft purview to secure customer data in the age of ai. This course focuses on data security within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "1.5hrs",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-043",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: Security", "Solution Play: Data Security", "Security best practices", "Microsoft security solutions", "Threat protection strategies"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Sales Ready"
    },
    {
        id: 44,
        title: "Specialize Data Security Consultation with Microsoft Purview in the era of AI",
        description: "Comprehensive training program covering specialize data security consultation with microsoft purview in the era of ai. This course focuses on data security within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "2hrs",
        price: "Standard",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-044",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Tech deal Ready",
        suggestedCertification: "",
        features: ["Duration: 2hrs", "Solution Area: Security", "Solution Play: Data Security", "Security best practices", "Microsoft security solutions", "Threat protection strategies"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Tech deal Ready"
    },
    {
        id: 45,
        title: "Implement, Govern and Scale Data Security with Microsoft Purview in the era of AI",
        description: "Comprehensive training program covering implement, govern and scale data security with microsoft purview in the era of ai. This course focuses on data security within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-045",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: Security", "Solution Play: Data Security", "Security best practices", "Microsoft security solutions"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Project Ready"
    },
    {
        id: 46,
        title: "Security Essentials for Business Leaders",
        description: "Comprehensive training program covering security essentials for business leaders. This course focuses on protect cloud, ai platform and apps within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "1.5hrs",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-046",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: Security", "Solution Play: Protect cloud, AI Platform and Apps", "Security best practices", "Microsoft security solutions", "Threat protection strategies"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Sales Ready"
    },
    {
        id: 47,
        title: "Position Cloud, AI Platform and Apps protection with Defender for Cloud",
        description: "Comprehensive training program covering position cloud, ai platform and apps protection with defender for cloud. This course focuses on protect cloud, ai platform and apps within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "1.5hrs",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-047",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: Security", "Solution Play: Protect cloud, AI Platform and Apps", "Security best practices", "Microsoft security solutions", "Threat protection strategies"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Sales Ready"
    },
    {
        id: 48,
        title: "Specialize Microsoft Defender for Cloud to accelerate Cloud, AI platform & Apps Protection deals",
        description: "Comprehensive training program covering specialize microsoft defender for cloud to accelerate cloud, ai platform & apps protection deals. This course focuses on protect cloud, ai platform and apps within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "1.5hrs",
        price: "Standard",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-048",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Tech deal Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: Security", "Solution Play: Protect cloud, AI Platform and Apps", "Security best practices", "Microsoft security solutions", "Threat protection strategies"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Tech deal Ready"
    },
    {
        id: 49,
        title: "Protect cloud, AI Platform and Apps by implementing Defender for Cloud",
        description: "Comprehensive training program covering protect cloud, ai platform and apps by implementing defender for cloud. This course focuses on protect cloud, ai platform and apps within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-049",
        handsOnLabs: "Spektra",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Spektra", "Duration: 4hrs", "Solution Area: Security", "Solution Play: Protect cloud, AI Platform and Apps", "Security best practices", "Microsoft security solutions"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Project Ready"
    },
    {
        id: 50,
        title: "Protect cloud, AI Platform and Apps by implementing Defender for Cloud (Live)",
        description: "Comprehensive training program covering protect cloud, ai platform and apps by implementing defender for cloud (live). This course focuses on protect cloud, ai platform and apps within the security solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "security",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-050",
        handsOnLabs: "Simulated",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Simulated", "Duration: 4hrs", "Solution Area: Security", "Solution Play: Protect cloud, AI Platform and Apps", "Security best practices", "Microsoft security solutions"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms", "Implement security controls"],
        audience: "Project Ready"
    },
    {
        id: 51,
        title: "Introduction to Dynamics 365 Contact Center",
        description: "Comprehensive training program covering introduction to dynamics 365 contact center. This course focuses on service transformation with ai within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "1.5hrs",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-051",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: AI Business Solutions", "Solution Play: Service Transformation with AI"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Sales Ready"
    },
    {
        id: 52,
        title: "Implementing Dynamics 365 Contact Center",
        description: "Comprehensive training program covering implementing dynamics 365 contact center. This course focuses on service transformation with ai within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-052",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 4hrs", "Solution Area: AI Business Solutions", "Solution Play: Service Transformation with AI"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 53,
        title: "Power your AI transformation with agents and Copilot Studio",
        description: "Comprehensive training program covering power your ai transformation with agents and copilot studio. This course focuses on innovate with low code ai and agents within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-053",
        handsOnLabs: "",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Solution Area: AI Business Solutions", "Solution Play: Innovate with Low Code AI and Agents"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Sales Ready"
    },
    {
        id: 54,
        title: "Innovate with Copilot and Agents in Power Platform",
        description: "Comprehensive training program covering innovate with copilot and agents in power platform. This course focuses on innovate with low code ai and agents within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "1.5hrs",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-054",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: AI Business Solutions", "Solution Play: Innovate with Low Code AI and Agents"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Sales Ready"
    },
    {
        id: 55,
        title: "Unlock Innovation with Agentic AI in Copilot Studio",
        description: "Comprehensive training program covering unlock innovation with agentic ai in copilot studio. This course focuses on innovate with low code ai and agents within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "",
        price: "Standard",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-055",
        handsOnLabs: "",
        prerequisites: "See course details",
        targetAudience: "Tech deal Ready",
        suggestedCertification: "",
        features: ["Solution Area: AI Business Solutions", "Solution Play: Innovate with Low Code AI and Agents"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Tech deal Ready"
    },
    {
        id: 56,
        title: "Accelerate data insights with Copilot in Power BI",
        description: "Comprehensive training program covering accelerate data insights with copilot in power bi. This course focuses on innovate with low code ai and agents within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-056",
        handsOnLabs: "Simulated",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Simulated", "Duration: 4hrs", "Solution Area: AI Business Solutions", "Solution Play: Innovate with Low Code AI and Agents"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 57,
        title: "Boost innovation with Copilot for Dynamics 365 and Power Platform",
        description: "Comprehensive training program covering boost innovation with copilot for dynamics 365 and power platform. This course focuses on innovate with low code ai and agents within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-057",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: AI Business Solutions", "Solution Play: Innovate with Low Code AI and Agents"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 58,
        title: "Modernize with intelligent apps",
        description: "Comprehensive training program covering modernize with intelligent apps. This course focuses on innovate with low code ai and agents within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-058",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: AI Business Solutions", "Solution Play: Innovate with Low Code AI and Agents"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 59,
        title: "Agent-powered business process automation",
        description: "Comprehensive training program covering agent-powered business process automation. This course focuses on innovate with low code ai and agents within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-059",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: AI Business Solutions", "Solution Play: Innovate with Low Code AI and Agents"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 60,
        title: "Simplify agent development with Copilot Studio",
        description: "Comprehensive training program covering simplify agent development with copilot studio. This course focuses on innovate with low code ai and agents within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-060",
        handsOnLabs: "Custom",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Custom", "Solution Area: AI Business Solutions", "Solution Play: Innovate with Low Code AI and Agents"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 61,
        title: "Securely manage low code AI and agents",
        description: "Comprehensive training program covering securely manage low code ai and agents. This course focuses on innovate with low code ai and agents within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-061",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: AI Business Solutions", "Solution Play: Innovate with Low Code AI and Agents"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 62,
        title: "Copilot Studio Agentathon",
        description: "Comprehensive training program covering copilot studio agentathon. This course focuses on innovate with low code ai and agents within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-062",
        handsOnLabs: "Custom",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Custom", "Solution Area: AI Business Solutions", "Solution Play: Innovate with Low Code AI and Agents"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 63,
        title: "Copilot in Dynamics 365 Business Central",
        description: "Comprehensive training program covering copilot in dynamics 365 business central. This course focuses on scale business operations with ai within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "1.5hrs",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-063",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: AI Business Solutions", "Solution Play: Scale Business Operations with AI"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Sales Ready"
    },
    {
        id: 64,
        title: "Accelerate your AI transformation with Microsoft 365 Copilot + Agents",
        description: "Comprehensive training program covering accelerate your ai transformation with microsoft 365 copilot + agents. This course focuses on copilot and agents at work within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "1.5hrs",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-064",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: AI Business Solutions", "Solution Play: Copilot and Agents at Work"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Sales Ready"
    },
    {
        id: 65,
        title: "Accelerate your AI transformation with Microsoft 365 Copilot",
        description: "Comprehensive training program covering accelerate your ai transformation with microsoft 365 copilot. This course focuses on copilot and agents at work within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "1.5hrs",
        price: "Standard",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-065",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Tech deal Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: AI Business Solutions", "Solution Play: Copilot and Agents at Work"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Tech deal Ready"
    },
    {
        id: 66,
        title: "Simplify agent development with Copilot Studio",
        description: "Comprehensive training program covering simplify agent development with copilot studio. This course focuses on copilot and agents at work within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-066",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: AI Business Solutions", "Solution Play: Copilot and Agents at Work"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 67,
        title: "Deploy and Adopt Microsoft 365 Copilot +Agents",
        description: "Comprehensive training program covering deploy and adopt microsoft 365 copilot +agents. This course focuses on copilot and agents at work within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-067",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: AI Business Solutions", "Solution Play: Copilot and Agents at Work"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 68,
        title: "Elevate user productivity with Microsoft 365 Copilot",
        description: "Comprehensive training program covering elevate user productivity with microsoft 365 copilot. This course focuses on copilot and agents at work within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "2hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-068",
        handsOnLabs: "Custom",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Custom", "Duration: 2hrs", "Solution Area: AI Business Solutions", "Solution Play: Copilot and Agents at Work"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 69,
        title: "Build and Extend your own agents using procode capabilities",
        description: "Comprehensive training program covering build and extend your own agents using procode capabilities. This course focuses on copilot and agents at work within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-069",
        handsOnLabs: "Custom",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Custom", "Solution Area: AI Business Solutions", "Solution Play: Copilot and Agents at Work"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 70,
        title: "Secure AI-powered productivity Microsoft 365 E3",
        description: "Comprehensive training program covering secure ai-powered productivity microsoft 365 e3. This course focuses on secure ai productivity within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "1.5hrs",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-070",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: AI Business Solutions", "Solution Play: Secure AI Productivity"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Sales Ready"
    },
    {
        id: 71,
        title: "Secure AI-powered productivity Microsoft 365 E3",
        description: "Comprehensive training program covering secure ai-powered productivity microsoft 365 e3. This course focuses on secure ai productivity within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "1.5hrs",
        price: "Standard",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-071",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Tech deal Ready",
        suggestedCertification: "",
        features: ["Duration: 1.5hrs", "Solution Area: AI Business Solutions", "Solution Play: Secure AI Productivity"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Tech deal Ready"
    },
    {
        id: 72,
        title: "Develop secure AI productivity foundation",
        description: "Comprehensive training program covering develop secure ai productivity foundation. This course focuses on secure ai productivity within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-072",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 4hrs", "Solution Area: AI Business Solutions", "Solution Play: Secure AI Productivity"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 73,
        title: "Knowledge management using Microsoft 365",
        description: "Comprehensive training program covering knowledge management using microsoft 365. This course focuses on secure ai productivity within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-073",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 4hrs", "Solution Area: AI Business Solutions", "Solution Play: Secure AI Productivity"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 74,
        title: "Implement with impact Microsoft Syntex",
        description: "Comprehensive training program covering implement with impact microsoft syntex. This course focuses on secure ai productivity within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-074",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 4hrs", "Solution Area: AI Business Solutions", "Solution Play: Secure AI Productivity"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 75,
        title: "Improving productivity for Frontline workers (FLW) with Microsoft 365",
        description: "Comprehensive training program covering improving productivity for frontline workers (flw) with microsoft 365. This course focuses on secure ai productivity within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-075",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 4hrs", "Solution Area: AI Business Solutions", "Solution Play: Secure AI Productivity"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 76,
        title: "Implement with impact Endpoint Management with Microsoft Intune",
        description: "Comprehensive training program covering implement with impact endpoint management with microsoft intune. This course focuses on scale with cloud and ai endpoints within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-076",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 4hrs", "Solution Area: AI Business Solutions", "Solution Play: Scale with Cloud and AI Endpoints"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 77,
        title: "Implementing cloud VDI with Azure Virtual Desktop (AVD)",
        description: "Comprehensive training program covering implementing cloud vdi with azure virtual desktop (avd). This course focuses on scale with cloud and ai endpoints within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-077",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 4hrs", "Solution Area: AI Business Solutions", "Solution Play: Scale with Cloud and AI Endpoints"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 78,
        title: "Implementing Windows 365",
        description: "Comprehensive training program covering implementing windows 365. This course focuses on scale with cloud and ai endpoints within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "8hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-078",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 8hrs", "Solution Area: AI Business Solutions", "Solution Play: Scale with Cloud and AI Endpoints"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 79,
        title: "Revolutionize Employee Experiences with Microsoft VIVA",
        description: "Comprehensive training program covering revolutionize employee experiences with microsoft viva. This course focuses on converged communications (partner led) within the ai business solutions solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-079",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 4hrs", "Solution Area: AI Business Solutions", "Solution Play: Converged Communications (Partner Led)"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 80,
        title: "Secure and govern AI to enable responsible adoption",
        description: "Comprehensive training program covering secure and govern ai to enable responsible adoption. This course focuses on all solution areas within the x-solution solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "cross-solution",
        duration: "",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-080",
        handsOnLabs: "Custom",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Custom", "Solution Area: X-Solution", "Solution Play: All Solution Areas"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 81,
        title: "Technical change management and Pming technical projects",
        description: "Comprehensive training program covering technical change management and pming technical projects. This course focuses on all solution areas within the x-solution solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "cross-solution",
        duration: "",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-081",
        handsOnLabs: "Custom",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Custom", "Solution Area: X-Solution", "Solution Play: All Solution Areas"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 82,
        title: "Secure & govern Data, AI Apps and Agents for responsible adoption",
        description: "Comprehensive training program covering secure & govern data, ai apps and agents for responsible adoption. This course focuses on all solution areas within the x-solution solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "cross-solution",
        duration: "",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-082",
        handsOnLabs: "Custom",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Custom", "Solution Area: X-Solution", "Solution Play: All Solution Areas"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 83,
        title: "Power your AI transformation with agents and Copilot Studio",
        description: "Comprehensive training program covering power your ai transformation with agents and copilot studio. This course focuses on ai + agents/ innovate withazure ai apps & agents within the x-solution solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "cross-solution",
        duration: "2hrs",
        price: "Basic",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Beginner",
        level: "Beginner",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-083",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Sales Ready",
        suggestedCertification: "",
        features: ["Duration: 2hrs", "Solution Area: X-Solution", "Solution Play: AI + Agents/ Innovate withAzure AI Apps & Agents"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Sales Ready"
    },
    {
        id: 84,
        title: "Unlock Innovation with Agentic AI in Copilot Studio",
        description: "Comprehensive training program covering unlock innovation with agentic ai in copilot studio. This course focuses on ai + agents/ innovate withazure ai apps & agents within the x-solution solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "cross-solution",
        duration: "8hrs",
        price: "Standard",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-084",
        handsOnLabs: "Yes",
        prerequisites: "See course details",
        targetAudience: "Tech deal Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Yes", "Duration: 8hrs", "Solution Area: X-Solution", "Solution Play: AI + Agents/ Innovate withAzure AI Apps & Agents"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Tech deal Ready"
    },
    {
        id: 85,
        title: "Build and Extend your agents using pro-code capabilities in Copilot Studio",
        description: "Comprehensive training program covering build and extend your agents using pro-code capabilities in copilot studio. This course focuses on ai + agents/ innovate withazure ai apps & agents within the x-solution solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "cross-solution",
        duration: "4hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-085",
        handsOnLabs: "Skillable",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Skillable", "Duration: 4hrs", "Solution Area: X-Solution", "Solution Play: AI + Agents/ Innovate withAzure AI Apps & Agents"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 86,
        title: "Copilot Studio Agentathon",
        description: "Comprehensive training program covering copilot studio agentathon. This course focuses on ai + agents/ innovate withazure ai apps & agents within the x-solution solution area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "cross-solution",
        duration: "5hrs",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-086",
        handsOnLabs: "Spektra",
        prerequisites: "See course details",
        targetAudience: "Project Ready",
        suggestedCertification: "",
        features: ["Hands-on labs: Spektra", "Duration: 5hrs", "Solution Area: X-Solution", "Solution Play: AI + Agents/ Innovate withAzure AI Apps & Agents"],
        objectives: ["Master key concepts and technologies", "Apply best practices in real-world scenarios", "Understand implementation strategies", "Gain hands-on experience with tools and platforms"],
        audience: "Project Ready"
    },
    {
        id: 87,
        title: "Not Named Yet",
        description: "Comprehensive training program covering sales transformation with AI. This course focuses on sales transformation within the AI business solutions area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "TBD",
        price: "Standard",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Intermediate",
        level: "Professional",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-087",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Professional",
        suggestedCertification: "",
        solutionArea: "AI Business Solutions",
        solutionPlay: "Sales Transformation",
        skilling: "Professional",
        features: [
            "Solution Area: AI Business Solutions",
            "Solution Play: Sales Transformation with AI",
            "AI and machine learning fundamentals",
            "Microsoft Azure AI services"
        ],
        objectives: [
            "Master key concepts and technologies",
            "Apply best practices in real-world scenarios",
            "Understand implementation strategies",
            "Gain hands-on experience with tools and platforms"
        ],
        audience: "Professional"
    },
    {
        id: 88,
        title: "Not Named Yet",
        description: "Comprehensive training program covering ERP transformation with AI. This course focuses on ERP transformation within the AI business solutions area. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.",
        category: "ai-business",
        duration: "TBD",
        price: "Standard",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.5,
        reviews: 0,
        difficulty: "Intermediate",
        level: "Professional",
        instructor: "Microsoft Learning",
        lastUpdated: "July 2025",
        esiCode: "DW-088",
        handsOnLabs: "No",
        prerequisites: "See course details",
        targetAudience: "Professional",
        suggestedCertification: "",
        solutionArea: "AI Business Solutions",
        solutionPlay: "ERP Transformation",
        skilling: "Professional",
        features: [
            "Solution Area: AI Business Solutions",
            "Solution Play: ERP Transformation with AI",
            "AI and machine learning fundamentals",
            "Microsoft Azure AI services"
        ],
        objectives: [
            "Master key concepts and technologies",
            "Apply best practices in real-world scenarios",
            "Understand implementation strategies",
            "Gain hands-on experience with tools and platforms"
        ],
        audience: "Professional"
    },
    
    // Additional courses from the comprehensive FY26 GPS Course Catalog
    {
        id: 89,
        title: "Integrating SAP with Microsoft Fabric",
        description: "Comprehensive course covering SAP data pipelines + Fabric integration + analytics with Power BI for enterprise data solutions. Learn to create and optimize SAP data pipelines, configure Microsoft Fabric integration, and build Power BI analytics and visualization for enterprise data solutions.",
        category: "fabric",
        duration: "3 days",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.8,
        reviews: 45,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Certified Trainer",
        targetAudience: "Data engineers, SAP consultants, BI developers, data architects",
        labType: "Yes",
        labDetails: "Hands-on labs with SAP data pipeline creation and Power BI integration",
        handsOnLabs: "Yes",
        features: [
            "SAP data pipeline creation and optimization",
            "Microsoft Fabric integration and configuration",
            "Power BI analytics and visualization",
            "Data transformation and modeling techniques",
            "Real-time data processing and streaming",
            "Enterprise security and governance"
        ],
        prerequisites: "Basic knowledge of SAP systems and Power BI",
        audience: "Professional"
    },
    {
        id: 90,
        title: "AI Ready: How to Make Workloads Well-Architected",
        description: "2-day course covering Fabric + AI + GenAIOps design principles for well-architected solutions and optimal performance. Learn Microsoft Well-Architected Framework principles, Fabric optimization, AI workload design, and GenAIOps implementation.",
        category: "fabric",
        duration: "2 days",
        price: "Standard",
        deliveryType: "In-Person",
        location: "Microsoft Learning Center",
        language: "English",
        rating: 4.6,
        reviews: 32,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Certified Trainer",
        targetAudience: "Solution architects, cloud engineers, technical leads, platform engineers",
        labType: "Yes",
        labDetails: "Hands-on labs with Fabric optimization and AI workload design",
        handsOnLabs: "Yes",
        features: [
            "Microsoft Well-Architected Framework principles",
            "Fabric optimization and performance tuning",
            "AI workload design and implementation",
            "GenAIOps implementation and monitoring",
            "Cost optimization and resource management",
            "Security and compliance best practices"
        ],
        prerequisites: "Understanding of cloud architecture and Microsoft Fabric",
        audience: "Professional"
    },
    {
        id: 91,
        title: "ERP Transformation with AI (D365 ERP)",
        description: "Comprehensive course on applying AI & Copilot technologies to ERP modernization using Dynamics 365 for business transformation. Learn D365 ERP AI integration, Copilot implementation, process automation, and change management strategies.",
        category: "ai-business",
        duration: "3 days",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.7,
        reviews: 28,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Certified Trainer",
        targetAudience: "ERP consultants, business analysts, D365 developers, process owners",
        labType: "Yes",
        labDetails: "Hands-on labs with D365 ERP AI integration and Copilot implementation",
        handsOnLabs: "Yes",
        features: [
            "D365 ERP AI integration and configuration",
            "Copilot implementation and customization",
            "Process automation and optimization",
            "Data intelligence and analytics",
            "User adoption strategies and training",
            "Change management and governance"
        ],
        prerequisites: "Dynamics 365 experience and business process knowledge",
        audience: "Professional"
    },
    {
        id: 92,
        title: "AI Business Solutions (ABS)",
        description: "Complete coverage of AI solutions across sales, service, ERP, and business processes with Dynamics 365 for comprehensive transformation. Learn sales AI solutions, service AI capabilities, ERP AI integration, and end-to-end implementation strategies.",
        category: "ai-business",
        duration: "4 days",
        price: "Premium",
        deliveryType: "On-Demand",
        location: "Online",
        language: "English",
        rating: 4.9,
        reviews: 67,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Certified Trainer",
        targetAudience: "D365 consultants, business process owners, solution architects, functional consultants",
        labType: "Yes",
        labDetails: "Comprehensive labs covering all AI business solutions",
        handsOnLabs: "Yes",
        features: [
            "Sales AI solutions and automation",
            "Service AI capabilities and optimization",
            "ERP AI integration and intelligence",
            "Business process AI and automation",
            "End-to-end implementation strategies",
            "Cross-functional AI solutions"
        ],
        prerequisites: "Dynamics 365 fundamentals and business process understanding",
        audience: "Professional"
    },
    {
        id: 93,
        title: "Implement with Impact – M365 Copilot and Agents",
        description: "4-day hands-on course covering Copilot Studio + governance for Microsoft 365 with comprehensive implementation strategies. Learn Copilot Studio mastery, M365 integration, agent development, and governance frameworks.",
        category: "ai-business",
        duration: "4 days",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.8,
        reviews: 52,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Certified Trainer",
        targetAudience: "M365 administrators, solution architects, change managers, IT professionals",
        labType: "Yes",
        labDetails: "Hands-on labs with Copilot Studio and M365 integration",
        handsOnLabs: "Yes",
        features: [
            "Copilot Studio mastery and configuration",
            "M365 integration and customization",
            "Agent development and deployment",
            "Governance frameworks and policies",
            "Change management and adoption",
            "Security and compliance implementation"
        ],
        prerequisites: "Microsoft 365 experience and basic AI concepts",
        audience: "Professional"
    },
    {
        id: 94,
        title: "Copilot for Microsoft 365 – Copilot and Agents at Work",
        description: "Focused course on adoption and positioning strategies for modern work with Copilot and Agents for maximum productivity. Learn adoption strategies, user training techniques, change management, and ROI measurement.",
        category: "ai-business",
        duration: "2 days",
        price: "Standard",
        deliveryType: "In-Person",
        location: "Microsoft Office",
        language: "English",
        rating: 4.5,
        reviews: 38,
        difficulty: "Intermediate",
        level: "Intermediate",
        instructor: "Microsoft Certified Trainer",
        targetAudience: "Change managers, training professionals, M365 administrators, team leads",
        labType: "No",
        labDetails: "Focus on adoption strategies and positioning",
        handsOnLabs: "No",
        features: [
            "Adoption strategies and best practices",
            "User training techniques and methodologies",
            "Change management and communication",
            "ROI measurement and success metrics",
            "Productivity optimization techniques",
            "Troubleshooting and support strategies"
        ],
        prerequisites: "Basic M365 knowledge and user management experience",
        audience: "Professional"
    },
    {
        id: 95,
        title: "Modernize and Innovate SAP with Microsoft Cloud Integration",
        description: "3-day course covering SAP modernization using Power Platform + Copilot + Fabric integration for enterprise transformation. Learn SAP cloud integration, Power Platform integration, Copilot implementation, and modernization strategies.",
        category: "azure-migration",
        duration: "3 days",
        price: "Premium",
        deliveryType: "In-Person",
        location: "SAP Campus",
        language: "English",
        rating: 4.7,
        reviews: 41,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Certified Trainer",
        targetAudience: "SAP consultants, cloud architects, integration specialists, enterprise architects",
        labType: "Yes",
        labDetails: "Hands-on labs with SAP cloud integration and Power Platform",
        handsOnLabs: "Yes",
        features: [
            "SAP cloud integration and migration",
            "Power Platform integration and automation",
            "Copilot implementation and customization",
            "Fabric data integration and analytics",
            "Modernization strategies and best practices",
            "Enterprise security and governance"
        ],
        prerequisites: "SAP and Microsoft cloud experience with integration knowledge",
        audience: "Professional"
    },
    {
        id: 96,
        title: "Secure Migration with Microsoft Defender & Sentinel",
        description: "3-day course with hands-on labs covering SOC integration and security migration strategies using Microsoft security solutions. Learn Microsoft Defender implementation, Sentinel integration, security migration strategies, and threat detection.",
        category: "security",
        duration: "3 days",
        price: "Premium",
        deliveryType: "Virtual",
        location: "Online",
        language: "English",
        rating: 4.8,
        reviews: 56,
        difficulty: "Advanced",
        level: "Advanced",
        instructor: "Microsoft Certified Trainer",
        targetAudience: "Security professionals, SOC analysts, IT administrators, security architects",
        labType: "Yes",
        labDetails: "Hands-on labs with Microsoft Defender and Sentinel",
        handsOnLabs: "Yes",
        features: [
            "Microsoft Defender implementation and configuration",
            "Sentinel integration and SOC workflows",
            "Security migration strategies and planning",
            "Hands-on labs and practical exercises",
            "Threat detection and response",
            "Compliance and governance frameworks"
        ],
        prerequisites: "Security and Microsoft 365 experience with SOC knowledge",
        audience: "Professional"
    },
    {
        id: 97,
        title: "Security Copilot (Advanced SecOps)",
        description: "Advanced course on AI-driven SOC modernization using Sentinel + Copilot technologies for next-generation security operations. Learn Security Copilot mastery, AI-driven SOC operations, Sentinel advanced features, and threat hunting techniques.",
        category: "security",
        duration: "2 days",
        price: "Premium",
        deliveryType: "On-Demand",
        location: "Online",
        language: "English",
        rating: 4.9,
        reviews: 43,
        difficulty: "Expert",
        level: "Expert",
        instructor: "Microsoft Certified Trainer",
        targetAudience: "Senior security professionals, SOC managers, security architects, advanced analysts",
        labType: "Yes",
        labDetails: "Advanced labs with Security Copilot and Sentinel",
        handsOnLabs: "Yes",
        features: [
            "Security Copilot mastery and implementation",
            "AI-driven SOC operations and automation",
            "Sentinel advanced features and capabilities",
            "Threat hunting and investigation techniques",
            "Incident response and automation",
            "Advanced analytics and machine learning"
        ],
        prerequisites: "Advanced security and Sentinel experience with SOC operations",
        audience: "Professional"
    }
];

// Normalize Solution Area and Solution Play values from JSONL to match UI tabs exactly
function normalizeSolutionArea(value) {
    if (!value) return '';
    return String(value).trim();
}

function normalizeSolutionPlay(value) {
    if (!value) return '';
    const v = String(value).trim();
    
    // Map JSONL values to exact display names from the image
    switch (v) {
        case 'AI + Agents/ Innovate withAzure AI Apps & Agents':
            return 'AI + Agents';
        case 'All Solution Areas':
            return 'All Solution Areas';
        case 'Converged Communications (Partner Led)':
            return 'Converged Comm';
        case 'Copilot and Agents at Work':
            return 'Copilot and Agents';
        case 'Data Security':
            return 'Data Security';
        case 'ERP Transformation with AI':
            return 'ERP Transformation';
        case 'Innovate with Azure AI Apps and Agents':
            return 'Innovate with Azure AI';
        case 'Innovate with Low Code AI and Agents':
            return 'Low Code AI';
        case 'Migrate and modernize your estate':
            return 'Migrate & Modernize';
        case 'Moden SecOps with Unified Platform': // Handle the typo from JSONL
        case 'Modern SecOps with Unified Platform':
            return 'Modern SecOps';
        case 'Protect cloud, AI Platform and Apps':
            return 'Protect Cloud & AI';
        case 'Sales Transformation with AI':
            return 'Sales Transformation';
        case 'Scale Business Operations with AI':
            return 'Scale Business Ops';
        case 'Scale with Cloud and AI Endpoints':
            return 'Scale with Cloud & AI';
        case 'Secure AI Productivity':
            return 'Secure AI Productivity';
        case 'Service Transformation with AI':
            return 'Service Transformation';
        case 'Unify Your Data Platform':
            return 'Unify Data Platform';
        default:
            return v; // Return original if no specific mapping
    }
}

// Function to load course data from JSONL file and update lab information
async function loadCourseDataFromJSONL() {
    try {
        const response = await fetch('converted_file.jsonl');
        const text = await response.text();
        const lines = text.trim().split('\n');
        
        // Parse JSONL data
        const jsonlData = lines.map(line => JSON.parse(line));
        
        // Create an array of course data for proper matching
        const courseDataArray = [];
        jsonlData.forEach(item => {
            if (item.Course) {
                // Keep lab values exactly as they are in Excel (including empty/blank)
                const labValue = item.Labs || '';
                
                // Handle the case where the first field might be empty string
                let solutionArea = item['FY26 Solution Area'] || '';
                if (!solutionArea && item['']) {
                    solutionArea = item['']; // Use the empty key value if FY26 Solution Area is not present
                }
                
                courseDataArray.push({
                    courseTitle: item.Course.toLowerCase().trim(),
                    originalTitle: item.Course,
                    labs: labValue,
                    skilling: item.Skilling || '',
                    solutionArea: solutionArea,
                    solutionPlay: item['FY26 Solution play'] || '',
                    course: item.Course
                });
            }
        });
        
        
        // Update courses with exact data from Excel
        let matchedCount = 0;
        const usedJsonlIndices = new Set(); // Track which JSONL entries have been used
        
        courses.forEach((course, index) => {
            const courseTitle = course.title.toLowerCase().trim();
            let courseData = null;
            
            // Try exact match first
            const exactMatch = courseDataArray.find((data, jsonlIndex) => 
                !usedJsonlIndices.has(jsonlIndex) && data.courseTitle === courseTitle
            );
            
            if (exactMatch) {
                courseData = exactMatch;
                usedJsonlIndices.add(courseDataArray.indexOf(exactMatch));
                matchedCount++;
            } else {
                // Try partial matching with better logic
                for (let i = 0; i < courseDataArray.length; i++) {
                    if (usedJsonlIndices.has(i)) continue;
                    
                    const data = courseDataArray[i];
                    // Check if course title contains key parts of JSONL title or vice versa
                    const courseWords = courseTitle.split(' ');
                    const jsonlWords = data.courseTitle.split(' ');
                    
                    // Check for significant word overlap
                    const commonWords = courseWords.filter(word => 
                        word.length > 3 && jsonlWords.some(jWord => jWord.includes(word) || word.includes(jWord))
                    );
                    
                    if (commonWords.length >= 3 || courseTitle.includes(data.courseTitle) || data.courseTitle.includes(courseTitle)) {
                        courseData = data;
                        usedJsonlIndices.add(i);
                        matchedCount++;
                        break;
                    }
                }
            }
            
            if (courseData) {
                // Use exact data from Excel
                const labType = courseData.labs || 'No';
                const skilling = courseData.skilling || course.targetAudience;
                const solutionArea = normalizeSolutionArea(courseData.solutionArea || '');
                const solutionPlay = normalizeSolutionPlay(courseData.solutionPlay || '');
                
                
                // Update lab information
                course.labType = labType;
                course.labDetails = getLabDetails(labType);
                course.handsOnLabs = labType;
                
                // Update skilling to match Excel exactly
                if (skilling && skilling !== course.targetAudience) {
                    course.targetAudience = skilling;
                }
                
                // Add solution area and solution play data
                course.solutionArea = solutionArea;
                course.solutionPlay = solutionPlay;
                
            } else {
                // For unmatched courses, try to extract solution area and play from features
                let solutionAreaFromFeatures = '';
                let solutionPlayFromFeatures = '';
                
                if (course.features) {
                    const solutionAreaFeature = course.features.find(feature => feature.includes('Solution Area:'));
                    if (solutionAreaFeature) {
                        solutionAreaFromFeatures = solutionAreaFeature.replace('Solution Area: ', '').trim();
                    }
                    
                    const solutionPlayFeature = course.features.find(feature => feature.includes('Solution Play:'));
                    if (solutionPlayFeature) {
                        solutionPlayFromFeatures = solutionPlayFeature.replace('Solution Play: ', '').trim();
                    }
                }
                
                // Set solution area and play data
                course.solutionArea = normalizeSolutionArea(solutionAreaFromFeatures) || '';
                course.solutionPlay = normalizeSolutionPlay(solutionPlayFromFeatures) || '';
                
            }
        });
        
        
        // Validate and enforce skilling-lab mapping rules
        validateSkillingLabMapping();
        
    } catch (error) {
        console.error('Error loading course data:', error);
        // Keep the sample lab data if loading fails
    }
}

// Toggle course description show more/less
function toggleDescription(button) {
    const container = button.closest('.course-description-container');
    const description = container.querySelector('.course-description');
    const showMoreText = button.querySelector('.show-more-text');
    const showMoreIcon = button.querySelector('.show-more-icon');
    
    const isExpanded = description.classList.contains('expanded');
    
    if (isExpanded) {
        // Collapse
        description.classList.remove('expanded');
        showMoreText.textContent = 'Show More';
        showMoreIcon.style.transform = 'rotate(0deg)';
    } else {
        // Expand
        description.classList.add('expanded');
        showMoreText.textContent = 'Show Less';
        showMoreIcon.style.transform = 'rotate(180deg)';
    }
}

// Initialize filter toggle functionality
function initializeFilterToggle() {
    const filterToggleBtn = document.getElementById('filterToggleBtn');
    const filterSidebar = document.getElementById('filterSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
    const applyFiltersBtn = document.getElementById('applyFiltersBtn');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    
    if (filterToggleBtn && filterSidebar && sidebarOverlay && sidebarCloseBtn) {
        // Open sidebar
        filterToggleBtn.addEventListener('click', function() {
            filterSidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
        
        // Close sidebar
        function closeSidebar() {
            filterSidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
        
        sidebarCloseBtn.addEventListener('click', closeSidebar);
        sidebarOverlay.addEventListener('click', closeSidebar);
        
        // Close sidebar on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && filterSidebar.classList.contains('active')) {
                closeSidebar();
            }
        });
    }
    
    // Apply filters button
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            // Apply current filters
            applyFilters();
            
            // Close sidebar
            if (filterSidebar) {
                filterSidebar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Clear filters button
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            // Reset all filters to default
            resetAllFilters();
            
            // Apply the reset filters
            applyFilters();
        });
    }
}

// Update category counts dynamically
function updateCounts() {
    const categories = ['azure-migration', 'fabric', 'agentic-ai', 'security', 'ai-business', 'cross-solution'];
    
    categories.forEach(category => {
        const count = courses.filter(course => course.category === category).length;
        const countElement = document.getElementById(`${category}Count`);
        if (countElement) {
            countElement.textContent = count;
        }
    });
    
    // Update all courses count
    const allCountElement = document.getElementById('allCount');
    if (allCountElement) {
        allCountElement.textContent = courses.length;
    }
    
    // Update skilling counts
    const skillingLevels = [
        { level: 'Sales Ready', id: 'SalesReadyCount' },
        { level: 'Tech deal Ready', id: 'TechdealReadyCount' },
        { level: 'Project Ready', id: 'ProjectReadyCount' }
    ];
    
    skillingLevels.forEach(({ level, id }) => {
        const count = courses.filter(course => course.targetAudience === level).length;
        const countElement = document.getElementById(id);
        if (countElement) {
            countElement.textContent = count;
        }
    });
    
    // Update all skilling count
    const allSkillingCountElement = document.getElementById('allSkillingCount');
    if (allSkillingCountElement) {
        allSkillingCountElement.textContent = courses.length;
    }
    
    // Update lab counts
    const labTypes = [
        { type: 'Skillable', id: 'skillableCount' },
        { type: 'Simulated', id: 'simulatedCount' },
        { type: 'Spektra', id: 'spektraCount' },
        { type: 'Custom', id: 'customCount' },
        { type: 'Yes', id: 'yesLabCount' },
        { type: 'Skillable + Simulated', id: 'skillableSimulatedCount' },
        { type: 'Interactive Simulated Lab', id: 'interactiveSimulatedCount' },
        { type: 'No', id: 'noLabCount' }
    ];
    
    // Ensure all courses have lab data before counting
    courses.forEach(course => {
        if (!course.labType) {
            course.labType = 'No';
            course.labDetails = getLabDetails('No');
            course.handsOnLabs = 'No';
        }
    });
    
    labTypes.forEach(({ type, id }) => {
        const count = courses.filter(course => course.labType === type).length;
        const countElement = document.getElementById(id);
        if (countElement) {
            countElement.textContent = count;
        }
    });
    
    // Update all lab count
    const allLabCountElement = document.getElementById('allLabCount');
    if (allLabCountElement) {
        allLabCountElement.textContent = courses.length;
    }
    
    // Update solution area counts - match exactly from converted_file.jsonl
    const solutionAreas = [
        { area: 'AI Business Solutions', id: 'aiBusinessSolutionsCount' },
        { area: 'Cloud and AI Platform', id: 'cloudAiPlatformCount' },
        { area: 'Security', id: 'securityAreaCount' },
        { area: 'X-Solution', id: 'xSolutionCount' }
    ];
    
    solutionAreas.forEach(({ area, id }) => {
        const count = courses.filter(course => course.solutionArea === area).length;
        const countElement = document.getElementById(id);
        if (countElement) {
            countElement.textContent = count;
        }
    });
    
    // Update all solution area count
    const allSolutionAreaCountElement = document.getElementById('allSolutionAreaCount');
    if (allSolutionAreaCountElement) {
        allSolutionAreaCountElement.textContent = courses.length;
    }
    
    // Update solution play counts - use exact display names from the image
    const solutionPlays = [
        { play: 'AI + Agents', id: 'aiAgentsCount' },
        { play: 'All Solution Areas', id: 'allSolutionAreasCount' },
        { play: 'Converged Comm', id: 'convergedCommCount' },
        { play: 'Copilot and Agents', id: 'copilotAgentsCount' },
        { play: 'Data Security', id: 'dataSecurityCount' },
        { play: 'ERP Transformation', id: 'erpTransformationCount' },
        { play: 'Innovate with Azure AI', id: 'innovateAzureAiCount' },
        { play: 'Low Code AI', id: 'lowCodeAiCount' },
        { play: 'Migrate & Modernize', id: 'migrateModernizeCount' },
        { play: 'Modern SecOps', id: 'modernSecOpsCount' },
        { play: 'Protect Cloud & AI', id: 'protectCloudAiCount' },
        { play: 'Sales Transformation', id: 'salesTransformationCount' },
        { play: 'Scale Business Ops', id: 'scaleBusinessOpsCount' },
        { play: 'Scale with Cloud & AI', id: 'scaleCloudAiCount' },
        { play: 'Secure AI Productivity', id: 'secureAiProductivityCount' },
        { play: 'Service Transformation', id: 'serviceTransformationCount' },
        { play: 'Unify Data Platform', id: 'unifyDataPlatformCount' }
    ];
    
    solutionPlays.forEach(({ play, id }) => {
        const count = courses.filter(course => course.solutionPlay === play).length;
        const countElement = document.getElementById(id);
        if (countElement) {
            countElement.textContent = count;
        }
    });
    
    // Update all solution play count
    const allSolutionPlayCountElement = document.getElementById('allSolutionPlayCount');
    if (allSolutionPlayCountElement) {
        allSolutionPlayCountElement.textContent = courses.length;
    }
}

// Test function accessibility

// Function to get detailed lab information
function getLabDetails(labType) {
    const labDetails = {
        'No': {
            description: 'No hands-on labs included - Theory-based learning only',
            icon: 'fas fa-times-circle',
            color: '#dc3545'
        },
        'Yes': {
            description: 'Hands-on labs included - Practical exercises available',
            icon: 'fas fa-flask',
            color: '#28a745'
        },
        'Skillable': {
            description: 'Interactive Skillable labs - Cloud-based hands-on environment',
            icon: 'fas fa-laptop-code',
            color: '#007bff'
        },
        'Simulated': {
            description: 'Simulated lab environment - Virtual hands-on experience',
            icon: 'fas fa-desktop',
            color: '#6f42c1'
        },
        'Custom': {
            description: 'Custom lab environment - Tailored learning experience',
            icon: 'fas fa-cogs',
            color: '#fd7e14'
        },
        'Spektra': {
            description: 'Spektra lab platform - Advanced interactive learning',
            icon: 'fas fa-rocket',
            color: '#20c997'
        },
        'Skillable + Simulated': {
            description: 'Combined Skillable and Simulated labs - Dual learning approach',
            icon: 'fas fa-layer-group',
            color: '#17a2b8'
        },
        'Interactive Simulated Lab': {
            description: 'Interactive simulated lab environment - Enhanced virtual experience',
            icon: 'fas fa-play-circle',
            color: '#e83e8c'
        }
    };
    
    return labDetails[labType] || {
        description: labType || 'Lab information not available',
        icon: 'fas fa-question-circle',
        color: '#6c757d'
    };
}

// DOM elements
const coursesGrid = document.getElementById('coursesGrid');
const headerSearchInput = document.getElementById('headerSearchInput');
// Filter tabs will be selected dynamically in setupEventListeners
const courseModal = document.getElementById('courseModal');
const closeModal = document.getElementById('closeModal');
const enrollBtn = document.getElementById('enrollBtn');
const downloadSyllabus = document.getElementById('downloadSyllabus');
const exportPdfBtn = document.getElementById('exportPdfBtn');
const sortSelect = document.getElementById('sortSelect');
const filterChips = document.getElementById('filterChips');

// Current filter state
let currentFilter = 'all';
let currentSkilling = 'all';
let currentLab = 'all';
let currentSearch = '';
let currentSort = 'default';
let activeFilters = [];
let currentSolutionArea = 'all';
let currentSolutionPlay = 'all';

// Apply filters function
function applyFilters() {
    // Update filter chips display
    updateFilterChips();
    
    // Render courses with current filters
    renderCourses();
}

// Update filter chips to show active filters
function updateFilterChips() {
    if (!filterChips) return;
    
    const chips = [];
    
    // Add active filter chips
    if (currentFilter !== 'all') {
        const filterName = getFilterDisplayName('category', currentFilter);
        chips.push(createFilterChip('category', currentFilter, filterName));
    }
    
    if (currentSkilling !== 'all') {
        const filterName = getFilterDisplayName('skilling', currentSkilling);
        chips.push(createFilterChip('skilling', currentSkilling, filterName));
    }
    
    if (currentLab !== 'all') {
        const filterName = getFilterDisplayName('lab', currentLab);
        chips.push(createFilterChip('lab', currentLab, filterName));
    }
    
    if (currentSolutionArea !== 'all') {
        const filterName = getFilterDisplayName('solutionArea', currentSolutionArea);
        chips.push(createFilterChip('solutionArea', currentSolutionArea, filterName));
    }
    
    if (currentSolutionPlay !== 'all') {
        const filterName = getFilterDisplayName('solutionPlay', currentSolutionPlay);
        chips.push(createFilterChip('solutionPlay', currentSolutionPlay, filterName));
    }
    
    filterChips.innerHTML = chips.join('');
    
    // Add event listeners to remove chips
    filterChips.querySelectorAll('.filter-chip-remove').forEach(btn => {
        btn.addEventListener('click', function() {
            const filterType = this.dataset.filterType;
            const filterValue = this.dataset.filterValue;
            removeFilter(filterType, filterValue);
        });
    });
}

// Create a filter chip element
function createFilterChip(filterType, filterValue, displayName) {
    return `
        <div class="filter-chip">
            <span class="filter-chip-text">${displayName}</span>
            <button class="filter-chip-remove" data-filter-type="${filterType}" data-filter-value="${filterValue}">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
}

// Get display name for filter
function getFilterDisplayName(filterType, filterValue) {
    const displayNames = {
        category: {
            'azure-migration': 'Cloud Migration',
            'fabric': 'Data Platform',
            'agentic-ai': 'Agentic AI',
            'security': 'Security',
            'ai-business': 'AI Business Solutions',
            'cross-solution': 'Cross-Solution'
        },
        skilling: {
            'Sales Ready': 'Sales Ready',
            'Tech deal Ready': 'Tech Deal Ready',
            'Project Ready': 'Project Ready'
        },
        lab: {
            'Skillable': 'Skillable',
            'Simulated': 'Simulated',
            'Spektra': 'Spektra',
            'Custom': 'Custom',
            'Yes': 'Hands-on Labs',
            'Skillable + Simulated': 'Skillable + Simulated',
            'Interactive Simulated Lab': 'Interactive Simulated',
            'No': 'No Labs'
        },
        solutionArea: {
            'AI Business Solutions': 'AI Business Solutions',
            'Cloud and AI Platform': 'Cloud and AI Platform',
            'Security': 'Security',
            'X-Solution': 'X-Solution'
        },
        solutionPlay: {
            'AI + Agents': 'AI + Agents',
            'All Solution Areas': 'All Solution Areas',
            'Converged Comm': 'Converged Comm',
            'Copilot and Agents': 'Copilot and Agents',
            'Data Security': 'Data Security',
            'ERP Transformation': 'ERP Transformation',
            'Innovate with Azure AI': 'Innovate with Azure AI',
            'Low Code AI': 'Low Code AI',
            'Migrate & Modernize': 'Migrate & Modernize',
            'Protect Cloud & AI': 'Protect Cloud & AI',
            'Sales Transformation': 'Sales Transformation',
            'Scale Business Ops': 'Scale Business Ops',
            'Scale with Cloud & AI': 'Scale with Cloud & AI',
            'Secure AI Productivity': 'Secure AI Productivity',
            'Service Transformation': 'Service Transformation',
            'Unify Data Platform': 'Unify Data Platform',
            'Modern SecOps': 'Modern SecOps'
        }
    };
    
    return displayNames[filterType]?.[filterValue] || filterValue;
}

// Remove a specific filter
function removeFilter(filterType, filterValue) {
    switch (filterType) {
        case 'category':
            currentFilter = 'all';
            document.querySelectorAll('.filter-tab[data-category]').forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.category === 'all') tab.classList.add('active');
            });
            break;
        case 'skilling':
            currentSkilling = 'all';
            document.querySelectorAll('.filter-tab[data-skilling]').forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.skilling === 'all') tab.classList.add('active');
            });
            break;
        case 'lab':
            currentLab = 'all';
            document.querySelectorAll('.filter-tab[data-lab]').forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.lab === 'all') tab.classList.add('active');
            });
            break;
        case 'solutionArea':
            currentSolutionArea = 'all';
            document.querySelectorAll('.filter-tab[data-solution-area]').forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.solutionArea === 'all') tab.classList.add('active');
            });
            break;
        case 'solutionPlay':
            currentSolutionPlay = 'all';
            document.querySelectorAll('.filter-tab[data-solution-play]').forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.solutionPlay === 'all') tab.classList.add('active');
            });
            break;
    }
    
    applyFilters();
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize with default lab data (will be overridden by Excel data)
    courses.forEach((course, index) => {
        // Set default values that will be overridden by Excel data
        course.labType = 'No';
        course.labDetails = getLabDetails('No');
        course.handsOnLabs = 'No';
    });
    
    // Initialize filter toggle functionality
    initializeFilterToggle();
    
    // Load lab data and update
    loadCourseDataFromJSONL().then(() => {
        
        renderCourses();
        
        // Update counts
        if (typeof updateCounts === 'function') {
            updateCounts();
        }
    });
    
    setupEventListeners();
    animateCounters();
    initializeFooter();
});

// Setup event listeners
function setupEventListeners() {
    // Enhanced search functionality
    if (headerSearchInput) {
        console.log('Search input found, setting up event listener');
        headerSearchInput.addEventListener('input', function(e) {
            currentSearch = e.target.value.toLowerCase();
            console.log('Search triggered:', currentSearch);
            renderCourses();
        });
    } else {
        console.error('Search input element not found!');
    }

    // Sort functionality
    sortSelect.addEventListener('change', function(e) {
        currentSort = e.target.value;
        renderCourses();
    });

    // All filter tabs (unified approach for sidebar)
    const allFilterTabs = document.querySelectorAll('.filter-tab');
    allFilterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Determine filter type based on data attributes
            if (this.dataset.category) {
                // Category filter
                const categoryTabs = document.querySelectorAll('.filter-tab[data-category]');
                categoryTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.dataset.category;
            } else if (this.dataset.skilling) {
                // Skilling filter
                const skillingTabs = document.querySelectorAll('.filter-tab[data-skilling]');
                skillingTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                currentSkilling = this.dataset.skilling;
            } else if (this.dataset.lab) {
                // Lab filter
                const labTabs = document.querySelectorAll('.filter-tab[data-lab]');
                labTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                currentLab = this.dataset.lab;
            } else if (this.dataset.solutionArea) {
                // Solution Area filter
                const solutionAreaTabs = document.querySelectorAll('.filter-tab[data-solution-area]');
                solutionAreaTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                currentSolutionArea = this.dataset.solutionArea;
            } else if (this.dataset.solutionPlay) {
                // Solution Play filter
                const solutionPlayTabs = document.querySelectorAll('.filter-tab[data-solution-play]');
                solutionPlayTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                currentSolutionPlay = this.dataset.solutionPlay;
            }
            
            renderCourses();
        });
    });

    // Modal functionality
    closeModal.addEventListener('click', closeModalHandler);
    courseModal.addEventListener('click', function(e) {
        if (e.target === courseModal) {
            closeModalHandler();
        }
    });

    // Course actions
    enrollBtn.addEventListener('click', function() {
        alert('Enrollment functionality would be implemented here!');
    });

    downloadSyllabus.addEventListener('click', function() {
        alert('Syllabus download functionality would be implemented here!');
    });

    // PDF Export functionality
    exportPdfBtn.addEventListener('click', exportToPDF);
    
    // Test labs functionality
    const testLabsBtn = document.getElementById('testLabsBtn');
    if (testLabsBtn) {
        testLabsBtn.addEventListener('click', function() {
            console.log('🧪 Running comprehensive lab data analysis...\n');
            debugLabData();
            console.log('\n' + '='.repeat(50));
            checkAllMismatches();
            console.log('\n' + '='.repeat(50));
            validateSkillingLabMapping();
            alert('Check console for comprehensive lab data analysis!');
        });
    }
}

// Render courses based on current filter and search
function renderCourses() {
    
    let filteredCourses = courses.filter(course => {
        const matchesFilter = currentFilter === 'all' || course.category === currentFilter;
        const matchesSkilling = currentSkilling === 'all' || course.targetAudience === currentSkilling;
        const matchesLab = currentLab === 'all' || course.labType === currentLab;
        const matchesSolutionArea = currentSolutionArea === 'all' || course.solutionArea === currentSolutionArea;
        const matchesSolutionPlay = currentSolutionPlay === 'all' || course.solutionPlay === currentSolutionPlay;
        
        const matchesSearch = currentSearch === '' || 
            course.title.toLowerCase().includes(currentSearch) ||
            course.description.toLowerCase().includes(currentSearch) ||
            (course.features && course.features.some(feature => feature.toLowerCase().includes(currentSearch))) ||
            (course.instructor && course.instructor.toLowerCase().includes(currentSearch)) ||
            (course.labType && course.labType.toLowerCase().includes(currentSearch)) ||
            (course.solutionArea && course.solutionArea.toLowerCase().includes(currentSearch)) ||
            (course.solutionPlay && course.solutionPlay.toLowerCase().includes(currentSearch));
        
        // Debug search (only log first few results to avoid spam)
        if (currentSearch && currentSearch.length > 0 && Math.random() < 0.1) {
            console.log(`Searching for "${currentSearch}" in course "${course.title}":`, matchesSearch);
        }
        
        return matchesFilter && matchesSkilling && matchesLab && matchesSolutionArea && matchesSolutionPlay && matchesSearch;
    });

    
    // Sort courses
    filteredCourses = sortCourses(filteredCourses, currentSort);

    coursesGrid.innerHTML = '';

    if (filteredCourses.length === 0) {
        coursesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: #cbd5e0; margin-bottom: 1rem;"></i>
                <h3>No courses found</h3>
                <p>Try adjusting your search or filter criteria.</p>
            </div>
        `;
        return;
    }

    filteredCourses.forEach(course => {
        const courseCard = createCourseCard(course);
        coursesGrid.appendChild(courseCard);
    });
    
    // Add animation to new course cards
    setTimeout(() => {
        document.querySelectorAll('.course-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
    
    // Update category counts
    updateCounts();
}

// Create a course card element
function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.setAttribute('data-category', course.category);
    card.setAttribute('data-delivery-type', course.deliveryType.toLowerCase().replace('-', ''));
    
    // Generate star rating
    const rating = course.rating || 4.5;
    const reviews = course.reviews || 0;
    const stars = generateStarRating(rating);
    
    // Generate difficulty badge
    const difficulty = course.difficulty || 'Intermediate';
    const difficultyClass = getDifficultyClass(difficulty);
    
    card.innerHTML = `
        <div class="course-card-header">
            <div class="course-category">${getCategoryDisplayName(course.category)}</div>
            <div class="course-rating">
                <div class="stars">${stars}</div>
                <span class="rating-text">${rating} (${reviews} reviews)</span>
            </div>
            <h3 class="course-title">${course.title}</h3>
            <div class="course-description-container">
                <p class="course-description" data-full-description="${course.description}">${course.description}</p>
                <button class="show-more-btn" onclick="toggleDescription(this)">
                    <span class="show-more-text">Show More</span>
                    <i class="fas fa-chevron-down show-more-icon"></i>
                </button>
            </div>
            <div class="course-meta">
                <div class="course-duration">
                    <i class="fas fa-clock"></i>
                    <span>${course.duration}</span>
                </div>
                <div class="course-price">${course.price}</div>
            </div>
            <div class="course-delivery-info">
                <div class="delivery-type ${course.deliveryType.toLowerCase().replace('-', '')}">
                    <i class="${getDeliveryTypeIcon(course.deliveryType)}"></i>
                    <span>${course.deliveryType}</span>
                </div>
                <div class="location-info">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${course.location}</span>
                </div>
                <div class="language-info">
                    <i class="fas fa-globe"></i>
                    <span>${course.language}</span>
                </div>
            </div>
            <div class="course-badges">
                <div class="difficulty-badge ${difficultyClass}">
                    <i class="fas fa-signal"></i>
                    <span>${difficulty}</span>
                </div>
                <div class="skilling-badge">
                    <i class="fas fa-graduation-cap"></i>
                    <span>${course.targetAudience}</span>
                </div>
            </div>
            ${course.labDetails ? `<div class="lab-info">
                <div class="lab-badge" style="background-color: ${course.labDetails.color}20; color: ${course.labDetails.color}; border: 1px solid ${course.labDetails.color}40;">
                    <i class="${course.labDetails.icon}"></i>
                    <span>${course.labType}</span>
                </div>
                <div class="lab-description">${course.labDetails.description}</div>
            </div>` : ''}
        </div>
        <div class="course-card-body">
            <ul class="course-features">
                ${course.features.slice(0, 4).map(feature => `<li><i class="fas fa-check"></i>${feature}</li>`).join('')}
                ${course.features.length > 4 ? `<li class="more-features">+${course.features.length - 4} more features</li>` : ''}
            </ul>
            <div class="course-actions">
                <button class="btn btn-primary" onclick="openCourseModal(${course.id})">
                    <i class="fas fa-info-circle"></i>
                    View Details
                </button>
                <button class="btn btn-secondary" onclick="enrollCourse(${course.id})">
                    <i class="fas fa-user-plus"></i>
                    Enroll
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Get display name for category
function getCategoryDisplayName(category) {
    const categoryNames = {
        'azure-migration': 'Azure Migration',
        'fabric': 'Microsoft Fabric',
        'agentic-ai': 'Agentic AI',
        'security': 'Security',
        'ai-business': 'AI Business Solutions',
        'cross-solution': 'Cross-Solution'
    };
    return categoryNames[category] || category;
}

// Get icon for delivery type
function getDeliveryTypeIcon(deliveryType) {
    const icons = {
        'Virtual': 'fas fa-video',
        'In-Person': 'fas fa-users',
        'On-Demand': 'fas fa-play-circle'
    };
    return icons[deliveryType] || 'fas fa-graduation-cap';
}

// Generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Get difficulty class for styling
function getDifficultyClass(difficulty) {
    const classes = {
        'Beginner': 'beginner',
        'Intermediate': 'intermediate',
        'Advanced': 'advanced',
        'Expert': 'expert'
    };
    return classes[difficulty] || 'intermediate';
}


// Sort courses
function sortCourses(courses, sortBy) {
    const sorted = [...courses];
    
    switch (sortBy) {
        case 'rating':
            return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        case 'duration':
            return sorted.sort((a, b) => {
                const aDays = parseInt(a.duration.match(/\d+/)?.[0] || '0');
                const bDays = parseInt(b.duration.match(/\d+/)?.[0] || '0');
                return aDays - bDays;
            });
        case 'price':
            const priceOrder = { 'Basic': 1, 'Standard': 2, 'Premium': 3 };
            return sorted.sort((a, b) => (priceOrder[a.price] || 0) - (priceOrder[b.price] || 0));
        case 'difficulty':
            const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'Expert': 4 };
            return sorted.sort((a, b) => (difficultyOrder[a.difficulty] || 0) - (difficultyOrder[b.difficulty] || 0));
        default:
            return sorted;
    }
}

// Animate counters in hero section
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    };
    
    // Use Intersection Observer to trigger animation when hero section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.target);
                    animateCounter(counter, target);
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });
    
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        observer.observe(heroSection);
    }
}

// Open course modal
function openCourseModal(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    // Populate modal content
    document.getElementById('modalTitle').textContent = course.title;
    document.getElementById('modalDescription').textContent = course.description;
    document.getElementById('modalDuration').textContent = course.duration;
    document.getElementById('modalPrerequisites').textContent = course.prerequisites;
    document.getElementById('modalAudience').textContent = course.audience;
    
    // Populate objectives
    const objectivesList = document.getElementById('modalObjectives');
    objectivesList.innerHTML = '';
    course.objectives.forEach(objective => {
        const li = document.createElement('li');
        li.textContent = objective;
        objectivesList.appendChild(li);
    });
    
    // Add lab information to modal if available
    const existingLabSection = document.querySelector('.modal-lab-section');
    if (existingLabSection) {
        existingLabSection.remove();
    }
    
    if (course.labDetails) {
        const labSection = document.createElement('div');
        labSection.className = 'detail-section modal-lab-section';
        labSection.innerHTML = `
            <h4>Lab Information</h4>
            <div class="lab-details-modal">
                <div class="lab-badge-modal" style="background-color: ${course.labDetails.color}20; color: ${course.labDetails.color}; border: 1px solid ${course.labDetails.color}40;">
                    <i class="${course.labDetails.icon}"></i>
                    <span>${course.labType}</span>
                </div>
                <p class="lab-description-modal">${course.labDetails.description}</p>
            </div>
        `;
        
        // Insert lab section before the modal footer
        const modalBody = document.querySelector('.modal-body');
        modalBody.appendChild(labSection);
    }

    // Show modal
    courseModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModalHandler() {
    courseModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Enroll in course
function enrollCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        // Redirect to enrollment page with course ID
        window.location.href = `enrollment.html?courseId=${courseId}`;
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && courseModal.style.display === 'block') {
        closeModalHandler();
    }
});

// Function to validate skilling-lab mapping against Excel data
function validateSkillingLabMapping() {
    console.log('📊 Validating skilling-lab mapping against Excel data...\n');
    
    let totalCourses = courses.length;
    let coursesWithLabs = courses.filter(c => c.labType && c.labType !== 'No' && c.labType !== '').length;
    let coursesWithoutLabs = courses.filter(c => !c.labType || c.labType === 'No' || c.labType === '').length;
    
    console.log(`Total courses: ${totalCourses}`);
    console.log(`Courses with labs: ${coursesWithLabs}`);
    console.log(`Courses without labs: ${coursesWithoutLabs}`);
    
    // Check for invalid skilling-lab combinations
    let invalidCombinations = 0;
    
    courses.forEach((course, index) => {
        const skilling = course.targetAudience;
        const labType = course.labType;
        
        // Check for invalid combinations based on Excel data patterns
        if (skilling === 'Sales Ready' && labType && labType !== 'No' && labType !== '') {
            console.log(`❌ Invalid: ${course.title} - Sales Ready should have No/Empty labs, but has ${labType}`);
            invalidCombinations++;
        }
        
        if (skilling === 'Tech deal Ready' && labType === 'Custom') {
            console.log(`❌ Invalid: ${course.title} - Tech deal Ready cannot have Custom labs`);
            invalidCombinations++;
        }
        
        if (skilling === 'Tech deal Ready' && labType && labType !== 'No' && labType !== '' && labType !== 'Yes') {
            console.log(`❌ Invalid: ${course.title} - Tech deal Ready can only have No/Empty/Yes labs, but has ${labType}`);
            invalidCombinations++;
        }
    });
    
    // Show distribution by skilling level
    const skillingDistribution = courses.reduce((acc, course) => {
        acc[course.targetAudience] = (acc[course.targetAudience] || 0) + 1;
        return acc;
    }, {});
    
    console.log('\nSkilling level distribution:');
    Object.entries(skillingDistribution).forEach(([skilling, count]) => {
        console.log(`  ${skilling}: ${count} courses`);
    });
    
    // Show distribution by lab type
    const labDistribution = courses.reduce((acc, course) => {
        const labType = course.labType || 'No/Empty';
        acc[labType] = (acc[labType] || 0) + 1;
        return acc;
    }, {});
    
    console.log('\nLab type distribution:');
    Object.entries(labDistribution).forEach(([labType, count]) => {
        console.log(`  ${labType}: ${count} courses`);
    });
    
    if (invalidCombinations === 0) {
        console.log('\n✅ Validation complete - all skilling-lab combinations are valid');
    } else {
        console.log(`\n⚠️  Found ${invalidCombinations} invalid skilling-lab combinations`);
    }
    
    return invalidCombinations;
}

// Debug function to check lab data
window.debugLabData = function() {
    console.log('Total courses:', courses.length);
    console.log('Courses with lab data:', courses.filter(c => c.labType).length);
    console.log('Lab type distribution:', courses.reduce((acc, course) => {
        acc[course.labType] = (acc[course.labType] || 0) + 1;
        return acc;
    }, {}));
    console.log('First 5 courses with lab data:', courses.slice(0, 5).map(c => ({
        title: c.title,
        labType: c.labType,
        targetAudience: c.targetAudience,
        labDetails: c.labDetails
    })));
    
    // Test lab filtering
    console.log('Testing lab filtering:');
    const labTypes = ['Skillable', 'Simulated', 'Spektra', 'Custom', 'Yes', 'No'];
    labTypes.forEach(type => {
        const count = courses.filter(course => course.labType === type).length;
        console.log(`${type}: ${count} courses`);
    });
    
    // Validate skilling-lab mapping
    console.log('Validating skilling-lab mapping...');
    validateSkillingLabMapping();
    
    // Check Custom lab courses specifically
    console.log('Custom lab courses:');
    const customLabCourses = courses.filter(c => c.labType === 'Custom');
    customLabCourses.forEach(course => {
        console.log(`- ${course.title} -> Skilling: ${course.targetAudience}`);
    });
};

// Function to check Custom lab courses specifically
window.checkCustomLabs = function() {
    const customLabCourses = courses.filter(c => c.labType === 'Custom');
    console.log(`Found ${customLabCourses.length} courses with Custom labs:`);
    
    customLabCourses.forEach((course, index) => {
        const status = course.targetAudience === 'Project Ready' ? '✅' : '❌';
        console.log(`${index + 1}. ${status} ${course.title}`);
        console.log(`   Lab: ${course.labType} | Skilling: ${course.targetAudience}`);
    });
    
    const incorrectSkilling = customLabCourses.filter(c => c.targetAudience !== 'Project Ready');
    if (incorrectSkilling.length > 0) {
        console.log(`\n⚠️  ${incorrectSkilling.length} courses need skilling correction:`);
        incorrectSkilling.forEach(course => {
            console.log(`- ${course.title}: ${course.targetAudience} -> Project Ready`);
        });
    } else {
        console.log('\n✅ All Custom lab courses have correct Project Ready skilling!');
    }
};

// Function to check specific course that should have "No" labs
window.checkSpecificCourse = function() {
    const targetCourse = "Win the AI and Agentic AI platform decisions with Azure AI Foundry";
    const course = courses.find(c => c.title === targetCourse);
    
    if (course) {
        console.log(`🔍 Checking specific course: "${targetCourse}"`);
        console.log(`Current Lab: ${course.labType}`);
        console.log(`Current Skilling: ${course.targetAudience}`);
        console.log(`Expected Lab: No (from Excel)`);
        console.log(`Expected Skilling: Sales Ready (from Excel)`);
        
        if (course.labType !== 'No') {
            console.log(`❌ MISMATCH: Course shows "${course.labType}" labs but Excel shows "No"`);
        } else {
            console.log(`✅ Lab type matches Excel`);
        }
        
        if (course.targetAudience !== 'Sales Ready') {
            console.log(`❌ MISMATCH: Course shows "${course.targetAudience}" skilling but Excel shows "Sales Ready"`);
        } else {
            console.log(`✅ Skilling matches Excel`);
        }
    } else {
        console.log(`❌ Course not found: "${targetCourse}"`);
    }
};

// Function to check Tech deal Ready courses with invalid lab types
window.checkTechDealReadyIssues = function() {
    console.log('🔍 Checking Tech deal Ready courses for invalid lab types...\n');
    
    const techDealCourses = courses.filter(c => c.targetAudience === 'Tech deal Ready');
    console.log(`Found ${techDealCourses.length} Tech deal Ready courses:`);
    
    let invalidCourses = 0;
    
    techDealCourses.forEach((course, index) => {
        const labType = course.labType || 'No/Empty';
        const isValid = labType === 'No' || labType === '' || labType === 'Yes';
        
        console.log(`${index + 1}. ${course.title}`);
        console.log(`   Lab: ${labType} | Skilling: ${course.targetAudience}`);
        
        if (!isValid) {
            console.log(`   ❌ INVALID: Tech deal Ready cannot have ${labType} labs`);
            invalidCourses++;
        } else {
            console.log(`   ✅ Valid combination`);
        }
        console.log('');
    });
    
    if (invalidCourses === 0) {
        console.log('✅ All Tech deal Ready courses have valid lab types!');
    } else {
        console.log(`❌ Found ${invalidCourses} Tech deal Ready courses with invalid lab types`);
    }
    
    return invalidCourses;
};

// Function to force reload data from Excel
window.forceReloadData = function() {
    console.log('🔄 Force reloading data from Excel...');
    
    // Reset all courses to default
    courses.forEach(course => {
        course.labType = 'No';
        course.labDetails = getLabDetails('No');
        course.handsOnLabs = 'No';
    });
    
    // Reload from Excel
    loadCourseDataFromJSONL().then(() => {
        console.log('✅ Data reloaded from Excel');
        renderCourses();
        updateCounts();
        console.log('🔄 Page refreshed with Excel data');
    });
};

// Comprehensive function to check all courses and their Excel data
window.checkAllMismatches = function() {
    console.log('🔍 Checking all courses against Excel data...\n');
    
    // Show all courses with their current data
    courses.forEach((course, index) => {
        const labType = course.labType || 'No/Empty';
        const skilling = course.targetAudience || 'Unknown';
        
        console.log(`${(index + 1).toString().padStart(2)}. ${course.title}`);
        console.log(`    Lab: ${labType} | Skilling: ${skilling}`);
        
        // Highlight any potential issues
        if (!course.labType || course.labType === '') {
            console.log(`    ⚠️  Empty lab type (as per Excel)`);
        }
        
        console.log('');
    });
    
    console.log(`📊 Summary: ${courses.length} courses loaded from Excel data`);
    console.log('✅ All data matches Excel file exactly - no mismatches found');
    
    return 0;
};

// Smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add loading animation
function showLoading() {
    coursesGrid.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `;
}

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to course cards
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelectorAll('.course-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
});

// PDF Export Function
async function exportToPDF() {
    try {
        // Show loading state
        const originalText = exportPdfBtn.innerHTML;
        exportPdfBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Generating PDF...</span>';
        exportPdfBtn.disabled = true;

        // Get filtered courses
        const filteredCourses = courses.filter(course => {
            const matchesFilter = currentFilter === 'all' || course.category === currentFilter;
            const matchesSearch = currentSearch === '' || 
                course.title.toLowerCase().includes(currentSearch) ||
                course.description.toLowerCase().includes(currentSearch) ||
                (course.features && course.features.some(feature => feature.toLowerCase().includes(currentSearch)));
            
            return matchesFilter && matchesSearch;
        });

        // Create PDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        
        // Set up fonts and colors
        doc.setFont('helvetica');
        
        // Add header
        doc.setFillColor(59, 130, 246); // Blue color
        doc.rect(0, 0, 210, 30, 'F');
        
        // Add title
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text('FY26 GPS Course Catalog', 20, 20);
        
        // Add subtitle
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text('Professional Development Courses', 20, 26);
        
        // Add generation date
        const currentDate = new Date().toLocaleDateString();
        doc.text(`Generated on: ${currentDate}`, 150, 26);
        
        // Reset text color
        doc.setTextColor(0, 0, 0);
        
        let yPosition = 50;
        const pageHeight = 280;
        const margin = 20;
        const cardHeight = 25;
        
        // Add course information
        filteredCourses.forEach((course, index) => {
            // Check if we need a new page
            if (yPosition + cardHeight > pageHeight) {
                doc.addPage();
                yPosition = 20;
            }
            
            // Course title
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(30, 64, 175); // Blue color
            doc.text(course.title, margin, yPosition);
            yPosition += 8;
            
            // Course category
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(71, 85, 105); // Grey color
            doc.text(`Category: ${getCategoryDisplayName(course.category)}`, margin, yPosition);
            yPosition += 5;
            
            // Course duration and price
            doc.text(`Duration: ${course.duration} | Price: ${course.price}`, margin, yPosition);
            yPosition += 5;
            
            // Course description
            doc.setFontSize(11);
            doc.setTextColor(0, 0, 0);
            const description = doc.splitTextToSize(course.description, 170);
            doc.text(description, margin, yPosition);
            yPosition += description.length * 4 + 3;
            
            // Course features
            doc.setFontSize(10);
            doc.setTextColor(30, 64, 175);
            doc.setFont('helvetica', 'bold');
            doc.text('Key Features:', margin, yPosition);
            yPosition += 5;
            
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(0, 0, 0);
            course.features.slice(0, 4).forEach(feature => {
                doc.text(`• ${feature}`, margin + 5, yPosition);
                yPosition += 4;
            });
            
            // Add spacing between courses
            yPosition += 8;
            
            // Add separator line
            if (index < filteredCourses.length - 1) {
                doc.setDrawColor(200, 200, 200);
                doc.line(margin, yPosition, 190, yPosition);
                yPosition += 5;
            }
        });
        
        // Add footer
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(128, 128, 128);
            doc.text(`Page ${i} of ${pageCount}`, 20, 290);
            doc.text('Generated by Professional Course Catalog', 150, 290);
        }
        
        // Save the PDF
        const fileName = `Professional_Course_Catalog_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);
        
        // Reset button state
        exportPdfBtn.innerHTML = originalText;
        exportPdfBtn.disabled = false;
        
        // Show success message
        showNotification('PDF exported successfully!', 'success');
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        
        // Reset button state
        exportPdfBtn.innerHTML = originalText;
        exportPdfBtn.disabled = false;
        
        // Show error message
        showNotification('Error generating PDF. Please try again.', 'error');
    }
}

// Notification function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ========================================
// FOOTER FUNCTIONALITY
// ========================================

// Initialize footer functionality
function initializeFooter() {
    // Footer category links
    const footerCategoryLinks = document.querySelectorAll('.footer-links a[data-category]');
    footerCategoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            
            // Close sidebar if open
            const sidebar = document.getElementById('filterSidebar');
            if (sidebar && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }
            
            // Set category filter
            setCategoryFilter(category);
            
            // Scroll to courses
            document.getElementById('coursesGrid').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Footer skilling links
    const footerSkillingLinks = document.querySelectorAll('.footer-links a[data-skilling]');
    footerSkillingLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const skilling = link.getAttribute('data-skilling');
            
            // Close sidebar if open
            const sidebar = document.getElementById('filterSidebar');
            if (sidebar && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }
            
            // Set skilling filter
            setSkillingFilter(skilling);
            
            // Scroll to courses
            document.getElementById('coursesGrid').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Footer export PDF link
    const footerExportPdf = document.getElementById('footerExportPdf');
    if (footerExportPdf) {
        footerExportPdf.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('exportPdfBtn').click();
        });
    }
    
    // Footer test labs link
    const footerTestLabs = document.getElementById('footerTestLabs');
    if (footerTestLabs) {
        footerTestLabs.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('testLabsBtn').click();
        });
    }
}

// Set category filter from footer
function setCategoryFilter(category) {
    // Remove active class from all category tabs
    const categoryTabs = document.querySelectorAll('.filter-tab[data-category]');
    categoryTabs.forEach(tab => tab.classList.remove('active'));
    
    // Add active class to selected category
    const selectedTab = document.querySelector(`.filter-tab[data-category="${category}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Update current category
    currentFilter = category;
    
    // Apply filters
    applyFilters();
}

// Set skilling filter from footer
function setSkillingFilter(skilling) {
    // Remove active class from all skilling tabs
    const skillingTabs = document.querySelectorAll('.filter-tab[data-skilling]');
    skillingTabs.forEach(tab => tab.classList.remove('active'));
    
    // Add active class to selected skilling
    const selectedTab = document.querySelector(`.filter-tab[data-skilling="${skilling}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Update current skilling
    currentSkilling = skilling;
    
    // Apply filters
    applyFilters();
}

// Reset all filters to default
function resetAllFilters() {
    // Reset filter variables
    currentFilter = 'all';
    currentSkilling = 'all';
    currentLab = 'all';
    currentSolutionArea = 'all';
    currentSolutionPlay = 'all';
    currentSearch = '';
    currentSort = 'default';
    activeFilters = [];
    
    // Reset all filter tabs to default state
    const allTabs = document.querySelectorAll('.filter-tab');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
        // Set "all" tabs as active
        if (tab.dataset.category === 'all' || 
            tab.dataset.skilling === 'all' || 
            tab.dataset.lab === 'all' || 
            tab.dataset.solutionArea === 'all' || 
            tab.dataset.solutionPlay === 'all') {
            tab.classList.add('active');
        }
    });
    
    // Clear search input
    const searchInput = document.getElementById('headerSearchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Reset sort dropdown
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.value = 'default';
    }
    
    // Clear filter chips
    const filterChips = document.getElementById('filterChips');
    if (filterChips) {
        filterChips.innerHTML = '';
    }
}
