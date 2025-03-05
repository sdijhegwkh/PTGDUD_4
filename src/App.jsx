import React, { useState, useEffect } from 'react';
import '../src/index.css';

const App = () => {
  const [todo, setTodo] = useState(null); 
  const [loading, setLoading] = useState(true); 

  const fetchTodo = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())  
      .then(json => {
        setTodo(json);  
        setLoading(false);  
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTodo();
  }, []); 

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
      <div className='upmain'>
      <h1>Emma Gonzalez's Recipe Box</h1>
      </div>
      <main>
        <div className='left'>
          <div className='avatar-1'>
          </div>
        </div>
        <div className='right'>
          <p>Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights. </p>
          <div className='sub'>
            <a href="#">6.5k Subscribes</a>
            <button>Share</button>
          </div>
          </div>
        {/* <h1>Todo Item:</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2>Task: {todo?.title}</h2>
            <p>Completed: {todo?.completed ? 'Yes' : 'No'}</p>
            <p>Todo ID: {todo?.id}</p>
            <p>User ID: {todo?.userId}</p>
          </div>
        )} */}
      </main>

        <div className='menu'>
          < nav className="nav-links">
          <a href="#">Saved recipe</a>
          <a href="#">Folders</a>
          <a href="#">Recipes by Gerneieve</a>
        </nav>
        </div>
        <div className='menu-image'>
          
        </div>
      <footer>
        <div className="footer-section">
          <h1>About us</h1>
          <br />
          <p>
            Welcome to our website, a wonderful place to explore and learn how to
            cook like a pro.
          </p>
          <br />
          <div className="info">
            <input type="email" placeholder="Enter your email" className="email" />
            <button>Send</button>
          </div>
          <div className="info-2">
            <div className="logo">
            </div>
            <p>2023 Chefify company</p>
            <p>Terms of Service | Privacy Policy</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Learn More</h3>
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
