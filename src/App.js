
import './App.css';
import Header from './components/header'
import Footer from './components/footer'

function App() {

  const students = {
   firstName: 'xai',
   lastName: 'nakar',
   fullname: function() {
    return this.firstName + " " + this.lastName;
   }
  }

  const person = [
    {
      firstName: 'Zai',
      lastName: 'Rel',
      age: 20,
    },
    {
      firstName: 'Chad',
      lastName: 'Zkie',
      age: 21,
    },
    {
      firstName: 'Cobs',
      lastName: 'Zkie',
      age: 21
    }
  ]

  let [a, b, c] = person;

  return (
    <>
    <Header />
    <main>
       <h1>Hello {students.fullname()}</h1> 
      {person.map((p =><p>{p.firstName} {p.lastName} {p.age}</p>))}
     
    </main>
    <Footer />
    </>
  );
}

export default App;
