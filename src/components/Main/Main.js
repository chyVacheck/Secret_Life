import './Main.css';

function Main({ title, children }) {
  return (
    <main className='main'>
      <h1 className='main__title'>
        {title}
      </h1>
      {children}
    </main>
  );
}

export default Main;
