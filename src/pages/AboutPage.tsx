
import Layout from '@/components/Layout/layout';

export default function AboutPage() {
  return (
    <>
      <Layout>
        <div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pb-16 lg:px-6">
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-bold text-[#00df9a] dark:text-white">We're Dedicated to Your Fitness Goals</h2>
            <p className="mb-4">
              "Maleo Fitness is more than just a fitness center; it's a holistic wellness destination dedicated to transforming lives. Our mission is to empower individuals to lead healthier, more active lives while fostering a sense of
              community and support. We bring together a diverse team of fitness enthusiasts, certified trainers, and wellness experts who are passionate about helping you reach your fitness goals. Maleo Fitness offers an array of
              cutting-edge facilities and programs designed to cater to all fitness levels, from beginners to seasoned athletes. Whether your focus is on strength training, cardiovascular fitness, flexibility, or overall well-being, Maleo
              Fitness is your partner in achieving your fitness dreams."
            </p>
            <p className="">
              "At Maleo Fitness, we believe that fitness is not just about physical strength; it's about mental and emotional well-being too. That's why we offer a holistic approach to fitness that includes nutrition guidance, mental health
              support, and a strong sense of community. Our state-of-the-art facilities boast the latest fitness equipment and technology, ensuring that
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="fitness center 1"
            />
            <img
              className="mt-4 w-full rounded-lg"
              src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="fitness center 2"
            />
            <img
              className="w-full mt-[-250px] rounded-lg"
              src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80"
              alt="fitness center 3"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
