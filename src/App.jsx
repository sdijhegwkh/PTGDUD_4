import React, { useState } from "react";
import recipes from "./recipe"; 
import "../src/index.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  // Tính toán tổng số trang
  const totalPages = Math.ceil(recipes.length / itemsPerPage);
  // Xác định dữ liệu hiển thị trên trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedRecipes = recipes.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div>
      <header>
        <div className="logo"></div>
        <input type="text" placeholder="Search..." />
        <nav className="nav-links">
          <a href="#">What to Cook</a>
          <a href="#">Recipes</a>
          <a href="#">Ingredients</a>
          <a href="#">Occasions</a>
          <a href="#">About Us</a>
        </nav>
        <button>Your Recipe Box</button>
        <div className="avatar"></div>
      </header>

      <div className="upmain">
        <h1 className="big">Emma Gonzalez's Recipe Box</h1>
      </div>

      <main>
        <div className="left">
          <div className="avatar-1"></div>
        </div>
        <div className="right">
          <p>Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights</p>
          <div className="sub">
            <a href="#">6.5k Subscribes</a>
            <button>Share</button>
          </div>
        </div>
      </main>
      <div className='menu'>
        <nav className="nav-links">
          <a href="#">Saved recipe</a>
          <a href="#">Folders</a>
          <a href="#">Recipes by Gerneieve</a>
        </nav>
      </div>

      <div className="menu-image">
        <div className="image-row">
          {selectedRecipes.map((recipe, index) => (
            <div key={index} className="image-box" style={{ backgroundImage: `url(${recipe.image})` }}>
              <div className="image-info">
                <h3 className="image-title">{recipe.name}</h3>
                <p className="image-time">{recipe.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Nút chuyển trang */}
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} className={currentPage === i + 1 ? "active" : ""} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>

      <footer>
        <div className="footer-section text-left">
          <h1 class="big">About us</h1>
          <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
          <div className="info flex items-center ">
            <input type="email" placeholder="Enter your email" className="email p-2 rounded" />
            <button>Send</button>
          </div>
          <div className="info-2 mt-12 flex items-center">
            <div className="logo w-40 h-10 bg-cover bg-center"></div>
            <p>2023 Chefify company</p>
            <p>Terms of Service | Privacy Policy</p>
          </div>
        </div>

        <div className="footer-section">
          <h3 class="text-2xl font-bold md-2">Learn More</h3>
          <ul>
            <li><a href="#">Our Cooks</a></li>
            <li><a href="#">See Our Features</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>

          <h3>Shop</h3>
          <ul>
            <li><a href="#">Gift Subscription</a></li>
            <li><a href="#">Send Us Feedback</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Recipes</h3>
          <ul>
            <li><a href="#">What to cook this week</a></li>
            <li><a href="#">Pasta</a></li>
            <li><a href="#">Dinner</a></li>
            <li><a href="#">Healthy</a></li>
            <li><a href="#">Vegetarian</a></li>
            <li><a href="#">Vegan</a></li>
            <li><a href="#">Christmas</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
