<template>
    <footer>
      <div class="footer-container">
        
  
        <!-- Quick Links -->
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><NuxtLink to="/cart">Cart</NuxtLink></li>
          </ul>
        </div>
  
      
  
        <!-- Social Media -->
        <div class="footer-social">
          <h4>Follow Us</h4>
          <div class="social-icons">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 MyStore. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  /* Import FontAwesome for social media icons */
  </script>
  
  <style scoped>
  /* Footer Styling */
  footer {
    background-color: #1e293b;
    color: #fff;
    padding: 40px 20px;
    text-align: left;
  }
  
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-about,
  .footer-links,
  .footer-contact,
  .footer-social {
    flex: 1 1 calc(25% - 20px);
    min-width: 200px;
  }
  
  .footer-about h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .footer-about p {
    margin-top: 10px;
    line-height: 1.6;
    font-size: 0.9rem;
  }
  
  .footer-links h4,
  .footer-contact h4,
  .footer-social h4 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  .footer-links ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-links li {
    margin: 5px 0;
  }
  
  .footer-links a {
    text-decoration: none;
    color: #fff;
    font-size: 0.9rem;
    transition: color 0.3s ease;
  }
  
  .footer-links a:hover {
    color: #38bdf8;
  }
  
  .footer-contact p {
    font-size: 0.9rem;
    margin: 5px 0;
  }
  
  .footer-social .social-icons {
    display: flex;
    gap: 10px;
  }
  
  .footer-social .social-icons a {
    display: inline-block;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  .footer-social .social-icons a:hover {
    background-color: #38bdf8;
    border-color: #38bdf8;
    color: #fff;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 20px;
    font-size: 0.85rem;
    border-top: 1px solid #3a3a3a;
    padding-top: 10px;
  }
  
  /* Responsive Styling */
  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      gap: 30px;
      text-align: center;
    }
  
    .footer-about,
    .footer-links,
    .footer-contact,
    .footer-social {
      flex: 1 1 100%;
      min-width: auto;
    }
  
    .footer-social .social-icons {
      justify-content: center;
    }
  }
  </style>
  