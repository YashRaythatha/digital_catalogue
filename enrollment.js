// Course data will be loaded from JSONL file (same as main script)
let courses = [];

// Load course data from JSONL file (same function as in script.js)
async function loadCourseDataFromJSONL() {
    try {
        const response = await fetch('converted_file.jsonl');
        const text = await response.text();
        const lines = text.trim().split('\n');
        
        // Parse JSONL data
        const jsonlData = lines.map(line => JSON.parse(line));
        console.log('Loaded JSONL data for enrollment:', jsonlData.length, 'courses');
        
        // Transform JSONL data to match our course structure
        courses = jsonlData.map((item, index) => {
            // Map solution area to category
            let category = 'cross-solution';
            const solutionArea = item['FY26 Solution Area']?.toLowerCase() || '';
            const courseTitle = item.Course?.toLowerCase() || '';
            
            if (solutionArea.includes('ai business solutions')) {
                category = 'ai-business';
            } else if (solutionArea.includes('cloud and ai platform')) {
                // Check if it's specifically about Fabric
                if (courseTitle.includes('fabric') || solutionArea.includes('fabric')) {
                    category = 'fabric';
                } else {
                    category = 'azure-migration';
                }
            } else if (solutionArea.includes('security')) {
                category = 'security';
            } else if (solutionArea.includes('fabric') || courseTitle.includes('fabric')) {
                category = 'fabric';
            }

            return {
                id: index + 1,
                title: item.Course || 'Untitled Course',
                description: `Comprehensive training program covering ${item.Course?.toLowerCase() || 'course content'}. This course focuses on ${item['FY26 Solution play']?.toLowerCase() || 'solution implementation'} within the ${item['FY26 Solution Area']?.toLowerCase() || 'solution area'}. Participants will gain practical knowledge and hands-on experience with Microsoft technologies and best practices.`,
                category: category,
                duration: item.Duration || 'TBD',
                price: item['Budget pricing'] || 'Standard',
                deliveryType: "Virtual",
                location: "Online",
                language: "English",
                rating: 4.5,
                reviews: 0,
                difficulty: item.Skilling === 'Sales Ready' ? 'Beginner' : item.Skilling === 'Tech deal Ready' ? 'Intermediate' : 'Advanced',
                level: item.Skilling || 'Professional',
                instructor: "Microsoft Learning",
                lastUpdated: "July 2025",
                esiCode: `DW-${String(index + 1).padStart(3, '0')}`,
                handsOnLabs: item.Labs || 'No',
                prerequisites: "See course details",
                targetAudience: item.Skilling || 'Professional',
                suggestedCertification: "",
                solutionArea: item['FY26 Solution Area'] || '',
                solutionPlay: item['FY26 Solution play'] || '',
                skilling: item.Skilling || '',
                features: [
                    `Duration: ${item.Duration || 'TBD'}`,
                    `Solution Area: ${item['FY26 Solution Area'] || 'TBD'}`,
                    `Solution Play: ${item['FY26 Solution play'] || 'TBD'}`
                ],
                objectives: [
                    "Master key concepts and technologies",
                    "Apply best practices in real-world scenarios", 
                    "Understand implementation strategies",
                    "Gain hands-on experience with tools and platforms"
                ],
                audience: item.Skilling || 'Professional'
            };
        });
        
        console.log('Transformed courses for enrollment:', courses.length);
        return courses;
    } catch (error) {
        console.error('Error loading course data for enrollment:', error);
        return [];
    }
}

// DOM elements
const enrollmentForm = document.getElementById('enrollmentForm');
const submitEnrollment = document.getElementById('submitEnrollment');
const enrollmentCourseTitle = document.getElementById('enrollmentCourseTitle');
const enrollmentDuration = document.getElementById('enrollmentDuration');
const enrollmentPrice = document.getElementById('enrollmentPrice');
const successModal = document.getElementById('successModal');

// Initialize the enrollment page
document.addEventListener('DOMContentLoaded', function() {
    loadCourseDataFromJSONL().then(() => {
        loadCourseData();
        setupFormValidation();
        setupEventListeners();
    });
});

