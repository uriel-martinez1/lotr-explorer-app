<template>
  <!-- <div class="gandalf-logo">
    <img src="../assets/1x/gandalf-logo.png" alt="Gandalf Logo">
  </div> -->
  <div class="welcome-container">
    <h1>About This App</h1>
    <p>Welcome to the <strong>Lord of the Rings Explorer</strong>, your ultimate guide to the epic world of
      Middle-earth! This web application is designed for fans and newcomers alike to delve deeper into the fascinating
      universe of The Lord of the Rings films and characters.</p>
      <br>
    <h2>Purpose</h2>
    <p>The Lord of the Rings Explorer is not just a fan site—it's a learning tool. This project was created to provide a
      hands-on practice experience for developing modern web applications. By exploring this app, you'll gain insights
      into:</p>
    <ul>
      <li><strong>The Rich Lore</strong>: Discover memorable quotes and find detailed information on your favorite films and characters from The Lord of the Rings saga.</li>
      <li><strong>Web Development Techniques</strong>: See how HTML, CSS, JavaScript, and modern frameworks come
        together to build a dynamic and responsive web application.</li>
    </ul>

    <h2>Features</h2>
    <ul>
      <li><strong>Comprehensive Database</strong>: Powered by<a href="https://the-one-api.dev/" target="_blank">The Lord of the Rings API</a>, our app fetches real-time data
        to bring you up-to-date and accurate information about the beloved franchise.</li>
      <li><strong>User-Friendly Interface</strong>: Built using HTML and CSS for a seamless and visually appealing
        experience.</li>
      <li><strong>Dynamic Interactions</strong>: JavaScript and Vue.js are used to create an interactive and engaging
        user experience.</li>
      <li><strong>Efficient Data Handling</strong>: Axios is utilized for making HTTP requests, ensuring fast and
        reliable data fetching.</li>
      <li><strong>Smooth Navigation</strong>: With Vue-router, navigating through different sections of the app is quick
        and intuitive.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
      <li><strong>HTML & CSS</strong>: The backbone of our app, providing structure and style.</li>
      <li><strong>JavaScript</strong>: Adds interactivity and functionality.</li>
      <li><strong>Vue.js</strong>: A progressive JavaScript framework for building user interfaces.</li>
      <li><strong>Axios</strong>: A promise-based HTTP client for making asynchronous requests.</li>
      <li><strong>Vue-router</strong>: The official router for Vue.js, used for navigating between pages seamlessly.
      </li>
    </ul>

    <h2>Creator's Note</h2>
    <p>This project is a part of my ongoing journey to master web development. It combines my passion for coding and my
      love for The Lord of the Rings, aiming to create something enjoyable and educational for everyone. I hope you find
      it as exciting to explore as I did to build.</p>
      <br>
    <p>Thank you for visiting, and may your journey through Middle-earth be filled with wonder and adventure!</p>
  </div>
</template>

<style scoped>

.welcome-container {
  max-width: 800px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-height: 80vh;
  overflow-y: auto;
}

.welcome-container h1,
.welcome-container h2 {
  color: #333;
}

.welcome-container p {
  line-height: 1.6;
  color: #555;
}

.welcome-container ul {
  list-style-type: disc;
  margin: 10px 0 20px 20px;
  color: #555;
}

.welcome-container li {
  margin: 5px 0;
}
</style>