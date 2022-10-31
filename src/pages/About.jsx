import { Link, Outlet } from 'react-router-dom';



export default function About() {
  
  return (
    <div id="about">
        <img src="br.jpeg" width="100%"  alt="food" />

      <h1 className="about--title">About Breakfast Spots</h1>
      <p>
        Breakfast is often called ‘the most important meal of the day’, and for
        good reason. As the name suggests, breakfast breaks the overnight
        fasting period. It replenishes your supply of glucose to boost your
        energy levels and alertness, while also providing other essential
        nutrients required for good health. Many studies have shown the health
        benefits of eating breakfast. It improves your energy levels and ability
        to concentrate in the short term, and can help with better weight
        management, reduced risk of type 2 diabetes and heart disease in the
        long term. Despite the benefits of breakfast for your health and
        wellbeing, many people often skip it, for a variety of reasons. The good
        news is there are plenty of ways to make it easier to fit breakfast into
        your day.
      </p>
      <h2>Types of Breakfast</h2>
    
      {/* list of Breakfast */}
      <ul>
        {['American', 'English', 'African', 'Irish'].map((breakfast) => (
          <li>
            <Link to={`/about/${breakfast}`}>{breakfast}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