// Load course data from URL parameters
function loadCourseData() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('courseId');
    
    if (courseId) {
        const course = courses.find(c => c.id === parseInt(courseId));
        if (course) {
            enrollmentCourseTitle.textContent = course.title;
            enrollmentDuration.textContent = course.duration;
            enrollmentPrice.textContent = course.price;
        }
    }
}

// Setup event listeners
function setupEventListeners() {
    // Form submission
    enrollmentForm.addEventListener('submit', handleEnrollmentSubmission);
    
    // Real-time validation
    const inputs = enrollmentForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

// Setup form validation
function setupFormValidation() {
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('preferredDate').setAttribute('min', today);
}

// Validate individual field
function validateField(e) {
    const field = e.target;
    const fieldName = field.name;
    const value = field.value.trim();
    
    clearFieldError(e);
    
    switch (fieldName) {
        case 'firstName':
        case 'lastName':
            if (!value) {
                showFieldError(field, 'This field is required');
            } else if (value.length < 2) {
                showFieldError(field, 'Must be at least 2 characters');
            }
            break;
            
        case 'email':
            if (!value) {
                showFieldError(field, 'Email is required');
            } else if (!isValidEmail(value)) {
                showFieldError(field, 'Please enter a valid email address');
            }
            break;
            
        case 'phone':
            if (!value) {
                showFieldError(field, 'Phone number is required');
            } else if (!isValidPhone(value)) {
                showFieldError(field, 'Please enter a valid phone number');
            }
            break;
            
        case 'terms':
            if (!field.checked) {
                showFieldError(field, 'You must agree to the terms and conditions');
            }
            break;
    }
}

// Clear field error
function clearFieldError(e) {
    const field = e.target;
    const errorElement = document.getElementById(field.name + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
    }
    field.closest('.form-group').classList.remove('error');
}

// Show field error
function showFieldError(field, message) {
    const errorElement = document.getElementById(field.name + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
    }
    field.closest('.form-group').classList.add('error');
}

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Handle form submission
function handleEnrollmentSubmission(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        showNotification('Please fix the errors in the form', 'error');
        return;
    }

    // Show loading state
    const originalText = submitEnrollment.innerHTML;
    submitEnrollment.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitEnrollment.disabled = true;

    // Collect form data
    const formData = new FormData(enrollmentForm);
    const enrollmentData = {
        courseId: enrollmentCourseTitle.textContent,
        courseDuration: enrollmentDuration.textContent,
        coursePrice: enrollmentPrice.textContent,
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        company: formData.get('company'),
        jobTitle: formData.get('jobTitle'),
        experience: formData.get('experience'),
        preferredDate: formData.get('preferredDate'),
        timezone: formData.get('timezone'),
        comments: formData.get('comments'),
        newsletter: formData.get('newsletter') === 'on',
        terms: formData.get('terms') === 'on',
        submittedAt: new Date().toISOString()
    };

    // Simulate API call
    setTimeout(() => {
        console.log('Enrollment Data:', enrollmentData);
        
        // Reset button
        submitEnrollment.innerHTML = originalText;
        submitEnrollment.disabled = false;
        
        // Show success modal
        showSuccessModal();
        
        // Here you would typically send the data to your backend
        // Example: sendEnrollmentData(enrollmentData);
        
    }, 2000);
}

// Validate entire form
function validateForm() {
    let isValid = true;
    
    // Required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'terms'];
    
    requiredFields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field.type === 'checkbox') {
            if (!field.checked) {
                showFieldError(field, 'This field is required');
                isValid = false;
            }
        } else {
            if (!field.value.trim()) {
                showFieldError(field, 'This field is required');
                isValid = false;
            }
        }
    });

    // Email validation
    const emailField = document.getElementById('email');
    if (emailField.value && !isValidEmail(emailField.value)) {
        showFieldError(emailField, 'Please enter a valid email address');
        isValid = false;
    }

    // Phone validation
    const phoneField = document.getElementById('phone');
    if (phoneField.value && !isValidPhone(phoneField.value)) {
        showFieldError(phoneField, 'Please enter a valid phone number');
        isValid = false;
    }

    return isValid;
}

// Show success modal
function showSuccessModal() {
    successModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Go back to catalog
function goBack() {
    window.history.back();
}

// Go to catalog
function goToCatalog() {
    window.location.href = 'index.html';
}

// Show notification
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
