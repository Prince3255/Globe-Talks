import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-40 mb-20">
      <h2 className="text-4xl font-bold mb-4 text-center text-blue-600">About Globe Talks</h2>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to <span className="font-semibold">Globe Talks</span>, your go-to source for the latest and most important news from around the world. Our mission is to provide accurate, unbiased, and comprehensive coverage of current events to keep you informed and engaged.
      </p>
      
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">Our Mission</h3>
      <p className="text-lg text-gray-700 mb-4">
        At Globe Talks, we believe in the power of information. We are committed to delivering news that matters, presented in a way that is accessible and engaging for our readers. Globe Talks works tirelessly to bring you the most relevant stories from various sectors, including:
      </p>
      
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
        
        <li><span className="font-semibold">World News</span>: Stay updated with international events and global politics.</li>
        <li><span className="font-semibold">Business</span>: Insights and analysis on the financial world, markets, and economy.</li>
        <li><span className="font-semibold">Technology</span>: Discover the latest advancements and innovations in tech.</li>
        <li><span className="font-semibold">Sports</span>: Catch up on scores, highlights, and stories from the world of sports.</li>
        <li><span className="font-semibold">Entertainment</span>: Get the scoop on movies, music, celebrities, and more.</li>
        <li><span className="font-semibold">Science</span>: Explore discoveries and research that impact our understanding of the world.</li>
        <li><span className="font-semibold">Health</span>: Stay informed about health news, wellness tips, and medical advancements.</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">Our Values</h3>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
        <li><span className="font-semibold">Integrity</span>: We prioritize honesty and transparency in our reporting.</li>
        <li><span className="font-semibold">Accuracy</span>: Ensuring factual correctness is at the heart of our work.</li>
        <li><span className="font-semibold">Impartiality</span>: We strive to present balanced viewpoints and avoid bias.</li>
        <li><span className="font-semibold">Engagement</span>: Our aim is to create content that informs, educates, and entertains.</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">Join Us</h3>
      <p className="text-lg text-gray-700 mb-6">
        We invite you to explore Globe Talks and join our community of informed readers. Follow us on social media, and stay connected with the world. Your voice matters to us, so feel free to share your thoughts and feedback.
      </p>
      
      <p className="text-lg text-gray-700 mb-6">
        Thank you for choosing <span className="font-semibold">Globe Talks</span> as your trusted news source.
      </p>
    </div>
  );
};

export default About;