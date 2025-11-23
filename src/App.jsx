// src/App.jsx
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Xin chào Vercel 👋</h1>
      <p>Đây là web demo đơn giản để mình thử deploy lên Vercel.</p>
      <button
        onClick={() => alert("Deploy lên Vercel thành công rồi nè!")}
      >
        Bấm thử
      </button>
    </div>
  );
}

export default App;
