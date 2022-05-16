import { useState, useEffect } from "react";

function App() {

const [isFetching, setIsFetching] = useState(true)

useEffect(() => {
fetch('/api/')
.then(res => res.json)
.then(res => { setIsFetching(false)
console.log(res)
})
}, [])

  return (
    <div className="App">
    {isFetching ? (<div className='loader'>Loading...</div>)
    :
(
<ul>
  <li>Chore to do</li>
  <li>Chore to do</li>
  <li>Chore to do</li>
  <li>Chore to do</li>
  <li>Chore to do</li>
</ul>
    )}
    </div>
  );
}

export default App;
