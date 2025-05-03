// Improved dropdown toggle script
document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown toggles
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    // Add click event listener to each toggle
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Find the dropdown content associated with this toggle
        const dropdownContent = this.nextElementSibling;
        
        // Toggle the active class on dropdown content
        dropdownContent.classList.toggle('active');
        
        // Toggle active class on the toggle
        this.classList.toggle('active');
        
        // Close other dropdowns
        document.querySelectorAll('.dropdown-content').forEach(content => {
          if (content !== dropdownContent) {
            content.classList.remove('active');
            
            // Remove active class from other toggles
            const otherToggle = content.previousElementSibling;
            if (otherToggle && otherToggle.classList.contains('dropdown-toggle')) {
              otherToggle.classList.remove('active');
            }
          }
        });
      });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
          content.classList.remove('active');
        });
        
        document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
          toggle.classList.remove('active');
        });
      }
    });
    
    // Make sure dropdowns are properly positioned based on viewport edges
    function positionDropdowns() {
      document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        const rect = dropdown.getBoundingClientRect();
        
        // If dropdown would go off the right edge, make it open to the left
        if (rect.right > window.innerWidth) {
          dropdown.style.left = 'auto';
          dropdown.style.right = '0';
        }
        
        // If dropdown would go off the bottom edge, make it open upward
        if (rect.bottom > window.innerHeight) {
          dropdown.classList.add('dropdown-up');
          dropdown.classList.remove('dropdown-down');
        } else if (dropdown.classList.contains('dropdown-up') && rect.top < 0) {
          // If dropdown would go off the top edge, make it open downward
          dropdown.classList.remove('dropdown-up');
          dropdown.classList.add('dropdown-down');
        }
      });
    }
    
    // Position dropdowns initially and whenever the window is resized
    positionDropdowns();
    window.addEventListener('resize', positionDropdowns);
  });