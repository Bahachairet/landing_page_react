import './App.css';
import './index.css';
import Card from './Componet/Card';
import Counter from './Componet/Counter';
import Navbar from './Componet/Navbar';
import Crousel from './Componet/Crousel';
import Testimonie from './Componet/Testimonie';
import Footer from './Componet/Footer';

function App() {
 
  const cardData = [
    {
      id: 1,
      title: 'Web Development',
      description:
        'Modern and responsive web applications built with React and Next.js',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      link: '#',
    },
    {
      id: 2,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications for iOS and Android',
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
      link: '#',
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps services',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      link: '#',
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'User-centered design solutions for digital products',
      imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      link: '#',
    },
    {
      id: 5,
      title: 'AI/ML',
      description: 'Machine learning models and artificial intelligence solutions',
      imageUrl: 'https://images.unsplash.com/photo-1679403766682-3b31efa571a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '#',
    },
    {
      id: 6,
      title: 'DevOps',
      description: 'Continuous integration and continuous deployment services',
      imageUrl: 'https://media.licdn.com/dms/image/D4D12AQH2tr58girqSg/article-cover_image-shrink_720_1280/0/1674376498502?e=2147483647&v=beta&t=mHCUOsY2mK50RoZOIwVMAyY51zqZqTBQIQvmqgkcDnI',
      link: '#',
    },
  ];
  //const data = [{ test: 'test1' }, { test: 'test2' }, { test: 'test3' }];
  return (
    <div className="App">
      <header className="App-header">
       <Navbar />
        <Crousel />
        <Card card={cardData} />
        <Testimonie />
       <Footer />
      </header>
    </div>
  );
}

export default App;
