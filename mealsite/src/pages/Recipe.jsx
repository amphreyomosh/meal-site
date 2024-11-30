import React from 'react';
import './Recipe.css'; // Optional for styling

const Recipe = () => {
  return (
    <div className="recipe-container">
      <header className="recipe-header">
        <h1>Delicious Recipes to Try</h1>
        <p>Explore our handpicked recipes perfect for any occasion. From quick weekday meals to gourmet weekend dishes, we have something for everyone!</p>
      </header>

      <section className="recipe-cards">
        <div className="recipe-card">
          <h2>Classic Spaghetti Bolognese</h2>
          <img src="spaghetti-bolognese.jpg" alt="Spaghetti Bolognese" className="recipe-image" />
          <p>A timeless Italian favorite, our classic spaghetti bolognese is rich with flavors from slow-cooked beef, tomatoes, and aromatic herbs. Perfect for cozy family dinners or casual get-togethers.</p>
          <ul>
            <li><strong>Prep Time:</strong> 15 minutes</li>
            <li><strong>Cook Time:</strong> 1 hour</li>
            <li><strong>Servings:</strong> 4</li>
          </ul>
          <button className="recipe-button">View Full Recipe</button>
        </div>

        <div className="recipe-card">
          <h2>Chicken Tikka Masala</h2>
          <img src="chicken-tikka-masala.jpg" alt="Chicken Tikka Masala" className="recipe-image" />
          <p>Indulge in the rich, spiced flavors of this iconic dish. With tender marinated chicken simmered in a creamy, tomato-based sauce, it's perfect served with basmati rice or naan bread.</p>
          <ul>
            <li><strong>Prep Time:</strong> 30 minutes</li>
            <li><strong>Cook Time:</strong> 1 hour 15 minutes</li>
            <li><strong>Servings:</strong> 4</li>
          </ul>
          <button className="recipe-button">View Full Recipe</button>
        </div>

        <div className="recipe-card">
          <h2>Vegetarian Stir-Fry</h2>
          <img src="vegetarian-stir-fry.jpg" alt="Vegetarian Stir-Fry" className="recipe-image" />
          <p>Loaded with fresh vegetables and tossed in a savory, homemade stir-fry sauce, this dish is not only nutritious but also full of vibrant colors and textures.</p>
          <ul>
            <li><strong>Prep Time:</strong> 10 minutes</li>
            <li><strong>Cook Time:</strong> 15 minutes</li>
            <li><strong>Servings:</strong> 2</li>
          </ul>
          <button className="recipe-button">View Full Recipe</button>
        </div>

        <div className="recipe-card">
          <h2>Homemade Pizza</h2>
          <img src="homemade-pizza.jpg" alt="Homemade Pizza" className="recipe-image" />
          <p>Bring the pizzeria to your kitchen! This homemade pizza recipe allows you to create your favorite toppings, from pepperoni to vegetarian options, all on a perfect crispy crust.</p>
          <ul>
            <li><strong>Prep Time:</strong> 20 minutes</li>
            <li><strong>Cook Time:</strong> 15 minutes</li>
            <li><strong>Servings:</strong> 4</li>
          </ul>
          <button className="recipe-button">View Full Recipe</button>
        </div>

        <div className="recipe-card">
          <h2>Classic Caesar Salad</h2>
          <img src="caesar-salad.jpg" alt="Caesar Salad" className="recipe-image" />
          <p>A refreshing and classic salad made with crisp romaine lettuce, crunchy croutons, and a creamy Caesar dressing. Perfect as a side dish or a light meal.</p>
          <ul>
            <li><strong>Prep Time:</strong> 5 minutes</li>
            <li><strong>Cook Time:</strong> 0 minutes</li>
            <li><strong>Servings:</strong> 2</li>
          </ul>
          <button className="recipe-button">View Full Recipe</button>
        </div>

        <div className="recipe-card">
          <h2>Beef and Vegetable Stew</h2>
          <img src="beef-vegetable-stew.jpg" alt="Beef and Vegetable Stew" className="recipe-image" />
          <p>Warm up with this hearty beef and vegetable stew, loaded with tender chunks of beef, carrots, potatoes, and a rich, savory broth. Perfect for those chilly evenings.</p>
          <ul>
            <li><strong>Prep Time:</strong> 20 minutes</li>
            <li><strong>Cook Time:</strong> 2 hours</li>
            <li><strong>Servings:</strong> 6</li>
          </ul>
          <button className="recipe-button">View Full Recipe</button>
        </div>

        <div className="recipe-card">
          <h2>Chocolate Lava Cake</h2>
          <img src="chocolate-lava-cake.jpg" alt="Chocolate Lava Cake" className="recipe-image" />
          <p>End your meal on a sweet note with this rich, indulgent chocolate lava cake. The gooey center and warm, melt-in-your-mouth chocolate will leave everyone wanting more.</p>
          <ul>
            <li><strong>Prep Time:</strong> 10 minutes</li>
            <li><strong>Cook Time:</strong> 15 minutes</li>
            <li><strong>Servings:</strong> 4</li>
          </ul>
          <button className="recipe-button">View Full Recipe</button>
        </div>
      </section>

      <section className="recipe-tips">
        <h2>Pro Cooking Tips</h2>
        <p>Enhance your culinary skills with our expert tips:</p>
        <ul>
          <li><strong>Use Fresh Ingredients:</strong> Always opt for fresh vegetables and high-quality meats for the best flavor.</li>
          <li><strong>Season Wisely:</strong> Don't be afraid to adjust seasoning. Taste as you cook!</li>
          <li><strong>Master Your Knife Skills:</strong> Efficient chopping and dicing can cut prep time in half.</li>
          <li><strong>Preheat Your Oven:</strong> Ensure your oven is fully preheated for perfect baking results.</li>
          <li><strong>Rest Meat Properly:</strong> Allow meat to rest before slicing to retain juiciness.</li>
        </ul>
      </section>

      <section className="recipe-nutrition">
        <h2>Healthy Eating Guidelines</h2>
        <p>Eat well without sacrificing flavor. Balance your meals with a mix of proteins, healthy fats, and whole grains. Remember:</p>
        <ul>
          <li><strong>Stay Hydrated:</strong> Drink plenty of water throughout the day to stay energized.</li>
          <li><strong>Portion Control:</strong> Be mindful of serving sizes to maintain a healthy diet.</li>
          <li><strong>Include Variety:</strong> Incorporate different types of cuisines to keep meals interesting.</li>
          <li><strong>Don't Skip Breakfast:</strong> Start your day with a nutritious breakfast to boost metabolism.</li>
          <li><strong>Limit Added Sugars:</strong> Choose natural sweeteners like honey or fruits when possible.</li>
        </ul>
      </section>
    </div>
  );
};

export default Recipe;
