import React from 'react';
import './Benefits.css'; // Optional for styling

const Benefits = () => {
  return (
    <div className="benefits-container">
      {/* Hero Section */}
      <header className="hero-sectionw">
        <h1>The Benefits of Healthy Eating</h1>
        <p>Discover how maintaining a nutritious diet can transform your lifestyle, boost energy, and promote overall well-being.</p>
      </header>

      {/* Key Benefits Sections */}
      <section className="benefits-cards">
        <div className="benefit-card">
          <h2>Improved Energy Levels</h2>
          <img src="energy-boost.jpg" alt="Healthy food for energy" />
          <p>Balanced meals, rich in complex carbohydrates and healthy proteins, fuel your body throughout the day. This leads to sustained energy levels, preventing those mid-afternoon slumps.</p>
          <br />
          <p><strong>Quick Tip:</strong> Start your day with a protein-packed breakfast to kickstart your energy and metabolism.</p>
        </div>

        <div className="benefit-card">
          <h2>Enhanced Mental Focus</h2>
          <img src="brain-focus.jpg" alt="Brain food for focus" />
          <p>Nutrition plays a significant role in brain function. Foods rich in Omega-3 fatty acids, antioxidants, and whole grains help support cognitive function and improve focus.</p>
          <br />
          <p><strong>Try This:</strong> Include a handful of nuts and berries in your snack to boost concentration and productivity.</p>
        </div>

        <div className="benefit-card">
          <h2>Stronger Immune System</h2>
          <img src="immune-boost.jpg" alt="Immune system boost" />
          <p>Eating a diet rich in vitamins, minerals, and antioxidants helps protect your body from illnesses and supports a strong immune system.</p>
          <br />
          <p><strong>Did You Know?</strong> Citrus fruits, leafy greens, and fermented foods can enhance your immune response.</p>
        </div>

        <div className="benefit-card">
          <h2>Better Digestion</h2>
          <img src="healthy-digestion.jpg" alt="Healthy digestion" />
          <p>Fiber-rich foods help promote a healthy digestive system. Eating plenty of fruits, vegetables, and whole grains can help prevent constipation and improve gut health.</p>
          <br />
          <p><strong>Pro Tip:</strong> Stay hydrated and incorporate probiotic-rich foods like yogurt for optimal digestion.</p>
        </div>

        <div className="benefit-card">
          <h2>Weight Management</h2>
          <img src="weight-management.jpg" alt="Weight management" />
          <p>Maintaining a balanced diet that includes a variety of nutrients helps regulate body weight and promotes a healthy metabolism.</p>
          <br />
          <p><strong>Remember:</strong> Focus on portion control and avoid processed foods to maintain a healthy weight.</p>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="quiz-section">
        <h2>Test Your Knowledge</h2>
        <p>Think you know all about nutrition and health benefits? Take this quick quiz to test your understanding!</p>
        <button className="quiz-button">Start Quiz</button>
      </section>

      {/* Additional Benefits Overview */}
      <section className="overview-section">
        <h2>Why Choose a Balanced Diet?</h2>
        <p>A balanced diet is essential for your overall well-being. It helps maintain your body weight, keeps your organs functioning properly, and reduces the risk of chronic diseases like diabetes, hypertension, and heart disease.</p>
        <p>Incorporating a variety of foods ensures you get all the necessary nutrients your body needs. Remember, it's not about perfection but consistency. Strive for balance, not restriction.</p>
        <p><strong>Remember:</strong> It's never too late to start prioritizing your health. Every small step you take towards healthy eating counts!</p>
      </section>
    </div>
  );
};

export default Benefits;
