const footer = () => {
  document.querySelector('#footer').innerHTML = `
  <!-- Footer -->
  <footer class="bg-dark text-center text-white">
    <!-- Grid container -->
    <div class="container p-4">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Google -->
        <a class="btn btn-outline-light btn-floating m-1" href="mailto:jamesdavidconner@gmail.com" role="button"><i class="fab fa-google"></i
        ></a>
  
        <!-- Linkedin -->
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/jim-conner/" role="button"><i class="fab fa-linkedin-in"></i
        ></a>
  
        <!-- Github -->
        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/jim-conner" role="button"
          ><i class="fab fa-github"></i
        ></a>
      </section>
      <!-- Section: Social media -->
  
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      Copyright © Jim Conner 2021
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->`;
};

export default footer;
