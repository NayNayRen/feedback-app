import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  );
}

export default App;

// the App return can have only 1 parent container, so wrap everything in an empty HTML fragment <></> then add whatever elements needed
// props are essentially properties of the components, 'text' in the Header component
// state is basically data, 2 types, component level and global
// component level is specific to only that component, i.e. a nav container that's only opened or closed
// global is specific to everything, an rray of data needed at multiple locations