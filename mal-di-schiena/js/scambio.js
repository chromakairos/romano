function openModal(filepath) {
    console.log("Opening image in lightbox... (" + filepath + ")");
    const modal = document.getElementById("myModal");
    modal.classList.add('show'); // Add the 'show' class
  var lightboxImage = document.getElementById("lightbox-img");
    lightboxImage.src = filepath;
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.classList.remove('show'); // Remove the 'show' class
}

/* This funtion enables animations to occur when scrolled into viewport rather than only on page load. */
/* This funtion enables animations to occur when scrolled into viewport rather than only on page load. */
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that should animate when scrolled into view
    // In your HTML, this is the <div> with class "text-entry-anim"
    const animatedSections = document.querySelectorAll('.text-entry-anim');

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // Use the viewport as the container
        // IMPORTANT CHANGE HERE: Adjust rootMargin to trigger earlier
        // '0px 0px -XX% 0px' means:
        // Top: 0px, Right: 0px, Bottom: -XX% of viewport height, Left: 0px
        // A negative bottom margin effectively shrinks the viewport's intersection area from the bottom.
        // This makes elements appear to 'intersect' when their top edge crosses higher up in the viewport.
        // For example, -80% means it triggers when the element's top is in the top 20% of the viewport.
        rootMargin: '0px 0px -80% 0px', // Adjust this percentage (e.g., -70%, -50%) as needed
                                       // to fine-tune when the animation triggers.
                                       // A larger negative percentage means it triggers earlier
                                       // (when less of the element has scrolled in).
        threshold: 0 // Trigger as soon as any part (0%) of the element enters the modified rootMargin area.
                     // Combining threshold: 0 with rootMargin allows precise control.
    };

    // Callback function to run when an observed element intersects the viewport
    const observerCallback = (entries, observer) => {
        console.log("Entered callback"); // Good for debugging
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the element is in view, add the 'is-visible' class.
                entry.target.classList.add('is-visible');

                // IMPORTANT: Stop observing after it has animated once.
                observer.unobserve(entry.target);
            }
        });
    };

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Start observing each animated section
    animatedSections.forEach(section => {
        observer.observe(section);
    });
});